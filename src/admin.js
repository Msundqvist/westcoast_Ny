
import { displayCourseInfo, displayAllcourses } from "./utilities/dom.js";
const formAddCourse = document.querySelector(
  '#addCourseForm'
)

const initApp = () => {
  listAllCourses();
};
const addCourse = async (courses) => {
  const course = {
    courseName: courses.courseName,
    courseNumber: courses.courseNumber,
    duration: courses.duration,
    price: courses.price,
  };
  const url = 'http://localhost:3000/courses';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(course),
  });
  if (response.ok) {
    console.log(response);
    return courses;
  } else {
    throw new Error('du har anget fel information');
  }
};


const getCourseInfo = async (courseId) => {
  const url = 'http://localhost:3000/bookings?courseId=' + courseId;
  const response = await fetch(url);

  if (response.ok) {
    const bookings = await response.json();
    console.log(bookings)
    displayCourseInfo(bookings)
  }

};


export const handleCourseList = () => {
  const url = location.search.split('=')[1]
  getCourseInfo(url)

}

const listAllCourses = async (courses) => {
  const url = 'http://localhost:3000/courses?' + courses
  const response = await fetch(url)
  if (response.ok) {
    const course = await response.json();
    displayAllcourses(course)

  }
}

const handleAddCourse = async (e) => {
  e.preventDefault();
  if (formAddCourse === null || formAddCourse.value === '') return;
  const data = new FormData(formAddCourse);
  const course = {
    courseName: data.get('courseName').toString(),
    courseNumber: parseInt(data.get('courseNumber').toString()),
    duration: parseInt(data.get('duration').toString()),
    price: parseInt(data.get('price').toString()),
  };
  await listAllCourses();
  addCourse(course);
  location.href = `./admin.html`
};


document.addEventListener('DOMContentLoaded', initApp);
formAddCourse?.addEventListener('submit', handleAddCourse);
