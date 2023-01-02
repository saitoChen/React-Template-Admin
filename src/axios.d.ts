import { AxiosResponse } from 'axios'

declare module 'axios' {
    export interface AxiosResponse {
        code: number | string,
        message: string
    }
}