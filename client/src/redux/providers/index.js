import { LOGIN_USER, LOGOUT_USER, CHECK_AUTHENTICATION } from '../constants/index';

const initialState = {
    currentUser:{},
    isLogged: false,
    
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload, isLogged: true }
        case CHECK_AUTHENTICATION:
            return { ...state }
        case LOGOUT_USER:
            return { ...state, currentUser: {}, isLogged: false }
        default:
            return state;
    }
}
export default rootReducer;
