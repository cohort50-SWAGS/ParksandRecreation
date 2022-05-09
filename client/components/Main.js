import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import TripCard from './TripCard'

function Main() {
    
  let searchResults = [];
  
  function searchData() {
       // WHAT IS THEIR ROUTE??
    fetch('/db/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        location: document.querySelector('#SearchBarCity').value,
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      // setting our response to a variable outside of fetch request so we can use it later to iterate and generate cards
      // if (!Array.isArray(data)) {
      //   searchResults = [];
      // } else {
        searchResults = data;
      // }
      })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

  // if (!searchResults.length)
  //   return (
  //     <div>
  //       <h2>Start Your Search!</h2>
  //     </div>
  //   );

  const searchResultsEl = searchResults.map((eachResult, i) => {
    return (
      <TripCard
        key={i}
        info={eachResult}
      />
    );
  });

  const location = useLocation();
// user saved trips
  //  console.log('main page state ', location.state);
  if (!location.state.userTrips.length)
    return (
      <div>
        <h2>You Have Not Saved Anything Yet.</h2>
      </div>
    );

  const tripsArrayEl = location.state.userTrips.map((eachSave, i) => {
    return (
      <TripCard
        key={i}
        info={eachSave}
      />
    );
  });

  return (
    <section className='mainSection'>
        <header className='searchHeader'>
          <h2> Search! </h2>
          <input
            className="inputField"
            id="SearchBarCity"
            type="text"
            placeholder="City"
          ></input>
            <button
            type="button"
            value="Search"
            onClick={searchData}
          >
            Search City
          </button>
      </header>
      <div className='searchResultsContainer'>{searchResultsEl}</div>
      <div className='tripCardContainer'>{tripsArrayEl}</div>
    </section>
  );
}

export default Main;
