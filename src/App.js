// demo 1 https://preview.themeforest.net/item/akkhor-school-management-admin-template/full_screen_preview/23687250?_ga=2.38672867.1358797260.1658868264-1240890369.1657795515
// demo 1 https://technext.github.io/darkpan/form.html

import Header from "./shared/Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./authentication/RequireAuth";
import { publicRoutes as nestedAndPublicRoutes } from "./routes/publicRoutes";
import privateRoute from "./routes/privateRoute";
import NotFound from "./pages/NotFound/NotFound";

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
          <Route path="*" element={<NotFound/>} />

          {/* private routes with nested element*/}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth></RequireAuth>}>
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
