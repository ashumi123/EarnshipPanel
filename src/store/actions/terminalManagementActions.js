import { apiConstants as types } from '../../themes/constants'

// Get terminal Action
export const getTerminalListAction = (search, offset, limit, sortBy, order) => ({
    type: types.API_GET_TERMINAL_LIST_LOAD,
    search, offset, limit, sortBy, order
})

// Add terminal Action
export const addTerminalAction = (
                    terminalImage,
                    terminalArea,
                    terminalName,
                    locationCategory,
                    terminalCountry,
                    terminalAddress,
                    terminalLatitude,
                    terminalLongitude,
                    terminalCity,
                    terminalState,
                    zipCode,
                    terminalRadius,
                    terminalOpenTime,
                    terminalCloseTime,
                    fullTime,
                    mapLogoFile,
                    ) => ({
    type: types.API_ADD_TERMINAL_LOAD,
    terminalImage,
    terminalArea,
    terminalName,
    locationCategory,
    terminalCountry,
    terminalAddress,
    terminalLatitude,
    terminalLongitude,
    terminalCity,
    terminalState,
    zipCode,
    terminalRadius,
    terminalOpenTime,
    terminalCloseTime,
    fullTime,
    mapLogoFile,
})

// Get terminal details Action
export const getTerminalDetailsAction = (terminalId) => ({
    type: types.API_GET_TERMINAL_DETAILS_LOAD,
    terminalId,
})

// Edit terminal Action
export const editTerminalAction = (
            terminalId,
            terminalImage,
            terminalArea,
            terminalName,
            locationCategory,
            terminalCountry,
            terminalAddress,
            terminalLatitude,
            terminalLongitude,
            terminalCity,
            terminalState,
            zipCode,
            terminalRadius,
            terminalOpenTime,
            terminalCloseTime,
            fullTime,
    mapLogoFile,
            terminalPolygon,
            ) => ({
    type: types.API_EDIT_TERMINAL_LOAD,
    terminalId,
    terminalImage,
    terminalArea,
    terminalName,
    locationCategory,
    terminalCountry,
    terminalAddress,
    terminalLatitude,
    terminalLongitude,
    terminalCity,
    terminalState,
    zipCode,
    terminalRadius,
    terminalOpenTime,
    terminalCloseTime,
    fullTime,
    mapLogoFile,
    terminalPolygon,
})

//  Delete terminal Action
export const deleteTerminalAction = (terminalId) => ({
    type: types.API_DELETE_TERMINAL_LOAD,
    terminalId,
})

//  Import terminal Action
export const importFileAction = (file,fileType) =>({
    type: types.API_IMPORT_FILE_LOAD,
    file,
    fileType,
})

//  Export terminal Action
export const exportFileAction = (fileType) => ({
    type: types.API_EXPORT_FILE_LOAD,
    fileType,
})