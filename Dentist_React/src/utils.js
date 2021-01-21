import dentists from "./json-data/dentists.json";
import assistants from "./json-data/assistants.json";
import patients from "./json-data/patients.json";

const getRandomEmployee = (employee,num) => {
  
  let person = employee[Math.floor(Math.random() * num)];
  let email = person.email_address;
  person.email_address = email
    .slice(0, email.indexOf("@"))
    .concat("@tandartspraktijkbvt.nl");
  return `${person.name} ${person.surname} `;
};
const getRandomPatient = () => {
  const person = patients[Math.floor(Math.random() * 50)];
  return `${person.name} ${person.surname}`;  
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatient(),
  dentist: getRandomEmployee(dentists, 4),
  assistant: getRandomEmployee(assistants, 2),
});

const generateRandomAppointments = (num) =>
  Array(num)
    .fill(0)
    .map((_) => generateRandomAppointment());

    const startingState = generateRandomAppointments(20).sort(
      (a, b) => a.time - b.time
    );  

export default startingState;
