
import type { FC } from 'react'
import { useState } from 'react'
import { Divider } from 'antd'
import { Input, Form, Button, Select } from 'antd';
import './login.scss'

const { Option } = Select

type username = 'Jeff' | 'May' | 'Tom'
interface LoginUser  {
    username: username
    password: number
}


const Login:FC = () => {
    const onFinish = (value: any) => {
        console.log(value)
    }
    return (
        <>
            <div className="login-wrapper">
                <section className="login-content flex">
                    <section className="left-section">
                        <h1 className="font48 bold">天工</h1>
                        <h5>react-admin-template</h5>
                    </section>
                    <Divider className="login-diveder" type="vertical" />
                    <section className="right-section">
                    <Form
                        name="login"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ username: 'jeff' }}
                        autoComplete="off"
                        className='family'
                        onFinish={onFinish}
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='Jeff' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='123456' />
                        </Form.Item>
                        <Form.Item  className="login-btn" wrapperCol={{ offset: 6, span: 2 }}>
                            <Button htmlType="submit">Login</Button>
                        </Form.Item>
                        <Form.Item  className="login-btn quick-login"  name="changeUser" wrapperCol={{ offset: 20, span: 16 }}>
                            <Select
                            placeholder="quick login"
                            allowClear
                            >
                            <Option value="male">administer</Option>
                            <Option value="female">manager</Option>
                            <Option value="other">saler</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Login