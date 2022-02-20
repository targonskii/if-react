import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Top from '../../components/TopSection';
import AvailableHotels from '../../components/AvailableHotels';
import HomesHotels from '../../components/Homes';
import Footer from '../../components/Footer';

import { getPopularHotels } from '../../redux/actions/hotelsActions';

const MainPage = () => {
  const availableHotels = useSelector(
    (state) => state.hotels.availableHotels || []
  );

  const popHotels = useSelector((state) => state.hotels.popularHotels || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularHotels());
  }, [dispatch]);

  return (
    <>
      <Top />
      {availableHotels?.length >= 1 && (
        <AvailableHotels availableHotels={availableHotels} />
      )}
      <HomesHotels hotels={popHotels} />
      <Footer />
    </>
  );
};

export default MainPage;
