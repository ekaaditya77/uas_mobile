import Axios from 'axios';


const api = Axios.create({
  baseURL: 'https://gorest.co.in/public/v2/posts',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    accept: 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    let token = null;
    try {
      token = 'fb76a62c0807b4b03cb4996c5d9b19b84442157f00eba698851cca0fd0df5872';
    } catch (err) {
      if (err instanceof ReferenceError) {
        // use React Native AsyncStorage
        token = 'fb76a62c0807b4b03cb4996c5d9b19b84442157f00eba698851cca0fd0df5872';
      } else {
        throw err;
      }
    }

    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
