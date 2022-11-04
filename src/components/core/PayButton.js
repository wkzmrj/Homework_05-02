import { Button } from "antd"
import axios from "axios"
import { Link } from "react-router-dom"
import { isAuth } from "../../helpers/auth"
import { API } from "../../config"

function PayButton({ address, cart, totalPrice }) {
  const handlePay = () => {
    axios
      .post(`${API}/alipay`, {
        totalAmount: totalPrice,
        subject: "测试订单标题",
        body: "测试订单描述",
        products: cart.map(product => ({
          product: product._id,
          count: product.count
        })),
        address: address,
        userId: isAuth().user._id
      })
      .then(response => {
        window.location.href = response.data.result
      })
  }
  const showButton = () => {
    return isAuth() ? (
      <Button onClick={handlePay}>提交</Button>
    ) : (
      <Button>
        <Link to="/signin">登录</Link>
      </Button>
    )
  }
  return <div>{showButton()}</div>
}

export default PayButton
