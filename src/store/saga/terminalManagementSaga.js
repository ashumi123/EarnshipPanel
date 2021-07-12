import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'
import { apiConstants as types, ValidationConstants,appMessages } from '../../themes/constants'
import axios from '../axios'
import cl from '../../utils/cl'
import history from '../../utils/history'
import { toast } from 'react-toastify';
function* terminalManagementFailedSaga(result) {
    cl('result inside the terminal management Failed', result)
    yield put({
        type: types.API_TERMINAL_MANAGEMENT_FAILED,
        errorState:result?.error,
    })
    toast.error(result?.error,)
}

function* terminalManagementErrorSaga(result) {
    cl('result inside the terminal management Error', result)
    yield put({
        type: types.API_TERMINAL_MANAGEMENT_ERROR,
        errorState:result?.error,
    })
    if(result.status === 2){
        toast.error(appMessages.messageStatus500)
    }else{
        toast.error(result?.error)
    }
}


function* getTermianlListSaga(action) {
    const { search, offset, limit, sortBy, order } = action;
    try {
        const result = yield call(axios.getTerminalList, search, offset, limit, sortBy, order)
        if (result.status === 1) {
            cl('result inside get terminal list saga', result)
            yield put({
                type: types.API_GET_TERMINAL_LIST_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* addTerminalSaga(action) {
    const { terminalImage,
            terminalArea,
            terminalName,
            locationCategory,
            terminalCountry,
            terminalAddress,
            terminalLatitude,
            terminalLongitude,
            terminalCity,
            terminalState,
            zipCode,
            terminalRadius,
            terminalOpenTime,
            terminalCloseTime,
            fullTime,
            mapLogoFile,
        } = action;
    try {
        const result = yield call(axios.addTerminal,terminalImage,
                                                    terminalArea,
                                                    terminalName,
                                                    locationCategory,
                                                    terminalCountry,
                                                    terminalAddress,
                                                    terminalLatitude,
                                                    terminalLongitude,
                                                    terminalCity,
                                                    terminalState,
                                                    zipCode,
                                                    terminalRadius,
                                                    terminalOpenTime,
                                                    terminalCloseTime,
                                                    fullTime,
                                                    mapLogoFile,
                                                    )
        if (result.status === 1) {
            cl('result inside add terminal saga', result)
            yield put({
                type: types.API_ADD_TERMINAL_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/terminals')
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* getTerminalDetailsSaga(action) {
    const { terminalId } = action;
    try {
        const result = yield call(axios.getTerminalDetails, terminalId)
        if (result.status === 1) {
            cl('result inside get terminal Details saga', result)
            yield put({
                type: types.API_GET_TERMINAL_DETAILS_SUCCESS,
                result: result.result.data.data,
            })
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* editTerminalSaga(action) {
     const { 
            terminalId,    
            terminalImage,
            terminalArea,
            terminalName,
            locationCategory,
            terminalCountry,
            terminalAddress,
            terminalLatitude,
            terminalLongitude,
            terminalCity,
            terminalState,
            zipCode,
            terminalRadius,
            terminalOpenTime,
            terminalCloseTime,
            fullTime,
         mapLogoFile,
            terminalPolygon,
        } = action;
    try {
        const result = yield call(axios.editTerminal,
                                                    terminalId,
                                                    terminalImage,
                                                    terminalArea,
                                                    terminalName,
                                                    locationCategory,
                                                    terminalCountry,
                                                    terminalAddress,
                                                    terminalLatitude,
                                                    terminalLongitude,
                                                    terminalCity,
                                                    terminalState,
                                                    zipCode,
                                                    terminalRadius,
                                                    terminalOpenTime,
                                                    terminalCloseTime,
                                                    fullTime,
            mapLogoFile,
                                                    terminalPolygon,
                                                    )
        if (result.status === 1) {
            cl('result inside edit terminal  saga', result)
            yield put({
                type: types.API_EDIT_TERMINAL_SUCCESS,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
            history.push('/terminals')
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* deleteTerminalSaga(action) {
    const { terminalId} = action;
    try {
        const result = yield call(axios.deleteTerminal,terminalId)
        if (result.status === 1) {
            cl('result inside delete terminal saga', result)
            yield put({
                type: types.API_DELETE_TERMINAL_SUCCESS,
                terminalId:terminalId,
                result: result.result.data.data,
            })
            toast.success(result?.result?.data?.message)
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* importTerminalSaga(action) {
    const { file,fileType } = action;
    try {
        const result = yield call(axios.importFile, file,fileType)
        if (result.status === 1) {
            cl('result inside Import Terminal saga', result)
            yield put({
                type: types.API_IMPORT_FILE_SUCCESS,
                result: result.result.data.data,
            })
            if(action.fileType=='terminalArea'){
                toast.success("Terminal area list imported successfully.")
                history.push('/terminal-area-list')
            }else{
                toast.success("Terminal list imported successfully.")
                history.push('/terminals')
            }
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

function* exportTerminalSaga(action) {
    const { fileType} = action;
    try {
        const result = yield call(axios.exportFile,fileType)
        if (result.status === 1) {
            cl('result inside export Terminal saga', result)
            yield put({
                type: types.API_EXPORT_FILE_SUCCESS,
                result: result.result.data.data,
            })
            if(action.fileType=='terminalArea'){
                toast.success("Terminal area list exported successfully.")
            }else{
                toast.success("Terminal area exported successfully.")
            }
        }
        else {
            yield call(terminalManagementFailedSaga, result)
        }
    }
    catch (error) {
        yield call(terminalManagementErrorSaga, error)
    }
}

export default function* rootTerminalMAnagementSaga() {
    yield takeLatest(types.API_GET_TERMINAL_LIST_LOAD, getTermianlListSaga)
    yield takeLatest(types.API_ADD_TERMINAL_LOAD, addTerminalSaga)
    yield takeLatest(types.API_GET_TERMINAL_DETAILS_LOAD, getTerminalDetailsSaga)
    yield takeLatest(types.API_EDIT_TERMINAL_LOAD, editTerminalSaga)
    yield takeLatest(types.API_DELETE_TERMINAL_LOAD, deleteTerminalSaga)
    yield takeLatest(types.API_IMPORT_FILE_LOAD, importTerminalSaga)
    yield takeLatest(types.API_EXPORT_FILE_LOAD, exportTerminalSaga)
}