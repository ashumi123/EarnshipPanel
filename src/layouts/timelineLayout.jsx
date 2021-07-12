import React from 'react'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import {AppImages} from '../themes/appImages'
import {Colors} from '../themes/colors'
import { useStyles } from "./styles";
import { useHistory,Link} from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import { Paper } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
const TimelineLayout = (props) => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={classes.timelineBackground} >
            <AppBar position="relative">
                <Toolbar style={{justifyContent:'center',}}>
                <img src={AppImages.logo} className={classes.timelineLogo} />
                </Toolbar>
            </AppBar>
            <main > 
                {props.children}
            </main>
    </div>
    )
}

export default TimelineLayout