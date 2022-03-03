
export function getAppointmentsForDay(state, name) {
  const appointmentsArray = [];

  const filteredDay = state.days.length && state.days.filter(day => day.name === name);

  filteredDay[0]
    && filteredDay[0].appointments.map(id => appointmentsArray.push(state.appointments[id]));

  return appointmentsArray;
}; 

export function getInterviewersForDay(state, name) {
  const interviewersArray = [];

  const filteredDay =
    state.days.length && state.days.filter((day) => day.name === name);

  filteredDay[0] &&
    filteredDay[0].interviewers.map((id) =>
      interviewersArray.push(state.interviewers[id])
    );

  return interviewersArray;
}

export function getInterview(state, interview) {
  return !interview
    ? null
    : {
        student: interview.student,
        interviewer: state.interviewers[interview.interviewer],
      };
}
