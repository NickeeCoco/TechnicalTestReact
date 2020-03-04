import React from "react"

import SearchBar from "../components/SearchBar"
import Details from "../components/Details"

import DataTabServers from "./DataTab/DataTabServers"
import DataTabSurfaces from "./DataTab/DataTabSurfaces"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function DataTab() {
  return(
    <div>
      <SearchBar />
      <Container fluid>
        <Row>
          <Col xs={9}>
            <Tabs defaultActiveKey="surfaces">
              <Tab eventKey="surfaces" title="Surfaces">
                <DataTabSurfaces />
              </Tab>
              <Tab eventKey="servers" title="Servers">
                <DataTabServers />
              </Tab>
            </Tabs>
          </Col>

          <Col xs={3}>
            <Details />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DataTab