import React, { useState, useEffect } from 'react';
import { Table, Layout, Menu } from 'antd';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Table3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch CSV file
    fetch('Dataset (1).csv')
      .then(response => response.text())
      .then(csvText => {
        // Parse CSV
        const { data } = Papa.parse(csvText, { header: true });
        // Set the parsed data to state
        setData(data);
      });
  }, []);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      width: '25%', // Adjust the width of the column
    },
    {
      title: 'number_courses',
      dataIndex: 'number_courses',
      sorter: (a, b) => a.number_courses - b.number_courses,
      sortDirections: ['descend', 'ascend'],
      width: '25%', // Adjust the width of the column
    },
    {
      title: 'time_study',
      dataIndex: 'time_study',
      sorter: (a, b) => a.time_study - b.time_study,
      sortDirections: ['descend', 'ascend'],
      width: '25%', // Adjust the width of the column
    },
    {
      title: 'Marks',
      dataIndex: 'Marks',
      sorter: (a, b) => a.Marks - b.Marks,
      sortDirections: ['descend', 'ascend'],
      width: '25%', // Adjust the width of the column
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
          <Table columns={columns} dataSource={data} scroll={{ x: true }} /> {/* Enable horizontal scrolling */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table3;
