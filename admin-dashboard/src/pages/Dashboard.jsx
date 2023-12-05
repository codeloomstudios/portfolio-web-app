import React from 'react';
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import SideMenu from '../partials/SideMenu';

const { Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
      <Layout>
        <Content style={{ padding: '24px' }}>
          <h1>Dashboard</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
