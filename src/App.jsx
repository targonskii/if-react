import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import './App.css';

import Top from './components/TopSection';
import AvailableHotels from './components/Available';
import HomesHotels from './components/Homes';

// import data from './constants/data';

function App() {
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <Top searchData={setHotels} />
      {hotels?.length >= 1 && <AvailableHotels hotels={hotels} />}
      <HomesHotels />
    </>
  );
}

export default App;

// App.propTypes = {
//   setHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
