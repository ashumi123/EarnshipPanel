//React router navigation
import {
  Dashboard,
  UserListing,
  ViewSavedLocations,
  UserDetails,
  EditUserDetails,
  PostListing,
  TerminalReportPostDetails,
  ReportPost,
  ReportPostDetails,
  ImageListing,
  AddImage,
  PremimumList,
  PaymentManagement,
} from "../components";
import { Redirect } from "react-router-dom";
import { RadarEntry } from "../components/ConsultantManagement/ConsultantListing";
import { AddManagement } from "../components/AddManagement/addManagement";
import { NotiManagement } from "../components/NotificationManagement/notiManagement";

export default [
  {
    path: "/",
    component: () => <Redirect to="/dashboard" />,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/users",
    component: UserListing,
  },
  {
    // path:"/view-user-details/:id",
    path: "/view-saved-locations",
    component: ViewSavedLocations,
  },
  {
    // path:"/view-user-details/:id",
    path: "/view-user-details",
    component: UserDetails,
  },
  {
    // path:"/view-saved-locations/:id",
    path: "/view-saved-locations",
    component: UserDetails,
  },
  {
    // path:"/edit-user/:id",
    path: "/edit-user",
    component: EditUserDetails,
  },
  
  {
    // path:"/post/:id",
    path: "/post",
    component: PostListing,
  },
  {
    // path:"/view-manage-post/:id",
    path: "/view-manage-post",
    component: TerminalReportPostDetails,
  },
 
  {
    path: "/report-list",
    component: ReportPost,
  },
  {
    // path:"/view-report-list/:id",
    path: "/view-report-list",
    component: ReportPostDetails,
  },
  {
    path: "/tag",
    component: ImageListing,
  },
  {
    path: "/add-tag",
    component: AddImage,
  },
  {
    path: "/Consultant",
    component: RadarEntry,
  },
  {
    path:'/ads-management',
    component:AddManagement
  },
  {
    path:'/Notification',
    component:NotiManagement
  },
  {
    path:'/premimum',
    component:PremimumList
  },
  {
    path:'/payment',
    component:PaymentManagement
  }
];
