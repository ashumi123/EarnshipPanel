import React, { useState, useEffect, useRef } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// antd
import {Spin} from 'antd'
import { Card, Table as BSTable, } from 'react-bootstrap';
// Mui Components
import { Grid,  useTheme } from '@material-ui/core';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar,InputField, Button,Navbar,ConfirmationModal} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants as consts} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getReportPostDetailsAction, deleteReportPostAction, revokeReportPostAction } from '../../store/actions'
import moment from 'moment'

export const ReportPostDetails = () => {
    // Hooks declarations
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const reportPostState = useSelector(state => state.reportPostReducer)
    const { reportPostDetails,isTableDataLoading  } = reportPostState


    // local state initialization
    const [confirm,setConfirm] = useState(false)
    //Images destructuring

    //Constants

    // Lifecycle Hooks
    useEffect(()=>{
        document.title=consts.headerTitle.postDetails;
        if(location?.state?.reportPostId){
            // dispatch(getReportPostDetailsAction(location?.state?.reportPostId))
        }else{
            history.push('/report-list')
        }
    },[])
    
    // Consoles 


    return (
        <DashboardLayout>
            <ConfirmationModal 
            title={consts.alert}
            text={consts.confirmDeletePost} 
            visible={confirm} 
            onCancel={()=>setConfirm(false)} 
            onDeleteConfirmed={()=>{
                // dispatch(deleteReportPostAction(reportPostDetails?.reported_post?.post_id?._id))
                setConfirm(false)
            }} 
            />
            <AppBar breadcrumbs={[{route:'/report-list',name:consts.reportPost},{route:"/view-report-list",name:consts.postDetails}]} />
            <Navbar title={consts.postDetails} />
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
                                            {consts.username}
                                    </td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.username}
                                                name="username"
                                                // onChange={handleChange}
                                                type="username"
                                                value={reportPostDetails?.reported_post?.post_id?.post_user_id?.name}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.date}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.date}
                                                name="date"
                                                // onChange={handleChange}
                                                // type="date"
                                                value={moment(reportPostDetails?.reported_post?.created_at).format('YYYY-MM-DD')}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.time}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.time}
                                                name="time"
                                                // onChange={handleChange}
                                                // type="time"
                                                value={moment(reportPostDetails?.reported_post?.created_at).format('hh:mm A')}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.terminalName}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.terminalName}
                                                name="terminalName"
                                                // onChange={handleChange}
                                                // type="email"
                                                value={reportPostDetails?.reported_post?.post_id.terminal_id?.terminal_name}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.terminalAreaName}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.terminalAreaName}
                                                name="terminalAreaName"
                                                // onChange={handleChange}
                                                value={reportPostDetails?.reported_post?.post_id?.terminal_id?.region_id?.region_name}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.videoImage}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            {reportPostDetails?.reported_post?.post_id?.type == "video" ?
                                            <iframe src={consts.baseURL + reportPostDetails?.reported_post?.post_id?.video} frameborder="0" allow="fullscreen" allowfullscreen={true} className={classes.iframe} style={{objectFit:'contain'}} ></iframe>
                                            : <img src={consts.baseURL + reportPostDetails?.reported_post?.post_id?.video} className={classes.iframe} style={{objectFit:'contain'}} />
                                        }
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.postDescription}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.postDescription}
                                                name="postDescription"
                                                // onChange={handleChange}
                                                value={reportPostDetails?.reported_post?.post_id?.description.length>0?reportPostDetails?.reported_post?.post_id?.description:"N/A"}
                                                disabled={true}
                                                textArea
                                            />
                                        </div>
                                    </td>
                                </tr>   
                                <tr>
                                    <td className={classes.rowKey}>{consts.thumbsUpCount}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.thumbsUpCount}
                                                name="thumbsUpCount"
                                                // onChange={handleChange}
                                                value={reportPostDetails?.reported_post?.post_id?.like_count}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.thumbsDownCount}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.thumbsDownCount}
                                                name="thumbsDownCount"
                                                // onChange={handleChange}
                                                value={reportPostDetails?.reported_post?.post_id?.dislike_count}
                                                disabled={true}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}>{consts.reportDescription}</td>
                                    <td className={classes.rowValue}>
                                        <div className={classes.inputWrapper}>
                                            <InputField
                                                placeholder={consts.reportDescription}
                                                name="reportDescription"
                                                // onChange={handleChange}
                                                value={reportPostDetails?.reported_post?.description}
                                                disabled={true}
                                                textArea
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.rowKey}></td>
                                    <td className={classes.rowValue}>
                                        <Button title={consts.revoke} 
                                        onClick={() =>{}}  
                                        />
                                        <Button title={consts.delete}  onClick={()=>setConfirm(true)} />
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
