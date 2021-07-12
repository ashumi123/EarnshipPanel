
import React from 'react';
import clsx from 'clsx';
import {AppImages} from '../themes/appImages'
import {appConstants,appMessages} from '../themes/constants'
// Styles
import {useStyles} from './styles'
// Mui Components
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from './button'
import history from '../utils/history'


const BrockenLink =  (props) => {
    const {status,reason,reasonDetails,goto,buttonTitle} = props
    // Hooks declarations
    const classes = useStyles();

  return (
        <Grid container justify="center" alignItems="center" className={classes.brockenContainer}>
            <Grid item xs={12} className={classes.brockenVectorItem}>
              {status=="400"?
              <img src={AppImages.customBrocken} className={classes.vectorImage} />
            :  <img src={AppImages.notFound} className={classes.vectorImage} />
            }
            </Grid>
            <Grid item className={classes.brockenContent} >
              <Typography variant="h5" gutterBottom className={classes.reasonTitle}>
                {reason}
              </Typography>
              <Typography variant="subtitle2" gutterBottom className={classes.reasonText}>
                {reasonDetails}
              </Typography>
              <div className="mt-2">
                <Button title={buttonTitle} onClick={()=>history.push(goto)} size={32} />
              </div>
            </Grid>
        </Grid>
  )
}

export default BrockenLink


