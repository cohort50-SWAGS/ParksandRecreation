import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import TripCard from './TripCard'

function SearchTrips() {
  const [searchResults, setSearchResults] = useState([]);
  function searchData() {
       // WHAT IS THEIR ROUTE??
    fetch('/api/getlocation', {
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
        // console.log(data);
        setSearchResults(data)
    })
      // setting our response to a variable outside of fetch request so we can use it later to iterate and generate cards
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

  // console.log('searchResults outside of promisechain', searchResults)

  let tripCardsSearch;
  const _location = useLocation();
  // Huge workaround
  let state = {..._location.state,
               userTrips:[]}
  
  let location = {
                  ..._location,
                  state
                  };
  
  console.log(location);

  //useEffect = useless (don't even try it here, you'll be disappointed)
  console.log('location', location);
  
  const searchResultsEl = searchResults.map((eachResult, i) => {
    return (
      <TripCard
        key={i}
        info={eachResult}
        userTrips={location.state.userTrips}
        username={location.state.username}
      />
    );
  });


    // console.log('tripCardsearch outside useEffect ', tripCardsSearch)


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
      <p></p>
      <div className='tripCardContainer'>{tripsArrayEl}</div>
    </section>
  );

  // //getting testy
  // return (
  //   <h1>Hi</h1>
  // )
}

export default SearchTrips;
