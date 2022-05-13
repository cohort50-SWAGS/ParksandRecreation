import React, {useState, useLocation} from 'react';
import {Card, Button, Accordion, Col} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const TripCard = ({ info, savedTrip, savedTrips, setSavedTrips, index }) => {
    
    let username = localStorage.getItem('username');
    console.log(username);
    let { recAreaName, recAreaDescription, recAreaFee, recAreaDirections } = info;
    if(!recAreaDescription) recAreaDescription = '';
    
    const addToUserTrips = (e) => {
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
        e.target.innerText = 'Trip Saved';
        e.target.class = e.target.className = 'mt-3 btn btn-success'
    })
    .catch((err) => console.log('Add Card: ERROR: ', err));
  };

  const deleteTrip = (e) => {
    fetch('/db/', {
      method: 'DELETE',
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
        let updatedSavedTrips = [...savedTrips];
        updatedSavedTrips.splice(index, 1);
        console.log(updatedSavedTrips)
        setSavedTrips(updatedSavedTrips);
    })
    .catch((err) => console.log('Add Card: ERROR: ', err));
  };
  
  const textStyle = {
    height: '100px',
    overflow: 'hidden'
  }
  textStyle['text-overflow'] = 'ellipsis'

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} draggable="true">
      <Card className="text-center trip-card mt-4">
        {/* <Card.Header>{recAreaName}</Card.Header> */}
        <Card.Body>
          <Card.Title>{recAreaName}</Card.Title>
          <Card.Text style={textStyle}>
            {recAreaDescription.replace('<p>', '')}
          </Card.Text>
          
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>More Information</Accordion.Header>
            <Accordion.Body>
              {recAreaDescription.replace('<p>', '')}
              {recAreaFee}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {savedTrip ?
          <Button className='mt-3' variant="primary" onClick={deleteTrip}>Delete Trip</Button>
         : <Button className='mt-3' variant="primary" onClick={addToUserTrips}>Add Trip</Button>}
        </Card.Body>
      </Card>
    </Col>
  )
};

export default TripCard;