import React, {useContext} from "react"
import {Context} from "../Context"

import Card from "react-bootstrap/Card"

function Details() {
  const {selectedVenue} = useContext(Context)
  const {server} = selectedVenue !== undefined && selectedVenue

  return(
    <Card bg="info" text="white" style={{ width: '18rem', position: "fixed" }}>
      <Card.Header className="text-center">Details</Card.Header>
      
      {selectedVenue === undefined ? 
        <Card.Body>
          <Card.Text>Loading data...</Card.Text>
        </Card.Body> :
        <Card.Body>
          <Card.Title>Venue Name:</Card.Title>
          <Card.Text>
            {selectedVenue.venueName}
          </Card.Text>
          <Card.Title>Surface Name</Card.Title>
          <Card.Text>
            {selectedVenue.surfaceName}
          </Card.Text>
          <Card.Title>Status:</Card.Title>
          <Card.Text>
            {selectedVenue.status}
          </Card.Text>
          <Card.Title>Sport:</Card.Title>
          <Card.Text>
            {selectedVenue.sport}
          </Card.Text>
          <Card.Title>Server Ip:</Card.Title>
          <Card.Text>
            {server !== undefined && server.ip4}
          </Card.Text>
      </Card.Body>
    }
    </Card>
  )
}

export default Details