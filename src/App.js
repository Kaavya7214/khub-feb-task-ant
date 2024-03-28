import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import TablePage from './components/table1';
import Table2 from './components/table2';
import Table3 from './components/table3';
import Table4 from './components/table4';
import Table5 from './components/table5';
import BarChart from './components/vis1';
import ScatterPlot from './components/vis2';
import PieChartExample from './components/vis3';
import LineChart from './components/vis4';
import Histogram from './components/vis5';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/table1" element={<TablePage />} />
      <Route path="/table2" element={<Table2 />} />
      <Route path="/table3" element={<Table3 />} />
      <Route path="/table4" element={<Table4 />} />
      <Route path="/table5" element={<Table5 />} />
      <Route path="/visualization1" element={<BarChart />} />
      <Route path="/visualization2" element={<ScatterPlot />} />
      <Route path="/visualization3" element={<PieChartExample />} />
      <Route path="/visualization4" element={<LineChart />} />
      <Route path="/visualization5" element={<Histogram />} />
    </Routes>
  );
};

export default App;
