import React, { Fragment, useState, useCallback, useMemo } from 'react'
import img from '../../assets/img/MainComponentImages/dashboard.png'
import 'chartjs-adapter-moment';

import moment from 'moment'
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
import { Bar, Chart, Line } from 'react-chartjs-2';
import faker from 'faker';

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

// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     scales: {
//       x: {
//         type: 'time',
//       }
//     }
//   },
// };

// export const options = {
//   responsive: true,
//   indexAxis: 'y',
//   plugins: {
//     legend: {
//       display: true
//     },
//     tooltip: {
//       callbacks: {
//         title: (xDatapoint) => { return xDatapoint.raw },
//         // label: (yDatapoint) => {return yDatapoint.raw},
//         label: function (tooltipItem, data)
//         {
//           console.log(tooltipItem.raw);
//           console.log(data)
//           console.log(tooltipItem);
//           return tooltipItem.raw;
//           // return "" + moment(tooltipItem.raw[0], "HH:mm").format("hh:mm A") + "-" + moment(tooltipItem.raw[1], "HH:mm").format("hh:mm A");tooltipItem.raw;
//         }
//       }
//     },
//     datalabels: {
//       color: 'white',
//       formatter: (val, ctx) => (ctx.dataset.label)
//     }
//   },
//   scales: {
//     y: {
//       stacked: true
//     },
//     x: {
//       type: 'time',
//       time: {
//         // Luxon format string
//         tooltipFormat: 'YYYY-MM-DD HH:mm',//'DD T' // tooltipFormat: 'DD T'
//         //   displayFormats: {
//         //     'millisecond':'HH:mm:ss',
//         //     'second': 'HH:mm:ss',
//         //     'minute': 'HH:mm:ss',
//         //     'hour': 'HH:mm:ss',
//         //     'day': 'HH:mm:ss',
//         //     'week': 'HH:mm:ss',
//         //     'month': 'HH:mm:ss',
//         //     'quarter': 'HH:mm:ss',
//         //     'year': 'HH:mm:ss',
//         //  }
//       },
//       display: true,
//       min: new Date('2021-10-18T00:00:00'),
//       max: new Date('2021-10-18T23:59:59')
//     }
//   }
// }
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const dataBar = [
//   { year: 2010, count: 10 },
//   { year: 2011, count: 20 },
//   { year: 2012, count: 15 },
//   { year: 2013, count: 25 },
//   { year: 2014, count: 22 },
//   { year: 2015, count: 30 },
//   { year: 2016, count: 28 },
// ];

// const dataBarOption = {
//   type: 'bar',
//   data: {
//     labels: dataBar.map(row => row.year),
//     datasets: [
//       {
//         label: 'Acquisitions by year',
//         data: dataBar.map(row => row.count)
//       }
//     ]
//   }
// }




export const data = {
  labels: ['modo 1', 'modo 2', 'modo 13'],
  datasets: [{
    label: "# Durata reale",
    //fillColor: "rgba(51, 122, 183, 0.2)",
    //strokeColor: "rgba(51, 122, 183, 0.6)",
    //pointColor: "rgba(51, 122, 183, 0.6)",
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255,99,132,1)',

    // barPercentage: 0.8,
    barThickness: 70,
    // maxBarThickness: 8,
    // minBarLength: 70,
    // categorySpacing: 0,
    // categoryPercentage: 0,
    barPercentage: 0.9,
    categoryPercentage: 1,

    // borderWidth: 1,
    // hoverBackgroundColor: 'red',

    data: [6100, 615, 705]
  }, {
    label: "# Ore in",
    //fillColor: "rgba(241, 88, 84, 0.2)",
    //strokeColor: "rgba(241, 88, 84, 0.6)",
    //pointColor: "rgba(241, 88, 84, 0.6)",
    backgroundColor: '#DEF797',
    borderColor: 'rgba(255,99,132,1)',

    // barPercentage: 0.8,
    barThickness: 70,
    // maxBarThickness: 8,
    // minBarLength: 70,
    // categorySpacing: 0,
    // categoryPercentage: 0,
    barPercentage: 0.9,
    categoryPercentage: 1,

    // borderWidth: 1,
    // hoverBackgroundColor: 'yellow',
    data: [0, 0, 465]
  }]

  // labels: ["Day 1", "Day 2", "Day 3"],
  // datasets: [{
  //   label: 'working',
  //   data: [
  //     [new Date('2021-10-18T04:00:00'), new Date('2021-10-19T20:30:00')],
  //     [new Date('2021-10-18T06:00:00'), new Date('2021-10-18T17:00:00')]
  //   ],
  //   backgroundColor: "red",
  // },
  // {
  //   label: 'sleep',
  //   data: [
  //     [new Date('2021-10-18T00:00:00'), new Date('2021-10-18T04:00:00')],
  //     [new Date('2021-10-18T00:00:00'), new Date('2021-10-18T06:00:00')],
  //     [new Date('2021-10-18T00:00:00'), new Date('2021-10-18T06:00:00')]
  //   ],
  //   backgroundColor: "blue",
  // },
  // {
  //   label: 'sleeping',
  //   data: [
  //     [new Date('2021-10-18T20:30:00'), new Date('2021-10-18T23:59:59')],
  //     [new Date('2021-10-18T17:00:00'), new Date('2021-10-18T23:59:59')],
  //     [new Date('2021-10-18T17:00:00'), new Date('2021-10-18T23:59:59')]
  //   ],
  //   backgroundColor: "orange",
  // },
  // ]
  // labels,
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: [100, 200, 300, 400, 500, 600, 111, 222, 333, 444, 555, 666],// labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
  //     backgroundColor: 'rgb(255, 99, 132)',
  //   },
  //   {
  //     label: 'Dataset 2',
  //     data: [100, 200, 300, 400, 500, 600, 111, 222, 333, 444, 555, 666],
  //     backgroundColor: 'rgb(75, 192, 192)',
  //   },
  //   {
  //     label: 'Dataset 3',
  //     data: [100, 200, 300, 400, 500, 600, 111, 222, 333, 444, 555, 666],
  //     backgroundColor: 'rgb(53, 162, 235)',
  //   },
  // ],
};

