import React, {useState, useEffect} from 'react';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';

function Main() {

  return (
    <div>
      <NavigationBar />
      <Outlet/>
    </div>
  );
}

export default Main;
