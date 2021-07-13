import React, { useState, useEffect, useRef } from 'react';
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
import { AppBar, Button, PaginationBar, Navbar, NavbarSearch,Table } from '../../customComponents'
// Constants
import { AppImages } from '../../themes/appImages'
import { Colors } from '../../themes/colors'
// utils methods
import cl from '../../utils/cl'
import { useStyles } from '../../styles'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getReportPostListAction, handleNavigationStateAction } from '../../store/actions'
import { appConstants } from '../../themes/constants';

//moment
import moment from 'moment'

const data=[{
    created_at:moment().unix(),
    reported_by_name:'Ashwani',
    
}]

export const ReportPost = () => {
    const styleProps = { searchable: true }
    // Hooks declarations
    const classes = useStyles(styleProps);
    const history = useHistory();
    const location = useLocation()
    const theme = useTheme()
    const dispatch = useDispatch()
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    // Global state initialization
    const reportPostState = useSelector(state => state.reportPostReducer)
    const { isLoading, reportListResult } = reportPostState
 // local state initialization
    const [search,setSearch] = useState("")
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [sortBy,setSortBy] = useState("")
    const [order,setOrder] = useState(null)


// +++++++++++

    //lifecycle hooks
    // Method to fetch listing
    const fetchDataListing = (search,offset,limit,sortBy,order) =>{
        // dispatch(getReportPostListAction(search, offset, limit, sortBy, order))
    }

    useEffect(() => {
        document.title = appConstants.headerTitle.reportPost;
        dispatch(handleNavigationStateAction(5, false))
        fetchDataListing(search,offset,limit,sortBy,order)
    }, [])

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
            title: appConstants.username,
            dataIndex: 'reported_by_name',
            key: 'reported_by_name',
            render: (reported_by_name, record) => reported_by_name ,
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.date,
            dataIndex: 'created_at',
            key: 'created_at',
            render: (created_at, record) => created_at ? moment(created_at).format("YYYY-MM-DD") : '',
            ellipsis: false,
            sorter:true,
        },
        {
            title: appConstants.time,
            dataIndex: 'created_at',
            key: 'created_at',
            render: (created_at) => created_at ? moment(created_at).format('hh:mm A') : '',
            ellipsis: false,
        },
        // {
        //     title: appConstants.terminalName,
        //     dataIndex: 'terminal_name',
        //     key: 'terminal_name',
        //     render: (terminal_name) => terminal_name,
        //     ellipsis: false,
        //     sorter:true,
        // },
        // {
        //     title: appConstants.terminalAreaName,
        //     dataIndex: 'region_name',
        //     key: 'region_name',
        //     render: (region_name) => region_name,
        //     ellipsis: false,
        //     sorter:true,
        // },
        {
            title: appConstants.action,
            dataIndex: '',
            key: 'x',
            align: 'center',
            render: (record) => {
                return (
                    <Grid className={classes.buttons}>
                        <Button title={appConstants.view} onClick={() => history.push({pathname:'/view-report-list', state :{ reportPostId : record._id}})} />
                    </Grid>
                )
            },
        },
    ];


    return (
        <DashboardLayout>
            <AppBar breadcrumbs={[{ route: '/report-list', name: appConstants.reportPost }]} />
            <Navbar title={appConstants.reportPost} searchable  value={search} onChange={(e)=>handleSearching(e)} />
            <Card className={classes.card}>
                {matches &&
                    <Box className={classes.searchBox}>
                        <NavbarSearch value={search} onChange={(e)=>handleSearching(e)} />
                    </Box>
                }
                <Grid container>
                    <Grid className={classes.tableContainerRow}>
                        <Table 
                            loading={false} 
                            columns={columns} 
                            dataSource={data} 
                            onChange={handleChange}
                            searching={search.length>0}
                        />
                    </Grid>
                </Grid>
                 
            </Card>

        </DashboardLayout>
    );
}
