import { createElement } from './utilities/dom.js';
import { HttpClient } from './utilities/httpClient.js';
const formCheckout = document.querySelector('#form');
let courseId = 0;
const initApp = () => {
    getCourse();
};
const getCourse = async () => {
    const httpClient = new HttpClient('http://localhost:3000/courses/' + courseId);
    return await httpClient.Get();
};
const verifyStudent = async (email, studentName) => {
    const httpClient = new HttpClient('http://localhost:3000/student?email=' +
        email +
        '&studentName=' +
        studentName);
    const student = await httpClient.Get();
    return student;
};
const addToBooked = async (student, courseId) => {
    const booking = {
        studentEmail: student.email,
        studentName: student.studentName,
        courseId: courseId,
    };
    const url = 'http://localhost:3000/bookings';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
    });
    if (response.ok) {
        return booking;
    }
    else {
        throw new Error('du har skrivit fel användaruppgifter');
    }
};
const bookedCourse = async (courseId) => {
    const url = 'http://localhost:3000/courses/' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        const course = await response.json();
        return course;
    }
};
const getBookedCourse = (course) => {
    const courseList = document.querySelector('#displayOrders');
    courseList.innerHTML = '';
    const div = createElement('div');
    const heading = createElement('h5');
    const p = createElement('p');
    div.classList.add('orderDisplay');
    heading.classList.add('booked-title');
    heading.textContent = `Bokade kurser`;
    p.classList.add('booking-text');
    p.textContent = `${course.courseName}`;
    div.appendChild(heading);
    div.appendChild(p);
    courseList.appendChild(div);
};
const handlercheckout = async (e) => {
    e.preventDefault();
    if (formCheckout === null)
        return;
    const data = new FormData(formCheckout);
    const student = await verifyStudent(data.get('email'), data.get('studentName'));
    addToBooked(student[0], courseId);
    const course = await bookedCourse(courseId);
    getBookedCourse(course);
};
document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
