import React, { useEffect, useState } from 'react'
// styles
import {useStyles} from '../../styles'
// Third party front-end libs
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {Spin} from 'antd'
// Third part libs
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom'
import clsx from 'clsx'
// Custom components
import { InputField,Navbar } from '../../customComponents'
import MainLayout from '../../layouts/mainLayout'
// Themes
import {AppImages} from '../../themes/appImages'
import {ValidationConstants,appConstants} from '../../themes/constants'
// Icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import {forgotPasswordAction} from '../../store/actions'
import cl from '../../utils/cl';

export const ForgotPassword = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const authState = useSelector(state=>state.authenticationReducer)
    const {isLoading} = authState
    
    // lifecycle hooks
    useEffect(()=>{
        document.title=appConstants.headerTitle.forgotPassword
    },[])

    // Handle form submit
   const onSubmit= (values, { setSubmitting }) => {
                            cl("values inside Forgot Password", values)
                            setSubmitting(false)
                            history.push('/login')
                            // dispatch(forgotPasswordAction(values.email))
                        }

    const values = {
        email: '',
    }

    const validationSchema = Yup.object().shape({
      email: Yup.string().email(ValidationConstants.email.invalid).max(255).required(ValidationConstants.email.empty),
    })

    return (
        <MainLayout>
           <Grid container justify="center" alignItems="center" direction="column" className="m-4 position-relative">
                <div className={classes.iconWrapper} onClick={() => history.goBack()} >
                    <FontAwesomeIcon icon={faArrowLeft} color="white" className={classes.backIcon}  />
                </div>
                <Link to="/">
                    <img src={AppImages.logo} className={classes.logo} />
                </Link>
                <Typography variant="h5" className={clsx([classes.title,"mb-4"])}>{appConstants.forgotPassword}</Typography>
                 <Spin 
                    size="large" 
                    spinning={isLoading} 
                    wrapperClassName={classes.tableSpinner}
                    className={classes.antSpin}
                    >
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
                            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                <InputField
                                    placeholder={appConstants.emailAddress}
                                    autoComplete='new-Email'
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    fullWidth
                                />
                                <button type="submit" className={clsx([classes.authButton,classes.filledButton,"mt-4"])} disabled={isSubmitting}>{appConstants.sendEmail}</button>
                            </form>
                        )}
                    </Formik>
                </div>
                </Spin>
            </Grid>
        </MainLayout>
    )
}
