import { courses } from './data/courses.js';
import { displayCourse } from './utilities/dom.js';
const initApp = () => {
    listCourses();
};
const listCourses = () => {
    displayCourse(courses);
};
document.addEventListener('DOMContentLoaded', initApp);
