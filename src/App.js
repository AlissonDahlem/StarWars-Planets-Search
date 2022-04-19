import React from 'react';
import './App.css';
import GlobalProvider from './context/GlobalProvider';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <GlobalProvider>
      <MainContainer />
    </GlobalProvider>
  );
}

export default App;
