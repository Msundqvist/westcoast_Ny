import { bookings } from './data/bookings.js';
import { IBookings } from './models/IBookings';
import { ICourses } from './models/ICourses';
import { IStudent } from './models/IStudent';
import { createElement } from './utilities/dom.js';
import { HttpClient } from './utilities/httpClient.js';
const formCheckout = document.querySelector<HTMLFormElement>('#form');

let courseId = 0;
let courses: ICourses[];

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
  const httpClient = new HttpClient(
    'http://localhost:3000/courses/' + courseId
  );
  return await httpClient.Get();
};

const verifyStudent = async (
  email: string,
  studentName: string,
  billingAdress: string,
  phoneNumber: string
) => {
  const httpClient = new HttpClient(
    'http://localhost:3000/student?email=' +
      email +
      '&studentName=' +
      studentName +
      '&billingAdress=' +
      billingAdress +
      '&phoneNumber=' +
      phoneNumber
  );
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

const addToBooked = async (student: IStudent, courseId: number) => {
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
  } else {
    throw new Error('du har skrivit fel användaruppgifter');
  }
};
const bookedCourse = async (courseId: number) => {
  const url = 'http://localhost:3000/courses/' + courseId;
  const response = await fetch(url);
  if (response.ok) {
    const course = await response.json();
    console.log(course);
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

// const displayBookedCourse = (bookings: Array<IBookings>) => {
//   bookedCourse(courseId);
//   bookings.forEach((bookings) => getBookedCourse);
//   console.log(bookings);
// };

const handlercheckout = async (e: SubmitEvent) => {
  e.preventDefault();
  if (formCheckout === null || formCheckout.value === '') return;
  const data = new FormData(formCheckout);
  const student = await verifyStudent(
    data.get('email') as string,
    data.get('studentName') as string,
    data.get('billingAdress') as string,
    data.get('phoneNumber') as string
  );
  console.log(student);
  addToBooked(student[0], courseId);
  const course = await bookedCourse(courseId);
  getBookedCourse(course);
};

document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
