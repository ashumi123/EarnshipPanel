// Validation Constant Strings
export const ValidationConstants = {
  email: {
    empty: "Please enter email address.",
    long: "The email address may not be greater than 255 characters.",
    invalid: "Please enter valid email address.",
  },
  password: {
    empty: "Please enter password.",
    short: "Password should be alteast 6 characters long.",
    long: "Password must contain less than 255 characters.",
    noSpace: "Space is not allowed in password.",
    emptyOld: "Please enter old password.",
    emptyNew: "Please enter new password.",
    emptyConfirm: "Please enter confirm password.",
    unmathcedConfirm: "New password and confirm password must be same.",
    shortNew: "New password should be alteast 6 characters long.",
    longNew: "New password must contain less than 255 characters",
  },
  username: {
    empty: "Please enter username.",
    short: "The name must contain at least 1 characters.",
    long: "The name may not be greater than 20 characters.",
    noSpace: "Space is not allowed in username.",
  },
  firstname: {
    empty: "Please enter first name.",
    short: "The first name must contain at least 1 characters.",
    long: "The first name may not be greater than 20 characters.",
    noSpace: "Space is not allowed in first name.",
  },
  lastname: {
    empty: "Please enter last name.",
    short: "The last name must contain at least 1 characters.",
    long: "The last name may not be greater than 20 characters.",
    noSpace: "Space is not allowed in last name.",
  },
  terminalAreaName: {
    empty: "Please enter terminal area name.",
    short: "Terminal area name must contain atleast 2 characters.",
    long: "Terminal area name should not be greater than 30 characters.",
  },
  phoneNumber: {
    empty: "Please enter your Phone Number.",
    invalid: "Please enter valid phone number.",
    long: "The phone number must be between 8 and 15 digits.",
    short: "The phone number must be between 8 and 15 digits.",
  },
  userType: {
    empty: "Please select user type.",
  },
  terminalName: {
    short: "Terminal name should be alteast 2 characters long.",
    long: "Terminal name should not be greater than 50 characters.",
    empty: "Please enter terminal name.",
  },
  terminalCountry: {
    long: "Terminal country name should not be greater than 20 characters.",
    empty: "Please enter terminal country name.",
  },
  terminalAddress: {
    short: "Terminal Address should be alteast 2 characters long.",
    empty: "Please enter terminal address.",
  },
  terminalCity: {
    long: "Terminal city name should not be greater than 20 characters.",
    short: "Terminal City name should be alteast 2 characters long.",
    empty: "Please enter terminal city name.",
  },
  terminalState: {
    long: "State/Province name should not be greater than 20 characters.",
    short: "State/Province name should be alteast 2 characters long.",
    empty: "Please enter state/province name.",
  },
  zipCode: {
    short: "Zip code must contain atleast 5 characters.",
    long: "Zip code should not be greater than 12 characters.",
    empty: "Please enter zip code.",
  },
  terminalOpenTime: {
    empty: "Please enter terminal open time.",
    invalid: "Please enter valid terminal open time",
  },
  terminalCloseTime: {
    empty: "Please enter terminal close time.",
    invalid: "Please enter valid terminal close time",
    diff: "Time difference should be greater than 60 mins.",
    correctPolygon: "Please enter data in correct format for terminal polygon.",
  },
  terminalLatitude: {
    invalid: "Please enter valid terminal latitude.",
    empty: "Please enter terminal latitude.",
  },
  terminalLongitude: {
    invalid: "Please enter valid terminal longitude.",
    empty: "Please enter terminal longitude.",
  },
  terminalRadius: {
    invalid: "Please enter valid terminal radius.",
    empty: "Please enter terminal radius.",
  },
  terminalArea: {
    empty: "Please select terminal area.",
  },
  locationCategory: {
    empty: "Please select location category.",
  },
  terminalImage: {
    empty: "Please select terminal logo.",
  },
  file: {
    empty: "Please upload file.",
    invalid: "Please upload .csv file",
  },
  image: {
    empty: "Please upload image.",
    invalidRatio: "Please upload image of 2:1 ratio.",
  },
  imageName: {
    empty: "Image name should not be empty.",
    invalid: "Please enter valid image name.",
  },
  invalid: {
    email: {
      invalidEmail: "Please enter valid email address.",
      invalidEmailorPassword: "Invalid email address or password.",
      unRegisteredEmail: "Please enter registered email address.",
    },
    password: {
      shortPassword: "Password should be alteast 6 characters long.",
      longPassword: "Password must contain less than 255 characters",
      unmathcedConfirm: "Password and confirm password must be same.",
    },
    name: {
      shortName: "Name should be alteast 2 characters long.",
    },
    contact: {
      incorrectContactLength: "Phone number should be between 8 to 15 digits.",
      incorrectContact: "Please enter valid phone number.",
    },
  },
  empty: {
    emptyEmail: "Please enter email address.",
    emptyOldPassword: "Please enter old password.",
    emptyNewPassword: "Please enter new password.",
    emptyPassword: "Please enter password.",
    emptyConfirm: "Please enter confirm password.",
    emptyContact: "Please enter phone number.",
    emptyName: "Please enter name.",
    subject: "Please enter subject.",
    message: "Please enter message.",
  },
  success: {
    registerSuccess: "You have been registered successfully.",
    verifyRegisteration:
      "You have been registered successfully! Please verify your email address to login into the website.",
    forgotSuccess:
      "Forgot password link has been sent to your registered email address. ",
    updateSuccess: "User details has been updated successfully. ",
    blockSuccess: "User has been blocked successfully.",
    unBlockSuccess: "User has been unblocked successfully.",
    userAddedSuccess: "User has been added successfully.",
    deleteSuccess: "User has been delete successfully.",
    blockedEmail: "Your account has been blocked by admin.",
  },
};

