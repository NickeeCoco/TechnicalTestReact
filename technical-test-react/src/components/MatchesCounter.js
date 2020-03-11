import React, {useContext} from "react"
import {Context} from "../Context"

function MatchesCounter() {
  const {filteredVenues} = useContext(Context)
  return <p className="text-center">Matches: {filteredVenues.length}</p>
}

export default MatchesCounter