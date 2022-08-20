import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Account from '../pages/Dashboard/Account';
import Attendance from '../pages/Dashboard/Attendance';
import Classes from '../pages/Dashboard/Classes';
import ClassRoutines from '../pages/Dashboard/ClassRoutines';
import Exam from '../pages/Dashboard/Exam';
import Library from '../pages/Dashboard/Library';
import Parents from '../pages/Dashboard/Parents';
import Profile from '../pages/Dashboard/Profile';
import Settings from '../pages/Dashboard/Settings';
import Students from '../pages/Dashboard/Students';
import Subjects from '../pages/Dashboard/Subjects';
import Teachers from '../pages/Dashboard/Teachers';
import Tuitions from '../pages/Dashboard/Tuitions';

export const publicRoutes = [
    {path:"/dashboard/parents", name:"Parents", Component: Parents},
    {path:"/dashboard/teachers", name:"Teachers", Component: Teachers},
    {path:"/dashboard/students", name:"Students", Component: Students},
    {path:"/dashboard/library", name:"Library", Component: Library},
    {path:"/dashboard/classes", name:"Classes", Component: Classes},
    {path:"/dashboard/subjects", name:"Subjects", Component: Subjects},
    {path:"/dashboard/class-routines", name:"ClassRoutines", Component: ClassRoutines},
    {path:"/dashboard/attendance", name:"Attendance", Component: Attendance},
    {path:"/dashboard/exam", name:"Exam", Component: Exam},
    {path:"/dashboard/settings", name:"Settings", Component: Settings},
    {path:"/dashboard/profile", name:"Profile", Component: Profile},
    {path:"/dashboard/tuitions", name:"Tuitions", Component: Tuitions},
]