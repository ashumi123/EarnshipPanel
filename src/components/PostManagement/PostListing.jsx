import React, { useState, useEffect } from 'react';
// Navigation
import { useHistory, useLocation } from 'react-router-dom'
// Styles
import 'antd/dist/antd.css'
import '../dashboard.scss'
import { Card, } from 'react-bootstrap';
// Mui Components
import {  Grid,  useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import moment from 'moment'
// Custom components
import DashboardLayout from '../../layouts/dashboardLayout'
import { AppBar, Button, PaginationBar, Navbar, NavbarSearch, ConfirmationModal ,Table} from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
import { appConstants } from '../../themes/constants'
// utils methods
import cl from '../../utils/cl'
import { useStyles } from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getTerminalReportPostListAction,deleteTerminalReportPostAction } from '../../store/actions'


const data=[{
    created_at:new Date(),
    created_by:'Ashwani'
}]
export const PostListing = () => {
    const styleProps = { searchable: true }
    // Hooks declarations
    const classes = useStyles(styleProps);
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation()
    const dispatch = useDispatch()
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const { terminalReportPostListing,terminalReportPostPaging, isLoading } = useSelector(state => state.terminalReportPostReducer)

    // local state initialization
    const [search,setSearch] = useState("")
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [sortBy,setSortBy] = useState("")
    const [order,setOrder] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const [postIdToDelete,setPostIdToDelete] = useState(null)


    // Method to fetch listing
    const fetchDataListing = (search,offset,limit,sortBy,order) =>{
        if(location?.state?.terminalId){
                dispatch(getTerminalReportPostListAction(search, offset, limit, sortBy, order, location?.state?.terminalId))
            }else{
                history.push('/terminals')
            }
         
    }

    //lifecycle hooks
    useEffect(() => {
        document.title = appConstants.headerTitle.managePost;
        // fetchDataListing(search, offset, limit, sortBy, order)
    }, [])


    //Callback method to handle sorting 
    const handleChange =async (pagination, filters, sorter) => {
        //To fetch listing in ascending order
        if(sorter.order=="ascend"){
            setOrder(1)
            setSortBy(sorter.columnKey)
            // fetchDataListing(search,offset,limit,sorter.columnKey,1)
        } //To fetch listing in descending order
        else if(sorter.order==="descend"){
            setOrder(-1)
            setSortBy(sorter.columnKey)
            // fetchDataListing(search,offset,limit,sorter.columnKey,-1)
        } //To fetch listing in normal order
        else{
            setOrder(null)
            setSortBy("")
            // fetchDataListing(search,offset,limit,"",null)
        }
    }

    // Callback method to handle page chage
    const handlePaginationChange=(e,page)=>{
        const offsetTo = (page-1) * limit
        setOffset(offsetTo)
        // fetchDataListing(search,offsetTo,limit,sortBy,order)
    }

    // Callback method to handle searching key
    const handleSearching=async (e)=>{
        setSearch(e.target.value)
        // fetchDataListing(e.target.value,0,limit,"",null)
    }

    const columns = [
        {
            title: appConstants.sr,
            dataIndex: 'sr',
            key: 'sr',
            width:100,
            ellipsis: false,
            render: (text,record,index) => (index + 1 ) ,
        },
        {
            title: appConstants.username,
            dataIndex: 'created_by',
            key: 'created_by',
            render: (created_by, record, index) => created_by,
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.date,
            dataIndex: 'created_at',
            key: 'created_at',
            render: (created_at, record, index) => moment(created_at).format('DD-MM-YYYY'),
            ellipsis: false,
            sorter:true,
        },
        // {
        //     title: appConstants.time,
        //     dataIndex: 'created_at',
        //     key: 'created_at',
        //     render: (created_at, record, index) => moment(created_at).format('HH:mm A'),
        //     ellipsis: false,
        // },
        {
            title: appConstants.action,
            dataIndex: '',
            key: 'x',
            width: 300,
            align: 'center',
            render: (record) => {
                return (
                    <Grid className={classes.buttons}>
                        <Button title={appConstants.view} onClick={() => history.push({pathname:'/view-manage-post', state:{ postId : record._id,terminalId:location?.state?.terminalId}})} />
                        <Button title={appConstants.delete} onClick={() => {
                            setPostIdToDelete(record._id)
                            setConfirm(true)}
                            } />
                    </Grid>
                )
            },
        },
    ];

    return (
        <DashboardLayout>
            <ConfirmationModal 
            title={appConstants.alert}
            text={appConstants.confirmDeletePost} 
            visible={confirm} 
            onCancel={()=>{
                setPostIdToDelete(null)
                setConfirm(false)
            }} 
            onDeleteConfirmed={()=>{
                dispatch(deleteTerminalReportPostAction(postIdToDelete))
                setConfirm(false)
            }} 
            />
            <AppBar breadcrumbs={[ { route: '/post', name: appConstants.managePost, state:{ terminalId:1 }}]} />
            <Navbar title={appConstants.managePost} searchable value={search} onChange={(e)=>handleSearching(e)} />
            <Card className={classes.card}>
                {matches &&
                    <Box className={classes.searchBox}>
                        <NavbarSearch value={search} onChange={(e)=>handleSearching(e)} />
                    </Box>
                }
                <Grid container>
                    <Grid smUp={12} className={classes.tableContainerRow}>
                        <Table 
                            loading={false} 
                            columns={columns} 
                            dataSource={data} 
                            onChange={handleChange} 
                            searching={search.length>0}
                        />
                    </Grid>
                </Grid>
                {/* <PaginationBar 
                    totalCount={terminalReportPostPaging?.page?.totalCount} 
                    count={Math.ceil(terminalReportPostPaging?.page?.totalCount / limit)} 
                    currentPage={terminalReportPostPaging?.page?.currentPage} 
                    nextPage={terminalReportPostPaging?.page?.nextPage}
                    onChange={(e,page)=>handlePaginationChange(e,page)} 
                    prevPage={terminalReportPostPaging?.page?.nextPage - limit} 
                /> */}
            </Card>
        </DashboardLayout>
    );
}
