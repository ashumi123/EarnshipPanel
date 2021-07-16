
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
import {useStyles} from '../../styles'
// antd
import { Card,Table as BSTable } from 'react-bootstrap';
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
import {Switch} from 'antd'


export const NotiManagement = () => {
    const [checked,setChecked]=useState(false)

        const classes = useStyles();
        const history = useHistory();
        const dispatch = useDispatch()
    
        useEffect(()=>{
            document.title=appConstants.headerTitle.dashboard;
            dispatch(handleNavigationStateAction(7,false))
        },[])
    
        return (
            <DashboardLayout>
                <AppBar breadcrumbs={[{route:'/Notification',name:"Notification Managements"}]} />
                <Navbar title={'Notification Managements'} />
                <Card className={classes.dashboardCard} >
                    <Card.Body className={classes.cardBody} />
                </Card>
                <Grid container>
                <Card  className={clsx([classes.card])}>
                            {/* <Card.Body> */}
                            <form>
                                    <BSTable striped bordered >
                                        <tbody>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                    {'Notification send'}
                                                </td>
                            <td className={classes.rowKey}>     
                            <div class="toggle-switch">
  <Switch
  style={{marginLeft:'50%'}}
  checked={checked}
  onChange={()=>setChecked(!checked)}
  />
  {/* <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" /> */}
  <label class="toggle-switch-label" for="toggleSwitch">
    
  </label>
</div>
</td>
</tr>
</tbody>
</BSTable>
</form>
                                
                                     {/* </Card.Body>     */}
                        </Card>
                   
    
                </Grid>
            </DashboardLayout>
        );
    }
