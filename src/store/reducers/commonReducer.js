import {apiConstants as types} from '../../themes/constants'
import localStorage from '../../utils/localStorage'
const initialState = {
    sidebarRouteIndex: 0,
    sidebarNestedRouteIndex: null,
    sidebarDrawerToggleState:true,
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        // Clear State Case 
        case types.CLEAR_STATE:
            if(action.key === "clearSidebarIndicesState"){
                localStorage.removeSidebarNestedItemIndex()
                localStorage.removeSidebarItemIndex()
                return {
                    sidebarRouteIndex: 0,
                    sidebarNestedRouteIndex: null,
                }
            }else{
                return {...state}
            }
            
        // Sidebar Navigation Handle case
        case types.HANDLE_SIDEBAR_NAVIGATION_STATE:
            if (action.isNested) {
                localStorage.setSidebarNestedItemIndex(action.index)
                return {...state, sidebarNestedRouteIndex:action.index}
            } else {
                localStorage.removeSidebarNestedItemIndex()
                localStorage.setSidebarItemIndex(action.index)
                return {...state,sidebarRouteIndex:action.index,sidebarNestedRouteIndex:null}
            }

         // Sidebar Drawer Handle case
        case types.HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE:
            return {...state,sidebarDrawerToggleState:action.toggler}
        
        default:
            return {...state}
    }
}