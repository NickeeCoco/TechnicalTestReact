import React, {useContext} from "react"
import {Context} from "../../Context"

import Table from "react-bootstrap/Table"

function DataTabServers() {
  const {filteredVenues} = useContext(Context)
  const serversList = filteredVenues !== undefined && filteredVenues.map(venue => venue.server)
  
  const {selectedVenue} = useContext(Context)
  const {server: currentVenueServer} = selectedVenue !== undefined && selectedVenue
    
  function createUniqueServersList() {
    let uniqueServersList = []

    serversList.forEach(server => {
      let isUnique = true

      while(isUnique) {
        if(uniqueServersList.length === 0) {
          uniqueServersList.push(server)
          isUnique = false
        } else {
          uniqueServersList.forEach(uniqueServer => {
            if(uniqueServer.id === server.id) {
              isUnique = false
            }
          })
          if(isUnique) {
            uniqueServersList.push(server)
            isUnique=false
          }
        }
      }
    })
    return uniqueServersList
  }

  let finalList = createUniqueServersList()
  
  const rows = finalList.map(server => {
    return(
      <tr 
        key={server.id}
        className={server.id === currentVenueServer.id ? "bg-info text-white" : null}
      >
        <td>{server.ip4}</td>
        <td>{server.dns}</td>
      </tr>
    )
  })

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ip4</th>
            <th>Dns</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </div>
  )
}

export default DataTabServers