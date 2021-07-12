import React, { useState, useEffect, useRef } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
import { Card} from 'react-bootstrap';
// Mui Components
import  Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core';
import useMediaQuery  from '@material-ui/core/useMediaQuery';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar, PaginationBar,Navbar,Table,NavbarSearch} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { savedUserLocationsAction } from '../../store/actions'
import moment from 'moment'

export const ViewSavedLocations = () => {
    // Hooks declarations
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const userManagementState= useSelector(state => state.userManagementReducer)
    // Object destructuring
    const {savedUserLocationsResult,isLoading} = userManagementState
    const {paging,list_saved_location} = savedUserLocationsResult
    // local state initialization
    const [search,setSearch] = useState("")
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [sortBy,setSortBy] = useState("")
    const [order,setOrder] = useState(null)


    //Constants
// Method to fetch listing
    const fetchDataListing = (search,offset,limit,sortBy,order) =>{
         if(location?.state?.userId){
            dispatch(savedUserLocationsAction(search,offset,limit,sortBy,order,location?.state?.userId))
        }else{
            history.push('/users')
        }
        
    }

    //lifecycle hook
    useEffect(()=>{
        document.title=appConstants.headerTitle.savedLocations;
        fetchDataListing(search,offset,limit,sortBy,order)
    },[])

    //Callback method to handle sorting 
    const handleChange =async (pagination, filters, sorter) => {
        //To fetch listing in ascending order
        if(sorter.order=="ascend"){
            setOrder(1)
            setSortBy(sorter.columnKey)
            fetchDataListing(search,offset,limit,sorter.columnKey,1)
        } //To fetch listing in descending order
        else if(sorter.order==="descend"){
            setOrder(-1)
            setSortBy(sorter.columnKey)
            fetchDataListing(search,offset,limit,sorter.columnKey,-1)
        } //To fetch listing in normal order
        else{
            setOrder(null)
            setSortBy("")
            fetchDataListing(search,offset,limit,"",null)
        }
    }

    // Callback method to handle page chage
    const handlePaginationChange=(e,page)=>{
        const offsetTo = (page-1) * limit
        setOffset(offsetTo)
        fetchDataListing(search,offsetTo,limit,sortBy,order)
    }

    // Callback method to handle searching key
    const handleSearching=async (e)=>{
        setSearch(e.target.value)
        fetchDataListing(e.target.value,0,limit,"",null)
    }



    const columns = [
        {
            title: appConstants.sr,
            dataIndex: '',
            key: 'sr',
            render: (text,record,index) => (index + 1 ) + (paging?.page?.nextPage - limit),
            ellipsis: false,
        },
        {
            title: appConstants.terminalId,
            dataIndex:  'terminal_id',
            key: 'terminal_id',
            ellipsis: false,
            sorter:true,
        },
        {
            title: 'Radar External ID',
            dataIndex: 'radar_external_id',
            key: 'radar_external_id',
            render: (radar_external_id) => radar_external_id,
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.terminalName,
            dataIndex: 'terminal_name',
            key: 'terminal_name',
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.latitude,
            dataIndex: 'latitude',
            key:  'latitude',
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.longitude,
            dataIndex: 'longitude',
            key: 'longitude',
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.type,
            dataIndex: 'type',
            key: 'type',
            ellipsis: false,
            sorter:true,
            render:(type)=>type==1?appConstants.enter:appConstants.exit
        },
        {
            title: appConstants.dateAndTime,
            dataIndex: 'timestamp',
            key: 'timestamp',
            render:(timestamp)=>{
                return(
                    <div>
                        {moment(timestamp).format('YYYY-MM-DD HH:mm')}
                    </div>
                )
            },
            ellipsis: false,
            sorter:true,
        },
       
    ];

    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/users',name:appConstants.userManagement},{route:"/view-user-details",name:appConstants.userDetails,state:{userId:location?.state?.userId}},{route:'/view-saved-locations',name:appConstants.savedLocations,state:{userId:location?.state?.userId}}]} />
            <Grid container className="mt-4" >
           <Navbar title={appConstants.savedLocations} searchable value={search} onChange={(e)=>handleSearching(e)} />
            <Card className={classes.card}>
                {matches &&
                    <Box className={classes.searchBox}>
                        <NavbarSearch value={search} onChange={e=>handleSearching(e)} />
                    </Box>  
                }
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <Table 
                        className={classes.tableWrapper} 
                        loading={isLoading} 
                        columns={columns} 
                        dataSource={list_saved_location} 
                        onChange={handleChange}
                        searching={search.length>0}
                        />
                    </Grid>
                </Grid>
                <PaginationBar 
                    totalCount={paging?.page?.totalCount} 
                    count={Math.ceil(paging?.page?.totalCount / limit)} 
                    currentPage={paging?.page?.currentPage} 
                    nextPage={paging?.page?.nextPage}
                    onChange={(e,page)=>handlePaginationChange(e,page)} 
                    prevPage={paging?.page?.nextPage - limit} 
                />
            </Card>
            </Grid>
        </DashboardLayout>
    );
}
