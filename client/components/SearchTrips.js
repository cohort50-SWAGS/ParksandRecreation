import React, {useState, useEffect} from 'react';
import TripCard from './TripCard'
import { Button } from 'react-bootstrap'

function SearchTrips() {
  const [ searchResults, setSearchResults ] = useState([]);

  function searchData() {
    fetch('/api/getInput', {
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON'},
      body: JSON.stringify({ location: document.querySelector('#SearchBarCity').value})
    })
    .then(resp => resp.json())
    .then(data => setSearchResults(data))
    .catch(err => console.log('Login page: user not found', err))
  };

  function sendCurrLocation() {

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      fetch('/api/getCurrent', {
        method: 'POST',
        headers: {'Content-Type': 'Application/JSON'},
        body: JSON.stringify({latitude, longitude})
      })
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(err => console.log(err));

      return;
    };
  
    function error() {
      console.log('Unable to retrieve your location');
    };
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const searchResultsArray = searchResults.map((eachResult, i) => {
    return (
      <TripCard key={i} info={eachResult}/>
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
          
       <button 
       type="button" 
       class="btn btn-danger"
       onClick = {sendCurrLocation}>
         Current Location</button>
      </header>
      <div className='searchResultsContainer'>{searchResultsArray}</div>
    </section>
  );
}

export default SearchTrips;
