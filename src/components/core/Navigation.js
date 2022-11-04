import { Menu } from "antd"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { isAuth } from '../../helpers/auth'

function Navigation() {
  const router = useSelector(state => state.router)
  const auth = isAuth()
  const showAuth = () => {
    <>
     <Menu.Item key="/signin">
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item key="/signup">
        <Link to="/signup">注册</Link>
      </Menu.Item> 
    </>
  }
  const showDashboard = () =>{
    const url = auth.user.role === 1 ? "/admin/dashboard" : "/user/dashboard"
    return(
      <Menu.Item key={url}>
      <Link to={url}>Dashboard</Link>
    </Menu.Item>  
    )
  }
  return (
    <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/shop">
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item key="/cart">
        <Link to="/cart">购物车</Link>
      </Menu.Item>
      {auth ? showDashboard() : showAuth()}
    </Menu>
  )
}

export default Navigation
