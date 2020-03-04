import React, {useContext} from "react"
import {Context} from "../../Context"

import MatchesCounter from "../../components/MatchesCounter"

import Table from "react-bootstrap/Table"

function DataTabSurfaces() {
  const {filteredVenues, currentVenue, handleClick} = useContext(Context)
  const current = currentVenue !== undefined && currentVenue

  const rows = filteredVenues.map(venue => {
    return(
      <tr 
        key={venue.id} 
        onClick={() => handleClick(venue.id)}
        className={venue.id === current.id ? "bg-info text-white" : null}
      >
        <td>{venue.venueName}</td>
        <td>{venue.surfaceName}</td>
        <td>{venue.status}</td>
        <td>{venue.sport}</td>
      </tr>
    )
  })

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Venue Name</th>
            <th>Surface Name</th>
            <th>Status</th>
            <th>Sport</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
      <MatchesCounter />
      
    </div>
  )
}

export default DataTabSurfaces