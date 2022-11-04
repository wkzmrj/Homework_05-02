import { Form, Upload, Button, Input, Select, message } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import Layout from "../core/Layout"
import { useState } from "react"
import axios from "axios"
import { API } from "../../config"
import { isAuth } from "../../helpers/auth"
import { useHistory } from "react-router-dom"
import useGetCategories from "../../helpers/getCategories"

function AddProduct() {

    const [file, setFile] = useState()
    const categories = useGetCategories()
    const history = useHistory()

    const props = {
        beforeUpload(file) {
            setFile(file)
            return false
        }
    }

    const { user, token } = isAuth()

    const [form] = Form.useForm()

    const onFinish = value => {
        const formData = new FormData()
        for (let attr in value) {
            formData.append(attr, value[attr])
        }
        formData.append("photo", file)

        axios
            .post(`${API}/product/create/${user._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                message.success("商品添加成功")
                form.resetFields()
                history.push("/admin/dashboard")
            })
    }

    return (
        <Layout title="添加商品">
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ category: "-1" }}
            >
                <Form.Item>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传商品封面</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="商品名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="商品描述" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="商品价格" name="price">
                    <Input />
                </Form.Item>
                <Form.Item label="商品分类" name="category">
                    <Select>
                        <Select.Option value="-1">请选择分类</Select.Option>
                        {categories.map(({ name, _id }) => (
                            <Select.Option key={_id} value={_id}>
                                {name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="商品数量" name="quantity">
                    <Input />
                </Form.Item>
                <Form.Item label="是否需要运输" name="shipping">
                    <Select>
                        <Select.Option value="1">是</Select.Option>
                        <Select.Option value="0">否</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        添加商品
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default AddProduct
