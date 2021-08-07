import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/auth';

const PublicRoute = ({ component: C, appProps, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ?
          <Redirect to="/" />
          : <C {...props} {...appProps} />
      }
    
    />
  )
}

export default PublicRoute
