import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'
import { apiConstants as types ,appMessages} from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';

function* reportPostFailedSaga(result) {
    console.error('result inside the report post Failed', result)
    yield put({
        type: types.API_REPORT_POST_FAILED,
    })
    toast.error(result?.error)
}

function* reportPostErrorSaga(result) {
    console.error('result inside the report post Error', result)
    yield put({
        type: types.API_REPORT_POST_ERROR,
    })
    if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error,{toastId: result?.status||"est"})
    }
    
}


function* getReportPostListSaga(action) {
    const { search, offset, limit, sortBy, order } = action;
    try {
        const result = yield call(axios.getReportPostList, search, offset, limit, sortBy, order)
        if (result.status === 1) {
            cl('result inside get report post list saga', result)
            yield put({
                type: types.API_GET_REPORT_POST_LIST_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(reportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(reportPostErrorSaga, error)
    }
}

function* getReportPostDetailsSaga(action) {
    const { reportId} = action;
    try {
        const result = yield call(axios.getReportPostDetails,reportId)
        if (result.status === 1) {
            cl('result inside get report post details saga', result)
            yield put({
                type: types.API_GET_REPORT_POST_DETAILS_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(reportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(reportPostErrorSaga, error)
    }
}



function* deleteReportPostSaga(action) {
    const { reportPostId} = action;
    try {
        const result = yield call(axios.deleteReportPost,reportPostId)
        if (result.status === 1) {
            cl('result inside delete report post saga', result)
            yield put({
                type: types.API_DELETE_REPORT_POST_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/report-list')
        }
        else {
            yield call(reportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(reportPostErrorSaga, error)
    }
}

function* revokeReportPostSaga(action) {
    const { reportPostId} = action;
    try {
        const result = yield call(axios.revokeReportPost,reportPostId)
        if (result.status === 1) {
            cl('result inside revoke report post saga', result)
            yield put({
                type: types.API_REVOKE_REPORT_POST_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/report-list')
        }
        else {
            yield call(reportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(reportPostErrorSaga, error)
    }
}



export default function* rootReportPostSaga() {
    yield takeLatest(types.API_GET_REPORT_POST_LIST_LOAD, getReportPostListSaga)
    yield takeLatest(types.API_GET_REPORT_POST_DETAILS_LOAD, getReportPostDetailsSaga)
    yield takeLatest(types.API_DELETE_REPORT_POST_LOAD, deleteReportPostSaga)
    yield takeLatest(types.API_REVOKE_REPORT_POST_LOAD, revokeReportPostSaga)
}