import React, { useState } from 'react'
import img from '../../assets/img/MainComponentImages/teams.png'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

const teamList = [
  {
    'username': 'Person 1',
    'firstName': 'person 1st Name',
    'lastName': 'person last name',
    'email': 'person1@gmail.com',
    'gender': 'male',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  },
  {
    'userName': 'Person 2',
    'firstName': 'person 2st Name',
    'lastName': 'person last name',
    'email': 'person2@gmail.com',
    'gender': 'male',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  },
  {
    'username': 'Person 3',
    'firstName': 'person 3st Name',
    'lastName': 'person last name',
    'email': 'person3@gmail.com',
    'gender': 'male',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  }
]

const Team = () =>
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Tabs
        defaultActiveKey="members"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="members" title="Members">

          <Container fluid className='text-start'>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={2}>
                    <Dropdown className='text-start' options={options} onChange={null} value={defaultOption} placeholder="Select an option" />
                  </Col>
                  <Col md={4}>
                    <Form.Control type="text" className='float-left' placeholder="Normal text" />
                  </Col>

                  <br />
                </Row>
              </Col>


              <Col md={4} className="text-end"><Button variant="primary" size="sm" onClick={handleShow}>
                Add new member
              </Button></Col>
            </Row>

            <Row>
              <h1 className='mt-4'>Teams</h1>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone number</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    teamList.map((i, index) => <tr><td>{index}</td><td>{i.firstName}</td>
                    <td>{i.lastName}</td>
                    <td>{i.username}</td>
                    <td>{i.email}</td><td>{i.gender}</td>
                    <td>{i.phoneNumber}</td><td>{i.address}</td></tr>)
                  }
                  
                </tbody>
              </Table>
            </Row>
          </Container>

        </Tab>
        <Tab eventKey="groups" title="Groups">
          Groups Profile
        </Tab>

      </Tabs>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <img src={img} alt='' />
    </div>
  )
}

export default Team