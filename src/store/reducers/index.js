import { combineReducers } from "redux";
import { commonReducer } from "./commonReducer";
import { authenticationReducer } from "./authenticationReducer";
import { userManagementReducer } from "./userManagementReducer";
import { terminalAreaManagementReducer } from "./terminalAreaManagementReducer";
import { terminalManagementReducer } from "./terminalManagementReducer";
import { reportPostReducer } from "./reportPostReducer";
import { terminalReportPostReducer } from "./terminalReportPostReducer";
import { imageManagementReducer } from "./imageManagementReducer";
import { radarManagementReducer } from "./radarManagementReducer";

const rootReducer = combineReducers({
  commonReducer,
  authenticationReducer,
  userManagementReducer,
  terminalAreaManagementReducer,
  terminalManagementReducer,
  reportPostReducer,
  imageManagementReducer,
  terminalReportPostReducer,
  radarManagementReducer,
});

export default rootReducer;
