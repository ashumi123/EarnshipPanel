import { apiConstants as types } from '../../themes/constants'

// Get terminal Action
export const getTerminalReportPostListAction = (search, offset, limit, sortBy, order, terminalId) => ({
    type: types.API_GET_TERMINAL_REPORT_POST_LIST_LOAD,
    search, offset, limit, sortBy, order, terminalId
})

// Add terminal Action
export const getTerminalReportPostDetailsAction = (postId) => ({
    type: types.API_GET_TERMINAL_REPORT_POST_DETAILS_LOAD,
    postId,
})

// Get terminal details Action
export const deleteTerminalReportPostAction = (postId) => ({
    type: types.API_DELETE_TERMINAL_REPORT_POST_LOAD,
    postId
})

// Timeline Details Action
export const timelineDetailsAction=(id, postType)=>({
    type:types.API_TIMELINE_DETAILS_LOAD,
    id,
    postType,
})