export default {
     // *********************** AUTHENTICATION **************************
    // Set Auth Token
    setAuthToken(token){
        localStorage.setItem("token", token);
    },

    // get Auth Token
    getAuthToken(){
        return localStorage.token
    },

    // Delete Token
    removeToken() {
        localStorage.removeItem("token");
    },
// *********************** USER ID **************************
     // Set User ID
    setUserId(id){
        localStorage.setItem("userId", id);
    },
     // Set notify
     setNotify(value){
        localStorage.setItem("notify", value);
    },
     // Set ads
    setAds(value){
        localStorage.setItem("ads", value);
    },

    //GET NOTIFY
    getNotify(){
        return localStorage.notify
    },
    //GET ads
    getAds(){
        return localStorage.ads
    },

    // get User ID
    getUserId(){
        return localStorage.userId
    },

    // Delete  User ID
    removeUserId() {
        localStorage.removeItem("userId");
    },


    // ************************ SIDEBAR ROUTE INDEX *************************
    //Set Sidebar Selected Item Route Index
    setSidebarItemIndex(index){
        localStorage.setItem("sidebarRouteIndex", index);
    },

    // get Sidebar Selected Item Route Index
    getSidebarItemIndex(){
        return localStorage.sidebarRouteIndex
    },

    // Delete Sidebar Selected Item Route Index
    removeSidebarItemIndex() {
        localStorage.removeItem("sidebarRouteIndex");
    },

    //Set Sidebar Selected Item Route Index
    setSidebarNestedItemIndex(index){
        localStorage.setItem("sidebarNestedRouteIndex", index);
    },

    // get Sidebar Selected Item Route Index
    getSidebarNestedItemIndex(){
        return localStorage.sidebarNestedRouteIndex
    },

    // Delete Sidebar Selected Item Route Index
    removeSidebarNestedItemIndex() {
        localStorage.removeItem("sidebarNestedRouteIndex");
    }

}
