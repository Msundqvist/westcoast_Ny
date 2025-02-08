import { bookings } from './data/bookings.js';
import { IBookings } from './models/IBookings';
import { ICourses } from './models/ICourses';
import { IStudent } from './models/IStudent';
import { createElement } from './utilities/dom.js';
import { HttpClient } from './utilities/httpClient.js';
const formCheckout = document.querySelector<HTMLFormElement>('#form');

let courseId = 0;

const initApp = () => {
  const courseId = location.search.split('=')[0];
  console.log(courseId);

  getCourse();
};
const getCourse = async () => {
  const httpClient = new HttpClient(
    'http://localhost:3000/courses/' + courseId
  );
  return await httpClient.Get();
};

const verifyStudent = async (email: string, studentName: string) => {
  const httpClient = new HttpClient(
    'http://localhost:3000/student?email=' +
      email +
      '&studentName=' +
      studentName
  );
  const student = await httpClient.Get();
  return student;
};

const addToBooked = async (student: IStudent, courseId: number) => {
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
  } else {
    throw new Error('du har skrivit fel användaruppgifter');
  }
};
const bookedCourse = async (courseId: number) => {
  const url = 'http://localhost:3000/courses/' + courseId;
  const response = await fetch(url);
  if (response.ok) {
    const course = await response.json();
    return course;
  }
};

const getBookedCourse = (course: ICourses) => {
  const courseList = document.querySelector('#displayOrders') as HTMLDivElement;
  courseList.innerHTML = '';

  const div = createElement('div') as HTMLDivElement;
  const heading = createElement('h5') as HTMLHeadElement;
  const p = createElement('p') as HTMLParagraphElement;

  div.classList.add('orderDisplay');
  heading.classList.add('booked-title');
  heading.textContent = `Bokade kurser`;
  p.classList.add('booking-text');
  p.textContent = `${course.courseName}`;

  div.appendChild(heading);
  div.appendChild(p);
  courseList.appendChild(div);
};

const handlercheckout = async (e: SubmitEvent) => {
  e.preventDefault();
  if (formCheckout === null) return;
  const data = new FormData(formCheckout);
  const student = await verifyStudent(
    data.get('email') as string,
    data.get('studentName') as string
  );
  addToBooked(student[0], courseId);
  const course = await bookedCourse(courseId);
  getBookedCourse(course);
};

document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
