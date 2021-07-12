import { apiConstants as types } from '../../themes/constants'

// Get terminal Action
export const getReportPostListAction = (search, offset, limit, sortBy, order) => ({
    type: types.API_GET_REPORT_POST_LIST_LOAD,
    search, offset, limit, sortBy, order
})

// Add terminal Action
export const getReportPostDetailsAction = (reportId) => ({
    type: types.API_GET_REPORT_POST_DETAILS_LOAD,
    reportId,
})

// Get terminal details Action
export const deleteReportPostAction = (reportPostId) => ({
    type: types.API_DELETE_REPORT_POST_LOAD,
    reportPostId,
})

// Get terminal details Action
export const revokeReportPostAction = (reportPostId) => ({
    type: types.API_REVOKE_REPORT_POST_LOAD,
    reportPostId,
})

