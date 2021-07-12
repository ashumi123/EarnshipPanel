import React from 'react';
// antd
import { Table as AntTable, Empty } from 'antd';
// Styles
import {useStyles} from './styles'
const Table =(props)=>{
    const classes = useStyles()
    const {loading, columns, dataSource, onChange, rowKey, searching} = props
    return (
        <AntTable 
            className={classes.tableWrapper} 
            locale={{emptyText: (<Empty description={searching == true ?"No data found" : "No data available"} image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>)}}
            loading={loading} 
            pagination={false} 
            scroll 
            bordered 
            columns={columns} 
            dataSource={dataSource} 
            onChange={onChange}
            showSorterTooltip={false}
            rowKey={rowKey}
        />
    )
}

export default Table