import type { AxiosRequestConfig } from "axios"
import axios from '../utils/request'
import { useState, useEffect } from "react"

interface Response<T> {
    code: string | number
    data?: T
    message: string
}

const useAxios = <T>(config: AxiosRequestConfig) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [result, setResult] = useState<Response<T> | null>(null)

    useEffect(() => {
        setLoading(true)
        axios(config)
        .then((res: Response<T>) => {
            console.log('res -->', res)
            setResult(res)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading, result, error }
}

export default useAxios