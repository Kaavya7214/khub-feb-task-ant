import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

const { Header, Content, Footer } = Layout;

const Table2 = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
      width: 150,
    },
    {
      title: 'Marks',
      dataIndex: 'Marks',
      width: 150,
    },
  ];

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

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
            <div style={{ marginBottom: 16, overflowX: 'auto' }}>
              <Button type="primary" onClick={() => console.log(selectedRowKeys)}>Print selected rows</Button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table2;
