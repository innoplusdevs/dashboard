import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";

import { useSelector } from "react-redux";

import { LoginScreen } from "../components/Login/LoginScreen";

import { Layout } from 'antd';


export const AppRouter = () => {
  const sidebarCollapsed = useSelector(state => state.sidebar);

  console.log(sidebarCollapsed, 'sidebarState');

  return (
    <Router>
      <Layout>
        <Layout style={{ marginLeft: !sidebarCollapsed ? 200 : 80, background: '#fff' }}>
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
        </Layout>
      </Layout>
    </Router>
  );
};
