import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';

function Error() {

  return (
    <div>
     <p className='m-5'>404 - Page Not Found</p>
    </div>
  );
}

export default Error;
