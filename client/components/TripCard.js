import React, {useState, useLocation} from 'react';
import {Card, Button, Accordion} from 'react-bootstrap';

const TripCard = ({ info, userTrips, username }) => {
    
    const { recAreaName, recAreaDescription, recAreaFee, recAreaDirections } = info;
    
    const addToUserTrips = ({ info, userTrips, username }) => {
    fetch('db/addtrip', {
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
      .catch((err) => console.log('Add Card: ERROR: ', err));
  };
  
  
    return (
     <article className="tripCardContainer">
        <div className = "eachTrip">
            <div className="tripLocationContainer">
                <h3 className="tripLocation">{recAreaName}</h3>
             </div>
            <ul className="TripList">
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

/* <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Add Trip</Button>
  </Card.Body>
  <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>More Information</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Card> */