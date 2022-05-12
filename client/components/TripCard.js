import React, {useState, useLocation} from 'react';
import {Card, Button, Accordion} from 'react-bootstrap';

const TripCard = ({ info }) => {
    
    let username = localStorage.getItem('username');
    console.log(username);
    const { recAreaName, recAreaDescription, recAreaFee, recAreaDirections } = info;
    
    const addToUserTrips = () => {
    fetch('/db/addtrip', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        username: username, 
        trip: info 
    })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // setUserTrips(data);
    })
    .catch((err) => console.log('Add Card: ERROR: ', err));
  };
  
  
//     return (
//      <article className="tripCardContainer">
//         <div className = "eachTrip">
//             <div className="tripLocationContainer">
//                 <h3 className="tripLocation">{recAreaName}</h3>
//              </div>
//             <ul className="TripList">
//                 <li className="tripDescription"><b>Area Description: </b>{recAreaDescription}</li>
//                 <li className="tripFee"><b>Area Fee: </b>{recAreaFee} </li>
//                 <li className="tripDirection"><b>Directions: </b>{recAreaDirections}</li>
//             </ul>
//             </div>
//                 <div className="add">
//                 <button
//                    type="button"
//                     className="addTrip"
//                     onClick={addToUserTrips}
//                 >
//           Add to My Trips
//         </button>
//      </div>
//     </article>
//     )

  return (
    <Card className="text-center trip-card">
      {/* <Card.Header>{recAreaName}</Card.Header> */}
      <Card.Body>
        <Card.Title>{recAreaName}</Card.Title>
        <Card.Text>
        {recAreaDescription.split('.')[0]}
        </Card.Text>
        <Button variant="primary" onClick={addToUserTrips}>Add Trip</Button>
      </Card.Body>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
          {recAreaDescription.split('.').slice(1).join('.')}
          {recAreaFee}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  )
};

export default TripCard;