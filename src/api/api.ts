import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// Default config for the axios instance
console.log("🚀 ~ file: api.ts ~ line 8 ~ process.env.NODE_ENV", process.env.NODE_ENV);
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === 'development' ? 'https://rickandmortyapi.com/api' : '/',
}

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
  }
}

export default api(axiosInstance)