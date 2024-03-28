import React, { useState, useEffect } from 'react';
import { Table, Layout, Menu } from 'antd';
import Papa from 'papaparse';
import { Link } from 'react-router-dom'; // Import PapaParse library for parsing CSV

const { Header, Content, Footer } = Layout;

const Table5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('Dataset (1).csv'); // Provide the path to your CSV file
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      
      // Parse the CSV data using PapaParse
      const parsedData = Papa.parse(csv, { header: true }).data;
      setData(parsedData);
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      width: 150,
    },
    {
      title: 'number_courses',
      dataIndex: 'number_courses',
      width: 150,
    },
    {
      title: 'time_study',
      dataIndex: 'time_study',
    },
    {
        title: 'Marks',
        dataIndex: 'Marks',
      },
  ];

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
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 50,
            }}
            scroll={{
              y: 360,
            }}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table5;
