import axios from 'axios';

import { 
    FATCH_USERS_REQUEST,
    FATCH_USERS_SUCCESS,
    FATCH_USERS_FAILURE
} from './userTypes'

export const fetchUsersRequest = ()=>{
    return{
        type: FATCH_USERS_REQUEST
    }
}


 const fatchUsersSuccess = (users)=>{
    return{
        type: FATCH_USERS_SUCCESS,
        payload:users
    }
}

const fatchUsersFailure = (error)=>{
    return{
        type: FATCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                const users = response.data
                dispatch(fatchUsersSuccess(users))
            })
            .catch(error=>{
                const err = error.massage
                dispatch(fatchUsersFailure(err))
            })
    }
}


