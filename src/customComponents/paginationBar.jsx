import React from 'react';
import clsx from 'clsx'
// Mui Components
import  Typography from '@material-ui/core/Typography'
import  Grid from '@material-ui/core/Grid'
import { usePagination } from '@material-ui/lab/Pagination';
import IconButton from "@material-ui/core/IconButton";
import Pagination from '@material-ui/lab/Pagination';
// utils methods
import cl from '../utils/cl'
// styles
import {useStyles} from './styles'

const PaginationBar = (props) => {
    const {
        count,
        totalCount,
        currentPage,
        onChange,
        prevPage,
        nextPage,
    } = props

    const classes = useStyles()
    // const { items } = usePagination({
    //     count: count,
    // });


    // const handleActionClick=(type,disabled)=>{
    //     if(disabled){
    //       return
    //     }else{
    //       if(type==="previous"){
    //         onChange(prevPage - 10)
    //       }else if(type==="next"){
    //         onChange(nextPage + 10)
    //       }
    //     }
    // }

    // const handlePageClick=(page,selected)=>{
    //     if(selected){
    //       return 
    //     }else{
    //      
    //       // onChange((page-1 *10))
    //     }
    // } 

    // const renderPagination=()=>{
    //     return (
    //         <nav>
    //   <ul className={classes.paginationUl}>
    //     {items.map(({ page, type, selected, disabled, onClick }, index) => {
    //       
    //       let children = null;

    //       if (type === 'start-ellipsis' || type === 'end-ellipsis') {
    //         children = <span className={classes.ellipses}>...</span>;
    //       } else if (type === 'page') {
    //         children = (
    //            <IconButton
    //             className={clsx([selected ? classes.selectedPage:classes.unSelectedPage])}
    //             // {...item}
    //             onClick={()=>handlePageClick(page,selected)}
    //           >
    //             {page}
    //           </IconButton>
    //         );
    //       } else {
    //         children = (
    //           <IconButton className={classes.paginationActions} 
    //           onClick={()=>handleActionClick(type,disabled)}
    //           >
    //             {type === "previous" ? "Previous" : "Next"}
    //           </IconButton>
    //         );
    //       }

    //       return <li key={index}>{children}</li>;
    //     })}
    //   </ul>
    // </nav>
    //     )
    // }


    return ( totalCount>0?
        <Grid container className={classes.paginationWrapper} justify="space-between" spacing={1}>
            <Grid item sm={6} className={classes.paginationGridItem} >
                <Typography variant="body2" className={classes.paginationText}>Showing {prevPage + 1} to { Math.min(nextPage, totalCount)} of {totalCount} entries</Typography>
            </Grid>
            <Grid item sm={6} className={clsx([classes.paginationGridItem, classes.justifyItemEnd])}>
                {/* {renderPagination()} */}
                <Pagination 
                className={classes.paginationUl} 
                // getItemAriaLabel={(props)=>console.log(props)} 
                count={count} 
                page={currentPage} 
                variant="text" 
                color="primary" 
                shape="rounded" 
                onChange={(e,page)=>{
                    onChange(e,page)}} />
            </Grid>
            </Grid>
        : true
    )
}


export default PaginationBar