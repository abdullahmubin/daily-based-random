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
    'did': 1,
    'username': 'Person 1',
    'firstName': 'person 1st Name',
    'lastName': 'person last name',
    'email': 'person1@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  },
  {
    'did': 2,
    'userName': 'Person 2',
    'firstName': 'person 2st Name',
    'lastName': 'person last name',
    'email': 'person2@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  },
  {
    'did': 3,
    'username': 'Person 3',
    'firstName': 'person 3st Name',
    'lastName': 'person last name',
    'email': 'person3@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address'
  }
]

const Team = () =>
{
  const [show, setShow] = useState(false);
  const [teamData, setTeamData] = useState(teamList)

  const [teamObj, setTeamObj] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveTeamMember = () => {
    teamObj.did = teamData.length + 1;
    let newTemMembr = teamData;
    newTemMembr.push(teamObj)

    setTeamData(newTemMembr);
  }
  
  const selectedRow = (item) => {
    let obj = teamData.find(i => i.did == item.did);
    setTeamObj(obj);
    handleShow();
  }

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
                    <th>Phone number</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    teamData.map((i, index) => <tr onClick={() => selectedRow(i)}><td>{index}</td><td>{i.firstName}</td>
                      <td>{i.lastName}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.phoneNumber}</td>
                      <td>{i.address}</td>
                      </tr>)
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
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={teamObj.username} placeholder="Username" name="username" 
              onChange={(e) =>{
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={teamObj.email} name='email' 
              onChange={(e) =>{  
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" value={teamObj.firstName} name="firstName" placeholder="First Name"
              onChange={(e) =>{  
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" value={teamObj.lastName} name="lastName" placeholder="Last Name" 
              onChange={(e) =>{  
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={teamObj.phone} name="phone" placeholder="Phone" 
              onChange={(e) =>{  
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={teamObj.address} name="address" placeholder="Address" onChange={(e) =>{  
                let newVal = {...teamObj, [e.target.name]: e.target.value}
                setTeamObj(newVal);
              }}/>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTeamMember}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <img src={img} alt='' />
    </div>
  )
}

export default Team