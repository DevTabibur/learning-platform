// demo 1 https://preview.themeforest.net/item/akkhor-school-management-admin-template/full_screen_preview/23687250?_ga=2.38672867.1358797260.1658868264-1240890369.1657795515

import Header from "./shared/Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./authentication/RequireAuth";
import { publicRoutes as nestedAndPublicRoutes } from "./routes/publicRoutes";
import privateRoute from "./routes/privateRoute";
import NotFound from "./pages/NotFound/NotFound";
import RequireAdmin from "./authentication/RequireAdmin";
import Admin from "./pages/Dashboard/Admin";
import Users from "./pages/Dashboard/Users";
import UserDetails from "./shared/UserDetails/UserDetails";
import Bookings from "./pages/Dashboard/Bookings";
import Messenger from "./pages/Messenger/Messenger";
import Chat from "./pages/Messenger/Chat";
import UploadTuitions from "./pages/UploadTuitions/UploadTuitions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header>
        <Routes>
          {/* nested route */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* public routes */}
            {nestedAndPublicRoutes.map(({ path, name, Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}
          </Route>

          {/* Dashboard login and registered component is not a nested route under dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* private routes with nested element*/}

          {/* user route */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth></RequireAuth>}>
              {privateRoute.map(({ path, name, Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>

          {/* Admin Route */}
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* nested route */}
              <Route path="admin" element={<Admin />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="upload-tuitions" element={<UploadTuitions />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserDetails />} />
            </Route>
          </Route>
        </Routes>
      </Header>
      <ToastContainer />
    </>
  );
}

export default App;
