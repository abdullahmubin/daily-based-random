import React from 'react'
import img from '../../assets/img/MainComponentImages/teams.png'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

const Team = () =>
{
  return (
    <div>
      <Tabs
        defaultActiveKey="members"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="members" title="Members">

          <Container fluid>
            <Row>
              <Col md={4}>
                <Row>
                  <Col md={4}>
                    <Dropdown options={options} onChange={null} value={defaultOption} placeholder="Select an option" />
                  </Col>
                  <Col md={8}>
                    <Form.Control type="text" className='float-left' placeholder="Normal text" />
                  </Col>

                  <br />
                </Row>
              </Col>

              <Col md={4}>2 of 2</Col>
              <Col md={4}>3 of 3</Col>
            </Row>
          </Container>

        </Tab>
        <Tab eventKey="groups" title="Groups">
          Groups Profile
        </Tab>

      </Tabs>
      <img src={img} alt='' />
    </div>
  )
}

export default Team