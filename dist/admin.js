const initApp = () => {
    getCourseInfo(3);
};
const getCourseInfo = async (courseId) => {
    const url = 'http://localhost:3000/bookings?courseId=' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        const bookings = await response.json();
        displayCourseInfo(bookings);
    }
};
const displayCourses = (course) => {
    const app = document.querySelector;
};
const courseDisplay = (course) => {
    document.querySelector('#listcourses').appendChild(displayCourses(course));
};
const displayCourseInfo = (bookig) => { };
document.addEventListener('DOMContentLoaded', initApp);
export {};
