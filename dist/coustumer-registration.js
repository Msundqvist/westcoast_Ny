const formCheckout = document.querySelector('#form');
let courseId = 0;
let courses;
const initApp = () => {
    courseId = +location.search.split('=')[1];
    console.log(courseId);
    getCourse();
};
const getCourse = async () => {
    const url = 'http://localhost:3000/courses/' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        courses = await response.json();
    }
    console.log(courses);
};
const verifyStudent = async (email) => {
    const url = 'http://localhost:3000/student?email=' + email;
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
};
const addToBooked = async (student, id) => {
    const booking = {
        studentEmail: student.email,
        courseId: id,
    };
    const url = 'http://localhost:3000/bookings';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
    });
    if (response.ok) {
        console.log('det funkade');
    }
};
const bookedCourse = async (courseId) => {
    const url = 'http://localhost:3000/courses/' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        const course = await response.json();
        console.log(course);
    }
};
const listcourses = () => {
    const courseList = document.querySelector('#displayOrders');
};
const handlercheckout = async (e) => {
    e.preventDefault();
    if (formCheckout === null)
        return;
    const data = new FormData(formCheckout);
    const student = await verifyStudent(data.get('email'));
    console.log(student[0]);
    addToBooked(student[0], courseId);
    bookedCourse(courseId);
};
document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
export {};
