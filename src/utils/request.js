import axios from "axios";

const instanse = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  baseURL: 'http://localhost:5000/api',
  timeout: 5000
})

// 响应拦截器
instanse.interceptors.response.use(
  (response) => {
    const { data, statusText } = response
    if(statusText === 'OK') {
      return data
    } else {
      return Promise.reject(new Error(message))
    }
  }
)

export default instanse
