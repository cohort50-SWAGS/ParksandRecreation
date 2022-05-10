import React, {useState, useLocation} from 'react';

const TripCard = ({ info, userTrips, username }) => {
    
    const { recAreaName, recAreaDescription, recAreaFee, recAreaDirections } = info;
    
    const addToUserTrips = ({ info, userTrips, username }) => {
    // WE NEED ROUTES TO MATCH
    fetch('db/addtrip/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        body: JSON.stringify({
            username: username, 
            tripToAdd: info 
        })
      },
    })
        .then((res) => res.json())
        .then((data) => {
            setUserTrips(data);
      })
      .catch((err) => console.log('DeleteCharacter /api/delete: ERROR: ', err));
  };

// ???
// useEffect((), [userTrips])
    
    return (
     <article className="tripCardContainer">
        <div className = "eachTrip">
            <div className="tripLocationContainer">
                <h3 className="tripLocation">{recAreaName}</h3>
             </div>
            <ul className="TripList">
                {/* <li className="tripDetail">Location: {location}</li> */}
                <li className="tripDescription"><b>Area Description: </b>{recAreaDescription}</li>
                <li className="tripFee"><b>Area Fee: </b>{recAreaFee} </li>
                <li className="tripDirection"><b>Directions: </b>{recAreaDirections}</li>
            </ul>
            </div>
                <div className="add">
                <button
                   type="button"
                    className="addTrip"
                    onClick={addToUserTrips}
                >
          Add to My Trips
        </button>
     </div>
    </article>
    )
};



export default TripCard;
