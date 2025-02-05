import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses.js';
const addCoursebutton =
  document.querySelector<HTMLButtonElement>('#addToBooked');
document.querySelector<HTMLSpanElement>('#cartItem');
let isInEditmode = false;

const initApp = () => {
  findCourse();
};

// const getcartcourses = (): ICourses[] => {
//   const course: ICourses[] = JSON.parse(localStorage.getItem('cart')!) ?? [];
//   return course;
// };

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
const addToCart = (e: any) => {};
const updateCart = () => {};

const generateHtmlCourse = (course: ICourses) => {
  const div = document.createElement('div');

  div.innerHTML = `
  <div class = "details-top">
        <div>
          ${
            course.imageUrl
              ? `<img src="/src/assets/images/${course.imageUrl}" alt="${course.courseName}"/>`
              : ''
          }
        </div>
    </div>
    <div class="info">
    <h2>${course.courseName}</h2>
    <div class ="boolean">
    <p>Populär : ${course.popular.toString()}</p>
    <p>Klassrum : ${course.classRoom.toString()}</p>
    <p>Distans : ${course.distans.toString()}</p>
    </div>
    <p>Kursen är: ${course.duration} dagar</p>
    <p>Kursstart: ${course.startDate}</p>
    </div>
    `;
  return div;
};

const displayCourse = (course: ICourses) => {
  document.querySelector('#details')!.appendChild(generateHtmlCourse(course));
};
addCoursebutton?.addEventListener('click', addToCart);
document.addEventListener('DOMContentLoaded', initApp);
