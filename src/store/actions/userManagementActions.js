import {apiConstants as types} from '../../themes/constants'

// Login Action
export const getUserListAction=(search,offset,limit,sortBy,order,userType)=>({
        type:types.API_GET_USER_LIST_LOAD,
        search,
        offset,
        limit,
        sortBy,
        order,
        userType
    })
export const VerifyAction=(value,id)=>({
        type:'VERIFY_CONSULT_LOAD',
        value,
        id
    })

// Forgot Password Action
export const getUserDetailsAction=(userId)=>({
    type:types.API_GET_USER_DETAILS_LOAD,
    userId,
})

// Forgot Password Action
export const editUserDetailsAction=(userId,firstName,lastName,email,phoneNumber,countryCode,userType)=>({
    type:types.API_EDIT_USER_DETAILS_LOAD,
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    userType,
})

// View Saved locations by User Action
export const savedUserLocationsAction=(search,offset,limit,sortBy,order,userId)=>({
    type:types.API_SAVED_USER_LOCATIONS_LOAD,
    search,
    offset,
    limit,
    sortBy,
    order,
    userId,
})

// Block User Action
export const blockUserAction=(userId,isBlocked)=>({
    type:types.API_BLOCK_USER_LOAD,
    userId,
    isBlocked,
})