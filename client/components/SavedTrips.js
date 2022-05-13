import React, {useState, useEffect} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
// import { Redirect, useLocation } from 'react-router-dom';
import TripCard from './TripCard';
import checkLogin from './CheckLogin';

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
  // checkLogin();
  const userName = window.localStorage.getItem('username');
  const [savedTrips, setSavedTrips] = useState([]);
  // let allSavedTrips;
  // use effect NOT working
  // function getTrips() {
  //   fetch(`db/gettrips/${userName}`)
  //     .then(response => response.json())
  //     .then(data => setTrips(data))      
  //   // .then((data) => {
  //     .catch(err => console.log('Error getting user trips'))
  //   }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const data = await fetch(`/db/gettrips/${userName}`)
    //     const json = await data.json();

    //     setSavedTrips(json);
    //   };

    //   fetchData()
    //     .catch(console.log('Error getting user trips'));
    // }, [])

    
      // allSavedTrips = data.map((eachResult, i) => {
        
    // const tripsArray = savedTrips.map((eachResult, i) => {
    //   return (
    //     <TripCard key={i} info={eachResult}/>
    //   )
    // })

  return (
    <div>
      {/* {tripsArray} */}
      <h1>Saved Trips Cards Here!</h1>
    </div>
  )
}

export default SavedTrips;