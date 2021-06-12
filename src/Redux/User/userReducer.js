import { 
    FATCH_USERS_REQUEST,
    FATCH_USERS_SUCCESS,
    FATCH_USERS_FAILURE
} from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error:''
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FATCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FATCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FATCH_USERS_FAILURE:
            return{
                loading: false,
                users:[],
                error:action.payload
            }
        default: return state
    }
}

export default reducer