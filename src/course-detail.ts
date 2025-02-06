import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses.js';
const addCoursebutton = document.querySelector<HTMLFormElement>('#addToBooked');

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

const addToCart = async (e: any) => {
  const url = 'http://localhost:3000/courses?id=';
  const response = await fetch(url);
  if (response.ok) {
    const course = await response.json();
    location.href = './coustumer-registration.html';
    localStorage.setItem('costumerOrders', JSON.stringify(course));
  }
  e.preventDefault();
};
addCoursebutton?.addEventListener('click', addToCart);
document.addEventListener('DOMContentLoaded', initApp);
