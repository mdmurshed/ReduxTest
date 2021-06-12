import React,{useState} from 'react'
import {connect} from 'react-redux'
function Home(props) {
    return (
        <div>
            <h1>Home</h1> 
            <h1>{props.name} loged in</h1>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        name:state.log.user
    }
}



export default connect(mapStateToProps)(Home)