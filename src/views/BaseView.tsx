import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { CompassOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import DynamicBreadcrumb from "../components/DynamicBreadcrumb.tsx";

const { Header, Content, Footer, Sider } = Layout;


const BaseView: React.FC = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        {
            label: '词云',
            key: 'wordcloud',
            icon: <PieChartOutlined />,
            onClick: () => navigate('wordcloud'),
        },
        {
            label: '统计',
            key: 'detail',
            icon: <DesktopOutlined />,
            onClick: () => navigate('detail'),
        },
        {
            label: 'Map',
            key: 'map',
            icon: <CompassOutlined />,
            onClick: () => navigate('map'),
        },
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <DynamicBreadcrumb/>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            height: '100%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default BaseView;