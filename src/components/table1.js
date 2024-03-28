import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Table } from 'antd';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

const { Header, Content, Footer } = Layout;

const TablePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch CSV file
    fetch('Dataset (1).csv')
      .then((response) => response.text())
      .then((csvText) => {
        // Parse CSV
        const { data } = Papa.parse(csvText, { header: true });
        setData(data);
      });
  }, []);

  const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({ title: key, dataIndex: key })) : [];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Card title="Table 1" style={{ margin: 20 }}>
            <div style={{ overflowX: 'auto' }}>
              <Table dataSource={data} columns={columns} scroll={{ x: true }} />
            </div>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default TablePage;
