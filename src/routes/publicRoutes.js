import { Route, Routes} from 'react-router-dom';
import Attendance from '../pages/Dashboard/Attendance';
import Dashboard from '../pages/Dashboard/Dashboard';
import Exam from '../pages/Dashboard/Exam';
import Library from '../pages/Dashboard/Library';
import Profile from '../pages/Dashboard/Profile';
import Settings from '../pages/Dashboard/Settings';
import Subjects from '../pages/Dashboard/Subjects';
import Tuitions from '../pages/Tuitions/Tuitions';

export const publicRoutes = [
    {path:"/dashboard/library", name:"Library", Component: Library},
    {path:"/dashboard/subjects", name:"Subjects", Component: Subjects},
    {path:"/dashboard/attendance", name:"Attendance", Component: Attendance},
    {path:"/dashboard/exam", name:"Exam", Component: Exam},
    {path:"/dashboard/settings", name:"Settings", Component: Settings},
    {path:"/dashboard/profile", name:"Profile", Component: Profile},
    {path:"/dashboard/tuitions", name:"Tuitions", Component: Tuitions},
]