export const appMessages = {
  offline: "Your internet connection appears to be offline. Please try again.",
  // 401 message
  messageStatus401: "The user is not authorized to make the request.",
  messageStatus500: "Something went wrong.",
  resetLinkExpired: "Your password reset link has expired",
  clickBelow: "Click below to generate a new one.",
  wrongPage: "Sorry, we couldn't' find this page",
  tryAgain: "Try again searching or go to",
};

// Application constants
export const appConstants = {
  tagManage:'Tag Management',
  firstName: "First Name",
  lastName: "Last Name",
  emailAddress: "Email Address",
  password: "Password",
  newPassword: "New Password",
  confirmPassword: "Confirm Password",
  submit: "Submit",
  resetPassword: "Reset Password",
  // Timeline
  timelineAlert: "Do you want to open the post in application?",
  openInApp: "Open In App",
  cancel: "Cancel",
  // Login Page
  adminLogin: "Admin Login",
  forgotLink: "Forgot password?",
  login: "Login",
  // Forgot Password
  forgotPassword: "Forgot Password",
  sendEmail: "Send reset password email",
  headerTitle: {
    login: "Earnship | Login",
    timeline: "Earnship | Timeline Post",
    forgotPassword: "Earnship | Forgot Password",
    resetPassword: "Earnship | Reset Password",
    dashboard: "Earnship | Dashboard",
    userManagement: "Earnship | User Management",
    userDetails: "Earnship | User Details",
    editUserDetails: "Earnship | Edit User Details",
    savedLocations: "Earnship | Saved Locations",
    terminalAreaListing: "Earnship | Terminal Area Listing",
    addTerminalArea: "Earnship | Add Terminal Area",
    editTerminalArea: "Earnship | Edit Terminal Area",
    importTerminalArea: "Earnship | Import Terminal Area",
    terminalListing: "Earnship | Terminal Listing",
    addTerminal: "Earnship | Add Terminal",
    editTerminal: "Earnship | Edit Terminal",
    importTerminal: "Earnship | Import Terminal",
    managePost: "Earnship | Manage Post",
    postDetails: "Earnship | Post Details",
    reportPost: "Earnship | Report post",
    imageListing: "Earnship | Image Management",
    addImage: "Earnship | Add Image",
  },
  tooltip: {
    uploadImage: "Click here to upload terminal image.",
    changeImage: "Click here to change terminal image.",
    uploadMapLogo: "Click here to upload map logo.",
    changeMapLogo: "Click here to change map logo.",
    uploadImage: "Click here to upload image.",
    changeImage: "Click here to change image.",
    uploadFile: "Click here to upload file.",
    changeFile: "Click here to change file.",
  },
  // Dashboard
  dashboard: "Dashboard",
  terminalManagement: "Post Management",
  gotToForogot: "Forgot Password",
  home: "Home",
  // ReportPost
  date: "Date",
  time: "Time",
  reportPost: "Report Post",
  alert: "Alert",
  postDetails: "Post Details",
  videoImage: "Video/Image",
  postDescription: "Post Description",
  thumbsUpCount: "Thumbs Up Count",
  thumbsDownCount: "Thumbs Down Count",
  reportDescription: "Report Description",
  revoke: "Revoke",
  dashboard: "Dashboard",
  dashboard: "Dashboard",
  dashboard: "Dashboard",
  // User Management
  userManagement: "User Management",
  editUserDetails: "Edit User Details",
  userDetails: "User Details",
  sr: "Sr. No.",
  username: "User Name",
  reportCount: "Report Count",
  phoneNumber: "Phone Number",
  userType: "User Type",
  selectType: "Select Type",
  driver: "Driver",
  ownerOperator: "Owner Operator",
  airCargoCarrier: "Air Cargo Carrier",
  company: "Company",
  exporter: "Exporter",
  freightBroker: "Freight Broker",
  importer: "Importer",
  shipper: "Shipper",
  trucking: "Trucking",
  warehouse: "Warehouse",
  terminalId: "Terminal ID",
  terminalName: "Terminal Name",
  latitude: "Latitude",
  longitude: "Longitude",
  type: "Type",
  dateAndTime: "Date And Time",
  action: "Action",
  view: "View",
  edit: "Edit",
  delete: "Delete",
  block: "Block",
  unblock: "Unblock",
  update: "Update",
  savedLocations: "Saved Locations",
  viewSavedLocations: "View Saved Locations",
  enter: "Enter",
  exit: "Exit",
  // Image management
  imageManagement: "Image Management",
  addImage: "Add Image",
  imageName: "Image Name",
  uploadImage: "Upload Image",
  image: "Image",
  // Terminal Area Name
  terminalAreaName: "Terminal Area Name",
  enterTerminalAreaName: "Enter Terminal Area Name",
  confirmDeletePost: "Are you sure you want to delete post?",
  confirmDeleteImage: "Are you sure you want to delete image?",
  confirmDeleteTerminal: "Are you sure you want to delete terminal?",
  confirmDeleteTerminalArea: "Are you sure you want to delete terminal area?",
  baseURL: "http://192.168.43.6:4000/", //local
 
  // Terminal Report Post
  terminalListing: "Terminal Listing",
  managePost: "Manage Post",
  radarManagement: "User Event Management",
  userID: "User ID",
  terminalID: "Terminal ID",
  terminalName: "Terminal Name",
  createdAt: "Created At",
  terminalIdFilter: "Enter Terminal ID",
  userIdFilter: "Enter User ID",
};

