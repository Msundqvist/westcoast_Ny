import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses.js';
import { generateHtmlCourse } from './utilities/dom.js';

const addCoursebutton =
  document.querySelector<HTMLButtonElement>('#addToBooked');

const initApp = () => {
  findCourse();
};

const findCourse = (): void => {
  const courseNumber = location.search.split('=')[1];
  // med plustecknet ändrar man om datatypen. i dettafall number till string
  const course = courses.find((c) => c.courseNumber === +courseNumber);
  if (course) {
    displayCourse(course);
  } else {
    console.log('Error');
  }
};

const displayCourse = (course: ICourses) => {
  document.querySelector('#details')!.appendChild(generateHtmlCourse(course));
};
const getlocationcourse = () => {
  const url = location.search.split('=')[1];
  location.href = `./coustumer-registration.html?id=${url}`;
  console.log(url);
};

const addToCart = () => {
  getlocationcourse();
};

addCoursebutton?.addEventListener('click', addToCart);
document.addEventListener('DOMContentLoaded', initApp);
