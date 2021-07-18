import axios from "axios";


const http =  axios.create({
  baseURL : "https://project-zero-one.herokuapp.com/v1/api/", //local
});

http.interceptors.request.use(async (config)=> {
  const token = localStorage.token;
  if (token) {
    config.headers.Authorization =`${token}`;
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default http