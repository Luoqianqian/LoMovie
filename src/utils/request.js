import axios from "axios";

const instanse = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 响应拦截器
instanse.interceptors.response.use(
  (response) => {
    const { success, message, data } = response
    if(success) {
      return data
    } else {
      return Promise.reject(new Error(message))
    }
  }
)

export default instanse
