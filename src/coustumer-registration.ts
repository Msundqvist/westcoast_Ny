import { ICourses } from './models/ICourses';
import { IStudent } from './models/IStudent';
import { createElement } from './utilities/dom.js';
const formCheckout = document.querySelector<HTMLFormElement>('#form');

let courseId = 0;
let courses: ICourses[];

const initApp = () => {
  courseId = +location.search.split('=')[1];
  console.log(courseId);
  getCourse();
};
const getCourse = async () => {
  const url = 'http://localhost:3000/courses/' + courseId;

  const response = await fetch(url);
  if (response.ok) {
    courses = await response.json();
  }
  console.log(courses);
};

const verifyStudent = async (email: string) => {
  const url = 'http://localhost:3000/student?email=' + email;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
};

const addToBooked = async (student: IStudent, id: number) => {
  const booking = {
    studentEmail: student.email,
    courseId: id,
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
    console.log('det funkade');
  }
};
const bookedCourse = async (courseId: number) => {
  const url = 'http://localhost:3000/courses/' + courseId;
  const response = await fetch(url);
  if (response.ok) {
    const course = await response.json();
    console.log(course);
  }
};
const listcourses = () => {
  const courseList = document.querySelector('#displayOrders');
};

const handlercheckout = async (e: SubmitEvent) => {
  e.preventDefault();
  if (formCheckout === null) return;
  const data = new FormData(formCheckout);
  const student = await verifyStudent(data.get('email') as string);
  console.log(student[0]);
  addToBooked(student[0], courseId);
  bookedCourse(courseId);
};

document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
