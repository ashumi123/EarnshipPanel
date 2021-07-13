import React, { useState, useEffect, useRef } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// antd
import {  Spin } from 'antd';
import { Card,  Table as BSTable, } from 'react-bootstrap';
// Mui Components
import {  Grid,useTheme, } from '@material-ui/core';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar,InputField,Navbar, Button} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetailsAction } from '../../store/actions'


export const UserDetails = () => {
    // Hooks declarations
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const {userDetails, isTableDataLoading} = useSelector(state => state.userManagementReducer)

    // Lifecycle Hooks
    useEffect(()=>{
        document.title=appConstants.headerTitle.userDetails;
         if(location?.state?.userId){
            // dispatch(getUserDetailsAction(location?.state?.userId))
        }else{
            history.push('/users')
        }
    },[])

    // Consoles 

    //Callback methods


    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/users',name:appConstants.userManagement},{route:"/view-user-details",name:appConstants.userDetails, state:{userId:location?.state?.userId}}]} />
            <Navbar title={appConstants.userDetails} />
            <Card className={classes.card}>
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <BSTable striped bordered className={classes.bsTableHeight}>
                             {
                                isTableDataLoading ?  <thead className={classes.bsHeaderTable}>
                                    <Spin className={classes.tableDataSpinner} />
                                </thead>
                                :
                            <tbody>
                                <tr>
                                    <td className={classes.rowKey}>
                                            {appConstants.firstName}
                                    </td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={appConstants.firstName}
                                                name="firstName"
                                                // onChange={handleChange}
                                                type="firstName"
                                                value={'firstName'}
                                                disabled={true}
                                                
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>
                                            {appConstants.lastName}
                                    </td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={appConstants.lastName}
                                                name="lastName"
                                                // onChange={handleChange}
                                                type="lastName"
                                                value={'lastName'}
                                                disabled={true}
                                                
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{appConstants.emailAddress}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={appConstants.emailAddress}
                                                name="email"
                                                // onChange={handleChange}
                                                type="email"
                                                value={'test@email.com'}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{appConstants.phoneNumber}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={appConstants.phoneNumber}
                                                name="phoneNumber"
                                                // onChange={handleChange}
                                                type="number"
                                                value={'12345678'}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{appConstants.userType}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={'Consultant User'}
                                                name="isConsultant"
                                                // onChange={handleChange}
                                                // type="email"
                                                value={'Consultant User'}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{appConstants.reportCount}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={appConstants.reportCount}
                                                name="reportCount"
                                                // onChange={handleChange}
                                                type="number"
                                                value={'1333'}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                            }                           
                        </BSTable>
                    </Grid>
                </Grid>
            </Card>
        </DashboardLayout>
    );
}
