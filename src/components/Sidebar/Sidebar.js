import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsed } from '../../actions/actions';

import { Layout, Menu } from 'antd';
import { routes } from "../../routes/routes";


const { Sider } = Layout;

export const Sidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(state => state.sidebar);

  const { pathname } = useLocation();

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
      <Menu theme='dark' defaultSelectedKeys={[pathname]}>
        {routes.map(({ name, path, icon }) => (
          icon &&
          <Menu.Item icon={icon} key={path}>
            <Link to={path}>{name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider >
  );
};