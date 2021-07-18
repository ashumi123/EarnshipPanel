import { takeLatest, call, put, delay } from "redux-saga/effects";
import { apiConstants as types, appMessages } from "../../themes/constants";
import axios from "../axios";
import cl from "../../utils/cl";
import history from "../../utils/history";
import { toast } from "react-toastify";
function* radarManagementFailedSaga(result) {
  console.error("result inside the radar management Failed", result);
  yield put({
    type: types.API_RADAR_MANAGEMENT_FAILED,
  });
  toast.error(result?.error);
}

function* radarManagementErrorSaga(result) {
  console.error("result inside the radar Management Error", result);
  yield put({
    type: types.API_RADAR_MANAGEMENT_ERROR,
  });
  if (result.status === 2) {
    toast.error(appMessages.messageStatus500);
  } else {
    toast.error(result?.error, { toastId: result?.status || "est" });
  }
}

function* getRadarEntryExitListSaga(action) {
  const {
    search,
    offset,
    limit,
    sortBy,
    order,
  } = action;
  try {
    const result = yield call(
      axios.getRadarEntryExitList,
      search,
      offset,
      limit,
      sortBy,
      order,
    );
    console.log("result----->", result);
    if (result.status === 1) {
      cl("result inside get user list saga", result);
      yield put({
        type: types.API_RADAR_ENTRY_EXIT_SUCCESS,
        result: result.result.data.data,
      });
    } else {
      yield call(radarManagementFailedSaga, result);
    }
  } catch (error) {
    yield call(radarManagementErrorSaga, error);
  }
}

function* getRadarExportListSaga(action) {
  // const { search, offset, limit, sortBy, order } = action;
  try {
    const result = yield call(axios.getRadarExportList);
    if (result.status === 1) {
      cl("result inside get user list saga", result);
      yield put({
        type: types.API_RADAR_EXPORT_SUCCESS,
        //   result: result.result.data.data,
      });
    } else {
      yield call(radarManagementFailedSaga, result);
    }
  } catch (error) {
    yield call(radarManagementErrorSaga, error);
  }
}

export default function* rootRadarManagementSaga() {
  yield takeLatest(types.API_RADAR_ENTRY_EXIT_LOAD, getRadarEntryExitListSaga);
  yield takeLatest(types.API_RADAR_EXPORT_LOAD, getRadarExportListSaga);
}
