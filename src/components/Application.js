import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";


// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

export default function Application(props) {
  const [day, setDay] = useState('Monday');
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get("/api/days").then( (res) => {setDays(res.data)})
}, [])


  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<Appointment />
{/* // key={appointments.id} {...appointments} /> */}
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList
  days={days}
  day={"Monday"}
  setDay={day => console.log(day)}
/></nav>

<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">

      <DayList 
  days={days} 
  value={day} 
  onChange={setDay} 
/>
      </section>
    </main>
  );
}

