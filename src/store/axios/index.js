import http from "./apiKit";
import { appMessages } from "../../themes/constants";
import cl from "../../utils/cl";
import history from "../../utils/history";
import { convertArrayToCSV } from "convert-array-to-csv";

const logout = () => {
  localStorage.clear();
  history.push("/");
};

export default {
  // ********** AUTHENTICATION **********
  // Login Api Call
  login(email, password) {
    let data = JSON.stringify({
      email: email,
      password: password,
      // type: "admin",
    });
    return Method.POST("user/login/admin", data);
  },
  verifyConsult(val, id) {
    let data = JSON.stringify({
      "consultId":id,
    "status":val
      // type: "admin",
    });
    return Method.POST("user/verify", data);
  },

  // Forgot Password Api Call
  forgotPassword(email) {
    let data = JSON.stringify({
      email: email,
      type: "admin",
    });
    return Method.POST("user/forgot", data);
  },

  // Reset Password Api call
  resetPassword(newPassword, query) {
    let data = JSON.stringify({
      password: newPassword,
    });
    return Method.POST(`user/reset${query}`, data);
  },

  // Check reset Password
  checkResetPassword(id) {
    let data = JSON.stringify({
      id: id,
    });
    return Method.POST(`user/checkPassword`, data);
  },
  // ********** USER MANAGEMENT **********
  // Get user list
  async getUserList(search, offset, limit, sortBy, order,type) {
    search = await searchFilter(search);
    let url = `user/list`
    // ?search=${search}&offset=${offset}&limit=${limit}`;
    // if (order != null) {
    //   url += `&order=${order}&sort_by=${sortBy}`;
    // }
    let Body
    
     Body=JSON.stringify({
      
        "offset":offset,
        "limit":limit,
        "search":search,
        "sortBy":sortBy,
        "order":order,
        "type":type
          
    })
    return Method.POST(url,Body)
    // return Method.GET(url);
  },
  // Get user details
  getUserDetails(userId) {
    return Method.GET(`user/details?user_id=${userId}`);
  },
  //notification notificationGet
  notificationGet() {
    return Method.GET(`user/settings/notification`);
  },
  //ads
  adsGet() {
    return Method.GET(`user/settings/ads`);
  },
  // Edit user details
  editUserDetails(
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    userType
  ) {
    let data = JSON.stringify({
      user_id: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone_number: phoneNumber,
      country_code: countryCode,
      user_type: userType,
    });
    return Method.PUT("user/edit", data);
  },
  // Block user
  blockUser(userId, isBlocked) {
    let data = JSON.stringify({
      userId: userId,
      status: isBlocked,
    });
    return Method.POST("user/block", data);
  },

  // ********** TERMINAL MANAGEMENT **********
  async getTerminalList(search, offset, limit, sortBy, order) {
    search = await searchFilter(search);
    let url = `terminal/list?search=${search}&offset=${offset}&limit=${limit}`;
    if (order) {
      url += `&order=${order}&sort_by=${sortBy}`;
    }
    return Method.GET(url);
  },

  addTerminal(
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
    mapLogoFile
  ) {
    let formData = new FormData();
    if (terminalImage !== null) {
      formData.append("terminal_logo", terminalImage);
    }
    formData.append("terminal_name", terminalName);
    formData.append("terminal_category", locationCategory);
    formData.append("region_id", terminalArea);
    formData.append("country", terminalCountry);
    formData.append("terminal_location", terminalAddress);
    formData.append("city", terminalCity);
    formData.append("state_province", terminalState);
    formData.append("zipcode", zipCode);
    formData.append("latitude", terminalLatitude);
    formData.append("longitude", terminalLongitude);
    formData.append("open_time", terminalOpenTime);
    formData.append("close_time", terminalCloseTime);
    formData.append("radius", terminalRadius);
    formData.append("is24Available", fullTime);
    formData.append("map_logo", mapLogoFile);
    return Method.POST("terminal/add", formData);
  },

  getTerminalDetails(terminalId) {
    return Method.GET(`terminal/details/${terminalId}`);
  },

  editTerminal(
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
    terminalPolygon
  ) {
    let formData = new FormData();
    if (terminalImage) {
      formData.append("terminal_logo", terminalImage);
    }
    formData.append("id", terminalId);
    formData.append("terminal_name", terminalName);
    formData.append("terminal_category", locationCategory);
    formData.append("region_id", terminalArea);
    formData.append("country", terminalCountry);
    formData.append("terminal_location", terminalAddress);
    formData.append("city", terminalCity);
    formData.append("state_province", terminalState);
    formData.append("zipcode", zipCode);
    formData.append("latitude", terminalLatitude);
    formData.append("longitude", terminalLongitude);
    formData.append("open_time", terminalOpenTime);
    formData.append("close_time", terminalCloseTime);
    formData.append("radius", terminalRadius);
    formData.append("is24Available", fullTime);
    formData.append("map_logo", mapLogoFile);
    if (terminalPolygon) {
      formData.append("polygon_area", terminalPolygon);
    }
    return Method.PUT("terminal/edit", formData);
  },

  deleteTerminal(terminalId) {
    return Method.DELETE(`terminal/delete/${terminalId}`);
  },

  importFile(file, fileType) {
    let formData = new FormData();
    formData.append("excelFile", file);

    if (fileType === "terminal") {
      return Method.POST("terminal/import", formData);
    } else if (fileType === "terminalArea") {
      return Method.POST("region/import", formData);
    }
  },
  exportFile(fileType) {
    if (fileType === "terminal") {
      return Method.GETDATA("terminal/export", "Terminals");
    } else if (fileType === "terminalArea") {
      return Method.GETDATA("region/export", "Terminal Area");
    }
  },
  // ********** TERMINAL AREA MANAGEMENT **********
  async getTerminalAreaList(search, offset, limit, sortBy, order) {
    search = await searchFilter(search);
    let url = `region/list`;
    if (offset !== null) {
      url += `?search=${search}&offset=${offset}&limit=${limit}&sort_by=${sortBy}`;
    }
    if (order) {
      url += `&order=${order}`;
    }
    return Method.GET(url);
  },

  addTerminalArea(terminalAreaName) {
    let data = JSON.stringify({
      region_name: terminalAreaName,
    });
    return Method.POST("region/add", data);
  },

  getTerminalAreaDetails(terminalAreaId) {
    return Method.GET(`region/details/${terminalAreaId}`);
  },

  editTerminalArea(terminalAreaId, terminalAreaName) {
    let data = JSON.stringify({
      id: terminalAreaId,
      region_name: terminalAreaName,
    });
    return Method.PUT("/region/edit", data);
  },

  deleteTerminalArea(terminalAreaId) {
    return Method.DELETE(`region/delete/${terminalAreaId}`);
  },

  // ********** REPORT POST **********
  async getReportPostList(search, offset, limit, sortBy, order) {
    search = await searchFilter(search);
    let url = `post/listReported?search=${search}&offset=${offset}&limit=${limit}`;
    if (order) {
      url += `&order=${order}&sort_by=${sortBy}`;
    }
    return Method.GET(url);
  },

  getReportPostDetails(reportId) {
    return Method.GET(`post/reportDetails/${reportId}`);
  },

  revokeReportPost(reportPostId) {
    return Method.DELETE(`post/revoke/${reportPostId}`);
  },

  deleteReportPost(postId) {
    return Method.DELETE(`post/delete/${postId}`);
  },

  // ********** TERMINAL REPORT POST **********
  async getTerminalReportPostList(
    search,
    offset,
    limit,
    sortBy,
    order
  ) {
    search = await searchFilter(search);
    let url = `post/list`;
    let body
    
    body=JSON.stringify({
     
       "offset":offset,
       "limit":limit,
       "search":search,
       "sortBy":sortBy,
       "order":order
         
   })
    
    return Method.POST(url,body);
  },

  getTerminalReportPostDetails(postId) {
    return Method.GET(`post/details/${postId}`);
  },

  deleteTerminalReportPost(postId) {
    return Method.DELETE(`post/delete/${postId}`);
  },

  // ********** SAVED USER LOCATIONS **********
  async savedUserLocations(search, offset, limit, sortBy, order, userId) {
    // let url = `location/save?offset=${offset}&limit=${limit}`
    search = await searchFilter(search);
    let url = `location/save?&search=${search}&offset=${offset}&limit=${limit}`;
    if (order) {
      url += `&order=${order}&sort_by=${sortBy}`;
    }
    url += `&user_id=${userId}`;
    return Method.GET(url);
  },
  // ********** Image Management POST **********
  async getImageList(search, offset, limit, sortBy, order) {
    search = await searchFilter(search);
    let url = `competition/list`;
    
   let body=JSON.stringify({
     
      "offset":offset,
      "limit":limit,
      "search":search,
      "sortBy":sortBy,
      "order":order
        
  })

    return Method.POST(url,body);
  },

  addImage(imageName) {
    let url = `competition/add`;
    let formData = new FormData();
    formData.append("name", imageName);
    // formData.append("image", image);
    return Method.POST(url, formData);
  },

  deleteImage(imageId) {
    return Method.DELETE(`image/delete/${imageId}`);
  },

  timelineDetails(id, postType) {
    let url = `timeline/details/${id}?type=${postType}`;
    return Method.GET(url);
  },
  // Get radar entry/exit list
  async getRadarEntryExitList(
    search,
    offset,
    limit,
    sortBy,
    order
  ) {
    search = await searchFilter(search);
    let url = `hashtag/list`;
    
   let body=JSON.stringify({
     
      "offset":offset,
      "limit":limit,
      "search":search,
      "sortBy":sortBy,
      "order":order
        
  })

    return Method.POST(url,body);
  },
  // Get radar export list
  getRadarExportList() {
    // let url = `user/list?search=${search}&offset=${offset}&limit=${limit}`
    // if(order != null){
    //   url +=`&order=${order}&sort_by=${sortBy}`
    // }
    //   return Method.GET(url)
  },
};

