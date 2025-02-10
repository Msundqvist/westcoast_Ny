

const formAddCourse = document.querySelector(
  '#addCourseForm'
)
const courseList = document.querySelector('#showbookings')
const listCourses = document.querySelector('#listAllcourses')

const initApp = () => {
  // getCourseInfo(2);
  // displayCourseInfo(bookings);
  listAllCourses();
};
// const addCourse = async (courses) => {
//   const course = {
//     courseName: courses.courseName,
//     courseNumber: courses.courseNumber,
//     duration: courses.duration,
//     price: courses.price,
//   };
//   const url = 'http://localhost:3000/courses';
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(course),
//   });
//   if (response.ok) {
//     console.log(response);
//     return courses;
//   } else {
//     throw new Error('du har anget fel information');
//   }
// };
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
    console.log(bookings)
  }

};

// const displayCourseInfo = async (bookings) => {
//   for (let booking of bookings) {
//     const div = document.createElement('div')
//     const studentName = document.createElement('span')
//     const courseName = document.createElement('span')

//     studentName.textContent = booking.studentName
//     courseName.textContent = booking.courseName


//     div.appendChild(studentName)
//     div.appendChild(courseName)
//     courseList.appendChild(div)

//   }

// };
// const handleAddCourse = async (e) => {
//   e.preventDefault();
//   if (formAddCourse === null || formAddCourse.value === '') return;
//   const data = new FormData(formAddCourse);
//   const course = {
//     courseName: data.get('courseName').toString(),
//     courseNumber: parseInt(data.get('courseNumber').toString()),
//     duration: parseInt(data.get('duration').toString()),
//     price: parseInt(data.get('price').toString()),

//   };
//   try {
//     await fetch('http://localhost:3000/courses', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/js',
//       },
//       body: JSON.stringify(course),
//     });
//   } catch (error) {
//     console.log('error');
//   }
//   addCourse(course);
//   location.href = `./courses.html`
// };

const handleCourseList = () => {
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

const displayAllcourses = (courses) => {

  for (let course of courses) {
    const div = document.createElement('div')
    const courseName = document.createElement('Span')
    const link = document.createElement('a')

    courseName.appendChild(link)
    link.href = `./admin.html?courseNumber=${course.courseNumber}`
    link.textContent = course.courseName

    div.appendChild(courseName)

    listCourses.appendChild(div)
  }
  handleCourseList()
}


document.addEventListener('DOMContentLoaded', initApp);
// formAddCourse?.addEventListener('submit', handleAddCourse);
