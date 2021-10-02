import React, { useState } from "react";

import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
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
          Profile
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          Stats
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          Manage users
        </Menu.Item>
      </Menu>
    </Sider>
  );
};