import { Switch, Route, Redirect } from "react-router-dom";

import { Sidebar } from '../components/Sidebar/Sidebar'
import { HomeScreen } from "../components/Home/HomeScreen";
import { ManageUsers } from "../components/Users/ManageUsers";
import { Profile } from "../components/Profile/Profile";

export const DashboardRoutes = () => {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route exact path='/dashboard/home' component={HomeScreen} />
        <Route path='/dashboard/users' component={ManageUsers} />
        <Route path='/dashboard/profile' component={Profile} />

        <Redirect to='/dashboard/home' />
      </Switch>
    </div>
  );
};
