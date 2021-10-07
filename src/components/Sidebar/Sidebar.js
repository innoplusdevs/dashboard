import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsed } from '../../actions/actions';

import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export const Sidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(state => state.sidebar);


  const toggle = () => {
    dispatch(sidebarCollapsed(!collapsed));
  }

  return (
    <Sider
      collapsible collapsed={collapsed} onCollapse={toggle}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/dashboard/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          Stats
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          Manage users
        </Menu.Item>
      </Menu>
    </Sider >
  );
};