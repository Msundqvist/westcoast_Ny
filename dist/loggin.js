import { student } from './data/student';
const loginInput = document.querySelector('#email');
const loggInbutton = document.querySelector('#logginForm');
const initApp = () => { };
const findStudent = async (email) => {
    const url = 'http://localhost:3000/student?' + email;
    const response = await fetch(url);
    if (response.ok) {
        ISudent = await response.json();
        if (email.length === 0) {
            location.href = './registration.html';
        }
        else {
            console.log(student);
        }
    }
};
const handleStudent = async () => { };
document.addEventListener('DOMContentLoaded', initApp);
loggInbutton.addEventListener('Submit', handleStudent);
