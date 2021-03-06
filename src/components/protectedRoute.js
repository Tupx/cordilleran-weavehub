import React from 'react'
import { Route, Redirect } from 'react-router'

function ProtectedRoute({isAuthenticated:isAuth, component:Component, user:id, ...rest}){
    return(
        <Route 
            {... rest}
            render = {(props) => {
                if(isAuth) {
                    return <Component user={id} {... rest} />
                } else {
                    return <Redirect to={{pathname:"/error404?a", state:{from:props.location}}} />
                }
            }}
        />
    )
}

export default ProtectedRoute