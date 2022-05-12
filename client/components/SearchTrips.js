import React, {useState, useEffect} from 'react';
import TripCard from './TripCard'

function SearchTrips() {
  const [ searchResults, setSearchResults ] = useState([]);
  function searchData() {
    fetch('/api/getlocation', {
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON'},
      body: JSON.stringify({ location: document.querySelector('#SearchBarCity').value})
    })
    .then(resp => resp.json())
    .then(data => setSearchResults(data))
    .catch(err => console.log('Login page: user not found', err))
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
      </header>
      <div className='searchResultsContainer'>{searchResultsArray}</div>
    </section>
  );
}

export default SearchTrips;
