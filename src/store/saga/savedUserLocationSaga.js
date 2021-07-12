import {takeLatest,call,put} from 'redux-saga/effects'
import {message} from 'antd'
import {apiConstants as types,appMessages} from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* savedUserLocationsFailed(result){
    console.error('result inside the Saved User Lcations Failed',result)
    yield put({
        type:types.API_SAVED_USER_LOCATIONS_FAILED,
    })
    toast.error(result?.error)
}

function* savedUserLocationsError(result){
    console.error('result inside the Saved User Lcations Error',result)
    yield put({
        type:types.API_SAVED_USER_LOCATIONS_ERROR,
    })
    if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error,{toastId: result?.status||"est"})  
    }
    
}


function* savedUserLocationsSaga(action){
    const {search,offset,limit,sortBy,order,userId} = action;
    try{
        const result =yield call(axios.savedUserLocations,search,offset,limit,sortBy,order,userId)
        if(result.status === 1 ){
            cl('result inside saved locations saga',result) 
            yield put({
                type:types.API_SAVED_USER_LOCATIONS_SUCCESS,
                result:result.result.data.data,
            })
        }
        else{
            yield call(savedUserLocationsFailed,result)
        }
    }
    catch(error){
        yield call(savedUserLocationsError,error)
    }
}

export default function* rootSavedUserLocationsSaga(){
    yield takeLatest(types.API_SAVED_USER_LOCATIONS_LOAD,savedUserLocationsSaga)
}