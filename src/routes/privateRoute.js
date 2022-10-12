import React from "react";
import Account from "../pages/Dashboard/Account";
import Admin from "../pages/Dashboard/Admin";
import Bookings from "../pages/Dashboard/Bookings";
import Notifications from "../pages/Dashboard/Notifications";
import Users from "../pages/Dashboard/Users";
import Chat from "../pages/Messenger/Chat";
import Messenger from "../pages/Messenger/Messenger";
import UpdateInfo from "../shared/UserDetails/UpdateInfo";
import UserDetails from "../shared/UserDetails/UserDetails";

export const privateRoute = [
  // {path:"/dashboard/admin", name: Admin, Component: Admin},
  {
    path: "/dashboard/notification",
    name: Notifications,
    Component: Notifications,
  },
  { path: "/dashboard/account", name: Account, Component: Account },
  { path: "/dashboard/messenger", name: Messenger, Component: Messenger },
  { path: "/dashboard/chat", name: Chat, Component: Chat },
  // {path:"/dashboard/users", name: Users, Component: Users},
  // {path:"/dashboard/bookings", name: Bookings, Component: Bookings},
  // {path:"/dashboard/users/:id", name: Users, Component: UserDetails},
];

export default privateRoute;
