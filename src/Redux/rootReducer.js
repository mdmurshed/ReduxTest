import {combineReducers} from 'redux'
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/IceCreamReducer'
import userReducer from './User/userReducer'
import loginReducer from './Login/loginReducer'
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer,
    log:loginReducer
})

export default rootReducer