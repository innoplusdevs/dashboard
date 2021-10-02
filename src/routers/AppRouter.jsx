import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";

import { LoginScreen } from "../components/Login/LoginScreen";
import { Sidebar } from "../components/Sidebar/Sidebar";


export const AppRouter = () => {

  return (
    <Router>
      <div>
        <Sidebar />

        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={LoginScreen}
          /* isAuthenticated={user.logged} */
          />

          <PublicRoute
            path='/'
            component={DashboardRoutes}
          /* isAuthenticated={user.logged} */
          />
        </Switch>
      </div>
    </Router>
  );
};
