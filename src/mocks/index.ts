/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-01-02 23:55:37
 * @Description: 
 */
import Mock from 'mockjs'

Mock.setup({
    timeout: 500
})

Mock.mock('/test', () => {
    return Mock.mock({
        status: 200,
        statusText: 'ok',
        data: '测试'
    })
})

export default Mock