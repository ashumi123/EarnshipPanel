import {apiConstants as types} from '../../themes/constants'
import cl from '../../utils/cl'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading : false,
    result:{},
    errorState:null,
    isExpired:null,
}

export const authenticationReducer = (state = initialState, action)=>{
    switch (action.type) {

        // Authentication Cases
        // Login
        case types.API_LOGIN_LOAD:
            return {...state,isLoading :true,errorState:null}
        case types.API_LOGIN_SUCCESS:
            cl(action.result)
            localStorage.setAuthToken(action.result.token)
            localStorage.setUserId(action.result.user_id)
            localStorage.setNotify(action.result.notification)
            localStorage.setAds(action.result.ads)
            window.location.reload()
            return {...state,isLoading:false, result : action.result}

        // Forgot Password
        case types.API_FORGOT_PASSWORD_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_FORGOT_PASSWORD_SUCCESS:
            return {...state, isLoading:false}

        // Check Reset Password
        case types.API_CHECK_RESET_PASSWORD_LOAD:
            return {...state,errorState:null}
        case types.API_CHECK_RESET_PASSWORD_SUCCESS:
            return {...state,isExpired:action.result?.isReset}

        // Reset Password
        case types.API_RESET_PASSWORD_LOAD:
            return {...state,errorState:null}
        case types.API_RESET_PASSWORD_SUCCESS:
            return {...state}
        
        //Authentication Failed Case
        case types.API_AUTHENTICATION_FAILED:
            return {...state, isLoading:false}
        case types.API_AUTHENTICATION_ERROR:
            return {...state, isLoading:false}
        
        //Default case
        default:
            return {...state} 

    }
}