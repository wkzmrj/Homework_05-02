import Layout from "./Layout"
import { useEffect, useState } from "react"
import { getCart } from "../../helpers/cart"
import { Col, Row, Form, Input, Typography } from "antd"
import CartItem from "./CartItem"
import PayButton from "./PayButton"

const { Title } = Typography

function Cart() {
  const [cart, setCart] = useState([])
  const [address, setAddress] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setCart(getCart())
  }, [])

  useEffect(() => {
    let totalPrice = cart
      .reduce((currentValue, nextValue) => {
        return (currentValue += nextValue.count * nextValue.price)
      }, 0)
      .toFixed(2)
    setTotalPrice(totalPrice)
  }, [cart])

  const cartTable = () => (
    <table style={{ width: "100%" }}>
      <thead className="ant-table-thead">
        <tr>
          <th className="ant-table-cell">商品封面</th>
          <th className="ant-table-cell">商品名称</th>
          <th className="ant-table-cell">商品价格</th>
          <th className="ant-table-cell">商品分类</th>
          <th className="ant-table-cell">商品数量</th>
          <th className="ant-table-cell">操作</th>
        </tr>
      </thead>
      <tbody className="ant-table-tbody">
        {cart.map(product => (
          <CartItem key={product._id} setCart={setCart} product={product} />
        ))}
      </tbody>
    </table>
  )

  return (
    <Layout title="购物车" subTitle="付款吧, 我就是你的了">
      <Row gutter={16}>
        <Col span="18">{cartTable()}</Col>
        <Col span="6">
          <Form.Item label="收货地址">
            <Input
              value={address}
              onChange={event => setAddress(event.target.value)}
              placeholder="请输入收货地址"
            />
          </Form.Item>
          <Title level={5}>总价：{totalPrice}</Title>
          <PayButton address={address} cart={cart} totalPrice={totalPrice} />
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart
