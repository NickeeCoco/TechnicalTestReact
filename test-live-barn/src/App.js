import React from 'react';
import './App.css';

import EmptyTab from "./pages/EmptyTab"
import DataTab from "./pages/DataTab"

import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"

function App() {
  return (
    <div className="App">
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Empty Tab</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Data</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <EmptyTab />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <DataTab />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
