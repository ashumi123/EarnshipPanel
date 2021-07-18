import { apiConstants as types } from '../../themes/constants'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading: false,
    isTableDataLoading:false,
    result: {},
    deletedImage:null,
    imageListing: [],
    imagePaging:{},
    errorState:null,
    currentPage:1,
}

export const imageManagementReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get user list
        case types.API_GET_IMAGE_LIST_LOAD:
            return { ...state, isTableDataLoading: true ,errorState:null,}
        case types.API_GET_IMAGE_LIST_SUCCESS:
            return { ...state, isTableDataLoading: false, imageListing: action.result.list, imagePaging:action.result.paging,currentPage:action.result?.paging?.page?.currentPage }

        // Add terminal area
        case types.API_ADD_IMAGE_LOAD:
            return { ...state, isLoading: true ,errorState:null,}
        case types.API_ADD_IMAGE_SUCCESS:
            return { ...state, isLoading: false}

        // Delete terminal area
        case types.API_DELETE_IMAGE_LOAD:
            return { ...state, isTableDataLoading: true ,errorState:null,}
        case types.API_DELETE_IMAGE_SUCCESS:
            let indexToDelete = state.imageListing.findIndex(value=>value._id === action.imageId)
            state.imageListing.splice(indexToDelete,1)
            return { ...state, isTableDataLoading: false, imageListing: [...state.imageListing], deletedImage:action.imageId}

        //Terminal area management failed cases
        case types.API_IMAGE_MANAGEMENT_FAILED:
            return { ...state, isLoading: false,isTableDataLoading:false ,imageListing: [],
            imagePaging:{},errorState:action.errorState,}
        case types.API_IMAGE_MANAGEMENT_ERROR:
            return { ...state, isLoading: false ,isTableDataLoading:false,imageListing: [],
            imagePaging:{},errorState:action.errorState,}

        //Default case
        default:
            return { ...state }

    }
}