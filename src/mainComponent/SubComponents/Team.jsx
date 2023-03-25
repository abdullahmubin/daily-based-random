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

const searchOptions = [
  { label: "Username", value: "userName" }, { label: "Email", value: "email" }, { label: "Phone", value: "phoneNumber" }
];
const defaultOption = searchOptions[0];

const teamList = [
  {
    'did': 1,
    'userName': 'Person 1',
    'firstName': 'person 1st Name',
    'lastName': 'person last name',
    'email': 'person1@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address',
    'teamName': 'Team A',
    'teamLeader': 'Leader of Team A',
    'leaderPhone': '0101010101',
    'leaderEmail': 'email@gmail.com'
  },
  {
    'did': 2,
    'userName': 'Person 2',
    'firstName': 'person 2st Name',
    'lastName': 'person last name',
    'email': 'person2@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address',
    'teamName': 'Team A',
    'teamLeader': 'Leader of Team A',
    'leaderPhone': '0101010101',
    'leaderEmail': 'email@gmail.com'
  },
  {
    'did': 3,
    'userName': 'Person 3',
    'firstName': 'person 3st Name',
    'lastName': 'person last name',
    'email': 'person3@gmail.com',
    'phoneNumber': '01686578649',
    'address': 'house number, road number, address, address',
    'teamName': 'Team A',
    'teamLeader': 'Leader of Team A',
    'leaderPhone': '0101010101',
    'leaderEmail': 'email@gmail.com'
  }
]

const teamLeaderList = [
  {
    'label': 'Team A team@gmail.com',
    'value': 1,
    'email': 'team@gmail.com',
    'phone': '8sdfsdfsdfsdf',
    'TeamName': 'Team A'
  },
  {
    'label': 'Team 2 team@gmail.com',
    'value': 2,
    'email': 'team@gmail.com',
    'phone': '8sdfsdfsdfsdf',
    'TeamName': 'Team A'
  },
  {
    'label': 'Team 3 team@gmail.com',
    'value': 3,
    'email': 'team@gmail.com',
    'phone': '8sdfsdfsdfsdf',
    'TeamName': 'Team A'
  }
]

const Team = () =>
{
  const [show, setShow] = useState(false);
  const [teamData, setTeamData] = useState(teamList)
  const [searchTxt, setSearchTxt] = useState('')
  const [searchType, setSearchType] = useState(defaultOption)

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

  const saveTeamMember = () =>
  {
    teamObj.did = teamData.length + 1;
    let newTemMembr = teamData;
    newTemMembr.push(teamObj)

    setTeamData(newTemMembr);
  }

  const selectedRow = (item) =>
  {
    let obj = teamData.find(i => i.did == item.did);
    setTeamObj(obj);
    handleShow();
  }

  const deleteRow = (item) =>
  {
    let newObj = teamData.filter(i => i.did != item.did);
    setTeamData(newObj);
  }

  const onSeachOptionChange = (val) =>
  {
    console.log('on search option change');
    console.log(val)
    setSearchType(val)
  }

  const searchWith = () =>
  {
    console.log('search with');
    console.log(searchTxt)
    console.log(searchType)

    let findResult = teamData.filter(i => i[searchType.value] && i[searchType.value].toLowerCase().indexOf(searchTxt.toLowerCase()) != -1 ? true : false)
    console.log('findResult');
    console.log(findResult)

    setTeamData(findResult)
  }

  const resetAllData = () =>
  {
    setTeamData(teamList)
    setSearchTxt('')
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
                    <Dropdown className='text-start' options={searchOptions} onChange={onSeachOptionChange} value={searchType} placeholder="Select an option" />
                  </Col>
                  <Col md={4}>
                    <Form.Control type="text" className='float-left' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} placeholder="Normal text" />
                  </Col>
                  <Col md={3}>
                    <Button disabled={searchTxt.trim().length == 0 ? true : false} variant="primary" size="sm" className='mt-1' onClick={searchWith}>
                      <svg className="bi bi-search float-start me-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg> Search
                    </Button>
                    <Button variant="info" size="sm" className='mt-1 ms-2' onClick={resetAllData}>
                      Reset
                    </Button>
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
                    <th>Team Name</th>
                    <th>Team Leader</th>
                    <th>Leader Phone</th>
                    <th>Leader Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    teamData.map((i, index) => <tr key={index}><td>
                      <span className='d-block mt-1 float-start position-relative table-relative-left'>
                        <svg onClick={() => deleteRow(i)} className="bi bi-trash float-start me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>

                        <svg className='bi bi-pencil-square' onClick={() => selectedRow(i)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </span>
                    </td><td>{i.firstName}</td>
                      <td>{i.lastName}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.phoneNumber}</td>
                      <td>{i.address}</td>
                      <td>{i.teamName}</td>
                      <td>{i.teamLeader}</td>
                      <td>{i.leaderPhone}</td>
                      <td>{i.leaderEmail}</td>

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
                onChange={(e) =>
                {
                  let newVal = { ...teamObj, [e.target.name]: e.target.value }
                  setTeamObj(newVal);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={teamObj.email} name='email'
                onChange={(e) =>
                {
                  let newVal = { ...teamObj, [e.target.name]: e.target.value }
                  setTeamObj(newVal);
                }} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" value={teamObj.firstName} name="firstName" placeholder="First Name"
                onChange={(e) =>
                {
                  let newVal = { ...teamObj, [e.target.name]: e.target.value }
                  setTeamObj(newVal);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" value={teamObj.lastName} name="lastName" placeholder="Last Name"
                onChange={(e) =>
                {
                  let newVal = { ...teamObj, [e.target.name]: e.target.value }
                  setTeamObj(newVal);
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={teamObj.phone} name="phoneNumber" placeholder="Phone"
                onChange={(e) =>
                {
                  let newVal = { ...teamObj, [e.target.name]: e.target.value }
                  setTeamObj(newVal);
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={teamObj.address} name="address" placeholder="Address" onChange={(e) =>
              {
                let newVal = { ...teamObj, [e.target.name]: e.target.value }
                setTeamObj(newVal);
              }} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Team Name</Form.Label>
              
              <Dropdown className='text-start' options={teamLeaderList}  value={searchType} placeholder="Select an option" />

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