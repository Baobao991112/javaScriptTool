import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BellOutlined,
  DeploymentUnitOutlined,
  ExperimentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import request from "../api/index.js";
import "./index.scss";

const { Header, Content, Sider } = Layout;

const navItems: MenuProps["items"] = [
  {
    key: "1",
    label: "主页",
  },
  {
    key: "2",
    label: "用户",
  },
  {
    key: "3",
    label: "管理",
  },
];

const linkItems: MenuProps["items"] = [
  {
    key: "home",
    icon: React.createElement(HomeOutlined),
    label: <Link to="/">首页</Link>,
  },
  {
    key: `call`,
    icon: React.createElement(BellOutlined),
    label: `沟通`,
    children: [
      {
        key: "qq",
        label: "腾讯qq",
      },
      {
        key: "wx",
        label: "微信",
      },
    ],
  },
  {
    key: `garph`,
    icon: React.createElement(DeploymentUnitOutlined),
    label: <Link to="/xflow-garph">流程</Link>,
  },
  {
    key: `experiment`,
    icon: React.createElement(ExperimentOutlined),
    label: `实验`,
  },
];

const Layouts = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navItems}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["call"]}
            style={{ height: "100%", borderRight: 0 }}
            items={linkItems}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Layouts;
