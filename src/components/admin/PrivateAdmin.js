import { Redirect, Route } from "react-router"
import { isAuth } from "../../helpers/auth"

function PrivateAdmin({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const auth = isAuth()
        if (auth && auth.user.role === 1) return <Component {...props} />
        return <Redirect to="/signin" />
      }}
    ></Route>
  )
}

export default PrivateAdmin
