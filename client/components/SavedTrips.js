import React, {useState, useEffect} from 'react';
// import { Redirect, useLocation } from 'react-router-dom';
// import TripCard from './TripCard'

// const tripsArray = location.state.userTrips.map((eachSave, i) => {
//   return (
//     <TripCard
//       key={i}
//       info={eachSave}
//     />
//   );
// });

// On Mount or Change
  // Update our saved Trips State
  // Render Trips from State
  
function SavedTrips() {
  // Uncomment to have access to the state
  // const [savedTrips, setTrips] = useState()
  const userName = window.localStorage.getItem('username');
  let allSavedTrips = [];
    useEffect(() => {
      fetch(`/db/gettrips${userName}`)
      .then(response => response.json())
      .then(data => {
        allSavedTrips = data;
      })
      .catch(err => console.log('Error getting user trips'))
    })
    // map allSavedTrips?
  return (
    // build!
    <h1>Build Stuff</h1> 
  );
}

export default SavedTrips;