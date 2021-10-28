import { HomeScreen } from "../components/Home/HomeScreen";
import { LoginScreen } from "../components/Login/LoginScreen";
import { Profile } from "../components/Profile/Profile";
import { ManageUsers } from "../components/Users/ManageUsers";

import {
    BarChartOutlined,
    UsergroupAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Stats } from "../components/Stats/Stats";

export const routes = [
    {
        name: 'Home', path: '/dashboard/home', component: HomeScreen
    },

    {
        name: 'Manage Users', path: '/dashboard/users', component: ManageUsers,
        icon: <UsergroupAddOutlined />
    },

    {
        name: 'Profile', path: '/dashboard/profile', component: Profile,
        icon: <UserOutlined />
    },

    {
        name: 'Stats', path: '/dashboard/stats', component: Stats,
        icon: <BarChartOutlined />
    },

    {
        name: 'Login', path: '/login', component: LoginScreen
    }
]