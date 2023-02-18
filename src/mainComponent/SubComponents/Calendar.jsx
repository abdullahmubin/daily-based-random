import React, { Fragment, useState, useCallback, useMemo } from 'react'
import img from '../../assets/img/MainComponentImages/calendar.png'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import DatePicker from "react-datepicker";
import Select from 'react-select'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { BsFillPencilFill, BsXLg, BsFilePlus } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment'
import events from "./events";

const userName = [
  {
    value: '1',
    label: 'username 1'
  },
  {
    value: '2',
    label: 'username 2'
  },
  {
    value: '3',
    label: 'username 3'
  },
  {
    value: '4',
    label: 'username 4'
  },
  {
    value: '5',
    label: 'username 5'
  },
  {
    value: '6',
    label: 'username 6'
  },
]
const projectList = [{
  value: '1',
  label: 'Project 1'
},
{
  value: '2',
  label: 'Project 2'
},
{
  value: '3',
  label: 'Project 3'
},
{
  value: '4',
  label: 'Project 4'
}

]

const tags = [
  {
    value: '1',
    label: 'Tags 1'
  },
  {
    value: '2',
    label: 'Tags 2'
  },
  {
    value: '3',
    label: 'Tags 3'
  },
  {
    value: '4',
    label: 'Tags 4'
  }
]

const localizer = momentLocalizer(moment)

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9'
  },
};

const CalendarDetails = () =>
{
  const [myEvents, setEvents] = useState(events)
  const [modalTitle, setModalTitle] = useState('')
  const [modalDetails, setModalDetails] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [tagName, setTagName] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [assigneeName, setAssigneeName] = useState(null)
  const [reporterName, setReporterName] = useState(null);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(null);

  const [show, setShow] = useState(null);

  const handleClose = () => {
    setShow(null);
    console.log('start date: '+ startDate);
    console.log('end date: '+ endDate);
    console.log('tagName: '+ tagName);
    console.log('project name: '+ projectName);
    console.log(events);

    let obj = {
      'id': events.length + 1,
      'title': modalDetails,
      'allDay': true,
      'start': startDate,
      'end': endDate,
      'projectName': projectName,
      'tagName': tagName
    }
    // setEvents((prev) => [...prev, { start, end, title }])
    setEvents((prev) => [...prev, obj] )
  }
  const handleShow = () => setShow(true);

  const handleDateSelect = () =>
  {

  }

  const handleDateChange = () =>
  {

  }

  const handleSelectSlot = useCallback(
    ({ start, end }) =>
    {
      setShow({ id: 0 })
      console.log('start ');
      console.log(start);
      console.log('end')
      console.log(end)
      // console.log(startDate)
      // const title = window.prompt('New Event name')
      // if (title)
      // {
      //   setEvents((prev) => [...prev, { start, end, title }])
      // }
    },
    [setEvents]
  )

  const handleSelectEvent = useCallback((event) =>
  {
    console.log('event event');
    console.log(event)
    setModalTitle('Event')
    setModalDetails(event.title)
    setShow(event)
    // window.alert('event.title')
  }, []
  )

  const saveUpdate = () =>
  {
    // let findIndex = myEvents.findIndex(i => i.id == show.id);
    // console.log('find index');
    let updatedMyEvents = myEvents.map((i, index) =>
    {
      if (i.id == show.id)
      {
        myEvents[index].title = modalDetails
      }

      return i;
    })

    console.log('updated my event');
    console.log(updatedMyEvents);

    setEvents(updatedMyEvents);
    setShow(null)
  }
  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  const removeEvent = () =>
  {
    console.log('remove event');
    console.log(show);

    let newEvents = myEvents.filter(i => i.id != show.id)

    setEvents(newEvents)
    setShow(null)
  }

  console.log('userName userName')
  console.log(userName)
  console.log(reporterName)
  console.log(reporterName && userName.map(i => i.value != userName))
  return (
    <div>
      <div className="myCustomHeight">
        <Calendar
          selectable
          localizer={localizer}
          // events={myEventsList}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}

          popup
        />

        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>




        <Modal show={show ? true : false} onHide={handleClose} className="modal-calendar">
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {
              editMode ? <Table striped bordered hover size="sm">
                <tbody> <tr>
                  <td><Form.Control type="text" value={modalDetails} onChange={(e) => setModalDetails(e.target.value)} placeholder="" /></td>
                  <td onClick={() => setEditMode(!editMode)}><BsFillPencilFill /></td>
                  <td onClick={saveUpdate}><BsFilePlus /></td>
                </tr>
                </tbody>
              </Table>
                :
                show && show.id ? (
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>{modalDetails}</td>
                        <td onClick={() => setEditMode(!editMode)}><BsFillPencilFill /></td>
                        <td onClick={removeEvent}><BsXLg /></td>

                      </tr>
                    </tbody>
                  </Table>
                )
                  : (

                    <Form className='row'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" value={modalDetails} onChange={(e) => setModalDetails(e.target.value)} placeholder="" />

                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker

                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                          todayButton={"Today"} />
                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>End Date</Form.Label>
                        <DatePicker
                          forma
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                          todayButton={"Today"} />
                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Assignee</Form.Label>
                        <Select isClearable value={assigneeName} onChange={(val) => setAssigneeName(val)} options={assigneeName ? userName.filter(i => i.value != assigneeName.value) : userName} />

                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Reporter</Form.Label>
                        <Select isClearable value={reporterName} onChange={(val) => setReporterName(val)} options={reporterName ? userName.filter(i => i.value != reporterName.value) : userName} />
                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Project Name</Form.Label>
                        <Select isClearable value={projectName} onChange={(val) => setProjectName(val)} options={projectName ? projectList.filter(i => i.value != projectName.value) : projectList} />
                      </Form.Group>

                      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Tag</Form.Label>
                        <Select isClearable value={tagName} onChange={(val) => setTagName(val)} options={tagName ? tags.filter(i => i.value != tagName.value) : tags} />
                      </Form.Group>


                    </Form>


                  )
            }






          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}


export default CalendarDetails