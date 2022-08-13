// demo 1 https://preview.themeforest.net/item/akkhor-school-management-admin-template/full_screen_preview/23687250?_ga=2.38672867.1358797260.1658868264-1240890369.1657795515
// demo 1 https://technext.github.io/darkpan/form.html

import Home from "./pages/Home/Home";
import DashboardSidebar from "./shared/DashboardSidebar/DashboardSidebar";
import Header from "./shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Dashboard/Admin";
import Parents from "./pages/Dashboard/Parents";
import Teachers from "./pages/Dashboard/Teachers";
import Students from "./pages/Dashboard/Students";
import Library from "./pages/Dashboard/Library";
import Account from "./pages/Dashboard/Account";
import Classes from "./pages/Dashboard/Classes";
import Subjects from "./pages/Dashboard/Subjects";
import Routine from "./pages/Dashboard/ClassRoutines";
import Attendance from "./pages/Dashboard/Attendance";
import Exam from "./pages/Dashboard/Exam";
import Settings from "./pages/Dashboard/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./authentication/RequireAuth";
import { publicRoutes as nestedAndPublicRoutes } from "./routes/publicRoutes";
import privateRoute from "./routes/privateRoute";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            {/* nested route */}
            {/* public routes */}
            {nestedAndPublicRoutes.map(({ path, name, Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}
          </Route>

          {/* Dashboard login and registered component is not a nested route under dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* private routes */}

          <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/dashboard" element={<Dashboard />}>
            {privateRoute.map(({ path, name, Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}
            </Route>
          </Route>
        </Routes>
      </Header>
    </>
  );
}

export default App;
