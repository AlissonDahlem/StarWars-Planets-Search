import React from 'react';
import './App.css';
import GlobalProvider from './context/GlobalProvider';
import Table from './components/Table';

function App() {
  return (
    <GlobalProvider>
      <span>Hello, world!</span>
      <Table />
    </GlobalProvider>
  );
}

export default App;