const Dashboard = () =>
{

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log('data structure');
  console.log(data)
  console.log('startDate');
  console.log(startDate)

  let s = moment(startDate, dateFormat).toLocaleString()// .toISOString();
  let e = moment(startDate, dateFormat).add(6, 'days').toLocaleString()//.toISOString();
  
  console.log('s');
  console.log(s);
  console.log(e)

  const handleDateChange = (data) => {
    let [start, end] = data;

    let weekStart = moment(start).startOf('isoWeek').format(dateFormat);
    let weekEnd = moment(start).endOf('isoWeek').format(dateFormat);

    setStartDate(weekStart)
    setEndDate(weekEnd)
    let period = moment(weekStart, dateFormat).format('MMMM DD, YYYY') + ' -> ' + moment(weekEnd, dateFormat).format('MMMM DD, YYYY');
    console.log('period');
    console.log(period)
    console.log(new Date(moment(startDate, dateFormat).format('l')))


    var now = weekStart, dates = [];
    console.log('now: '+ moment(now));
    console.log("end: "+ moment(weekEnd))
    while (moment(now).isSameOrBefore(moment(weekEnd))) {
        dates.push(moment(now).format('M/D/YYYY'));
        now = moment(now).add(1, 'days');
    }
    console.log(dates);
    // function getDates(startDate, stopDate) {
    //   var dateArray = new Array();
    //   var currentDate = weekStart;
    //   while (currentDate <= weekEnd) {
    //     dateArray.push(currentDate)
    //     currentDate = currentDate.addDays(1);
    //   }
    //   // return dateArray;
    // // }
    // // this.setState({
    // //     startDate: weekStart,
    // //     endDate: weekEnd
    // // })
  }

  return (
    <div>
      <img src={img} alt='' />

      <div style={{ width: '700px' }}>
        <Bar options={options} data={data} />
      </div>

      <DatePicker
        style={{ marginLeft: '20px' }}
        placeholderText="Select Week"
        className='form-control analytics-date-selector weekly-date-eod'
        onChange={handleDateChange}
        // onChange={(date) => {
        //   console.log('date')
        //   console.log(date)
        //   setStartDate(date)
        // }}

        // onChange={(date) => {
        //   setStartDate(date)
        //   console.log('date')
        //   console.log(date)
        // }
        // maxDate={new Date(moment(calendarMaxDate, dateFormat).subtract(1, 'weeks').endOf('isoWeek').format('l'))}
        // minDate={new Date('2021-02-01')}
        startDate={new Date(s)}
        endDate={new Date(e)}
        // value={periodUI}
        selected={new Date(moment(startDate, dateFormat).format('l'))}
        selectsRange
        // disabled={sensorData.loading}
      />

      {/* <DatePicker
                  // minDate={startDate}
                  selected={endDate}
                  onChange={(date) => {
                    setStartDate(date)
                    console.log('date')
                    console.log(date)
                  }
                    
                  }
                  showWeekNumbers
                  showWeekPicker
                  locale={"en-GB"}
                  dateFormat="I/R"
                  todayButton={"Today"} /> */}


      {/* <Line options={options} data={data} /> */}

      {/* <Chart  data={dataBarOption} /> */}
    </div>
  )
}

export default Dashboard