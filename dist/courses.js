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
        const imageAnchor = createElement('a');
        const imageurl = createElement('img');
        const cardBody = createElement('div');
        const heading = createElement('h5');
        const p = createElement('p');
        const small = createElement('small');
        div.classList.add('card');
        imageAnchor.href = `./course-details.html?courseNumber=${course.courseNumber}`;
        imageurl.alt = `${course.courseName}`;
        imageurl.src = `/src/assets/images/${course.imageUrl}`;
        imageAnchor.appendChild(imageurl);
        div.appendChild(imageAnchor);
        cardBody.classList.add('card-body');
        heading.classList.add('card-title');
        heading.textContent = course.courseName;
        p.classList.add('card-text');
        small.textContent = `Kursstart: ${course.startDate}`;
        p.appendChild(small);
        cardBody.append(heading);
        cardBody.append(imageurl);
        cardBody.append(p);
        div.append(cardBody);
        app.appendChild(div);
    }
};
document.addEventListener('DOMContentLoaded', initApp);
