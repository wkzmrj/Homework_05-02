import Layout from "./Layout"
import { Form, Input, Button } from "antd"
import axios from "axios"
import { API } from "../../config"
import { useHistory } from "react-router-dom"

function Signin() {
  const history = useHistory()
  // 用户登录
  const handleOnFinish = async value => {
    // 发送登录请求
    let response = await axios.post(`${API}/signin`, value)
    // 将服务器端返回的信息存储到本地
    localStorage.setItem("jwt", JSON.stringify(response.data))
    // 根据用户角色返回跳转地址
    const url =
      response.data.user.role === 1 ? "/admin/dashboard" : "/user/dashboard"
    // 跳转页面
    history.push(url)
  }
  return (
    <Layout title="登录" subTitle="">
      <Form onFinish={handleOnFinish}>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signin
