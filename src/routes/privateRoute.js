import React from 'react'
import Account from '../pages/Dashboard/Account'
import Admin from '../pages/Dashboard/Admin'

export const privateRoute = [
    {path:"/dashboard/admin", name: Admin, Component: Admin},
    {path:"/dashboard/account", name: Account, Component: Account},
]

export default privateRoute