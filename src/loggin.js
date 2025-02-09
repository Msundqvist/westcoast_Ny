const loginInput = document.querySelector('#input-item');
const loggInbutton = document.querySelector('#loggIn')

const initApp = () => { };

const findStudent = async (email, studentName) => {
  const url = 'http://localhost:3000/student?email=' +
    email + '&studentName=' + studentName
  const response = await fetch(url);
  if (response.ok) {
    const student = await response.json();
    location.href = "./courses.html";
    if (student === 0 || student === '') {
      location.href = './registration.html';
    } else {
      console.error();

    }
  }
};
const handleStudent = () => {
  const email = loginInput.value
  const studentName = loginInput.value
  findStudent(email, studentName)
};

document.addEventListener('DOMContentLoaded', initApp);
loggInbutton.addEventListener('click', handleStudent);
