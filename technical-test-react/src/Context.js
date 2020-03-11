import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
  const [venues, setVenues] = useState([])
  const [selectedVenue, setSelectedVenue] = useState({})
  const [filteredVenues, setFilteredVenues] = useState([])

  const url = "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setVenues(data))
  }, [])

  useEffect(() => {
    setSelectedVenue(venues[0])
    setFilteredVenues(venues)
  }, [venues])

  function handleClick(id) {
    const index = venues.findIndex(venue => venue.id === id)
    setSelectedVenue(venues[index])
  }

  function filterVenues(searchValue) {
    const newArray = venues.filter(venue => venue.venueName.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredVenues(newArray)
  }

  return(
    <Context.Provider value={{venues, selectedVenue, filteredVenues, filterVenues, handleClick}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}