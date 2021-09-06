import React, { useState, useEffect } from 'react';
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
// antd
import { Tooltip, Spin } from 'antd';
import { Card, Table as BSTable } from 'react-bootstrap';
// Mui ComponentsfaUpload
import {  Grid,FormHelperText,Input } from '@material-ui/core';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import { Navbar,AppBar, Button } from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import {validateImageRatio} from '../../utils/helpers'
import {appConstants,ValidationConstants} from '../../themes/constants'
// utils methods
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { addCompetion } from '../../store/actions'
// Global constants
import { toast } from 'react-toastify';

export const AddImage = () => {
    // Hooks declarations
    const classes = useStyles();
    const dispatch = useDispatch()
    const [image,setImage] = useState('')
    const [imageName,setImageName] =  useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [errors,setErrors] = useState(null)
    const [errorName,setErrorName] =useState(null)
    const state = useSelector(state=>state.imageManagementReducer)
    const {isLoading} = state
    // Lifecycle Hooks  
    useEffect(()=>{
        document.title = appConstants.headerTitle.addImage;
    },[])

    // Remove selected file on error state updation
    useEffect(() => {
        setImage('')
        setImageName('')
        setImageUrl(null)
    }, [state.errorState])

    const handleImageChange = (event) => {
        //Deprecated
        // let imageFile = URL.createObjectURL(event.target.files[0])
     
                setImageUrl(event.target.files[0])
                let splitName = event.target.files[0]?.name.split('.')
                setImageName(splitName[0])
                let reader = new FileReader();
                reader.onload = (e) => {
                    setImage(e.target.result);
                };
                reader.readAsDataURL(event.target.files[0]);
            
          
    };

    const handleImageNameChange=(e)=>{
            if(image.length<=0){
                setErrors(ValidationConstants.image.empty)
            }
            else if(e.target.value.trim().length === 0){
                setErrorName(ValidationConstants.imageName.empty)
            }
            setImageName(e.target.value)
    }
    const handleSubmit=()=>{
         if(imageName.trim().length === 0){
            toast.error('Please Enter Compition Name')
            setErrorName('Please Enter Compition Name')
        }else{
            setErrors(null)
            setErrorName(null)
            dispatch(addCompetion(imageName,imageUrl))
        }
    }

    return (
        <Spin 
            size="large" 
            spinning={isLoading} 
            wrapperClassName={classes.tableSpinner}
            className={classes.antSpin}
            >
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/tag',name:appConstants.imageManagement},{route:'/add-tag',name:appConstants.addImage}]} />
            <Navbar title={'Add Tags'} />
            <Card className={classes.card}>
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                                <form>
                                    <BSTable striped bordered >
                                        <tbody>
                                        <tr>
                                                <td className={classes.rowKey}>
                                                    {appConstants.uploadImage}
                                                </td>
                                                <td className={classes.rowValue}>
                                                        <div className={classes.inputWrapper}>
                                                            <input accept=".png,.jpg,.jpeg" className={classes.uploaderInput} id="icon-button-file" type="file" onChange={handleImageChange} />
                                                            <label htmlFor="icon-button-file" className={classes.imageManagementUploaderlabel}>
                                                                <Tooltip title={appConstants.tooltip.uploadImage} placement="right">
                                                                    {image ?<img src={image} className={classes.terminalImage} />:
                                                                    <img src={AppImages.addPhoto} className={classes.terminalImage} />}
                                                                </Tooltip>
                                                            </label>
                                                        </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}>
                                                    {'Competition(Tag Name)'}
                                                </td>
                                                <td className={classes.rowValue}>
                                                        <div className={classes.inputWrapper}>
                                                            <Input 
                                                            placeholder='Tag Name'
                                                                className={classes.fileSuccess} 
                                                                
                                                                onChange={(e)=>handleImageNameChange(e)} 
                                                                fullWidth inputProps={{ 'aria-label': 'imageName' }} 
                                                            />
                                                        </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={classes.rowKey}></td>
                                                <td className={classes.rowValue}>
                                                    <Button title="Add"  onClick={()=>handleSubmit()} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </BSTable>
                                </form>
                    </Grid>
                </Grid>
            </Card>
        </DashboardLayout>
        </Spin>
    );
}

        