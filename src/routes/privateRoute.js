import React from 'react'
import Account from '../pages/Dashboard/Account'
import Admin from '../pages/Dashboard/Admin'
import Users from '../pages/Dashboard/Users'

export const privateRoute = [
    {path:"/dashboard/admin", name: Admin, Component: Admin},
    {path:"/dashboard/account", name: Account, Component: Account},
    {path:"/dashboard/users", name: Users, Component: Users},
]

export default privateRoute