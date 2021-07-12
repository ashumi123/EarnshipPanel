import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'
import { apiConstants as types ,appMessages} from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* terminalAreaManagementFailedSaga(result) {
   
    yield put({
        type: types.API_TERMINAL_AREA_MANAGEMENT_FAILED,
        errorState:result?.error,
    })
    toast.error(result?.error)
}

function* terminalAreaManagementErrorSaga(result) {
    
    yield put({
        type: types.API_TERMINAL_AREA_MANAGEMENT_ERROR,
        errorState:result?.error,
    })
    if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error)
    }
}


function* getTermianlAreaListSaga(action) {
    const { search, offset, limit, sortBy, order } = action;
    try {
        const result = yield call(axios.getTerminalAreaList, search, offset, limit, sortBy, order)
        if (result.status === 1) {
            cl('result inside get terminal area list saga', result)
            yield put({
                type: types.API_GET_TERMINAL_AREA_LIST_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalAreaManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalAreaManagementErrorSaga, error)
    }
}

function* addTerminalAreaSaga(action) {
    const { terminalAreaName } = action;
    try {
        const result = yield call(axios.addTerminalArea,terminalAreaName)
        if (result.status === 1) {
            cl('result inside add terminal area saga', result)
            yield put({
                type: types.API_ADD_TERMINAL_AREA_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/terminal-area-list')
        }
        else {
            yield call(terminalAreaManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalAreaManagementErrorSaga, error)
    }
}

function* getTerminalAreaDetailsSaga(action) {
    const { terminalAreaId } = action;
    try {
        const result = yield call(axios.getTerminalAreaDetails, terminalAreaId)
        if (result.status === 1) {
            cl('result inside get terminal Details saga', result)
            yield put({
                type: types.API_GET_TERMINAL_AREA_DETAILS_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalAreaManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalAreaManagementErrorSaga, error)
    }
}

function* editTerminalAreaSaga(action) {
    const {terminalAreaId,terminalAreaName } = action;
    try {
        const result = yield call(axios.editTerminalArea,terminalAreaId,terminalAreaName)
        if (result.status === 1) {
            cl('result inside edit terminal area saga', result)
            yield put({
                type: types.API_EDIT_TERMINAL_AREA_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/terminal-area-list')
        }
        else {
            yield call(terminalAreaManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalAreaManagementErrorSaga, error)
    }
}

function* deleteTerminalAreaSaga(action) {
    const { terminalAreaId} = action;
    try {
        const result = yield call(axios.deleteTerminalArea,terminalAreaId)
        if (result.status === 1) {
            cl('result inside delete terminal area saga', result)
            yield put({
                type: types.API_DELETE_TERMINAL_AREA_SUCCESS,
                terminalAreaId:terminalAreaId,
                result: result.result.data.data,
            })

            toast.success(result?.result?.data?.message)
        }
        else {
            yield call(terminalAreaManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalAreaManagementErrorSaga, error)
    }
}


export default function* rootTerminalAreaMAnagementSaga() {
    yield takeLatest(types.API_GET_TERMINAL_AREA_LIST_LOAD, getTermianlAreaListSaga)
    yield takeLatest(types.API_GET_TERMINAL_AREA_DETAILS_LOAD, getTerminalAreaDetailsSaga)
    yield takeLatest(types.API_ADD_TERMINAL_AREA_LOAD, addTerminalAreaSaga)
    yield takeLatest(types.API_EDIT_TERMINAL_AREA_LOAD, editTerminalAreaSaga)
    yield takeLatest(types.API_DELETE_TERMINAL_AREA_LOAD, deleteTerminalAreaSaga)
}