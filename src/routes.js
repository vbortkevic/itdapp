/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "fas fa-chart-line",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "earthquake risks",
    rtlName: "الرموز",
    icon: "fas fa-exclamation-triangle",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Overtopping risks",
    rtlName: "الرموز",
    icon: "fas fa-sort-amount-up",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "slope stability",
    rtlName: "خرائط",
    icon: "fas fa-grip-lines",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Areal Photos",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "fab fa-avianex",
    component: UserProfile,
    layout: "/admin"
  },

  {
    path: "/tables",
    name: "Ground sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-record-vinyl",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Weather sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-cloud-moon-rain",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Water sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-water",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Alerts",
    rtlName: "قائمة الجدول",
    icon: "fas fa-bell",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Reports",
    rtlName: "إخطارات",
    icon: "fas fa-clipboard-list",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Logs",
    rtlName: "طباعة",
    icon: "fas fa-book",
    component: Typography,
    layout: "/admin"
  }
];
export default routes;
