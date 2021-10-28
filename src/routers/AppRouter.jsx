import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { useSelector } from "react-redux";

import { Layout } from 'antd';
import { routes } from "../routes/routes";
import { Sidebar } from "../components/Sidebar/Sidebar";


export const AppRouter = () => {
  const sidebarCollapsed = useSelector(state => state.sidebar);

  console.log(sidebarCollapsed, 'sidebarState');

  return (
    <Router>
      <Layout style={{ marginLeft: !sidebarCollapsed ? 200 : 80, background: '#fff' }}>
        <Sidebar />
        {/* 
        <Switch>
            <PublicRoute
            exact
            path='/login' component={LoginScreen}
          /* isAuthenticated={user.logged} 
          />

          <PublicRoute
            path='/'
            component={DashboardRoutes}
          /* isAuthenticated={user.logged} 
          /> */}

        <Switch>
          {routes.map(r => (
            <PublicRoute component={r.component} exact path={r.path} key={r.path} />
          ))}
        </Switch>
      </Layout>
    </Router >
  );
};
