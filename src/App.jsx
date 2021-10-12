import React from 'react';
import './App.css';
import Top from './components/Top-section';
import AvailableHotels from './components/Available';
import HomesHotels from './components/Homes';

function App() {
  return (
    <>
      <Top />
      <AvailableHotels />
      <HomesHotels />
    </>
  );
}

export default App;
