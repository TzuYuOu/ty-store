import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils/auth';

const PrivateRoute = ({ component: C, appProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin()
          ? <C {...props} {...appProps} />
          : <Redirect to="/login" />
      }
    
    />
  )
}

export default PrivateRoute
