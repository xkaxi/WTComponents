import React from 'react'
import { Form, Input, Button } from 'antd'
import{ WTMessage } from '../../WTComponents'

import 'antd/dist/antd.css'
import './index.css'

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 6,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};
export default function login(props) {
    let { history } = props
    const onFinish = (values) => {
        if (values.用户名 === 'admin' && values.密码 === '1234567') {
            history.push('/Home')
            window.sessionStorage.setItem('login', '已登录')
            WTMessage.success({content: '登录成功'})
        } else {
            WTMessage.fail({content: '用户名不存在或密码错误，请检查'})
        }
    };

    const onFinishFailed = (errorInfo) => {
        WTMessage.fail({content: '请输入所有必填项'})
    };

    return (
        <div className='wrapper'>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                hideRequiredMark
                style={{ marginTop: '200px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="用户名"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="密码"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="ghost" htmlType="submit" className='login'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}