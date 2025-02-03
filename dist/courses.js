import { courses } from './data/courses.js';
const initApp = () => {
    listCourses();
};
const listCourses = () => {
    displayCourse(courses);
};
// skapade första delen av en funktion för att byta ut document.create...
const createElement = (element) => {
    return document.createElement(element);
};
const displayCourse = (courses) => {
    const app = document.querySelector('#all-courses');
    app.innerHTML = '';
    for (let course of courses) {
        const div = createElement('div');
        const imageurl = createElement('img');
        const cardBody = createElement('div');
        const boolean = createElement('div');
        const heading = createElement('h5');
        const p = createElement('p');
        const small = createElement('small');
        div.classList.add('card');
        imageurl.alt = `${course.courseName}`;
        imageurl.src = `/src/assets/images/${course.imageUrl}`;
        cardBody.classList.add('card-body');
        heading.classList.add('card-title');
        heading.textContent = course.courseName;
        p.classList.add('card-text');
        small.textContent = `Kursstart: ${course.startDate} `;
        p.appendChild(small);
        boolean.classList.add('boolean');
        boolean.textContent = `populär: ${course.popular}  Klassrum: ${course.classRoom} Distans: ${course.distans}`;
        cardBody.append(heading);
        cardBody.append(imageurl);
        cardBody.append(p);
        cardBody.append(boolean);
        div.append(cardBody);
        app.appendChild(div);
    }
};
document.addEventListener('DOMContentLoaded', initApp);
