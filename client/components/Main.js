import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import TripCard from './TripCard'
import NavigationBar from './NavigationBar';
import SearchTrips from './SearchTrips'
import SaveTrips from './SaveTrips';
import { Outlet } from 'react-router-dom';

function Main() {

  return (
    <div>
      <NavigationBar />
      <Outlet/>
      {/* <SearchTrips />
      <SaveTrips/> */}
    </div>
  );
}

export default Main;
