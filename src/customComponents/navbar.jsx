import React from 'react';
import clsx from 'clsx';
import {useMediaQuery ,useTheme} from '@material-ui/core'
import { Navbar as BsNavbar } from 'react-bootstrap';
import NavbarSearch from './navbarSearch'
// Styles
import {useStyles} from './styles'

const Navbar = (props) => {
  // Hooks declarations
  const classes = useStyles();
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  // Props destructuring
  const {title,searchable } = props

  return (
        <BsNavbar className={classes.header} variant="dark">
            <BsNavbar.Brand className={classes.navbarText}>{title}</BsNavbar.Brand>
               {matches?searchable && <NavbarSearch value={searchable && props.value} onChange={searchable && props.onChange} />:true}
        </BsNavbar>
    )
}

export default Navbar

