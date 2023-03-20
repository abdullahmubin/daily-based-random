import React, { Fragment, useState } from 'react'
import img from '../../assets/img/MainComponentImages/reports.png'
import moment from 'moment'
import 'chartjs-adapter-moment';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import DatePicker from "react-datepicker";
import
{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const dateFormat = `YYYY-MM-DD HH:mm:ss`;

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
    scaleLabel: function (valuePayload)
    {
      console.log(new Date(valuePayload.value * 1000).toISOString());
      return new Date(valuePayload.value * 1000).toISOString().substr(12, 7);
    },
    multiTooltipTemplate: function (valuePayload)
    {
      return valuePayload.datasetLabel + " " + new Date(valuePayload.value * 1000).toISOString().substr(12, 7)
    },

    tooltip: {
      callbacks: {
        title: (xDatapoint) => { return xDatapoint.raw },
        // label: (yDatapoint) => {return yDatapoint.raw},
        label: function (tooltipItem, data)
        {
          console.log(tooltipItem.raw);
          console.log(data)
          console.log(tooltipItem);
          return new Date(tooltipItem.raw * 1000).toISOString().substr(12, 7)// tooltipItem.raw;
          // return "" + moment(tooltipItem.raw[0], "HH:mm").format("hh:mm A") + "-" + moment(tooltipItem.raw[1], "HH:mm").format("hh:mm A");tooltipItem.raw;
        }
      }
    },
  },
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    x: {
      stacked: true,
      // barThickness : 73,
      // categoryPercentage: 1.0,
      categorySpacing: 0,
      // barPercentage: 0.8,
    },
    //   xAxes: [{
    //     barThickness : 73,
    //     categorySpacing: 0
    // }],
    y: {
      stacked: true,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks)
        {
          return new Date(value * 1000).toISOString().substr(12, 7);
          // return '$' + value;
        }
      },
      value: function (valuePayload)
      {
        console.log(new Date(valuePayload.value * 1000).toISOString());
        return new Date(valuePayload.value * 1000).toISOString().substr(12, 7);
      },
      // type: 'time'
    },
  },
};


const Reports = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(moment(startDate, dateFormat).add(6, 'days').toLocaleString());
  const [allData, setAllData] = useState(null)

  const handleDateChange = (data) =>
  {
    let [start, end] = data;

    let weekStart = moment(start).startOf('isoWeek').format(dateFormat);
    let weekEnd = moment(start).endOf('isoWeek').format(dateFormat);

    setStartDate(weekStart)
    setEndDate(weekEnd)

    console.log('endDate: ' + weekEnd)

    var now = weekStart, dates = [];
    let dateWithVal = []
    while (moment(now).isSameOrBefore(moment(weekEnd)))
    {
      // dates.push(moment(now).format('M/D/YYYY'));
      let currentDate = moment(now).format('M/D/YYYY');
      dates.push(currentDate);

      // let obj = {
      //   label: "# Durata reale",
      //   //strokeColor: "rgba(51, 122, 183, 0.6)",
      //   //pointColor: "rgba(51, 122, 183, 0.6)",
      //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
      //   borderColor: 'rgba(255,99,132,1)',
      //   barThickness: 70,
      //   barPercentage: 0.9,
      //   categoryPercentage: 1,
      //   data: [6100, 615, 705]
      // }

      let randomNum = Math.floor(Math.random() * 100);
      let currentDayWorkTime = 6100 + randomNum;

      dateWithVal.push(currentDayWorkTime)

      now = moment(now).add(1, 'days');
    }

    console.log('handle change');
    console.log(dates)

    let dataSetList = [];
    let obj = {
      label: "# Durata reale",
      //strokeColor: "rgba(51, 122, 183, 0.6)",
      //pointColor: "rgba(51, 122, 183, 0.6)",
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      barThickness: 70,
      barPercentage: 0.9,
      categoryPercentage: 1,
      data: dateWithVal
    }
    dataSetList.push(obj);
    let allDataObj = {};

    allDataObj.labels = dates;
    allDataObj.datasets = dataSetList

    setAllData(allDataObj)

  }

  useEffect(() =>
  {
    let weekStart = moment(startDate).startOf('isoWeek').format(dateFormat);
    let weekEnd = moment(startDate).endOf('isoWeek').format(dateFormat);


    var now = weekStart, dates = [];
    let dateWithVal = []
    while (moment(now).isSameOrBefore(moment(weekEnd)))
    {
      let currentDate = moment(now).format('M/D/YYYY');
      dates.push(currentDate);


      let randomNum = Math.floor(Math.random() * 100);
      let currentDayWorkTime = 6100 + randomNum;

      dateWithVal.push(currentDayWorkTime)

      now = moment(now).add(1, 'days');
    }

    let dataSetList = [];
    let obj = {
      label: "# Durata reale",
      //strokeColor: "rgba(51, 122, 183, 0.6)",
      //pointColor: "rgba(51, 122, 183, 0.6)",
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      barThickness: 70,
      barPercentage: 0.9,
      categoryPercentage: 1,
      data: dateWithVal
    }
    dataSetList.push(obj);
    let allDataObj = {};

    allDataObj.labels = dates;
    allDataObj.datasets = dataSetList

    setAllData(allDataObj)

  }, []);

  return (
    <div>
      <div style={{ width: '900px' }}>
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><DatePicker
        style={{ marginLeft: '20px' }}
        placeholderText="Select Week"
        className='form-control analytics-date-selector weekly-date-eod'
        onChange={handleDateChange}
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        selected={new Date(moment(startDate, dateFormat).format('l'))}
        selectsRange
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Team" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Team 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team 3</NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Client" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Client 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Client 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Client 3</NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Project 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Task" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Task 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Task 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Task 3</NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Tag" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tag 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Tag 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tag 3</NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Status" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Status 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Status 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Status 3</NavDropdown.Item>
             
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {
          allData ? <Bar options={options} data={allData} /> : null}
      </div>
      {/* <img src={img} alt='' /> */}
    </div>
  )
}

export default Reports