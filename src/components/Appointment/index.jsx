import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

// const interviewers = 
//   {
//     "1": {
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//     "id": 2,
//     "name": "Tori Malcolm",
//     "avatar": "https://i.imgur.com/Nmx0Qxo.png"
//     },
//     "3": {
//     "id": 3,
//     "name": "Mildred Nazir",
//     "avatar": "https://i.imgur.com/T2WwVfS.png"
//     },
//     "4": {
//     "id": 4,
//     "name": "Cohana Roy",
//     "avatar": "https://i.imgur.com/FK8V841.jpg"
//     },
//     "5": {
//     "id": 5,
//     "name": "Sven Jones",
//     "avatar": "https://i.imgur.com/twYrpay.jpg"
//     }
//     }



// const appointment = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];

export default function Appointment(props) {
  const { time, interview } = props;
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && interview && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          // onDelete={() => transition(CONFIRM)}
          // onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={[]}
        />
      )}
    </article>
  );
}