import React, { useState, useEffect, } from 'react';
// Navigation
import {  useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// Third party Components
import * as Yup from 'yup';
import { Formik } from 'formik';
// antd
import { Spin } from 'antd';
import { Card,  Table as BSTable, } from 'react-bootstrap';
// Mui Components
import {Grid,  Select, useTheme,FormHelperText } from '@material-ui/core';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import { InputField,Navbar,AppBar, Button } from '../../customComponents'
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {ValidationConstants,appConstants} from '../../themes/constants'

// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetailsAction, editUserDetailsAction,handleClearStateAction } from '../../store/actions'
// Global constants

export const PaymentManagement = () => {
    // Hooks declarations
    const classes = useStyles();
    const theme = useTheme();   
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const userManagementState= useSelector(state => state.userManagementReducer)
    // Object destructuring
    const {isLoading,isTableDataLoading, userDetails }  = userManagementState
    const {firstName,lastName, email,phone_number,user_type} = userDetails;
    // local state initialization   


    // Lifecycle Hooks
    useEffect(()=>{
        document.title=appConstants.headerTitle.editUserDetails;
        let onEffect=async ()=>{
            
            }
        onEffect();
    },[])


    //Constants
    const values = {
                     firstName: firstName,
                    lastName:lastName,
                    email:email,
                    phoneNumber: phone_number,
                    userType: user_type,
                }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(1, ValidationConstants.firstname.short).required('Please Enter the value'),
        lastName: Yup.string().min(1, ValidationConstants.lastname.short).required('Please Enter the value'),
        email: Yup.string().min(1, ValidationConstants.lastname.short).required('Please Enter the value'),
        phoneNumber:Yup.string().min(1, ValidationConstants.lastname.short).required('Please Enter the value'),
        userType: Yup.string().required(ValidationConstants.userType.empty)
    })

    //Callback methods
    const onSubmit = (values, { setSubmitting }) => {
            let countryCode = '+1';
            setSubmitting(false)
        }

    return (
        <Spin 
            size="large" 
            spinning={isLoading} 
            wrapperClassName={classes.tableSpinner}
            className={classes.antSpin}
            >
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/payment',name:'Payment Management'}]} />
            <Navbar title={'Points Payment Management'} />
            <Card className={classes.card}>
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <Formik
                            enableReinitialize
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
                                <form onSubmit={handleSubmit} noValidate>
                                    <BSTable striped bordered className={classes.bsTableHeight}> 
                                    {
                                            isTableDataLoading ?  <thead className={classes.bsHeaderTable}>
                                            <Spin className={classes.tableDataSpinner} />
                                        </thead>
                                        :
                                        <tbody>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                    {'Pounds per 1000 like'}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="firstName"
                                                            placeholder={'Pounds'}
                                                            name="firstName"
                                                            error={Boolean(touched.firstName && errors.firstName)}
                                                            helperText={touched.firstName && errors.firstName}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="firstName"
                                                            value={1000+' Pounds'}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                {'Pounds per 1000 views'}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="lastName"
                                                            placeholder={'Pounds'}
                                                            name="lastName"
                                                            error={Boolean(touched.lastName && errors.lastName)}
                                                            helperText={touched.lastName && errors.lastName}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="lastName"
                                                            value={1000+' Pounds'}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                           
                                            <tr>
                                                <td className={classes.rowKey}>
                                                    {'Pounds per 1000 like(Premimum)'}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="firstName"
                                                            placeholder={'Pounds'}
                                                            name="firstName"
                                                            error={Boolean(touched.firstName && errors.firstName)}
                                                            helperText={touched.firstName && errors.firstName}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="firstName"
                                                            value={10000+' Pounds'}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                {'Pounds per 1000 views(Premimum)'}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="lastName"
                                                            placeholder={'Pounds'}
                                                            name="lastName"
                                                            error={Boolean(touched.lastName && errors.lastName)}
                                                            helperText={touched.lastName && errors.lastName}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="lastName"
                                                            value={10000+' Pounds'}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                           
                                           
                                            <tr>
                                                <td className={classes.rowKey}></td>
                                                <td className={classes.rowValue}>
                                                    <Button type="submit" title={appConstants.update} />
                                                </td>
                                            </tr>
                                        </tbody>
                            }
                                    </BSTable>
                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Card>
        </DashboardLayout>
        </Spin>
    );
}
