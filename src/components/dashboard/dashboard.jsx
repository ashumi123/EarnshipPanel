import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
import {useStyles} from '../../styles'
// antd
import { Card, } from 'react-bootstrap';
// Mui Components
import Grid from '@material-ui/core/Grid';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar,Navbar} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { handleNavigationStateAction } from '../../store/actions'


export const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(()=>{
        document.title=appConstants.headerTitle.dashboard;
        dispatch(handleNavigationStateAction(0,false))
    },[])

    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/',name:"dashboard"}]} />
            <Navbar title={appConstants.dashboard} />
            <Card className={classes.dashboardCard} >
                <Card.Body className={classes.cardBody} />
            </Card>
            <Grid container>
                <Grid lg={6} sm={6} xs={12} spacing={2} className={classes.leftCard}>
                    <Card className={clsx([classes.card])}>
                        <Card.Body>
                            <Card.Link className={classes.cardLink} onClick={() => {
                                dispatch(handleNavigationStateAction(1, false))
                                history.push('/users')
                            }}>
                                <Card.Img className={classes.cardImage} variant="top" src={AppImages.usersSvg} />
                                <Card.Title className={classes.cardTitle}>
                                        {appConstants.userManagement}
                                </Card.Title>
                            </Card.Link>
                        </Card.Body>    
                    </Card>
                </Grid>
                <Grid lg={6} sm={6} xs={12} className={classes.rightCard}>
                    <Card className={clsx([classes.card])}>
                        <Card.Body>
                            <Card.Link className={classes.cardLink} onClick={() => {
                                dispatch(handleNavigationStateAction(2, false))
                                dispatch(handleNavigationStateAction(0, true))
                                history.push('/post')
                            }}>
                                <Card.Img className={classes.cardImage} variant="top" src={AppImages.addPhoto} />
                                <Card.Title className={classes.cardTitle}>
                                        {appConstants.terminalManagement}
                                </Card.Title>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Grid>

                {/* <Grid style={{marginTop:50}} lg={6} sm={6} xs={12} spacing={2} className={classes.leftCard}>
                    <Card className={clsx([classes.card])}>
                        <Card.Body>
                            <Card.Link className={classes.cardLink} onClick={() => {
                                dispatch(handleNavigationStateAction(1, false))
                                history.push('/users')
                            }}>
                                <Card.Img className={classes.cardImage} variant="top" src={AppImages.usersSvg} />
                                <Card.Title className={classes.cardTitle}>
                                        {appConstants.userManagement}
                                </Card.Title>
                            </Card.Link>
                        </Card.Body>    
                    </Card>
                </Grid>
                <Grid lg={6} sm={6} xs={12} style={{marginTop:50}} className={classes.rightCard}>
                    <Card className={clsx([classes.card])}>
                        <Card.Body>
                            <Card.Link className={classes.cardLink} onClick={() => {
                                dispatch(handleNavigationStateAction(2, false))
                                dispatch(handleNavigationStateAction(0, true))
                                history.push('/terminal-area-list')
                            }}>
                                <Card.Img className={classes.cardImage} variant="top" src={AppImages.terminalSvg} />
                                <Card.Title className={classes.cardTitle}>
                                        {appConstants.terminalManagement}
                                </Card.Title>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Grid> */}

            </Grid>
        </DashboardLayout>
    );
}
