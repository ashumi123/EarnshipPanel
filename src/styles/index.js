import {makeStyles} from '@material-ui/core/styles'
import {Colors} from '../themes/colors'
export const useStyles = makeStyles((theme) => ({
    searchBox:{
        marginTop:50,
        display:'flex',
        justifyContent:'center',
    },
    // ======> Login Screen <======
    logo:{
        width:100,
        height:100,
    },
    form: {
        width: '100%',
        textAlign: 'center',
    },
    title: {
        color: Colors.title,
        fontWeight:'500 !important',
        fontSize:'24px !important',
    },
    authButton:{
        border: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 16,
        cursor: 'pointer',
    },
    filledButton:{
        border: 'none',
        color: Colors.white,
        padding: '7px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 600,
        transitionDuration: '0.4s',
        cursor: 'pointer',
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor:Colors.primary,
        borderRadius:4,
        '&:hover':{
            backgroundColor:Colors.white,
            color:Colors.primary,
        },
        '&:focus':{
            outlineColor:Colors.primary,
        },
    },
    linkButton:{
            width:'40%',
            border: 'none',
            paddingBottom: 8,
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight:'500 !important',
            transitionDuration: '0.4s',
            cursor: 'pointer',
            color: '#555555', 
            '&:hover':{
                color: Colors.primary,
                textDecoration :'none',
        }
    },
    

    // ======> Forgot Screen <======
    iconWrapper: {
        position: 'absolute',
        left: 0,
        top:0,
        backgroundColor: '#196EA1',
        float: 'none',
        height: 30,
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        cursor:'pointer',
    },

    // ==>Dashboard Component <===
    // Card to use on all components
    wrapperCard: {
        position: 'relative',
        width: '100%',
        'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        'border-radius': '3px',
        color: 'rgba(0,0,0, 0.87)',
        'background-color': Colors.white,
        top:'-40px',
        'margin-bottom':'50px',
    },
     dashboardCard: {
        extend:'wrapperCard',
    },
    cardBody:{
        marginTop:'1.25rem',
    },
    leftCard: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: 12.5,
        },
    },
    rightCard: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 15,
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop:30,
        },
    },
    cardLink: {
        '&:hover $cardTitle': {
            color:`${Colors.primary} !important` ,
        }
    },
    cardImage: {
        height: 90,
        marginTop:'5%',
    },
    cardTitle: {
        textAlign: 'center',
        paddingTop:'5%',
        paddingBottom: '5%',
        fontSize:26,
        fontWeight:'unset',
        color:`${Colors.dashboardCards} !important`
    },


    // ======> User details Screen <======
    // card inside all components
    card: {
        extend:'wrapperCard',
    },
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
    rowKey: {
        width: 217,
        verticalAlign:'middle !important',
        fontSize:17,
        fontWeight:500,
        color:'#000000DE'
    },
    inputWrapper: {
        width:300,
        position:'relative',
    },
    tableContainerRow: {
        width: '100%',
        overflow: 'auto',
        marginLeft: 15,
        marginRight: 15,
        marginBottom:15,
         [theme.breakpoints.down('xs')]:{
           marginTop:props=>props.searchable ? 15 : 60,
        },
        [theme.breakpoints.up('sm')]:{
           marginTop:props=>props.searchable ? 60 : 60,
        },
        '& .ant-table-cell':{
            borderColor:'#dddddd !important',
        },
         '& .ant-table-tbody:last-child':{
            borderColor:'#dddddd !important',
        },
        '& .ant-table-container':{
             borderColor:'#dddddd !important',
        },
        '& .table-bordered th, .table-bordered td':{
            borderColor:'#dddddd !important',
        },
    },
    listingLogo:{
        'text-align':'center !important',
    },
    rowValue:{
        verticalAlign:'middle !important',
    },
    emailCell:{
        width:"calc(100vw - 75vw)",
        whiteSpace:'normal'
    },
    imageNameCell:{
        maxWidth:"calc(100vw - 50vw)",
        whiteSpace:'normal',
    },
    // ** +edit user
    selectInput: {
        width: '100%',
        verticalAlign:'middle !important',
        fontSize:14,
        fontWeight:500,
        color:'#555555',
    },
    buttons: {
        display:'flex',
        '& :last-child':{
            marginRight:0,
        }
    },
    // terminal area listing
    buttonBarWrapper:{
        marginBottom:'0.75rem',
    },
    // import terminal area
    uploadButton:{
        width:50,
        height:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        '&:focus':{
            outline:0,
        },
    },
    // terminal listing
    shareIcon: {
        width: 30,
    },
    shareBtn: {
        backgroundColor:Colors.primary,
        borderColor:Colors.primary,
        '&:hover':{
            backgroundColor:'#196EA1e6',
            borderColor:'#196EA1e6',
            },
            alignItems:'center',
            justifyContent:"spaceBetween"
        },
    terminalLogo:{
        width:70,
        height:70,
        objectFit:'contain',
    },
    imageManagementLogo:{
         width:100,
        height:100,
        objectFit:'contain',
    },
    // edit terminal
     
    dropdownIcon: {
        fontSize: 16,
        color: '#b2b2b2',
        right: '12px',
        position: 'absolute',
        cursor:'pointer',
    },
    timeIcon:{
        fontSize: 16,
        color: '#555555',
        top:11.5,
        right:12,
        position: 'absolute',
        cursor:'pointer',
    },
    mapLogo: {
        width: '100%',
        backgroundColor: '#f4f4f4 !important',
    },
    // ===> Navbar <===
    bsTableHeight:{
        height:398,
    },
    bsHeaderTable:{
        display:'contents',
    },
    tableDataSpinner:{
        display:'table-cell'
    },
    tableSpinner:{
        position:'unset !important',
    },
    antSpin:{
        maxHeight:'100% !important',
    },
    uploaderInput:{
        display:'none',
    },
    imageUploaderlabel:{
        width:100,
        height:100,
        margin:'0 !important',
        // '& label':{
        // }
    },
    imageManagementUploaderlabel:{
        width:100,
        height:100,
        marginBottom:12,
    },
    terminalImage:{
        height:100,
        width:100,
        objectFit:'contain',
        cursor:'pointer'
    },
    editIcon:{
        color:'#000000',
        'margin-left':12,
    },
    fileSuccess:{
        color:'#43a047',
    },
    iframe:{
        width:300,
        height:240,
    },
    terminalTable:{
        marginBottom:'0 !important',
    },
    // Carousel 
    carouselContainer:{
        marginTop:'2.5%',
        alignItems:'center',
        justifyContent:'center',
        width:'60% !important',
        [theme.breakpoints.down('xs')]:{
            width:'100% !important',
        },
        '& .carousel-root':{
            display:'flex',
            justifyContent:'center',
            
        },
    },
    timlinePostCard:{
        border:'3px solid #135c8b',
        width:'100%',
        '& 	.MuiCardHeader-title':{
            color:Colors.primary,
        },
    },
    avatar:{
        width:'66px !important',
        height:'66px !important',
        objectFit:'cover',
    },
    carouselImage:{
        height:400,
        width:'100%',
        objectFit:'cover',
    },
    carouselDiv:{
        display:'flex',
        flexDirection:'row',
    },
    media:{
        height:400,
    },
    // skeleton
    mediaSkeleton:{
        height:300,
    },
    cardGrid: {
        padding:theme.spacing(0),
        [theme.breakpoints.up('sm')]:{
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        [theme.breakpoints.down('sm')]:{
            paddingLeft:theme.spacing(0),
            paddingRight:theme.spacing(0),
        }
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minWidth:'100% !important',
        marginTop:'-40px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    mapOverlay: {
        display:'flex',
        position: 'absolute',
        width:'95%',
        margin: '2.5%',
        flexDirection: 'row',
        padding: '2.5%',
        backgroundColor:'rgba(0,0,0,0.75)',
        borderRadius: 4,
        justifyContent:'space-between',
    },
    mapOverlayItem: {
        display:'flex',
    },
    
}));


