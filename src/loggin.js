const loginInput = document.querySelector('#input-item');
const loggInbutton = document.querySelector('#loggIn')

const initApp = () => { };

const findStudent = async (email) => {
  const url = 'http://localhost:3000/student?email=' +
    email
  const response = await fetch(url);
  if (response.ok) {
    const student = await response.json();
    location.href = "./courses.html";
    if (student.length === 0) {
      location.href = './registration.html';
    } else {
      console.error();

    }
  }
};
const handleStudent = () => {
  const email = loginInput.value
  findStudent(email)
};

document.addEventListener('DOMContentLoaded', initApp);
loggInbutton.addEventListener('click', handleStudent);
