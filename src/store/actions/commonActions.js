import {apiConstants as types} from '../../themes/constants'

// Clear State Action
export const handleClearStateAction = (key)=>({
        type:types.CLEAR_STATE,
        key,
    })

// Action to handle navigatin route state
export const handleNavigationStateAction = (index,isNested) => ({
        type: types.HANDLE_SIDEBAR_NAVIGATION_STATE,
        index,
        isNested,
    })

// Action to handle Drawer togglling
export const handleSidebarDrawerToggleStateAction = (toggler) => ({
        type: types.HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE,
        toggler,
})
    
