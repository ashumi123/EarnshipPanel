import {apiConstants as types} from '../../themes/constants'
import cl from '../../utils/cl'
import localStorage from '../../utils/localStorage'
const initialState = {
    isLoading : false,
    isTableDataLoading:false,
    userListingResult:{},
    savedUserLocationsResult:{},
    userDetails : {},
    currentPage:1,
}

export const userManagementReducer = (state = initialState, action)=>{
    switch (action.type) {
        // User Management Cases
        // Clear State Case 
        case types.CLEAR_STATE:
            if(action.key==="clearUserDetailsState"){
                return {
                   ...state, userDetails:{},
                }
            }else{
                return {...state}
            }
        
        // Get user list
        case types.API_GET_USER_LIST_LOAD:
            return {...state,isLoading :true, }
        case types.API_GET_USER_LIST_SUCCESS:
            return {...state,isLoading:false,userListingResult:action.result ,currentPage:action.result?.paging?.page?.currentPage}

        // Get user details
        case types.API_GET_USER_DETAILS_LOAD:
            return {...state,isTableDataLoading :true,}
        case types.API_GET_USER_DETAILS_SUCCESS:
            return {...state,isTableDataLoading:false,userDetails : action.result.userDetails}

        // Edit user details
        case types.API_EDIT_USER_DETAILS_LOAD:
            return {...state,isLoading :true}
        case types.API_EDIT_USER_DETAILS_SUCCESS:
            return {...state,isLoading:false}

        // Block user details
        case types.API_BLOCK_USER_LOAD:
            return {...state,isLoading :true}
        case types.API_BLOCK_USER_SUCCESS:
            // Find the index of blocked/unblocked user and 
            // change block to unblock or vice verse
            let userListing = [...state.userListingResult.list];
            cl('userListing',userListing,action)
           
            // let userBlockedIndex  = userListing.findIndex(user=>user._id === action.id)
            // cl('userListing',userBlockedIndex)
           userListing.map((x,index)=>{
               cl(x._id==action.id,x._id,action.id)
               if(x._id==action.id){
                userListing[index].isBlock=!x.isBlock
               }
           })
           
            // userListing[userBlockedIndex].isBlock = !userListing[userBlockedIndex].isBlock;
            cl('userListing',userListing)
            state.userListingResult.list = userListing
            return {...state,isLoading:false , userListingResult : state.userListingResult}

        //User Saved Locations
        case types.API_SAVED_USER_LOCATIONS_LOAD:
            return {...state,isLoading :true}
        case types.API_SAVED_USER_LOCATIONS_SUCCESS:
            return {...state,isLoading:false,savedUserLocationsResult:action.result}
        
        //User management failed cases
        case types.API_USER_MANAGEMENT_FAILED:
            return {...state,isLoading :false,isTableDataLoading:false,userListingResult:{}}
        case types.API_USER_MANAGEMENT_ERROR:
            return {...state,isLoading:false, isTableDataLoading:false,userListingResult:{}}
        
        //Default case
        default:
            return {...state} 

    }
}