import { Button, Form, Input, Select, Divider, Row, Col } from "antd"
import useGetCategories from "../../helpers/getCategories"
import ProductItem from "./ProductItem"
import { useDispatch, useSelector } from "react-redux"
import { search_products } from "../../store/actions/search"

function Search() {
  const dispatch = useDispatch()
  const { results } = useSelector(state => state.search)
  const categories = useGetCategories()
  const [form] = Form.useForm()
  const onFinish = value => {
    dispatch(search_products(value))
    form.resetFields()
  }
  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        layout="inline"
        initialValues={{ category: "All" }}
      >
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">所有分类</Select.Option>
              {categories.map(category => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="search">
            <Input placeholder="请输入搜索关键字" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        {results.map(product => (
          <Col span="6">{<ProductItem product={product} />}</Col>
        ))}
      </Row>
    </>
  )
}

export default Search
