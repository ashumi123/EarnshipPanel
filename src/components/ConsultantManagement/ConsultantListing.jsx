import React, { useState, useEffect, useRef } from "react";
// Navigation
import { useHistory, useLocation } from "react-router-dom";
// Styles
import "antd/dist/antd.css";
import "../dashboard.scss";
import { Modal } from "antd";
import { Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// Custom components
import DashboardLayout from "../../layouts/dashboardLayout";
import {
  AppBar,
  Button,
  PaginationBar,
  Navbar,
  NavbarSearch,
  Table,
  InputField,
} from "../../customComponents";
// Constants
import { AppImages } from "../../themes/appImages";
import { Colors } from "../../themes/colors";
import { appConstants } from "../../themes/constants";
// utils methods
import cl from "../../utils/cl";
import { useStyles } from "../../styles";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  handleNavigationStateAction,
  getUserListAction,
} from "../../store/actions";
import { 
  VerifyAction

 } from '../../store/actions/userManagementActions'
import moment from "moment";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
const data=[
    {
   _id:1,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:2,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:3,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:4,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
]

var userIdFilterArray = [];
var terminalIdFilterArray = [];
export const RadarEntry = () => {
  const styleProps = { searchable: true };
  // Hooks declarations
  const classes = useStyles(styleProps);
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [filterShow, setFilterShow] = useState(false);
  const [userIdFilterState, setUserIdFilterState] = useState("");
  const [terminalIdFilterState, setTerminalIdFilterState] = useState("");
  const values = {
    userIdFilter: userIdFilterState,
    terminalIdFilter: terminalIdFilterState,
  };
  const validationSchema = Yup.object().shape({
    userIdFilter: Yup.string()
      // .max(30, ValidationConstants.terminalAreaName.long)
      // .required("Please enter ")
      // .test("trim", "min", (value) => value?.trim()?.length > 0)
      // .test("trim", "dsgd", (value) => value?.trim()?.length > 5),
      .matches(/^[A-Za-z0-9, ]*$/, "Special characters not allowed except ','")
      .matches(/^(\S+$)/, "Space is not allowed"),
    terminalIdFilter: Yup.string()
      .matches(/^[A-Za-z0-9, ]*$/, "Special characters not allowed except ','")
      .matches(/^(\S+$)/, "Space is not allowed"),
  });
  const userManagementState= useSelector(state => state.userManagementReducer)
   
  const {isLoading,userListingResult,currentPage} = userManagementState
  const {paging,list} = userListingResult
 
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  // Global state initialization
  // local state initialization
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState(null);

  // Method to fetch listing
  const fetchDataListing = (search, offset, limit, sortBy, order) => {
    dispatch(getUserListAction(search,offset,limit,sortBy,order,'consult'))   

  };

  //lifecycle hook
  useEffect(() => {
    userIdFilterArray = [];
    terminalIdFilterArray = [];
    document.title = appConstants.headerTitle.userManagement;
    dispatch(handleNavigationStateAction(4, false));

    fetchDataListing(search, offset, limit, sortBy, order);
  }, []);

  //Callback method to handle sorting
  const handleChange = async (pagination, filters, sorter) => {
    //To fetch listing in ascending order
    if (sorter.order == "ascend") {
      setOrder(1);
      setSortBy(sorter.columnKey);
      fetchDataListing(search, offset, limit, sorter.columnKey, 1);
    } //To fetch listing in descending order
    else if (sorter.order === "descend") {
      setOrder(-1);
      setSortBy(sorter.columnKey);
      fetchDataListing(search, offset, limit, sorter.columnKey, -1);
    } //To fetch listing in normal order
    else {
      setOrder(null);
      setSortBy("");
      fetchDataListing(search, offset, limit, "", null);
    }
  };

  // Callback method to handle page chage
  const handlePaginationChange = (e, page) => {
    const offsetTo = (page - 1) * limit;
    setOffset(offsetTo);
    fetchDataListing(search, offsetTo, limit, sortBy, order);
  };

  // Callback method to handle searching key
  const handleSearching = async (e) => {
    console.log("searxch value", e.target.value);

    setSearch(e.target.value);

    // dispatch(getUserListAction(e.target.value,0,limit,"",null))
    fetchDataListing(e.target.value, 0, limit, "", null);
  };
  const handleFormSubmit = (values, { setSubmitting }) => {
    setUserIdFilterState(values.userIdFilter);
    setTerminalIdFilterState(values.terminalIdFilter);
    setFilterShow(false);
    const userIdArray = values.userIdFilter.split(",");
    userIdFilterArray = values.userIdFilter.length > 0 ? userIdArray : [];
    const terminalIdArray = values.terminalIdFilter.split(",");
    terminalIdFilterArray =
      values.terminalIdFilter.length > 0 ? terminalIdArray : [];
    fetchDataListing(search, 0, limit, sortBy, order);
    // setSubmitting(false)
    // dispatch(addTerminalAreaAction(values.terminalAreaName.trim()))
  };
  const handleFormReset = () => {
    setUserIdFilterState("");
    setTerminalIdFilterState("");
    setFilterShow(false);
    userIdFilterArray = [];
    terminalIdFilterArray = [];
    fetchDataListing(search, 0, limit, sortBy, order);

    // setSubmitting(false)
    // dispatch(addTerminalAreaAction(values.terminalAreaName.trim()))
  };

      const columns = [
        {
            key: 'sr',
            title: appConstants.sr,
            dataIndex: '',
            render: (text,record,index) => (index + 1 ),
            ellipsis: false,
            width:100,
        },
        {
            key: 'name',
            title: 'Consultant Name',
            dataIndex: 'name',
            ellipsis: false,
            sorter:true,
        },
        {
            key: 'email',
            title: appConstants.emailAddress,
            dataIndex: 'email',
            ellipsis: false,
            render: (text, record) => (
                        <div className={classes.emailCell}>
                        {text}
                        </div>
                    ),
            sorter:true,
        },
        
        {
            key: 'phone_number',
            title: appConstants.phoneNumber,
            dataIndex: 'mobileNumber',
            ellipsis: false,
            sorter:true,
        },
        {
            key: 'x',
            title: appConstants.action,
            dataIndex: '',
            align:'center',
            render: (record) => {
                
                return (
                  record.isVerified==false?
                  
                    <Grid className={classes.buttons}>
                        <Button disabled={false} title={'Accept'}  
                        onClick={()=>{dispatch(VerifyAction(true,record._id))}}
                        />
                        
                        <Button backgroundColor='red'  disabled={false} title={'Reject'} 
                        onClick={()=>{dispatch(VerifyAction(false,record._id))}}
 
                        />
                    </Grid>
                    :
                    <Grid className={classes.buttons}>
                        <Button backgroundColor='lightgreen' disabled={true} title={'Verified'}  
                        />
                        
                    </Grid>
                )
            },
        },
    ];

  return (
    <DashboardLayout>
      <AppBar
        breadcrumbs={[{ route: "/Consultant", name: 'Consultant Management' }]}
      />
      <Modal
        // onOk={handelOK}
        onCancel={() => setFilterShow(false)}
        visible={filterShow}
        // className="new-modal"
        footer={null}
        // width="40%"
        // style={{height: "450px", width: "1000px",alignItems:"center",justifyContent:"center"}}
      >
        <Formik
          enableReinitialize
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          // onReset={handleFormReset}
        >
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ zIndex: 999999 }}>
                <span style={{ color: "#000", fontSize: 20 }}>Filters</span>
                <div
                  // className={classes.inputWrapper}
                  style={{ alignSelf: "center", marginTop: "15px" }}
                >
                  <span style={{ color: "#000", fontSize: 14 }}>User ID</span>
                  <InputField
                    id="userIdFilter"
                    placeholder={appConstants.userIdFilter}
                    name="userIdFilter"
                    error={Boolean(touched.userIdFilter && errors.userIdFilter)}
                    helperText={touched.userIdFilter && errors.userIdFilter}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="name"
                    value={values.userIdFilter}

                    // maxLength={30}
                  />
                </div>
                <div
                  // className={classes.inputWrapper}
                  style={{ alignSelf: "center", marginTop: "15px" }}
                >
                  <span style={{ color: "#000", fontSize: 14 }}>
                    Terminal ID
                  </span>
                  <InputField
                    id="terminalIdFilter"
                    placeholder={appConstants.terminalIdFilter}
                    name="terminalIdFilter"
                    error={Boolean(
                      touched.terminalIdFilter && errors.terminalIdFilter
                    )}
                    helperText={
                      touched.terminalIdFilter && errors.terminalIdFilter
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="name"
                    value={values.terminalIdFilter}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <span style={{ color: "#e92a2a", fontSize: 10 }}>
                    * User ID & Terminal ID can be added multple using comma
                    separated (e.g. UserID1,UserID2)
                  </span>
                </div>

                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "space-around",
                    display: "flex",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    title="Remove"
                    type="reset"
                    className="mr-3"
                    width="108px"
                    // disabled={userIdFilterState.length == 0}
                    // onClick={(e) => formik.resetForm({})}
                    onClick={() => {
                      setFieldValue("userIdFilter", "");
                      setFieldValue("terminalIdFilter", "");
                      handleFormReset();
                    }}
                  />
                  <Button
                    title="Apply"
                    type="submit"
                    className="mr-3"
                    width="108px"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
      <Grid container className="mt-4">
        <Navbar
          title={appConstants.radarManagement}
          searchable
          value={search}
          onChange={(e) => handleSearching(e)}
        />
        <Card className={classes.card}>
          {matches && (
            <Box className={classes.searchBox}>
              <NavbarSearch
                value={search}
                onChange={(e) => handleSearching(e)}
              />
            </Box>
          )}
        <Grid container>
                     <Grid className={classes.tableContainerRow}>
                         <Table 
                            rowKey={record => record.key} 
                            loading={isLoading} 
                            columns={columns} 
                            dataSource={list} 
                            onChange={handleChange} 
                            searching={search.length>0}
                        />
                    </Grid>
                </Grid>                
            
        </Card>
      </Grid>
    </DashboardLayout>
  );
};

