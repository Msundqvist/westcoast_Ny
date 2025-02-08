import { createElement } from './utilities/dom.js';
const addcourseForm = document.querySelector('#addCourseForm');
const initApp = () => { };
let courseId = 0;
const addNewcourse = async (course) => {
    const addCourse = {
        courseName: course.courseName,
        courseNumber: course.courseNumber,
        id: course.id,
        duration: course.duration,
        classRoom: course.classRoom,
        popular: course.popular,
        distans: course.distans,
        imageUrl: course.imageUrl,
        startDate: course.startDate,
    };
    const url = 'http://localhost:3000/courses?';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addCourse),
    });
    if (response.ok) {
        return addCourse;
    }
    else {
        throw new Error('du har skrivit fel användaruppgifter');
    }
};
const addedCourse = async (courseId) => {
    const url = 'http://localhost:3000/courses/' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        const course = await response.json();
        return course;
    }
};
const displayErrorMessage = () => {
    const errormsg = document.querySelector('errorMsg');
    errormsg.innerHTML = '';
    const div = createElement('div');
    div.classList.add('errorMsg');
    div.textContent = `Du har inte fyllt i alla fält!!!`;
    errormsg.appendChild(div);
};
const formControl = async () => {
    const filter = document.querySelector('#item-input').value;
    if (filter.trim().length === 0) {
        displayErrorMessage();
    }
};
const getAddedcourse = () => {
    const url = location.search.split('=')[1];
    location.href = `./courses.html?id=${url}`;
    console.log(getAddedcourse);
};
const handleAddCourse = async (e) => {
    e.preventDefault();
    if (addcourseForm === null)
        return;
    const data = new FormData(addcourseForm);
    const addcourse = {
        courseName: data.get('courseName'),
        courseNumber: parseInt(data.get('courseNumber').toString()),
        id: parseInt(data.get('id').toString()),
        classRoom: Boolean(data.get('classRoom').toString()),
        distans: Boolean(data.get('distans').toString()),
        popular: Boolean(data.get('distans').toString()),
        startDate: data.get('startdate'),
        duration: parseInt(data.get('duration').toString()),
        imageUrl: data.get('imageUrl'),
    };
    formControl();
    console.log('här');
    addNewcourse(addcourse);
    addedCourse(courseId);
    // getAddedcourse();
};
document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
