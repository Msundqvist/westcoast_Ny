import { ICourses } from './models/ICourses';
import { IRegistration } from './models/IRegistration';
import { addToStorage } from './utilities/storage.';
const formCheckout = document.querySelector<HTMLFormElement>('#form');
const displayCourse = document.querySelector<HTMLDivElement>('#displayOrders');
let id = 0;
let courses: ICourses[];

const initApp = () => {
  id = +location.search.split('=')[1];
  console.log(id);
  getCourse();
};
const getCourse = async () => {
  const url = 'http://localhost:3000/courses/' + id;

  const response = await fetch(url);
  if (response.ok) {
    courses = await response.json();
    console.log(courses);
  }
  console.log(courses);
};

const handlercheckout = () => {};

document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
