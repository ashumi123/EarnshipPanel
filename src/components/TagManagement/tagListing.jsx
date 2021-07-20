import React, { useState, useEffect } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
import '../dashboard.scss'
import { Card } from 'react-bootstrap';

// Mui Components
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import { AppBar, Button, PaginationBar, Navbar, NavbarSearch, ConfirmationModal,Table } from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { appConstants } from '../../themes/constants'
// utils methods
import { useStyles } from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getImageListAction, handleNavigationStateAction,deleteImageAction } from '../../store/actions'
// Global constants


const data=[
    {
    postCount:'10000',
    tag_name:'tag Name'
},
    {
    postCount:'10000',
    tag_name:'tag Name'
},
    {
    postCount:'10000',
    tag_name:'tag Name'
},
    {
    postCount:'10000',
    tag_name:'tag Name'
},
]
export const ImageListing = () => {
    const styleProps = { searchable: true }
    // Hooks declarations
    const classes = useStyles(styleProps);
    const history = useHistory();
    const dispatch = useDispatch()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const imageManagementState = useSelector(state => state.imageManagementReducer)
    // Global state initialization
    const { imageListing, imagePaging, isTableDataLoading, deletedImage } = imageManagementState
    
    // local state initialization
    const [search,setSearch] = useState("")
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [sortBy,setSortBy] = useState("")
    const [order,setOrder] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const [imageToDelete,setImageToDelete] = useState(null)
    // +++++++++++

    // Method to fetch listing
    const fetchDataListing = (search,offset,limit,sortBy,order) =>{
        dispatch(getImageListAction(search, offset, limit, sortBy, order))
    }
    //lifecycle hooks
    useEffect(() => {
        document.title = appConstants.headerTitle.imageListing;
        dispatch(handleNavigationStateAction(3, false))
        // console.log('20') 
        fetchDataListing(search, offset, limit, sortBy, order)
    }, [])

    useEffect(() => {
        // console.log('28')
            fetchDataListing(search, 0, limit, sortBy, order)
    }, [deletedImage])



    //Callback method to handle sorting 
    const handleChange =async (pagination, filters, sorter) => {
        //To fetch listing in ascending order
        if(sorter.order=="ascend"){
            setOrder(1)
            setSortBy(sorter.columnKey)
            // console.log('7')
            fetchDataListing(search,offset,limit,sorter.columnKey,1)
        } //To fetch listing in descending order
        else if(sorter.order==="descend"){
            setOrder(-1)
            setSortBy(sorter.columnKey)
            // console.log('5')
            fetchDataListing(search,offset,limit,sorter.columnKey,-1)
        } //To fetch listing in normal order
        else{
            setOrder(null)
            setSortBy("")
            // console.log('1')
            fetchDataListing(search,offset,limit,"",null)
        }
    }

    // Callback method to handle page chage
    const handlePaginationChange=(e,page)=>{
        const offsetTo = (page-1) * limit
        setOffset(offsetTo)
        // console.log('2')
        fetchDataListing(search,offsetTo,limit,sortBy,order)
    }

    // Callback method to handle searching key
    const handleSearching=async (e)=>{
        setSearch(e.target.value)
        // console.log('3')
        fetchDataListing(e.target.value,0,limit,"",null)
    }
// +++++++++++


    const columns = [
        {
            title: appConstants.sr,
            dataIndex: '',
            key: 'sr',
            render: (text,record,index) => (index + 1 ) ,
            ellipsis: false,
            width:100,
        },
        {
            title: 'Competition(Tag Name)',
            dataIndex: 'name',
            key: 'tag_name',
            render: (tag_name) => <div className={classes.imageNameCell}>
                        {tag_name}
                        </div>,
            ellipsis: false,
            sorter:true,
        },
        {
            title: 'No of Posts',
            dataIndex: 'postCount',
            key: 'postCount',
            align: 'center',
            render: (postCount) => {
                return (
                    <div className={classes.listingLogo}>
                    {0}
                    </div>
                )
            },
            ellipsis: false,
            width:250,
        },
        // {
        //     title: appConstants.action,
        //     dataIndex: '',
        //     key: 'x',
        //     width: 100,
        //     align: 'center',
        //     render: (text,record,index) => {
        //         return (
        //             <Grid className={classes.buttons}>
        //                 <Button title={appConstants.delete} onClick={() =>{
        //                     setConfirm(true)
        //                     setImageToDelete(record._id)
        //                     }}/>
        //             </Grid>
        //         )
        //     },
        // },
    ];
    
    return (
        <DashboardLayout>
            <ConfirmationModal title={appConstants.alert} text={appConstants.confirmDeleteImage} visible={confirm} 
                onCancel={() =>{
                    setConfirm(false)
                }} 
                onDeleteConfirmed={() =>{
                    // dispatch(deleteImageAction(imageToDelete)) 
                    setConfirm(false)
                }}
                />
            <AppBar breadcrumbs={[{ route: '/tag', name: appConstants.tagManage }]} />
            <Grid container className={classes.buttonBarWrapper} >
                <Button title={'Add competetion'} onClick={() => history.push('/add-tag')} mr mb />
            </Grid>
            <Navbar title={'Hash tag Management'} searchable value={search} onChange={(e)=>handleSearching(e)} />
            <Card className={classes.card}>
                {matches &&
                    <Box className={classes.searchBox}>
                        <NavbarSearch value={search} onValueChange={(e)=>handleSearching(e)} />
                    </Box>
                }
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <Table 
                            loading={isTableDataLoading} 
                            columns={columns} 
                            dataSource={imageListing} 
                            onChange={handleChange} 
                            searching={search.length>0}
                        />
                    </Grid>
                </Grid>
                 <PaginationBar 
                totalCount={imagePaging?.page?.totalCount} 
                count={Math.ceil(imagePaging?.page?.totalCount / limit)} 
                currentPage={imagePaging?.page?.currentPage} 
                nextPage={imagePaging?.page?.nextPage}
                onChange={(e,page)=>handlePaginationChange(e,page)} 
                prevPage={imagePaging?.page?.nextPage - limit} 
                />
            </Card>
        </DashboardLayout>
    );
}
