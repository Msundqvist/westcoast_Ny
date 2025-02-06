import { courses } from './data/courses.js';
import { createElement, displayCourse } from './utilities/dom.js';
const initApp = () => {
  listCourses();
};

const listCourses = () => {
  displayCourse(courses);
  createElement;
};
document.addEventListener('DOMContentLoaded', initApp);
