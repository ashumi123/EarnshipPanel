import { apiConstants as types } from '../../themes/constants'
import { updatePagination} from '../../utils/helpers'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading: false,
    isTableDataLoading:false,
    result: {},
    deletedTerminal:null,
    terminalAreaListing: [],
    terminalAreaPaging:{},
    terminalAreaDetails:{},
    errorState:null,
    currentPage:1,
}

export const terminalAreaManagementReducer = (state = initialState, action) => {
    switch (action.type) {

        // Terminal Area Management Cases
        case types.CLEAR_STATE:
            if(action.key==="clearTerminalAreaDetailsState"){
                return {
                    ...state, terminalAreaDetails:{},
                }
            }else{
                return {...state}
            }
        // Get user list
        case types.API_GET_TERMINAL_AREA_LIST_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_GET_TERMINAL_AREA_LIST_SUCCESS:
            return { ...state, isLoading: false, terminalAreaListing: action.result.listRegions, terminalAreaPaging:action.result.paging,currentPage:action.result?.paging?.page?.currentPage }

        // Add terminal area
        case types.API_ADD_TERMINAL_AREA_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_ADD_TERMINAL_AREA_SUCCESS:
            return { ...state, isLoading: false}

        // Edit terminal area
        case types.API_GET_TERMINAL_AREA_DETAILS_LOAD:
            return { ...state, isTableDataLoading: true,errorState:null, }
        case types.API_GET_TERMINAL_AREA_DETAILS_SUCCESS:
            return { ...state, isTableDataLoading: false,terminalAreaDetails:action.result.region_details }

        // Edit terminal area
        case types.API_EDIT_TERMINAL_AREA_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_EDIT_TERMINAL_AREA_SUCCESS:
            return { ...state, isLoading: false }

        // Delete terminal area
        case types.API_DELETE_TERMINAL_AREA_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_DELETE_TERMINAL_AREA_SUCCESS:
            // Delete item from list
            let indexToDelete = state.terminalAreaListing.findIndex(value=>value._id === action.terminalAreaId)
            state.terminalAreaListing.splice(indexToDelete,1)
            
            return { ...state, isLoading: false, terminalAreaListing: [...state.terminalAreaListing],deletedTerminal:action.terminalAreaId}

        //Terminal area management failed cases
        case types.API_TERMINAL_AREA_MANAGEMENT_FAILED:
            return { ...state, isLoading: false,isTableDataLoading:false ,terminalAreaListing: [],
            terminalAreaPaging:{},errorState:action.errorState,}
        case types.API_TERMINAL_AREA_MANAGEMENT_ERROR:
            return { ...state, isLoading: false ,isTableDataLoading:false,terminalAreaListing: [],
            terminalAreaPaging:{},errorState:action.errorState,}

        //Default case
        default:
            return { ...state }

    }
}