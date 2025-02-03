import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses.js';
const initApp = () => {
  listCourses();
};

const listCourses = () => {
  displayCourse(courses);
};
// skapade första delen av en funktion för att byta ut document.create...
const createElement = (element: string): HTMLElement => {
  return document.createElement(element);
};
const displayCourse = (courses: Array<ICourses>) => {
  const app = document.querySelector('#all-courses') as HTMLDivElement;
  app.innerHTML = '';

  for (let course of courses) {
    const div = createElement('div') as HTMLDivElement;
    const image = createElement('img') as HTMLImageElement;
    const cardBody = createElement('div') as HTMLDivElement;
    const heading = createElement('h5') as HTMLHeadingElement;
    const p = createElement('p') as HTMLParagraphElement;
    const small = createElement('small') as HTMLElement;

    div.classList.add('card');

    image.alt = `${course.courseName}`;
    image.src = `${course.imageUrl}`;

    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = course.courseName;

    p.classList.add('card-text');
    small.textContent = `Kursstart: ${course.startDate} `;
    p.appendChild(small);

    cardBody.append(heading);
    cardBody.append(p);

    div.append(cardBody);

    app.appendChild(div);
  }
};
document.addEventListener('DOMContentLoaded', initApp);
