import axios from "axios";
import qs from "qs";
const instance = axios.create({
  baseURL: "http://bw.gsruiying.com.cn",
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    if (config.data && !(config.data instanceof FormData)) {
      config.data = qs.stringify(config.data);
    }
    // config.header["Authori-zation"]="Bearer " +
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