// Api Action type constants
export const apiConstants = {
  // Clear state
  CLEAR_STATE: "CLEAR_STATE",
  HANDLE_SIDEBAR_NAVIGATION_STATE: "HANDLE_SIDEBAR_NAVIGATION_STATE",
  HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE: "HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE",

  // ************ AUTHENTICATION ************
  // Authentications types
  API_AUTHENTICATION_FAILED: "API_AUTHENTICATION_FAILED",
  API_AUTHENTICATION_ERROR: "API_AUTHENTICATION_ERROR",

  // Login
  API_LOGIN_LOAD: "API_LOGIN_LOAD",
  API_LOGIN_SUCCESS: "API_LOGIN_SUCCESS",

  // Forgot Password
  API_FORGOT_PASSWORD_LOAD: "API_FORGOT_PASSWORD_LOAD",
  API_FORGOT_PASSWORD_SUCCESS: "API_FORGOT_PASSWORD_SUCCESS",

  // Reset Password
  API_RESET_PASSWORD_LOAD: "API_RESET_PASSWORD_LOAD",
  API_RESET_PASSWORD_SUCCESS: "API_RESET_PASSWORD_SUCCESS",

  // Reset Password
  API_CHECK_RESET_PASSWORD_LOAD: "API_CHECK_RESET_PASSWORD_LOAD",
  API_CHECK_RESET_PASSWORD_SUCCESS: "API_CHECK_RESET_PASSWORD_SUCCESS",

  // ************ USER MANAGEMENT ************
  // User Management
  API_USER_MANAGEMENT_FAILED: "API_USER_MANAGEMENT_FAILED",
  API_USER_MANAGEMENT_ERROR: "API_USER_MANAGEMENT_ERROR",

  //Get User List
  API_GET_USER_LIST_LOAD: "API_GET_USER_LIST_LOAD",
  API_GET_USER_LIST_SUCCESS: "API_GET_USER_LIST_SUCCESS",

  //Get User Details
  API_GET_USER_DETAILS_LOAD: "API_GET_USER_DETAILS_LOAD",
  API_GET_USER_DETAILS_SUCCESS: "API_GET_USER_DETAILS_SUCCESS",

  //Edit User Details
  API_EDIT_USER_DETAILS_LOAD: "API_EDIT_USER_DETAILS_LOAD",
  API_EDIT_USER_DETAILS_SUCCESS: "API_EDIT_USER_DETAILS_SUCCESS",

  //Block User
  API_BLOCK_USER_LOAD: "API_BLOCK_USER_LOAD",
  API_BLOCK_USER_SUCCESS: "API_BLOCK_USER_SUCCESS",

  // ************ TERMINAL AREA MANAGEMENT ************
  // Terminal Area Management Fail
  API_TERMINAL_AREA_MANAGEMENT_FAILED: "API_TERMINAL_AREA_MANAGEMENT_FAILED",
  API_TERMINAL_AREA_MANAGEMENT_ERROR: "API_TERMINAL_AREA_MANAGEMENT_ERROR",

  //Get Terminal Area List
  API_GET_TERMINAL_AREA_LIST_LOAD: "API_GET_TERMINAL_AREA_LIST_LOAD",
  API_GET_TERMINAL_AREA_LIST_SUCCESS: "API_GET_TERMINAL_AREA_LIST_SUCCESS",

  //Get Terminal Area Details
  API_GET_TERMINAL_AREA_DETAILS_LOAD: "API_GET_TERMINAL_AREA_DETAILS_LOAD",
  API_GET_TERMINAL_AREA_DETAILS_SUCCESS:
    "API_GET_TERMINAL_AREA_DETAILS_SUCCESS",

  //Add Terminal Area
  API_ADD_TERMINAL_AREA_LOAD: "API_ADD_TERMINAL_AREA_LOAD",
  API_ADD_TERMINAL_AREA_SUCCESS: "API_ADD_TERMINAL_AREA_SUCCESS",

  //Edit Terminal Area
  API_EDIT_TERMINAL_AREA_LOAD: "API_EDIT_TERMINAL_AREA_LOAD",
  API_EDIT_TERMINAL_AREA_SUCCESS: "API_EDIT_TERMINAL_AREA_SUCCESS",

  //Delete Terminal Area
  API_DELETE_TERMINAL_AREA_LOAD: "API_DELETE_TERMINAL_AREA_LOAD",
  API_DELETE_TERMINAL_AREA_SUCCESS: "API_DELETE_TERMINAL_AREA_SUCCESS",

  // ************ TERMINAL MANAGEMENT ************

  // Terminal Management Fail
  API_TERMINAL_MANAGEMENT_FAILED: "API_TERMINAL_MANAGEMENT_FAILED",
  API_TERMINAL_MANAGEMENT_ERROR: "API_TERMINAL_MANAGEMENT_ERROR",

  //Get Teminal List
  API_GET_TERMINAL_LIST_LOAD: "API_GET_TERMINAL_LIST_LOAD",
  API_GET_TERMINAL_LIST_SUCCESS: "API_GET_TERMINAL_LIST_SUCCESS",

  //Add Teminal
  API_ADD_TERMINAL_LOAD: "API_ADD_TERMINAL_LOAD",
  API_ADD_TERMINAL_SUCCESS: "API_ADD_TERMINAL_SUCCESS",

  //Get Teminal Details
  API_GET_TERMINAL_DETAILS_LOAD: "API_GET_TERMINAL_DETAILS_LOAD",
  API_GET_TERMINAL_DETAILS_SUCCESS: "API_GET_TERMINAL_DETAILS_SUCCESS",

  //Edit Teminal
  API_EDIT_TERMINAL_LOAD: "API_EDIT_TERMINAL_LOAD",
  API_EDIT_TERMINAL_SUCCESS: "API_EDIT_TERMINAL_SUCCESS",

  //Delete Teminal
  API_DELETE_TERMINAL_LOAD: "API_DELETE_TERMINAL_LOAD",
  API_DELETE_TERMINAL_SUCCESS: "API_DELETE_TERMINAL_SUCCESS",

  // ************ IMPORT / EXPORT FILE************

  //Import Teminal
  API_IMPORT_FILE_LOAD: "API_IMPORT_FILE_LOAD",
  API_IMPORT_FILE_SUCCESS: "API_IMPORT_FILE_SUCCESS",

  //Export Terminal files
  API_EXPORT_FILE_LOAD: "API_EXPORT_FILE_LOAD",
  API_EXPORT_FILE_SUCCESS: "API_EXPORT_FILE_SUCCESS",

  // ************ REPORT POST MANAGEMENT ************

  // Report Post Fail
  API_REPORT_POST_FAILED: "API_REPORT_POST_FAILED",
  API_REPORT_POST_ERROR: "API_REPORT_POST_ERROR",

  //Get Report Post List
  API_GET_REPORT_POST_LIST_LOAD: "API_GET_REPORT_POST_LIST_LOAD",
  API_GET_REPORT_POST_LIST_SUCCESS: "API_GET_REPORT_POST_LIST_SUCCESS",

  //Get Report Post Details
  API_GET_REPORT_POST_DETAILS_LOAD: "API_GET_REPORT_POST_DETAILS_LOAD",
  API_GET_REPORT_POST_DETAILS_SUCCESS: "API_GET_REPORT_POST_DETAILS_SUCCESS",

  //Delete Report Post
  API_DELETE_REPORT_POST_LOAD: "API_DELETE_REPORT_POST_LOAD",
  API_DELETE_REPORT_POST_SUCCESS: "API_DELETE_REPORT_POST_SUCCESS",

  //Revoke Report Post
  API_REVOKE_REPORT_POST_LOAD: "API_REVOKE_REPORT_POST_LOAD",
  API_REVOKE_REPORT_POST_SUCCESS: "API_REVOKE_REPORT_POST_SUCCESS",

  // ************ TERMINAL REPORT POST MANAGEMENT ************

  // Terminal Report Post Fail
  API_TERMINAL_REPORT_POST_FAILED: "API_TERMINAL_REPORT_POST_FAILED",
  API_TERMINAL_REPORT_POST_ERROR: "API_TERMINAL_REPORT_POST_ERROR",

  //Get Terminal Report Post List
  API_GET_TERMINAL_REPORT_POST_LIST_LOAD:
    "API_GET_TERMINAL_REPORT_POST_LIST_LOAD",
  API_GET_TERMINAL_REPORT_POST_LIST_SUCCESS:
    "API_GET_TERMINAL_REPORT_POST_LIST_SUCCESS",

  //Get Terminal Report Post Details
  API_GET_TERMINAL_REPORT_POST_DETAILS_LOAD:
    "API_GET_TERMINAL_REPORT_POST_DETAILS_LOAD",
  API_GET_TERMINAL_REPORT_POST_DETAILS_SUCCESS:
    "API_GET_TERMINAL_REPORT_POST_DETAILS_SUCCESS",

  //Delete Terminal Report Post
  API_DELETE_TERMINAL_REPORT_POST_LOAD: "API_DELETE_TERMINAL_REPORT_POST_LOAD",
  API_DELETE_TERMINAL_REPORT_POST_SUCCESS:
    "API_DELETE_TERMINAL_REPORT_POST_SUCCESS",

  // ************ IMAGE MANAGEMENT ************

  // Image Fail
  API_IMAGE_MANAGEMENT_FAILED: "API_IMAGE_MANAGEMENT_FAILED",
  API_IMAGE_MANAGEMENT_ERROR: "API_IMAGE_MANAGEMENT_ERROR",

  //Get Image List
  API_GET_IMAGE_LIST_LOAD: "API_GET_IMAGE_LIST_LOAD",
  API_GET_IMAGE_LIST_SUCCESS: "API_GET_IMAGE_LIST_SUCCESS",

  //Get Image Details
  API_ADD_IMAGE_LOAD: "API_ADD_IMAGE_LOAD",
  API_ADD_IMAGE_SUCCESS: "API_ADD_IMAGE_SUCCESS",

  //Delete Image
  API_DELETE_IMAGE_LOAD: "API_DELETE_IMAGE_LOAD",
  API_DELETE_IMAGE_SUCCESS: "API_DELETE_IMAGE_SUCCESS",

  // ************ SAVE USER LOCATION ************

  // Terminal Report Post Fail
  API_SAVED_USER_LOCATIONS_FAILED: "API_SAVED_USER_LOCATIONS_FAILED",
  API_SAVED_USER_LOCATIONS_ERROR: "API_SAVED_USER_LOCATIONS_ERROR",

  //Get Terminal Report Post List
  API_SAVED_USER_LOCATIONS_LOAD: "API_SAVED_USER_LOCATIONS_LOAD",
  API_SAVED_USER_LOCATIONS_SUCCESS: "API_SAVED_USER_LOCATIONS_SUCCESS",

  // ************ TIMELINE DETAILS ************

  //Get Timeline Details
  API_TIMELINE_DETAILS_LOAD: "API_TIMELINE_DETAILS_LOAD",
  API_TIMELINE_DETAILS_SUCCESS: "API_TIMELINE_DETAILS_SUCCESS",

  // ************ GEOFENCING ************
  // Geofencing Fail
  API_GEOFENCING_FAILED: "API_GEOFENCING_FAILED",
  API_GEOFENCING_ERROR: "API_GEOFENCING_ERROR",

  //Get Geofencing Details
  API_POST_GEOFENCING_LOAD: "API_POST_GEOFENCING_LOAD",
  API_POST_GEOFENCING_SUCCESS: "API_POST_GEOFENCING_SUCCESS",

  //radar management

  //radar management fail
  API_RADAR_MANAGEMENT_FAILED: "API_RADAR_MANAGEMENT_FAILED",
  API_RADAR_MANAGEMENT_ERROR: "API_RADAR_MANAGEMENT_ERROR",

  //get radar entry/exit list
  API_RADAR_ENTRY_EXIT_LOAD: "API_RADAR_ENTRY_EXIT_LOAD",
  API_RADAR_ENTRY_EXIT_SUCCESS: "API_RADAR_ENTRY_EXIT_SUCCESS",

  //get radar export list
  API_RADAR_EXPORT_LOAD: "API_RADAR_EXPORT_LOAD",
  API_RADAR_EXPORT_SUCCESS: "API_RADAR_EXPORT_SUCCESS",
};
