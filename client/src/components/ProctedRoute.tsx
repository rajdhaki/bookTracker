import React, { type JSX } from 'react'
import { Navigate} from 'react-router-dom'
import { contextApi } from '../context/Context'

const ProctedRoute = ({children} : {children:JSX.Element}) => {
const {loginStatus} = React.useContext(contextApi)

if(!loginStatus) return <Navigate to= "/login" />

return children
}

export default ProctedRoute
