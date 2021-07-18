import React, { useState, useEffect, useRef } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
 import '../dashboard.scss'
import { Card, } from 'react-bootstrap';
import  Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useMediaQuery  from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import {AppBar, Button,PaginationBar,Navbar,NavbarSearch,Table} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import {appConstants} from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import {useStyles} from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { handleNavigationStateAction,getUserListAction,blockUserAction,handleClearStateAction } from '../../store/actions'

const data=[
    {
   _id:1,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:2,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:3,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
    {
        _id:4,
    name:'ggg',
    email:'gg@gg.gg',
    report_count:'1',
    phone_number:'565665654'    
},
]
export const UserListing = () => {

    const styleProps = { searchable :true}
    // Hooks declarations
    const classes = useStyles(styleProps);
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const userManagementState= useSelector(state => state.userManagementReducer)
    // Object destructuring
    const {isLoading,userListingResult,currentPage} = userManagementState
    const {paging,list} = userListingResult
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    // Global state initialization

    // local state initialization
    const [search,setSearch] = useState("")
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [sortBy,setSortBy] = useState("")
    const [order,setOrder] = useState(null)

    // Method to fetch listing
    const fetchDataListing = (search,offset,limit,sortBy,order) =>{
        dispatch(getUserListAction(search,offset,limit,sortBy,order,'user'))   
    }

    //lifecycle hook
    useEffect(()=>{
        document.title=appConstants.headerTitle.userManagement;
        dispatch(handleNavigationStateAction(1,false))
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

    // Callback method to handle block unblock a user
    const handleBlock=(_id,blocked)=>{
        dispatch(blockUserAction(_id,blocked))
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
        dispatch(getUserListAction(e.target.value,0,limit,"",null,'user'))
    }

    const columns = [
        {
            key: 'sr',
            title: appConstants.sr,
            dataIndex: '',
            render: (text,record,index) => (index + 1 ),
            ellipsis: false,
            width:100,
        },
        {
            key: 'name',
            title: appConstants.username,
            dataIndex: 'name',
            ellipsis: false,
            sorter:true,
        },
        {
            key: 'email',
            title: appConstants.emailAddress,
            dataIndex: 'email',
            ellipsis: false,
            render: (text, record) => (
                        <div className={classes.emailCell}>
                        {text}
                        </div>
                    ),
            sorter:true,
        },
        {
            key:  'followers',
            title: 'Followers',
            dataIndex: 'noOfFollowers',
            ellipsis: false,
            sorter:true,
        },
        {
            key:  'posts',
            title: 'Total Post',
            dataIndex: 'totalPosts',
            ellipsis: false,
            sorter:true,
        },
        {
            key:  'following',
            title: 'Following',
            dataIndex: 'noOfFollowings',
            ellipsis: false,
            sorter:true,
        },
        {
            key: 'mobileNumber',
            title: appConstants.phoneNumber,
            dataIndex: 'mobileNumber',
            ellipsis: false,
            sorter:true,
        },
        {
            key: 'x',
            title: appConstants.action,
            dataIndex: '',
            align:'center',
            render: (record) => {
                
                return (
                    <Grid className={classes.buttons}>
                        <Button disabled={isLoading} title={appConstants.view}  
                        onClick={()=>history.push({
                            pathname: '/view-user-details',
                            state: {  // location state
                                userDetail: record, 
                            },
                            })} 
                        />
                      
                        <Button disabled={isLoading} title={!record.isBlock ? appConstants.block:appConstants.unblock} 
                        onClick={()=>handleBlock(record._id,!record.isBlock)} 
                        />
                    </Grid>
                )
            },
        },
    ];

    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{route:'/users',name:appConstants.userManagement}]} />
            <Grid container className="mt-4" >
            <Navbar title={appConstants.userManagement} searchable value={search} onChange={(e)=>handleSearching(e)} />
            <Card className={classes.card}>
                {matches &&
                <Box className={classes.searchBox}>
                    <NavbarSearch value={search} onChange={e=>handleSearching(e)} />
                </Box>  
                }
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <Table 
                            rowKey={record => record.key} 
                            loading={isLoading} 
                            columns={columns} 
                            dataSource={list} 
                            onChange={handleChange} 
                            searching={search.length>0}
                        />
                    </Grid>
                </Grid>                
                <PaginationBar 
                    totalCount={paging?.page?.totalCount} 
                    count={Math.ceil(paging?.page?.totalCount / limit)} 
                    currentPage={paging?.page?.currentPage} 
                    // currentPage={currentPage} 
                    nextPage={paging?.page?.nextPage}
                    onChange={(e,page)=>handlePaginationChange(e,page)} 
                    prevPage={paging?.page?.nextPage - limit} 
                />
            </Card>
            </Grid>
        </DashboardLayout>
    );
}
