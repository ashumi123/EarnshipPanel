
import {makeStyles} from '@material-ui/core/styles'
import {Colors} from '../themes/colors'

const drawerWidth = 268
export const useStyles = makeStyles((theme) => ({
    // ===>Navbar Component<====
    header:{
      justifyContent: 'space-between !important',
      width: '97%',
      left: '1.5%',
      height: '3.75rem',
      borderRadius: 3,
      position: 'relative',
      padding: '15px',
      zIndex: 45,
      background: 'linear-gradient(60deg, #135c8a, #289edc)',
      boxShadow: '0 12px 20px -10px rgb(20, 126, 189), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 145, 224, 0.2)',
    },
    navbarText:{
      paddingTop:'0 !important',
      paddingBottom:'0 !important',
      fontSize:'18px !important',
      lineHeight:'1rem !important',
    },
    navbarTextSearch:{
      fontSize:'16px !important',
      fontWeight:500,
    },
     navbarInput:{
        // width:'74%',
        borderRadius:'65rem !important',
        padding:'0.5rem 0.8rem',
        fontSize:14,
        fontWeight:500,
        color:'#555555',
        '& .ant-input-search-button':{
          display:'none !important'
        },
    },
    // ======> InputField Component <======
    my:{
        marginTop:'0.5rem !important',
        marginBottom:'0.5rem  !important',
    },
    // ======> AppBar Component <======
      appBar: {
        position:'relative !important',
        marginBottom:'1.25rem !important',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        position:'relative !important',
        marginBottom:'1.25rem !important',
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('sm')]: {
          // marginRight: drawerWidth,
        },
        [theme.breakpoints.up('md')]: {
          // marginLeft: drawerWidth,
        },
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      toolbar: {
        minWidth:48,
        paddingLeft:'0 !important',
        paddingRight:'0 !important',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'baseline',
          justifyContent: 'flex-end',
        },
      },
      menuButton: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#196ea1',
        marginRight: theme.spacing(2),
        '&:focus': {
          outline: "none"
        },
        '&:hover': {
          background: '#f5f8f9',
        },
        marginRight:0,
      },
      hide: {
        display: 'none',
      },
  // ======> Button Component <======
  button:{
    backgroundColor:Colors.primary,
    borderColor:Colors.primary,
    borderRadius:3,
    padding:'0px 27px',
    fontWeight:500,
    height:38,
    '&:hover':{
    backgroundColor:'#196EA1e6',
    borderColor:'#196EA1e6',
    },
     '&:focus':{
      backgroundColor:'#196EA1e6',
    borderColor:'#196EA1e6',
    },
    '&:active':{
      backgroundColor:'#196EA1e6',
      borderColor:'#196EA1e6',
    },
    fontSize:14,
    // [theme.breakpoints.down('lg')]: {
    //     fontSize:'0.95rem',
    // },
    // [theme.breakpoints.down('sm')]: {
    //     fontSize:'0.9rem',
    // },
    // [theme.breakpoints.down('xs')]: {
    //     fontSize:'0.85rem',
    // },
    marginRight:'1rem',
  },
  grey:{
    backgroundColor:'#808080 !important',
    borderColor:'#808080 !important',
    '&:hover':{
    backgroundColor:'#808080 !important',
    borderColor:'#808080 !important',
    },
     '&:focus':{
       backgroundColor:'#808080 !important',
    borderColor:'#808080 !important',
    },
    '&:active':{
     backgroundColor:'#808080 !important',
    borderColor:'#808080 !important',
    },
  },
  mb:{
    marginBottom:'1rem'
  },
// ======> Breadcrumbs Component <======
  breadcrumbs:{
    padding: 15,
    backgroundColor: Colors.white,
    borderRadius:4,
    display:'flex',
    alignItems:'center',
  },
  separator:{
    display:'inline-block',
    margin:'0 2px',
  },
   breadcrumbIcon: {
     width:'21px !important',
      fontSize:21,
      verticalAlign:'baseline',
      cursor:'pointer',
    },
    breadcrumbItem:{
       margin:'0 2px',
    },
    breadcrumbLink:{
      cursor:'pointer',
        color:`${Colors.primary} !important`,
        '&:hover':{
            color:'#196EA1e6 !important' ,
        }
    },
    rightArrow:{
      width:11.5,
      height:21,
      verticalAlign:'sub',
    },
  // ======> Pagination Component <======
    paginationWrapper:{
        padding:'1rem',
        paddingTop:0,
        '& >:nth-child(1)':{
          alignSelf:'center',
      },
    },
    paginationGridItem:{

      '@media (max-width:600px)':{
        width:'50%',
      },
      '@media (max-width:360px)':{
        width:'40%',
      },
      '@media (max-width:320px)':{
        width:'26%',
      },
    },
    justifyItemEnd:{
        display:'flex',
        justifyContent:'flex-end'
    },
    paginationUl:{
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      float:'right',
      marginRight:-12,
    },
    selectedPage:{
      width: 27,
      height: 26,
      backgroundColor: `${Colors.primary} !important`,
      color: `${Colors.white}  !important`,
      borderRadius: `3px !important`,
      fontSize: `16px !important`,
      '&:hover':{
        backgroundColor: `${Colors.primary} !important`,
        color: `${Colors.white}  !important`,
        borderRadius: '3px !important',
      },
    },
    unSelectedPage:{
      width: 27,
      height: 26,
      color: `${Colors.primary} !important`,
      borderRadius: '3px !important',
      fontSize: `14px !important`,
      '&:hover':{
        backgroundColor:`${Colors.white}  !important`,
        borderRadius: '3px !important',
      },
    },
    paginationText:{
      '@media (max-width:325px)':{
        fontSize:'0.8rem',
      },
      '@media (max-width:285px)':{
        fontSize:'0.625rem',
      },
    },
    paginationActions:{
      height: 26,
      color: `${Colors.primary} !important`,
      borderRadius:'3px !important',
      fontSize: `14px !important`,   
      '&:hover':{
        backgroundColor:`${Colors.white}  !important`,
        borderRadius:'3px !important',
      },
    },
    ellipses:{
      color:`${Colors.primary} !important`,
    },
// ===>Dropdown Component<===
        
        formControlRoot:{
          width:'100%',
          '& .ant-select-selector':{
            outline:0,
          },

          '& .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector':{
              outline:0,
              boxShadow:'0 0 0 0px' ,
              border:'1px solid #d2d2d2',
              borderBottom: '2px solid #196ea1',
              transition: 'transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
          },
          '& .ant-select:not(.ant-select-customize-input) .ant-select-selector':{
            borderRadius:3,
            backgroundColor:'transparent',
            padding:'3.75px 12px !important',
            border:'1px solid #d2d2d2',
            height:'100%',
        }, 
        },
        dropdown:{
          position:'relative',
          display:'inline-block',
        },
        spanBorder:{  
          position: 'relative',
          transform: 'scaleX(0)',
          transition: 'transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
          borderBottom: '2px solid #196EA1 !important',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          pointerEvents: 'none',
          bottom:2,
          width:'99.5%',
          marginLeft:'0.25%',
        },
        // ==> Confirmation Text<==
        confirmationText:{
          color:Colors.title,
          marginTop:12,
        },
        // ===>Table <==
        tableWrapper: {
          overflow: 'auto',
          '& .ant-table-container':{
              border:'0 !important',
          },
          '& .ant-table-container .ant-table-cell:last-child':{
              borderRight:'0 !important',
          },
          border:'1px solid #dddddd',
      },

      // Brocken LInk
      brockenContainer:{
        width:'100%',
        height:'100vh',
        backgroundColor:Colors.coolBlue,
        padding:'12.5vh',
      },
      brockenVectorItem:{
        width:210,
        height:260,
        display:'flex',
        justifyContent:'center',
      },
      vectorImage:{
        margin:12.5,
      },
      brockenContent:{
        display:'flex',
        flexDirection:"column",
        alignItems: 'center',
      },
      reasonTitle:{
        'font-family': "'Ubuntu', sans-serif",
        color:Colors.primary,
        textAlign:'center',
        fontSize:'1.5em',
      },
      reasonText:{
        'font-family': "'Ubuntu', sans-serif",
        color:"#5697ca",
        textAlign:'center',
      }
  }))


