import React,{useState} from 'react'
import {connect} from 'react-redux'
import {login,logout} from '../Redux'
var value = false
function Login(props) {
    const [name,setName] = useState("murshed")
    return (
        <div>
            <h1>login {props.name}</h1>
            <button onClick={()=>{
                props.login(name)
            }}>Login</button>
            <button onClick={()=>{
                props.logout()
            }}>Logout</button>
        </div>
    )
}
const mapStateToProps = state => {
    value = state.log.chack
    console.log(value)
    return {
        name:state.log.user
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        login:name=>{
            dispatch(login(name))
        },
        logout:()=>{
            dispatch(logout())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
