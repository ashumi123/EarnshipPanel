import { apiConstants as types } from '../../themes/constants'

// Get terminal area Action
export const getTerminalAreaListAction = (search, offset, limit, sortBy, order) => ({
    type: types.API_GET_TERMINAL_AREA_LIST_LOAD,
    search, offset, limit, sortBy, order
})

// Add terminal area Action
export const addTerminalAreaAction = (terminalAreaName) => ({
    type: types.API_ADD_TERMINAL_AREA_LOAD,
    terminalAreaName,
})

// Get terminal area Action
export const getTerminalAreaDetailsAction = (terminalAreaId) => ({
    type: types.API_GET_TERMINAL_AREA_DETAILS_LOAD,
    terminalAreaId,
})

// Edit terminal area Action
export const editTerminalAreaAction = (terminalAreaId,terminalAreaName) => ({
    type: types.API_EDIT_TERMINAL_AREA_LOAD,
    terminalAreaId,
    terminalAreaName,
})

//  Delete terminal area Action
export const deleteTerminalAreaAction = (terminalAreaId) => ({
    type: types.API_DELETE_TERMINAL_AREA_LOAD,
    terminalAreaId,
})
