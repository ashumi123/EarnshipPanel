import { apiConstants as types } from "../../themes/constants";
import cl from "../../utils/cl";
import localStorage from "../../utils/localStorage";
const initialState = {
  isLoading: false,
  isTableDataLoading: false,
  radarListingResult: [],
  currentPage: 1,
};

export const radarManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    // User Management Cases
    // Clear State Case
    // case types.CLEAR_STATE:
    //     if(action.key==="clearUserDetailsState"){
    //         return {
    //            ...state, userDetails:{},
    //         }
    //     }else{
    //         return {...state}
    //     }

    // Get radar entry exit list

    //API_RADAR_MANAGEMENT_FAILED
    //API_RADAR_MANAGEMENT_ERROR
    case types.API_RADAR_MANAGEMENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case types.API_RADAR_MANAGEMENT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case types.API_RADAR_ENTRY_EXIT_LOAD:
      return { ...state, isLoading: true };
    case types.API_RADAR_ENTRY_EXIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        radarListingResult: action.result.list,
        currentPage: action.result?.paging?.page?.currentPage,
      };

    // Get radar expot list
    case types.API_RADAR_EXPORT_LOAD:
      return { ...state, isLoading: true };
    case types.API_RADAR_EXPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    //Default case
    default:
      return { ...state };
  }
};
