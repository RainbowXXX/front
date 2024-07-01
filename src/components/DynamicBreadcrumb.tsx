import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';

const DynamicBreadcrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{pathSnippets[index]}</Link>
            </Breadcrumb.Item>
        );
    });

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {breadcrumbItems}
        </Breadcrumb>
    );
};

export default DynamicBreadcrumb;
