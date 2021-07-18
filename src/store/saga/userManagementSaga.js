import {takeLatest,call,put, delay} from 'redux-saga/effects'
import {apiConstants as types, appMessages} from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* userManagementFailedSaga(result){
    console.error('result inside the User management Failed',result)
    yield put({
        type:types.API_USER_MANAGEMENT_FAILED,
    })
    toast.error(result?.error)
}

function* userManagementErrorSaga(result){
    console.error('result inside the User Management Error',result)
    yield put({
        type:types.API_USER_MANAGEMENT_ERROR,
    })
      if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error,{toastId: result?.status||"est"})
    }
}

function* getUserListSaga(action){
    const {search,offset,limit,sortBy,order,userType} = action;
    try{
        const result =yield call(axios.getUserList,search,offset,limit,sortBy,order,userType)
        if(result.status === 1 ){
            cl('result inside get user list saga',result)
            yield put({
                type:types.API_GET_USER_LIST_SUCCESS,
                result:result.result.data.data,
            })
        }
        else{
            yield call(userManagementFailedSaga,result)
        }
    }
    catch(error){
        yield call(userManagementErrorSaga,error)
    }
}

function* getUserDetailsSaga(action){
    const {userId} = action;
    try{
        const result =yield call(axios.getUserDetails,userId)
        if(result.status === 1 ){
            cl('result inside get User details saga',result)
            yield put({
                type:types.API_GET_USER_DETAILS_SUCCESS,
                result:result.result.data.data,
            })
        }
        else{
            yield call(userManagementFailedSaga,result)
        }
    }
    catch(error){
        yield call(userManagementErrorSaga,error)
    }
}

function* editUserDetailsSaga(action){
    const {userId,firstName,lastName,email,phoneNumber,countryCode,userType} = action;
    try{
        const result =yield call(axios.editUserDetails,userId,firstName,lastName,email,phoneNumber,countryCode,userType)
        if(result.status === 1 ){
            cl('result inside edit user details saga',result)
            yield put({
                type:types.API_EDIT_USER_DETAILS_SUCCESS,
                result:result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/users')
        }
        else{
            yield call(userManagementFailedSaga,result)
        }
    }
    catch(error){
        yield call(userManagementErrorSaga,error)
    }
}

function* blockUserSaga(action){
    const {userId,isBlocked} = action;
    try{
        const result =yield call(axios.blockUser,userId,isBlocked)
        if(result.status === 1 ){
            cl('result inside block user saga',result)
            yield put({
                type:types.API_BLOCK_USER_SUCCESS,
                result:result.result.data.data,
                id:userId
            })

            toast.success(result?.result?.data?.message,{toastId:result?.result?.data?.message})
        }
        else{
            yield call(userManagementFailedSaga,result)
        }
    }
    catch(error){
        yield call(userManagementErrorSaga,error)
    }
}
function* verifyConsultSaga(action){
    const {value,id} = action;
    try{
        const result =yield call(axios.verifyConsult,value,id)
        if(result.status === 1 ){
            cl('result inside block user saga',result)
            yield put({
                type:'VERIFY_CONSULT_SUCCESS',
                result:result.result.data.data,
                id:id
            })

            toast.success(result?.result?.data?.message,{toastId:result?.result?.data?.message})
        }
        else{
            yield call(userManagementFailedSaga,result)
        }
    }
    catch(error){
        yield call(userManagementErrorSaga,error)
    }
}


export default function* rootUserManagementSaga(){
    yield takeLatest(types.API_GET_USER_LIST_LOAD,getUserListSaga)
    yield takeLatest(types.API_GET_USER_DETAILS_LOAD,getUserDetailsSaga)
    yield takeLatest(types.API_EDIT_USER_DETAILS_LOAD,editUserDetailsSaga)
    yield takeLatest(types.API_BLOCK_USER_LOAD,blockUserSaga)
    yield takeLatest('VERIFY_CONSULT_LOAD',verifyConsultSaga)
}