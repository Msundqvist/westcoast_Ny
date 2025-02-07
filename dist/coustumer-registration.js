import { createElement } from './utilities/dom.js';
import { HttpClient } from './utilities/httpClient.js';
const formCheckout = document.querySelector('#form');
let courseId = 0;
const initApp = () => {
    courseId = +location.search.split('=')[1];
    console.log(courseId);
    getCourse();
};
const getCourse = async () => {
    //   const url = 'http://localhost:3000/courses/' + courseId;
    //   const response = await fetch(url);
    //   if (response.ok) {
    //     courses = await response.json();
    //   }
    //   console.log(courses);
    const httpClient = new HttpClient('http://localhost:3000/courses/' + courseId);
    return await httpClient.Get();
};
const verifyStudent = async (email, studentName) => {
    const httpClient = new HttpClient('http://localhost:3000/student?email=' +
        email +
        '&studentName=' +
        studentName);
    console.log('fått med båda');
    const student = await httpClient.Get();
    console.log('fått  med student', student);
    return student;
    //   return await httpClient.Get();
    //   const url = 'http://localhost:3000/student?email=' + email;
    //   const response = await fetch(url);
    //   if (response.ok) {
    //     return await response.json();
    //   }
};
const addToBooked = async (student, courseId) => {
    const booking = {
        studentEmail: student.email,
        studentName: student.studentName,
        courseId: courseId,
    };
    //   try {
    //     const httpClient = new HttpClient('http://localhost:3000/bookings')
    //     if (await httpClient.post(booking))console.log('det funkade')
    //   } catch (error) {
    //   }
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
        console.log(course);
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
// const displayBookedCourse = (bookings: Array<IBookings>) => {
//   bookedCourse(courseId);
//   bookings.forEach((bookings) => getBookedCourse);
//   console.log(bookings);
// };
const handlercheckout = async (e) => {
    e.preventDefault();
    if (formCheckout === null)
        return;
    const data = new FormData(formCheckout);
    const student = await verifyStudent(data.get('email'), data.get('studentName'));
    console.log(student);
    addToBooked(student[0], courseId);
    const course = await bookedCourse(courseId);
    getBookedCourse(course);
};
document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
