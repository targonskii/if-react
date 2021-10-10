import React from 'react';
import './App.css';
import Top from './components/top-section';
import AvailableHotels from './components/available';
import HomesHotels from './components/homes';

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
