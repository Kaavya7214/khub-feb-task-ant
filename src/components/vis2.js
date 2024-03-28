import React, { useEffect, useState } from 'react';
import { Scatter } from '@ant-design/charts';
import { parse } from 'papaparse';
import { Layout,Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const ScatterPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('Dataset (1).csv'); // Update with your CSV file path
      const csvText = await response.text();
      const parsedData = parse(csvText, { header: true }).data;
      setData(parsedData);
    };

    fetchData();
  }, []);

  const config = {
    data: data,
    xField: 'number_courses', // X-axis field
    yField: 'time_study', // Y-axis field
    sizeField: 'Marks', // Size of the points
    pointStyle: {
      fillOpacity: 0.6, // Opacity of the points
      symbol: 'circle', // Shape of the points
    },
    colorField: 'Name', // Color based on Gender
    meta: {
      number_courses: { alias: 'Number of Courses' },
      time_study: { alias: 'Time Study' }, // X-axis label
      Marks: { alias: 'Marks Scored' }, // Y-axis label // Size label
    },
    tooltip: {
      fields: ['Name', 'number_courses', 'Marks', 'time_study'], // Fields to display in tooltip
      formatter: (datum) => {
        return { name: datum.Name, value: `${datum.number_courses}, ${datum.Marks}, ${datum.time_study}` };
      },
    },
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
    <div style={{ width: '100%', height: '500px',textAlign: 'center' }}>
      <h2>ScatterPlot</h2>
      <Scatter {...config} />
    </div>
    </Layout>
  );
};

export default ScatterPlot;
