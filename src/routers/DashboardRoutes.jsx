import { Switch, Route, Redirect } from "react-router-dom";

import { Sidebar } from '../components/Sidebar/Sidebar'
import { HomeScreen } from "../components/Home/HomeScreen";
import { UsersScreen } from "../components/Users/UsersScreen";
import { SettingsScreen } from "../components/Settings/SettingsScreen";

export const DashboardRoutes = () => {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route exact path='/dashboard/home' component={HomeScreen} />
        <Route path='/dashboard/users' component={UsersScreen} />
        <Route path='/dashboard/settings' component={SettingsScreen} />

        <Redirect to='/dashboard/home' />
      </Switch>
    </div>
  );
};
