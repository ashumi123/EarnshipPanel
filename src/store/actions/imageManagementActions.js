import { apiConstants as types } from '../../themes/constants'

// Get terminal area Action
export const getImageListAction = (search, offset, limit, sortBy, order) => ({
    type: types.API_GET_IMAGE_LIST_LOAD,
    search, 
    offset, 
    limit, 
    sortBy, 
    order,
})

// Add terminal area Action
export const addCompetion = (imageName) => ({
    type: types.API_ADD_IMAGE_LOAD,
    imageName,
    // image,
})

//  Delete terminal area Action
export const deleteImageAction = (imageId) => ({
    type: types.API_DELETE_IMAGE_LOAD,
    imageId,
})
