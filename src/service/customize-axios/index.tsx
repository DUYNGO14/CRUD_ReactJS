import axios from "axios";
import { URL_API_CONSTANTS } from "../../constants";
const instance = axios.create({
    baseURL: URL_API_CONSTANTS.DEFAULT_URL_API,
    //timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

//cấu hình dữ liêu trả về
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default instance