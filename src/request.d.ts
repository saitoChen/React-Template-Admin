// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosResponse } from 'axios'

declare module 'axios' {
    export interface AxiosResponse {
        code: number | string,
        message: string
    }
}