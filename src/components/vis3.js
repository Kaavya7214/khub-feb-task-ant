import React, { useEffect, useState } from 'react';
import { Pie } from '@ant-design/charts';
import { parse } from 'papaparse';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const PieChart = ({ data }) => {
  const config = {
    data: data,
    angleField: 'number_courses',
    colorField: 'Marks',
    radius: 0.9,
    label: {
      type: 'outer',
      content: '{number_courses} - {percent}',
    },
    interactions: [{ type: 'element-active' }],
  };

  return <Pie {...config} />;
};

const PieChartExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('Dataset (1).csv');
      const csvText = await response.text();
      const parsedData = parse(csvText, { header: true }).data;
      setData(parsedData);
    };

    fetchData();
  }, []);

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
    <div style={{ width: '500px', margin: 'auto',textAlign: 'center' }}>
      <h2>PieChart</h2>
      <PieChart data={data} />
    </div>
    </Layout>
  );
};

export default PieChartExample;
