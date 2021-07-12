import axios from "axios";


const http =  axios.create({
  // baseURL : "http://192.168.3.1:7001/api/v1", //local
});

http.interceptors.request.use(async (config)=> {
  const token = localStorage.token;
  if (token) {
    config.headers.Authorization =`Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default http