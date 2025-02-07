import { HttpClient } from './utilities/httpClient.js';
const addcourseForm = document.querySelector('#addCourseForm');
const initApp = () => { };
const verifyAddedCourse = async (courses) => {
    const httpClient = new HttpClient('http://localhost:300/courses?');
    await httpClient.Get();
    return courses;
};
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
const formControl = async () => {
    const filter = document.querySelector('#item-input').value;
    if (filter.trim().length === 0) {
        displayErrorMessage();
    }
};
const handleAddCourse = async (e) => {
    e.preventDefault();
    const data = new FormData(addcourseForm);
    const formdata = Object.fromEntries(data);
    const course = {
        courseName: formdata.courseName.toString(),
        courseNumber: +formdata.courseNumber.toString(),
        id: +formdata.id.toString(),
        classRoom: formdata.classRoom.toString(),
        distans: formdata.distans.toString(),
        popular: formdata.popular.toString(),
        startDate: formdata.startDate.toString(),
        duration: +formdata.duration.toString(),
        imageUrl: data.get('imageUrl'),
    };
    addNewcourse(course);
    await formControl();
};
const displayErrorMessage = () => {
    console.log('fel');
};
document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
