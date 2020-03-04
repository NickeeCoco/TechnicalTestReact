import React, {useState, useContext, useEffect} from "react"
import {Context} from "../Context"

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"

function SearchBar() {
  const [searchValue, setSearchValue] = useState("")
  const {filterVenues} = useContext(Context)

  function handleChange(e) {
    setSearchValue(e.target.value)
  }
  
  useEffect(() => {
    filterVenues(searchValue)
    // eslint-disable-next-line
  }, [searchValue])

  return(
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Search" value={searchValue} onChange={handleChange} />
      </InputGroup>

    </div>
  )
}

export default SearchBar