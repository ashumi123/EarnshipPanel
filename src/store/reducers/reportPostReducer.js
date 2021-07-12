import { apiConstants as types } from '../../themes/constants'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading: false,
    isTableDataLoading:false,
    result: {},
    reportListResult: {},
    reportPostDetails :{},
}

export const reportPostReducer = (state = initialState, action) => {
    switch (action.type) {

        // Report Post Cases
        // Report Post List
        case types.API_GET_REPORT_POST_LIST_LOAD:
            return { ...state, isLoading: true, }
        case types.API_GET_REPORT_POST_LIST_SUCCESS:

            return { ...state, isLoading: false, reportListResult: action.result }

        // Report Post details
        case types.API_GET_REPORT_POST_DETAILS_LOAD:
            return { ...state, isTableDataLoading: true }
        case types.API_GET_REPORT_POST_DETAILS_SUCCESS:
            return { ...state, isTableDataLoading: false, reportPostDetails : action.result }

        //Delete Report Post 
        case types.API_DELETE_REPORT_POST_LOAD:
            return { ...state, isLoading: true }
        case types.API_DELETE_REPORT_POST_SUCCESS:
            return { ...state, isLoading: false }

        //Revoke Report Post 
        case types.API_REVOKE_REPORT_POST_LOAD:
            return { ...state, isLoading: true }
        case types.API_REVOKE_REPORT_POST_SUCCESS:
            return { ...state, isLoading: false }

        // Report Post failed cases
        case types.API_REPORT_POST_FAILED:
            return { ...state, isLoading: false,isTableDataLoading:false ,reportListResult:{}}
        case types.API_REPORT_POST_ERROR:
            return { ...state, isLoading: false,isTableDataLoading :false,reportListResult:{}}

        //Default case
        default:
            return { ...state }

    }
}