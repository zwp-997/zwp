
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {LoginWrap} from "./loginStyle"

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (values.username==='zwp'&& values.password==='997') {
                console.log('Received values of form: ', values);
                this.props.history.push({pathname:'/'})

            }else {
                alert('账号密码错误');

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginWrap>
                <h2>用户登录</h2>

            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住我</Checkbox>)}

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>

                </Form.Item>
            </Form>
            </LoginWrap>
        );
    }
}
export default Form.create({ name: 'normal_login' })(Login);
