import { all, fork } from "redux-saga/effects";
import rootAuthenticationSaga from "./authenticationSaga";
import rootUserManagementSaga from "./userManagementSaga";
import rootSavedUserLocationsSaga from "./savedUserLocationSaga";
import rootTerminalAreaManagementSaga from "./terminalAreaManagementSaga";
import rootTerminalManagementSaga from "./terminalManagementSaga";
import rootReportPostSaga from "./reportPostSaga";
import rootTerminalReportPostSaga from "./terminalReportPostSaga";
import rootImageManagementSaga from "./imageManagementSaga";
import rootRadarManagementSaga from "./radarManagementSaga";
export default function* rootSaga() {
  yield all([
    fork(rootAuthenticationSaga),
    fork(rootUserManagementSaga),
    fork(rootSavedUserLocationsSaga),
    fork(rootTerminalAreaManagementSaga),
    fork(rootTerminalManagementSaga),
    fork(rootImageManagementSaga),
    fork(rootReportPostSaga),
    fork(rootTerminalReportPostSaga),
    fork(rootRadarManagementSaga),
  ]);
}
