import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Colors
} from '../themes/colors'

import bgImageDrawer from '../assets/images/sidebarBg.jpg';
import TruckBgWhite from '../assets/images/truckBgWhite.jpg';
const drawerWidth = 268;
export const useStyles = makeStyles((theme) => ({
  // ==> Global styles<==
  flex: {
    display: 'flex !important',
  },
  // ===> MainLayout Component <====
  wrapper: {
    height: '100%',
    position: 'fixed',
  },
  bg: {
    extend: 'flex',
    width: '100%',
    justifyContent:'center',
  },
  bgMain:{
    padding: '5%',
  },
  bgTimeline:{
    // paddingLeft: '2.5%',
    // paddingRight: '2.5%',
  },
  page: {
    extend: 'flex',
    minWidth: '240px',
    width: '60%',
    maxWidth: '389px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: theme.spacing(1) * 0.5,
    border: '1px solid #cccccc',
  },
  // ===> DashboardLayout Component <===
  drawerTab: {
    extend: 'flex',
    width: '100%',
    cursor: 'pointer',
    'flex-direction':'row',
    'align-items': 'center',
    padding:'8px',
  },
  drawerBtnText: {
    'font-size': '17px',
    color:Colors.title,
    margin: 0,
  },
  drawerBtn:{
    extend:'drawerTab',
     margin:'10px 3px 0',
    backgroundColor: 'transparent',
  '&:hover' :{
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    }
  },
  drawerNestedBtn:{
     extend:'drawerTab',
     backgroundColor: 'transparent',
     margin:'6px 0',
    '&:hover' :{
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, .175)',
    }
  },
  drawerNestedBtnSelected:{
    extend:'drawerTab',
    backgroundColor: Colors.primary,
    boxShadow: '0 12px 20px -10px rgba(232, 41, 83, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 145, 224, 0.2)',
    margin: 4,
    padding: 8,
    borderRadius: 4,
  },
  drawerBtnSelected:{
    extend:'drawerTab',
    backgroundColor: Colors.primary,
    boxShadow: '0 12px 20px -10px rgba(232, 41, 83, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 145, 224, 0.2)',
    margin: '10px 3px 0',
    padding: 8,
    borderRadius: 4,
  },
  drawerBtnIcon:{
    width: 30,
    marginRight: 12.5,
    marginLeft: 6,
  },
  drawerBtnTextSelected:{
    extend:'drawerBtnText',
    color:Colors.white,
  },
  drawerBtnTextUnSelected:{
    extend:'drawerBtnText',
    color:Colors.title,
  },
  drawerMenuToggleIcon:{
  color:Colors.title,
  fontSize:18, 
  position:'absolute',
  right:5,top:25,
  },
  drawerBackground:{
    backgroundImage: `url(${bgImageDrawer})`,
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'block',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&::after':{
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: "''",
      display: 'block',
      background: Colors.white,
      opacity:'0.93',
    },
  },
  homeWrapper:{
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  drawer: {
    // position:'relative',
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerLogo: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(1.1)
  },
  drawerTitle: {
    color:Colors.title,
  },
  listPadding: {
    padding: '0 !important',
  },
  drawerList: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },

  // necessary for content to be below app bar
  customNavbar: {
    padding: 0,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  customNavbarShift: {
    padding: 0,
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  container: {
    display: 'flex',
  },
  appBar: {
    padding: '1%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    padding: '1%',
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]: {
      marginRight: drawerWidth,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingLeft: '1%',
    paddingRight: '1%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'baseline',
      justifyContent: 'flex-end',
    },
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: Colors.primary,
    '&:focus': {
      outline: "none"
    },
    '&:hover': {
      background: '#f5f8f9',
    },
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerIconContainer: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    float: 'left',
    marginRight: 13,
  },
  tabIcon: {
    width: '21px !important',
    fontSize: 21,
    lineHeight: 30,
    textAlign: 'center',
  },
  seletcedTabIcon: {
    width: '23px !important',
    fontSize: 23,
    lineHeight: 30,
    textAlign: 'center',
  },
  nestedMenuWrapper: {
    backgroundColor: Colors.white,
    marginTop: '0.5rem',
    borderRadius: 4,
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
  },
   // Timeline
   timelineBackground:{
    backgroundImage: `url(${TruckBgWhite})`,
    position: 'absolute',
    height: 'auto',
    width: '100%',
    display: 'block',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
   },
  timelineAppbar:{
    alignItems:'center',
  },
  logo: {
    width: 75,
    height: 75,
    cursor: 'pointer',
  },
  timelineLogo:{
    width: 104,
    height: 104,
  },

}))