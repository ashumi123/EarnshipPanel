import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Navigation
import { useHistory, useLocation } from "react-router-dom";
// Styles
import "antd/dist/antd.css";
import { useStyles } from "./styles";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faTrophy,
  faLocationArrow,
  faSignOutAlt,
  faFileAlt,
  faImages,
  faBroadcastTower,
  faUsersCog,
  faVideo,
  faHashtag,
  faAd,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
// Mui Components
import withWidth, { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  List,
  Typography,
  Divider,
  ListItem,
  Collapse,
} from "@material-ui/core";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDown";
// Custom components

// Constants
import { AppImages } from "../themes/appImages";
import { Colors } from "../themes/colors";
import localStorage from "../utils/localStorage";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  handleNavigationStateAction,
  handleSidebarDrawerToggleStateAction,
} from "../store/actions";

const DashboardLayout = (props) => {
  // Hooks declarations
  const matches = useMediaQuery("(min-hight:400px)");
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const tabItemRef = useRef(null);
  const dispatch = useDispatch();
  const commonState = useSelector((state) => state.commonReducer);
  // Global state initialization
  const {
    sidebarRouteIndex,
    sidebarNestedRouteIndex,
    sidebarDrawerToggleState,
  } = commonState;

  // local state initialization
  const [toggleMenu, setToggleMenu] = useState(false);

  //Images destructuring
  const { logo } = AppImages;

  // sidebar tabs for dashboard
  const tabs = [
    {
      icon: faHome,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: faUsers,
      name: "User Management",
      path: "/users",
    },
    {
      icon: faVideo,
      name: "Post Management",
      path: "/post",
    },
    {
      icon: faHashtag,
      name: "Hash Tag Management",
      path: "/tag",
    },
    {
      icon: faUsersCog,
      name: "Cunsultant Management",
      path: "/Consultant",
    },
    {
      icon: faFileAlt,
      name: "Report Post",
      path: "/report-list",
    },
    {
      icon: faAd,
      name: "Admob Management",
      path: "/ads-management",
    },
    {
      icon: faBell,
      name: "Notification Send",
      path: "/Notification",
    },
    {
      icon: faSignOutAlt,
      name: "Logout",
      path: "/login",
    },
  ];
  const nestedTabs = [
    {
      icon: faLocationArrow,
      name: "Terminal Area Listing",
      path: "/terminal-area-list",
    },
    {
      icon: faCompass,
      name: "Terminal Listing",
      path: "/terminals",
    },
  ];

  // Lifecycle Hooks
  useEffect(() => {
    if (isWidthUp("md", props.width)) {
      dispatch(handleSidebarDrawerToggleStateAction(true));
    } else if (isWidthDown("md", props.width)) {
      dispatch(handleSidebarDrawerToggleStateAction(false));
    }
  }, [props.width]);

  useEffect(() => {
    const routeIndex = localStorage.getSidebarItemIndex();
    const nestedRouteIndex = localStorage.getSidebarNestedItemIndex();
    if (nestedRouteIndex) {
      dispatch(handleNavigationStateAction(2, false));
      dispatch(handleNavigationStateAction(nestedRouteIndex, true));
    } else {
      dispatch(handleNavigationStateAction(routeIndex || 0, false));
    }
  }, []);

  const handleTabClick = (event, name, index, path, isTerminalTab) => {
    if (name == "Logout") {
      localStorage.removeToken();
      localStorage.removeUserId();
      window.location.reload();
    }
    if (!isTerminalTab) {
      dispatch(handleNavigationStateAction(index, false));
      setToggleMenu(false);
      history.push(path);
    } else {
      // dispatch(handleNavigationStateAction(null, true))
      handleToggleMenuTab();
    }
  };

  //Callback methods
  const handleToggleMenuTab = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant={!isWidthUp("md", props.width) ? "temporary" : "persistent"}
        anchor="left"
        open={sidebarDrawerToggleState}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={!isWidthUp("md", props.width) ? "right" : "left"}
        onClose={() =>
          sidebarDrawerToggleState
            ? dispatch(handleSidebarDrawerToggleStateAction(false))
            : dispatch(handleSidebarDrawerToggleStateAction(true))
        }
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.drawerLogo}>
          <img
            src={logo}
            className={classes.logo}
            onClick={() => {
              dispatch(handleNavigationStateAction(0, false));
              history.push("/dashboard");
            }}
          />
          <Typography variant="h6" className={classes.drawerTitle} id="title">
            ADMIN
          </Typography>
        </div>
        <Divider variant="middle" />
        <List classes={{ padding: classes.listPadding }}>
          <div className={classes.drawerList}>
            {tabs.map(({ icon, name, path }, index) => {
              let isTerminalTab = name == "Terminal Management" ? true : false;
              let isSelectedtab = sidebarRouteIndex == index ? true : false;
              let iconTheme = {
                color: isSelectedtab
                  ? !isTerminalTab
                    ? Colors.white
                    : Colors.white
                  : Colors.title,
                fontSize: 18,
                position: "absolute",
                right: 5,
                top: 25,
              };
              return (
                <React.Fragment key={name}>
                  <ListItem
                    onClick={(event) =>
                      handleTabClick(event, name, index, path, isTerminalTab)
                    }
                  >
                    <div
                      className={
                        isSelectedtab
                          ? classes.drawerBtnSelected
                          : classes.drawerBtn
                      }
                    >
                      <div className={classes.drawerIconContainer}>
                        <FontAwesomeIcon
                          icon={icon}
                          color={isSelectedtab ? Colors.white : Colors.greyIcon}
                          className={clsx([
                            classes.tabIcon,
                            isSelectedtab && classes.seletcedTabIcon,
                          ])}
                        />
                      </div>
                      <p
                        className={
                          isSelectedtab
                            ? classes.drawerBtnTextSelected
                            : classes.drawerBtnText
                        }
                      >
                        {name}
                      </p>
                      {isTerminalTab ? (
                        toggleMenu ? (
                          <ArrowDropUpRoundedIcon style={iconTheme} />
                        ) : (
                          <ArrowDropDownRoundedIcon style={iconTheme} />
                        )
                      ) : (
                        true
                      )}
                    </div>
                  </ListItem>
                  {isTerminalTab ? (
                    <Collapse
                      in={toggleMenu}
                      timeout="auto"
                      unmountOnExit
                      classes={{ wrapper: classes.nestedMenuWrapper }}
                    >
                      <List component="div" disablePadding>
                        <div>
                          {nestedTabs.map(({ icon, name, path }, id) => {
                            let isNestedSelectedTab =
                              sidebarNestedRouteIndex == id ? true : false;
                            return (
                              <React.Fragment key={name}>
                                <ListItem>
                                  <div
                                    className={
                                      isNestedSelectedTab
                                        ? classes.drawerNestedBtnSelected
                                        : classes.drawerNestedBtn
                                    }
                                    onClick={() => {
                                      dispatch(
                                        handleNavigationStateAction(
                                          index,
                                          false
                                        )
                                      );
                                      dispatch(
                                        handleNavigationStateAction(id, true)
                                      );
                                      history.push(path);
                                    }}
                                  >
                                    <div
                                      className={classes.drawerIconContainer}
                                    >
                                      <FontAwesomeIcon
                                        icon={icon}
                                        color={
                                          isNestedSelectedTab
                                            ? Colors.white
                                            : Colors.greyIcon
                                        }
                                        className={clsx([
                                          classes.icon,
                                          isNestedSelectedTab &&
                                            classes.seletcedTabIcon,
                                        ])}
                                      />
                                    </div>
                                    <p
                                      className={
                                        isNestedSelectedTab
                                          ? classes.drawerBtnTextSelected
                                          : classes.drawerBtnText
                                      }
                                    >
                                      {name}
                                    </p>
                                  </div>
                                </ListItem>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </List>
                    </Collapse>
                  ) : (
                    true
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </List>
        <div className={classes.drawerBackground} style={{ zIndex: -7 }} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebarDrawerToggleState,
        })}
      >
        {props.children}
      </main>
    </div>
  );
};

export default withWidth()(DashboardLayout);
