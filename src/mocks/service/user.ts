/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-01-03 10:53:54
 * @Description: 
 */
import Mock from 'mockjs'
import type { MockjsRequestOptions } from 'mockjs'
import { Response } from '../mocks'


// There are three kinds of permission
// 1. admin -> Jeff
// 2. mananger -> May
// 3，guest -> Tom

const isInvalidPassword = (password: string): Boolean => password !== '123456'
const isInvaildUsername = (username: string): Boolean => (username !== 'Jeff') && (username !== 'May') && (username !== 'Tom')

const errorPasswordRes: Response = { code: 10000, message: 'password incorrect' }
const errorUsernameRes: Response = { code: 10000, message: 'username does not exist' }
const loginSuccessRes: Response<string> = { code: 0, message: 'success', data: 'eyJhbGciOiJIUzI1NiJ9.eyJpbnN0YW5jZUlkIjoxLCJsb2dpbk5hbWUiOiJXQU5HUlgiLCJ0ZW5hbnRJZCI6MSwiaWQiOjQ4MiwibG9naW5Tb3VyY2UiOiIyNzI3MTcwNTcwIiwianRpIjoiZGZlNzNjNmYtYWVhZS00YTQzLThlNDUtNDFkNjQ3MzY4MWUzIiwibmJmIjoxNjcyNzI3MTY0LCJleHAiOjE2Nzc5MTExNjR9.HKcMpwVjrJ5ZFRS4qjlbLx31hKIHINUgHtGKfaeVpL0' }

Mock.mock('/login', (opts: MockjsRequestOptions) => {
    const { username, password } = JSON.parse(opts.body)
    if (isInvalidPassword(password)) return Mock.mock(errorPasswordRes)
    if (isInvaildUsername(username)) return Mock.mock(errorUsernameRes)
    return Mock.mock(loginSuccessRes)
})


