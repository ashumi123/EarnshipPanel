import React, { useState, useEffect, useRef } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
import moment from 'moment'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// antd
import {Spin} from 'antd'
import { Card,Table as BSTable, } from 'react-bootstrap';
// Mui Components
import {  Grid, useTheme, } from '@material-ui/core';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar,InputField,Navbar} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getTerminalReportPostDetailsAction } from '../../store/actions'


export const TerminalReportPostDetails = () => {
    // Hooks declarations
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const userData=location?.state?.postId
    const {isTableDataLoading, terminalReportPostDetails}= useSelector(state => state.terminalReportPostReducer)
    // local state initialization
    //Images destructuring
    //Constants

    // Lifecycle Hooks
 useEffect(()=>{
        document.title=appConstants.headerTitle.postDetails;
        // if(location?.state?.postId){
        //         // dispatch(getTerminalReportPostDetailsAction(location?.state?.postId))
        //     }else{
        //         history.push('/terminals')
        //     }
        
    },[])
    
    // Consoles 

    //Callback methods


    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/post',name:appConstants.managePost,state:{ terminalId: location?.state?.terminalId }},{route:'/view-manage-post',name:appConstants.postDetails}]} />
            <Navbar title={appConstants.postDetails} />
            <Card className={classes.card}>
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <BSTable striped bordered className={classes.bsTableHeight}> 
                        {
                                        //     isTableDataLoading ?  <thead className={classes.bsHeaderTable}>
                                        //     <Spin className={classes.tableDataSpinner} />
                                        // </thead>
                                        // :
                            <tbody>
                                <tr>
                                    <td className={classes.rowKey}>
                                            User Name
                                    </td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder="User Name"
                                                name="username"
                                                // onChange={handleChange}
                                                type="username"
                                                value={userData.createdBy.name}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>Date</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder="Date"
                                                name="date"
                                                // onChange={handleChange}
                                                // type="date"
                                                value={userData.createdOn}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>Video/Image</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            {
                                                
                                                <iframe src={userData.media[0].url} frameborder="0" allow="fullscreen" allowfullscreen={true} className={classes.iframe} style={{objectFit:'contain'}}></iframe>
                                                
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>Description</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder="Description"
                                                name="description"
                                                // onChange={handleChange}
                                                value={userData.description}
                                                disabled={true}
                                                textArea
                                            />
                                        </div>
                                    </td>
                                </tr>   
                                <tr>
                                    <td className={classes.rowKey}>Thumbs Up Count</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder="Thumbs Up Count"
                                                name="thumbsUpCount"
                                                // onChange={handleChange}
                                                value={userData.totalLikes}
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
