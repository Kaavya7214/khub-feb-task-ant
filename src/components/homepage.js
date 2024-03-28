import React from 'react';
import { Layout, Menu } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2" onClick={() => scrollToElement('tables')}>Visualise</Menu.Item>
          <Menu.Item key="3" onClick={() => scrollToElement('visualise')}>Tables</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        
        <div className="site-layout-content">
          <h1>Welcome to Our Website</h1>
          <p>This is a simple homepage created using Ant Design.<br></br> Here we took a sample dataset to show the table format and the visualisation of different features of the dataset using ant design<br></br>There are 10 cards below which are distributed as 5 of them are the cards which stored the data of the table information and other 5 cards stores the visualisation part of the datset given<br></br>The sample dataset taken here are the student data with the info of their time of study and their enrolled courses with their respective names and gender</p>
        </div>
        <div id="tables">
        <h1>Visualization-Data</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/visualization1">
          <Card title="Visualization 1"
            style={{ width: 300, margin: 20 }}
            cover={<img alt="Visualization 1" src="https://tse3.mm.bing.net/th?id=OIP.tysarnoYIQlIX92FFLtIlAHaHZ&pid=Api&P=0&h=180" />}>
            {/* Visualization 1 content */}
          </Card>
        </Link>
        <Link to="/visualization2">
          <Card title="Visualization 2" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="http://www.learningaboutelectronics.com/images/Graph-plot-with-matplotlib-from-a-CSV-file-using-the-CSV-module-in-Python.png" />}>
            {/* Visualization 2 content */}
          </Card>
        </Link>
        <Link to="/visualization3">
          <Card title="Visualization 3" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://hmstrust.org.au/wp-content/uploads/2017/11/Education-pie-chart-plain-550x487.png" />}>
            {/* Visualization 3 content */}
          </Card>
        </Link>
        <Link to="/visualization4">
          <Card title="Visualization 4" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://tse4.mm.bing.net/th?id=OIP.0c3aNQAc3BGMZle0r4YgvAAAAA&pid=Api&P=0&h=180" />}>
            {/* Visualization 4 content */}
          </Card>
        </Link>
        <Link to="/visualization5">
          <Card title="Visualization 5" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://tse1.mm.bing.net/th?id=OIP.DYs0qtGFFOdqHqFMJJ3HDgHaH5&pid=Api&P=0&h=180" />}>
            {/* Visualization 5 content */}
          </Card>
        </Link>
      </div>
        </div>
        <div id="visualise">
        <h1>Tabular-Data</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/table1">
          <Card title="Table 1" style={{ width: 300, margin: 20 }}
          >
            {/* Table 1 content */}
          </Card>
        </Link>
        <Link to="/table2">
          <Card title="Table 2" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="Marks.png" />}>
            {/* Table 2 content */}
          </Card>
        </Link>
        <Link to="/table3">
          <Card title="Table 3" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="course.png" />}>
            {/* Table 3 content */}
          </Card>
        </Link>
        <Link to="/table4">
          <Card title="Table 4" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="table4.png" />}
          >
            {/* Table 4 content */}
          </Card>
        </Link>
        <Link to="/table5">
          <Card title="Table 5" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="table5.png" />}>
            {/* Table 5 content */}
          </Card>
        </Link>
      </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
}

export default HomePage;
