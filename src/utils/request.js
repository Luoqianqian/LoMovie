import axios from "axios";

const instanse = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  baseURL: 'http://localhost:5000',
  timeout: 5000
})

// 响应拦截器
instanse.interceptors.response.use(
  (response) => {
    const { data, status } = response
    if(status >= 200 && status < 300) {
      return data
    } else {
      return Promise.reject(new Error('出错了！'))
    }
  }
)

export default instanse
