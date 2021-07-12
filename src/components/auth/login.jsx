import React, { useEffect, useState } from 'react'
// styles
import {useStyles} from '../../styles'
import {Spin} from 'antd'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// Third party front-end libs
import {
    Grid,
    Typography,
} from '@material-ui/core'
// Third party component libs
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
// Redux
import { useSelector, useDispatch } from 'react-redux'
import {handleClearStateAction,loginAction} from '../../store/actions'
import localStorage from '../../utils/localStorage'

export const Login = () => {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const authState = useSelector(state=>state.authenticationReducer)
    const {isLoading} = authState
    const values = {
        email: "",
        password:"",
    }
    // lifecycle hooks
    useEffect(()=>{
        document.title=appConstants.headerTitle.login
        // dispatch(handleClearStateAction("clearSidebarIndicesState"))
    },[])

    useState(()=>{
            window.addEventListener('popstate', () => {
                document.title=appConstants.headerTitle.login
                window.history.pushState(null, null, null);
            });
    },[window.history])


    const validationSchema = Yup.object().shape({
        email: Yup.string().email(ValidationConstants.email.invalid).max(255).required(ValidationConstants.email.empty),
        password: Yup.string().required(ValidationConstants.password.empty)
        .matches(/^(\S+$)/, ValidationConstants.password.noSpace)
    })


    const onSubmit=(values, { setSubmitting }) => {
                            setSubmitting(false)
                            localStorage.setAuthToken('action.result.token')
                            localStorage.setUserId('action.result.user_id')
                            window.location.reload()
                            // dispatch(loginAction(values.email,values.password))
                        }

    return (
        
        <MainLayout>
            <Grid container justify="center" alignItems="center" direction="column" className="m-4">
                <Link to="/">
                    <img src={AppImages.logo} className={classes.logo} />
                </Link>
                <Typography variant="h5" className={`${classes.title} mb-3`}>{appConstants.adminLogin}</Typography>
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
                            <form noValidate onSubmit={handleSubmit}>
                                <InputField
                                    placeholder={appConstants.emailAddress}
                                    // autoComplete='new-Email'
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    fullWidth
                                    my
                                />
                                <InputField
                                    placeholder={appConstants.password}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                    name="password"
                                    // autoComplete='new-Password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.password.trim()}
                                    fullWidth
                                    my
                                />
                                <Grid container justify="center">
                                    <Typography variant="body1" display="block" className={clsx([classes.authButton,classes.linkButton,"my-2"])} 
                                        onClick={()=>history.push('/forgot-password')}>
                                        {appConstants.forgotLink}
                                    </Typography>
                                </Grid>
                                <button type="submit" className={clsx([classes.authButton,classes.filledButton])}  disabled={isSubmitting}>{appConstants.login}</button>
                            </form>
                        )}
                    </Formik>
                </div>
                </Spin>
            </Grid>
        </MainLayout>
       
    )
}
