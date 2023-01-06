
import type { FC } from 'react'
import { Divider } from 'antd'
import { Input, Form, Button } from 'antd';
import './login.scss'

const Login:FC = () => {

    return (
        <>
            <section className="login-wrapper flex">
                <section className="left-section">
                    <h1 className="font48 bold">磐石</h1>
                    <h5>react-admin-template</h5>
                </section>
                <Divider className="login-diveder" type="vertical" />
                <section className="right-section">
                <Form
                    name="login"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    className='family'
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
                    <Form.Item>
                        <Button >Login</Button>
                    </Form.Item>
                </Form>
                </section>
            </section>
        </>
    )
}

export default Login