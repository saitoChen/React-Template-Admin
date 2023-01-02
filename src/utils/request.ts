import axios from 'axios'
import { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosHeaders, AxiosResponse} from 'axios'
import { getToken } from './auth'
import { message as Message } from 'antd'

interface StatusMap {
    [key: number]: string
    [key: string]: string
}

const service: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 3000
})

const STATUS_MAP: StatusMap = {
    401: 'token失效，请重新登录',
    500: '请求失败'
}

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken()
    if (token) {
        // axios issue: https://github.com/axios/axios/issues/5034
        (config.headers as AxiosHeaders ).set('Access-Token', token) 
    }
    return config
}, (err: AxiosError) => {
    Message.error(err.message)
    return Promise.reject(err)
})

service.interceptors.response.use((res: AxiosResponse) => {
    const { code, message, data } = res

    if (code === 0) {
        return data
    } else {
        Message.error(message)
        return Promise.reject(new Error(message))
    }
}, (err: AxiosError) => {
    const status = err.response?.status!
    let message:string = STATUS_MAP[status]
    Message.error(message)
    return Promise.reject(err)
})

export default service