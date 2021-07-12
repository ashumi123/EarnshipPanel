import React from 'react';
import clsx from 'clsx';
import { Navbar as BsNavbar } from 'react-bootstrap';
import {Input} from 'antd'
import {TextField} from '@material-ui/core'
import InputField from './inputField'
// Styles
import {useStyles} from './styles'

const NavbarSearch = (props) => {
  const {value, onChange} = props
  
  // Hooks declarations
  const classes = useStyles();
  // Props destructuring
  return (<div style={{display:'flex', alignItems:'center'}}>
    <BsNavbar.Brand className={classes.navbarTextSearch}>Search:&nbsp;</BsNavbar.Brand>
    <Input placeholder="Search" value={value} onChange={onChange} className={classes.navbarInput} />
</div>
    )
}

export default NavbarSearch

{/* <Search
      style={{borderRadius:'100px !important',}}
      className={classes.navbarInput}
      placeholder="Search"
      allowClear
      size="large"
      onSearch={onSearch}
    /> */}