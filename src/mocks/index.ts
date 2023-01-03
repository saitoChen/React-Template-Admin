/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-01-02 23:55:37
 * @Description: 
 */
import Mock from 'mockjs'

Mock.setup({
    timeout: 500
})

if (process.env.NODE_ENV !== 'production') {
    require('./service/user')
}

export default Mock