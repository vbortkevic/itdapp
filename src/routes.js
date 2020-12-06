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
import Weather from "views/Weather.js";
import EmptyScreen from "views/EmptyScreen.js";

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
    path: "/earthquake",
    name: "earthquake risks",
    rtlName: "الرموز",
    icon: "fas fa-exclamation-triangle",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/Overtopping",
    name: "Overtopping risks",
    rtlName: "الرموز",
    icon: "fas fa-sort-amount-up",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/slope",
    name: "slope stability",
    rtlName: "خرائط",
    icon: "fas fa-grip-lines",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/areal",
    name: "Areal Photos",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "fab fa-avianex",
    component: EmptyScreen,
    layout: "/admin"
  },

  {
    path: "/sensors",
    name: "Ground sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-record-vinyl",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/weather",
    name: "Weather sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-cloud-moon-rain",
    component: Weather,
    layout: "/admin"
  },
  {
    path: "/watersensors",
    name: "Water sensors",
    rtlName: "قائمة الجدول",
    icon: "fas fa-water",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/alerts",
    name: "Alerts",
    rtlName: "قائمة الجدول",
    icon: "fas fa-bell",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    rtlName: "إخطارات",
    icon: "fas fa-clipboard-list",
    component: EmptyScreen,
    layout: "/admin"
  },
  {
    path: "/logs",
    name: "Logs",
    rtlName: "طباعة",
    icon: "fas fa-book",
    component: EmptyScreen,
    layout: "/admin"
  }
];
export default routes;
