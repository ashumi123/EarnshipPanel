import { apiConstants as types } from '../../themes/constants'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading: false,
    isTableDataLoading:false,
    result: {},
    terminalReportPostListing: [],
    terminalReportPostPaging :[],
    terminalReportPostDetails:{},
    timelineDetails: {},
    timelineErrorState:'',
    isTimeLineSuccess:false,
}

export const terminalReportPostReducer = (state = initialState, action) => {
    switch (action.type) {

        // Terminal Report Post 
        // Termianl Report Post List
        case types.API_GET_TERMINAL_REPORT_POST_LIST_LOAD:
            return { ...state, isLoading: true ,
            }
        case types.API_GET_TERMINAL_REPORT_POST_LIST_SUCCESS:

            return { ...state, 
                isLoading: false, 
                terminalReportPostListing: action.result.list_post ,
                terminalReportPostPaging :action.result.paging,
            }

        //Terminal Report Post details
        case types.API_GET_TERMINAL_REPORT_POST_DETAILS_LOAD:
            return { ...state, isTableDataLoading: true }
        case types.API_GET_TERMINAL_REPORT_POST_DETAILS_SUCCESS:
            return { ...state, isTableDataLoading: false, terminalReportPostDetails:action.result.post_details }

        //Delete Terminal Report Post 
        case types.API_DELETE_TERMINAL_REPORT_POST_LOAD:
            return { ...state, isLoading: true }
        case types.API_DELETE_TERMINAL_REPORT_POST_SUCCESS:
            let indexToDelete = state.terminalReportPostListing.findIndex(value=>value._id === action.postId)
            state.terminalReportPostListing.splice(indexToDelete,1)
            return { ...state, isLoading: false, terminalReportPostListing:[...state.terminalReportPostListing] }

        // Timeline Post details
        case types.API_TIMELINE_DETAILS_LOAD:
            return { ...state, isLoading: true ,timelineDetails:{},timelineErrorState:'',isTimeLineSuccess:false}
        case types.API_TIMELINE_DETAILS_SUCCESS:
            return { ...state, isLoading: false,timelineDetails:action.result,isTimeLineSuccess:true }

        //Terminal Report Post failed cases
        case types.API_TERMINAL_REPORT_POST_FAILED:
            return { ...state, isLoading: false,isTableDataLoading:false ,terminalReportPostListing: [] ,
                terminalReportPostPaging :{},timelineErrorState:'yes',isTimeLineSuccess:false}
        case types.API_TERMINAL_REPORT_POST_ERROR:
            return { ...state, isLoading: false ,isTableDataLoading:false,terminalReportPostListing: [] ,
                terminalReportPostPaging :{},timelineErrorState:'yes',isTimeLineSuccess:false}

        //Default case
        default:
            return { ...state }

    }
}