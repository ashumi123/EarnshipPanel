import { apiConstants as types } from '../../themes/constants'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading: false,
    isTableDataLoading:false,
    result: {},
    terminalPagination: [],
    terminalListing:[],
    terminalDetails:{},
    deletedTerminal:null,
    errorState:null,
}

export const terminalManagementReducer = (state = initialState, action) => {
    switch (action.type) {

        // Terminal Area Management Cases
         // Clear State Case 
        case types.CLEAR_STATE:
            if(action.key==="clearTerminalDetailsState"){
                return {
                   ...state, terminalDetails:{},
                }
            }else{
                return {...state}
            }
        
        // Get user list
        case types.API_GET_TERMINAL_LIST_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_GET_TERMINAL_LIST_SUCCESS:
            return { ...state, isLoading: false, terminalListing: action.result.list_terminals,terminalPaging:action.result.paging }

        // Add Terminal Area list
        case types.API_ADD_TERMINAL_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_ADD_TERMINAL_SUCCESS:
            return { ...state, isLoading: false }

        // Get terminal details
        case types.API_GET_TERMINAL_DETAILS_LOAD:
            return { ...state, isTableDataLoading: true ,errorState:null}
        case types.API_GET_TERMINAL_DETAILS_SUCCESS:
            return { ...state, isTableDataLoading: false, terminalDetails:action.result.terminal_details }

        // Edit terminal area
        case types.API_EDIT_TERMINAL_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_EDIT_TERMINAL_SUCCESS:
            return { ...state, isLoading: false }

        // Delete terminal area
        case types.API_DELETE_TERMINAL_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_DELETE_TERMINAL_SUCCESS:
             let indexToDelete = state.terminalListing.findIndex(value=>value._id === action.terminalId)
            state.terminalListing.splice(indexToDelete,1)
            return { ...state, isLoading: false,terminalListing:[...state.terminalListing],deletedTerminal:action.terminalId }

        // Import file area
        case types.API_IMPORT_FILE_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_IMPORT_FILE_SUCCESS:
            return { ...state, isLoading: false }

        // Export file area
        case types.API_EXPORT_FILE_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_EXPORT_FILE_SUCCESS:
            return { ...state, isLoading: false }


        //Terminal area management failed cases
        case types.API_TERMINAL_MANAGEMENT_FAILED:
            return { ...state, isLoading: false,isTableDataLoading:false ,terminalListing: [],terminalPaging:{} ,errorState:action.errorState,}
        case types.API_TERMINAL_MANAGEMENT_ERROR:
            return { ...state, isLoading: false, isTableDataLoading:false ,terminalListing: [],terminalPaging:{} ,errorState:action.errorState,}

        //Default case
        default:
            return { ...state }

    }
}