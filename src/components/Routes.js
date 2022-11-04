import { Switch, Route } from "react-router-dom"
import AdminDashboard from "./admin/AdminDashboard"
import PrivateUser from "./admin/PrivateUser"
import AdminPrivate from "./admin/PrivateAdmin"
import UserDashboard from "./admin/UserDashboard"
import Home from "./core/Home"
import Shop from "./core/Shop"
import Signin from "./core/Signin"
import Signup from "./core/Signup"
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"
import Product from "./core/Product"
import Cart from "./core/Cart"
import Order from "./admin/Order"

function Routes() {
  return (
    <Switch>
     <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart" component={Cart} />
      <PrivateUser path="/user/dashboard" component={UserDashboard} />
      <AdminPrivate path="/admin/dashboard" component={AdminDashboard} />
      <AdminPrivate path="/admin/order" component={Order} />
      <AdminPrivate path="/create/category" component={AddCategory} />
      <AdminPrivate path="/create/product" component={AddProduct} />
      <Route path="/product/:productId" component={Product} />
      </Switch>
  );}

export default Routes