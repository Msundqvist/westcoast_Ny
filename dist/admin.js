const formAddCourse = document.querySelector('#addCourseForm');
const initApp = () => {
    getCourseInfo(2);
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
    }
    else {
        throw new Error('du har anget fel information');
    }
};
// const loadCourses = async (courseNumber) => {
//   const url = 'http://localhost:3000/courses?courseNumber=' + courseNumber;
//   const response = await fetch(url)
//   if (response.ok) {
//     const courses = await response.json();
//     displayCou(courses)
//   }
// }
const getCourseInfo = async (courseId) => {
    const url = 'http://localhost:3000/bookings?courseId=' + courseId;
    const response = await fetch(url);
    if (response.ok) {
        const bookings = await response.json();
        displayCourseInfo(bookings);
    }
};
const displayCourseInfo = async (booking) => {
    console.log(booking);
};
const handleAddCourse = async (e) => {
    e.preventDefault();
    if (formAddCourse === null || formAddCourse.value === '')
        return;
    const data = new FormData(formAddCourse);
    const course = {
        courseName: data.get('courseName'),
        courseNumber: parseInt(data.get('courseNumber')),
        duration: parseInt(data.get('duration')),
        price: parseInt(data.get('price')),
        id: parseInt(data.get('id')),
        startDate: data.get('startDate'),
        classRoom: Boolean(data.get('classrom')),
        popular: Boolean(data.get('popular')),
        distans: Boolean(data.get('distans')),
        imageUrl: data.get('imageUrl'),
    };
    try {
        await fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/js',
            },
            body: JSON.stringify(course),
        });
    }
    catch (error) {
        console.log('error');
    }
};
document.addEventListener('DOMContentLoaded', initApp);
formAddCourse?.addEventListener('submit', handleAddCourse);
export {};
