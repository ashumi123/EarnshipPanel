import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'
import { apiConstants as types,appMessages } from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* terminalReportPostFailedSaga(result) {
    console.error('result inside the terminal report post Failed', result)
    yield put({
        type: types.API_TERMINAL_REPORT_POST_FAILED,
    })
    toast.error(result?.error)

}

function* terminalReportPostErrorSaga(result) {
    console.error('result inside the terminal report post Error', result)
    yield put({
        type: types.API_TERMINAL_REPORT_POST_ERROR,
    })
    if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error,{toastId: result?.status||"est"})
    }

}


function* getTerminalReportPostListSaga(action) {
    const { search, offset, limit, sortBy, order, terminalId } = action;
    try {
        const result = yield call(axios.getTerminalReportPostList, search, offset, limit, sortBy, order, terminalId)
        if (result.status === 1) {
            cl('result inside get terminal report post list saga', result)
            yield put({
                type: types.API_GET_TERMINAL_REPORT_POST_LIST_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalReportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalReportPostErrorSaga, error)
    }
}

function* getTerminalReportPostDetailsSaga(action) {
    const { postId} = action;
    try {
        const result = yield call(axios.getTerminalReportPostDetails,postId)
        if (result.status === 1) {
            cl('result inside get terminal report post details saga', result)
            yield put({
                type: types.API_GET_TERMINAL_REPORT_POST_DETAILS_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalReportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalReportPostErrorSaga, error)
    }
}



function* deleteTerminalReportPostSaga(action) {
    const {postId } = action;
    try {
        const result = yield call(axios.deleteTerminalReportPost,postId)
        if (result.status === 1) {
            cl('result inside delete terminal report post saga', result)
            yield put({
                type: types.API_DELETE_TERMINAL_REPORT_POST_SUCCESS,
                postId:postId,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
        }
        else {
            yield call(terminalReportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalReportPostErrorSaga, error)
    }
}

function* timelineDetailsSaga(action) {
    const {id ,postType} = action;
    try {
        const result = yield call(axios.timelineDetails,id,postType)
        if (result.status === 1) {
            cl('result inside timeline post details saga', result)
            yield put({
                type: types.API_TIMELINE_DETAILS_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalReportPostFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalReportPostErrorSaga, error)
    }
}


export default function* rootTerminalReportPostSaga() {
    yield takeLatest(types.API_GET_TERMINAL_REPORT_POST_LIST_LOAD, getTerminalReportPostListSaga)
    yield takeLatest(types.API_GET_TERMINAL_REPORT_POST_DETAILS_LOAD, getTerminalReportPostDetailsSaga)
    yield takeLatest(types.API_DELETE_TERMINAL_REPORT_POST_LOAD, deleteTerminalReportPostSaga)
    yield takeLatest(types.API_TIMELINE_DETAILS_LOAD, timelineDetailsSaga)
}