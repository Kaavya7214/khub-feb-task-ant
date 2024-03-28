import React, { useEffect, useState } from 'react';
import { Bar } from '@ant-design/charts';
import { parse } from 'papaparse';
import { Layout,Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('Dataset (1).csv'); // Update with your CSV file path
      const csvText = await response.text();
      const parsedData = parse(csvText, { header: true }).data;
      
      // Filter out rows where Name is undefined or "0"
      const filteredData = parsedData.filter(item => item.Name && item.Name !== '0');
      
      // Sort data based on 'Marks' in descending order
      const sortedData = filteredData.sort((a, b) => b.Marks - a.Marks);
      
      setData(sortedData);
    };

    fetchData();
  }, []);

  const config = {
    data: data,
    xField: 'Marks', // Marks field on X-axis
    yField: 'Name', // Name field on Y-axis
    meta: {
      Marks: { alias: 'Marks Scored' }, // X-axis label
      Name: { alias: 'Student Name' }, // Y-axis label
    },
    transpose: true, // Switch orientation of axes
    yAxis: {
      position: 'left', // Position y-axis on the left side
      label: {
        style: {
          textAlign: 'start', // Align labels at the start of the axis
          textBaseline: 'middle', // Align labels vertically in the middle
        },
      },
    },
  };

  return (
    <div>
       <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <div style={{ width: '100%', height: '500px' }}>
        <h2 style={{ textAlign: 'center' }}>Student Marks</h2>
        <Bar {...config} />
      </div>
      </Layout>
    </div>
  );
};

export default BarChart;
