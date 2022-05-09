import React, {useState, useLocation} from 'react';

const TripCard = ({info}) => {
    const { recAreaName, recAreaDescription, recAreaFee, recAreaDirections } = info;
    

    return (
     <article className="tripCardContainer">
        <div className = "eachTrip">
            <div className="tripLocationContainer">
                <h3 className="tripLocation">{recAreaName}</h3>
             </div>
            <ul className="TripList">
                {/* <li className="tripDetail">Location: {location}</li> */}
                <li className="tripDescription">Area Description: {recAreaDescription}</li>
                <li className="tripFee">Area Fee: {recAreaFee} </li>
                <li className="tripDirection">Directions: {recAreaDirections}</li>
            </ul>
        </div>
    </article>
  
    )
};



export default TripCard;
