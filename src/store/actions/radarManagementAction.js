import { apiConstants as types } from "../../themes/constants";

// get radar entry/exit list Action
export const getRadarEntryExitListAction = (
  search,
  offset,
  limit,
  sortBy,
  order,
  userIdFilterArray,
  terminalIdFilterArray
) => ({
  type: types.API_RADAR_ENTRY_EXIT_LOAD,
  search,
  offset,
  limit,
  sortBy,
  order,
  userIdFilterArray,
  terminalIdFilterArray,
});

// get radar export list Action
export const getRadarExportListAction = () =>
  //   search,
  //   offset,
  //   limit,
  //   sortBy,
  //   order
  ({
    type: types.API_RADAR_EXPORT_LOAD,
    //   search,
    //   offset,
    //   limit,
    //   sortBy,
    //   order,
  });
