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

export const EditUserDetails = () => {
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
            await dispatch(handleClearStateAction("clearUserDetailsState"))
             if(location?.state?.userId){
                // await dispatch(getUserDetailsAction(location?.state?.userId))
            }else{
                history.push('/users')
            }
            
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
        firstName: Yup.string().min(1, ValidationConstants.firstname.short).max(20,ValidationConstants.firstname.long).required(ValidationConstants.firstname.empty).test('trim',ValidationConstants.firstname.empty,value=>value?.trim()?.length > 0),
        lastName: Yup.string().min(1, ValidationConstants.lastname.short).max(20,ValidationConstants.lastname.long).required(ValidationConstants.lastname.empty).test('trim',ValidationConstants.lastname.empty,value=>value?.trim()?.length > 0),
        email: Yup.string().email(ValidationConstants.email.invalid).max(255,ValidationConstants.email.long).required(ValidationConstants.email.empty),
        phoneNumber: Yup.string().matches(/^[0-9]+$/, ValidationConstants.phoneNumber.invalid).max(15,ValidationConstants.phoneNumber.long).min(8,ValidationConstants.phoneNumber.short).required(ValidationConstants.phoneNumber.empty),
        userType: Yup.string().required(ValidationConstants.userType.empty)
    })

    //Callback methods
    const onSubmit = (values, { setSubmitting }) => {
            let countryCode = '+1';
            setSubmitting(false)
            // dispatch(editUserDetailsAction(location?.state?.userId,values.firstName.trim(),values.lastName.trim(),values.email,values.phoneNumber,countryCode,values.userType))
        }

    return (
        <Spin 
            size="large" 
            spinning={isLoading} 
            wrapperClassName={classes.tableSpinner}
            className={classes.antSpin}
            >
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/users',name:appConstants.userManagement},{route:'/edit-user',name:appConstants.editUserDetails,state:location?.state?.userId}]} />
            <Navbar title={appConstants.editUserDetails} />
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
                                                    {appConstants.firstName}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="firstName"
                                                            placeholder={appConstants.firstName}
                                                            name="firstName"
                                                            error={Boolean(touched.firstName && errors.firstName)}
                                                            helperText={touched.firstName && errors.firstName}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="firstName"
                                                            value={values.firstName}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                    {appConstants.lastName}
                                                </td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="lastName"
                                                            placeholder={appConstants.lastName}
                                                            name="lastName"
                                                            error={Boolean(touched.lastName && errors.lastName)}
                                                            helperText={touched.lastName && errors.lastName}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="lastName"
                                                            value={values.lastName}
                                                            maxLength={20}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>{appConstants.emailAddress}</td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="email"
                                                            error={Boolean(touched.email && errors.email)}
                                                            helperText={touched.email && errors.email}
                                                            placeholder={appConstants.emailAddress}
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type="email"
                                                            value={values.email}
                                                            maxLength={255}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>{appConstants.phoneNumber}</td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <InputField
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            placeholder={appConstants.phoneNumber}
                                                            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                                                            helperText={touched.phoneNumber && errors.phoneNumber}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.phoneNumber}
                                                            maxLength={15}
                                                            // disabled
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>{appConstants.userType}</td>
                                                <td className={classes.rowValue}>
                                                    <div className={classes.inputWrapper}>
                                                        <Select
                                                            native
                                                            id="userType"
                                                            className={classes.selectInput}
                                                            value={values.userType}
                                                            error={Boolean(touched.userType && errors.userType)}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            inputProps={{
                                                                name: 'userType',
                                                                id: 'userType',
                                                            }}
                                                            IconComponent={() => <FontAwesomeIcon icon={faChevronDown} className={classes.dropdownIcon} />}
                                                        >
                                                            <option value="">{appConstants.selectType}</option>
                                                            <option value={appConstants.driver}>{appConstants.driver}</option>
                                                            <option value={appConstants.ownerOperator}>{appConstants.ownerOperator}</option>
                                                            <option value={appConstants.airCargoCarrier}>{appConstants.airCargoCarrier}</option>
                                                            <option value={appConstants.company}>{appConstants.company}</option>
                                                            <option value={appConstants.exporter}>{appConstants.exporter}</option>
                                                            <option value={appConstants.freightBroker}>{appConstants.freightBroker}</option>
                                                            <option value={appConstants.importer}>{appConstants.importer}</option>
                                                            <option value={appConstants.shipper}>{appConstants.shipper}</option>
                                                            <option value={appConstants.trucking}>{appConstants.trucking}</option>
                                                            <option value={appConstants.warehouse}>{appConstants.warehouse}</option>
                                                        </Select>
                                                        {errors.userType && <FormHelperText error id="component-error-text">{errors.userType}</FormHelperText>}
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
