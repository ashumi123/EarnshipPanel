import { takeLatest, call, put } from 'redux-saga/effects'
import { apiConstants as types,appMessages } from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* imageManagementFailedSaga(result) {
   
    yield put({
        type: types.API_IMAGE_MANAGEMENT_FAILED,
        errorState:result?.error,
    })
    toast.error(result?.error)
}

function* imageManagementErrorSaga(result) {
    
    yield put({
        type: types.API_IMAGE_MANAGEMENT_ERROR,
        errorState:result?.error,
    })
     if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error)
    }
}


function* getImageListSaga(action) {
    const { search, offset, limit, sortBy, order } = action;
    try {
        const result = yield call(axios.getImageList, search, offset, limit, sortBy, order)
        if (result.status === 1) {
            cl('result inside get Image list saga', result)
            yield put({
                type: types.API_GET_IMAGE_LIST_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(imageManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(imageManagementErrorSaga, error)
    }
}

function* addImageSaga(action) {
    const { imageName,image } = action;
    try {
        const result = yield call(axios.addImage,imageName,image)
        if (result.status === 1) {
            cl('result inside add image saga', result)
            yield put({
                type: types.API_ADD_IMAGE_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/tag')
        }
        else {
            yield call(imageManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(imageManagementErrorSaga, error)
    }
}

function* deleteImageSaga(action) {
    const { imageId} = action;
    try {
        const result = yield call(axios.deleteImage,imageId)
        if (result.status === 1) {
            cl('result inside delete image saga', result)
            yield put({
                type: types.API_DELETE_IMAGE_SUCCESS,
                imageId:imageId,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
        }
        else {
            yield call(imageManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(imageManagementErrorSaga, error)
    }
}


export default function* rootImageManagementSaga() {
    yield takeLatest(types.API_GET_IMAGE_LIST_LOAD, getImageListSaga)
    yield takeLatest(types.API_ADD_IMAGE_LOAD, addImageSaga)
    yield takeLatest(types.API_DELETE_IMAGE_LOAD, deleteImageSaga)
}