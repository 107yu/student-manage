import axios from 'axios'
//定义公共headers
// fly.config.headers={
//   "content-type":"application/x-www-form-urlencoded"
// }
// axios.config.headers['content-type'] = "application/x-www-form-urlencoded"
const service = axios.create({
  // baseURL: 'http://148.70.121.59:9001/',
  baseURL: '',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // 判断是否有登陆态
//     config.headers['content-type'] = "application/json"
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
    // message.error(error.message);
  }
)

export default service