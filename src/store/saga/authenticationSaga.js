import {takeLatest,call,put} from 'redux-saga/effects'
import {message} from 'antd'
import {apiConstants as types, appMessages} from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';

// Generator to run when Authentication Failed
function* authenticationFailedSaga(result){
    
    yield put({
        type:types.API_AUTHENTICATION_FAILED,
    })
    toast.error(result?.error,{toastId: result?.status||"est"})
}

// Generator to run when Authentication Error occured in response
function* authenticationErrorSaga(result){
   
    yield put({
        type:types.API_AUTHENTICATION_ERROR,
    })
     if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error,{toastId: result?.status||"est"})
    }
}

// Generator to Call Login side-effects
function* loginSaga(action){
    const {email,password} = action;
    try{
        const result =yield call(axios.login,email,password)
        if(result.status === 1 ){
            cl('result inside login saga',result)
            yield put({
                type:types.API_LOGIN_SUCCESS,
                result:result.result.data.data,
            })
        }
        else{
            yield call(authenticationFailedSaga,result)
        }
    }
    catch(error){
        yield call(authenticationErrorSaga,error)
    }
}


// Generator to Call Forgot Password side-effects
function* forgotPasswordSaga(action){
    const {email} = action;
    try{
        const result = yield call(axios.forgotPassword,email) 
        if(result.status === 1 ){
            cl('result inside forgot password saga',result)
            yield put({
                type:types.API_FORGOT_PASSWORD_SUCCESS,
                result:result.result.data.data,  
            })
            toast.success(result.result.data.message,{toastId: result?.status||"abc"})
            history.push('/login')
        }
        else{
            yield call(authenticationFailedSaga,result)
        }
    }
   catch(error){
        yield call(authenticationErrorSaga,error)
    }
}


// Generator to Call Reset Password side-effects
function* resetPasswordSaga(action){
    const {newPassword,query} = action;
    try{
        const result = yield call(axios.resetPassword,newPassword,query) 
        if(result.status === 1 ){
            cl('result inside reset password saga',result)
            yield put({
                type:types.API_RESET_PASSWORD_SUCCESS,
                result:result.result.data.data,  
            })
            toast.success(result.result.data.message,{toastId: result?.status||"abc"})
            history.push('/login')
        }
        else{
            yield call(authenticationFailedSaga,result)
        }
    }
   catch(error){
        yield call(authenticationErrorSaga,error)
    }
}

// Generator to Call check Reset Password side-effects
function* checkResetPasswordSaga(action){
    const {id} = action;
    try{
        const result = yield call(axios.checkResetPassword,id) 
        if(result.status === 1 ){
            cl('result inside check reset password saga',result)
            yield put({
                type:types.API_CHECK_RESET_PASSWORD_SUCCESS,
                result:result?.result?.data?.data,  
            })
        }
        else{
            yield call(authenticationFailedSaga,result)
        }
    }
   catch(error){
        yield call(authenticationErrorSaga,error)
    }
}

export default function* rootAuthenticationSaga(){
    yield takeLatest(types.API_LOGIN_LOAD,loginSaga)
    yield takeLatest(types.API_FORGOT_PASSWORD_LOAD,forgotPasswordSaga)
    yield takeLatest(types.API_RESET_PASSWORD_LOAD,resetPasswordSaga)
    yield takeLatest(types.API_CHECK_RESET_PASSWORD_LOAD,checkResetPasswordSaga)
}