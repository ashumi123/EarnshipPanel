import React, { useEffect, useState } from 'react'
// styles
import {useStyles} from '../../styles'
// Third party front-end libs
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
// Third part libs
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useHistory,useLocation } from 'react-router-dom'
import clsx from 'clsx'
// Custom components
import { InputField,BrockenLink } from '../../customComponents'
import MainLayout from '../../layouts/mainLayout'
// Themes
import {AppImages} from '../../themes/appImages'
import {ValidationConstants,appConstants, appMessages} from '../../themes/constants'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import {checkResetPasswordAction ,resetPasswordAction} from '../../store/actions'

const ResetPassword = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const userId = query.get('userId')
  const authState = useSelector(state=>state.authenticationReducer)
  
  useEffect(() => {
    document.title = appConstants.headerTitle.resetPassword;
    // dispatch(checkResetPasswordAction(userId))
  },[]);
 
   const values = {
        newPassword:"",
        confirmPassword:"",
    }

  const validationSchema = Yup.object().shape({
        newPassword:Yup.string().max(255,ValidationConstants.password.longNew).min(6,ValidationConstants.password.shortNew).required(ValidationConstants.password.emptyNew)
          .matches(/^(\S+$)/, ValidationConstants.password.noSpace),
        confirmPassword:Yup.string().required(ValidationConstants.password.emptyConfirm)
          .matches(/^(\S+$)/, ValidationConstants.password.noSpace).when("newPassword", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
            [Yup.ref("newPassword")],
            ValidationConstants.password.unmathcedConfirm,
            )
  }),
    })


  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    if (values.newPassword !== values.confirmPassword) {
      
    }
      // dispatch(resetPasswordAction(values.newPassword,location.search))
    }
  return (
    authState.isExpired==null?<></>:
    authState.isExpired==true?
    <BrockenLink 
    status="400"
    reason={appMessages.resetLinkExpired} 
    reasonDetails={appMessages.clickBelow} 
    buttonTitle={appConstants.gotToForogot} 
    goto="/forgot-password" 
    />:
    <MainLayout>
      <Grid container justify="center" alignItems="center" direction="column" className="m-4">
        <Link to="/">
            <img src={AppImages.logo} className={classes.logo} />
        </Link>
        <Typography variant="h5" className={`${classes.title} mb-3`}>{appConstants.resetPassword}</Typography>
        <div className={classes.form}>
          <Formik
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
          >
            {({
                values,
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
            }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <InputField
                        placeholder={appConstants.newPassword}
                        error={Boolean(touched.newPassword && errors.newPassword)}
                        helperText={touched.newPassword && errors.newPassword}
                        name="newPassword"
                        // autoComplete='new-Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        value={values.newPassword.trim()}
                        fullWidth
                        my
                    />
                    <InputField
                        placeholder={appConstants.confirmPassword}
                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        name="confirmPassword"
                        // autoComplete='new-Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        value={values.confirmPassword.trim()}
                        fullWidth
                        my
                    />
                    <button type="submit" className={clsx([classes.authButton,classes.filledButton,"mt-2"])}  disabled={isSubmitting}>{appConstants.submit}</button>
                </form>
            )}
          </Formik>
        </div>
      </Grid>
  </MainLayout>
  );
};

export default ResetPassword;