const searchFilter = (search) => {
  const t = search;
  const g = t.includes("#");

  if (g) {
    return search.replaceAll("#", "!");
  } else {
    return search;
  }
};

const Method = {
  // Get Method
  async GET(url) {
    cl("input values in GET Method", url);
    return await new Promise((resolve, reject) => {
      http
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside get", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Post Method
  async POST(url, body) {
    cl("input values in POST Method", url, body);
    return await new Promise((resolve, reject) => {
      http
        .post(url, body, {
          headers: {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside post", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Put Method
  async PUT(url, body) {
    cl(" input values in PUT Method", url, body);
    return await new Promise((resolve, reject) => {
      http
        .put(url, body, {
          headers: {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside put", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err?.response?.data?.error?.message,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Delete Method
  async DELETE(url) {
    return await new Promise((resolve, reject) => {
      http
        .delete(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          }
          // else if (result.status == 212) {
          //   return resolve({
          //     status: 4,
          //     result: result
          //   });
          // }
          else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside delete", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  GETDATA(url, fileName) {
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          // responseType: 'arraybuffer',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/csv",
          },
        })
        .then((result) => {
          if (result.status === 200) {
            const terminalAreaHeader = [
              "Terminal Area ID",
              "Terminal Area Name",
            ];
            const terminalHeader = [
              "Terminal ID",
              "Terminal Area ID",
              "Radar External ID",
              "Terminal Image Name",
              "Terminal Name",
              "Terminal Location",
              "Terminal Category",
              "Terminal Country",
              "Terminal City",
              "State/Province Name",
              "Zip Code",
              "Latitude",
              "Longitude",
              "Radius",
              "Open Time",
              "Close Time",
              "24 Hours Availability",
              "Map Logo Name",
            ];
            let header =
              fileName === "Terminal Area"
                ? terminalAreaHeader
                : terminalHeader;
            console.log(fileName, header);
            const csvFromArrayOfObjects = convertArrayToCSV(result.data, {
              header,
            });
            // CsvDataService.exportToCsv(`${fileName}.csv`, result.data)
            const url = window.URL.createObjectURL(
              new Blob([csvFromArrayOfObjects])
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName + ".csv"); //or any other extension
            document.body.appendChild(link);
            link.click();
            // const url = window.URL.createObjectURL(new Blob([result.data]));
            //   const link = document.createElement('a');
            //   link.href = url;
            //   link.setAttribute('download', fileName + '.csv'); //or any other extension
            //   document.body.appendChild(link);
            //   link.click();
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside getdata", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },
};
