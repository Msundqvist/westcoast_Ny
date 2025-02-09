
// const courseButton = document.querySelector('#courselist')

const initApp = () => {

  getCourseInfo(3);

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

const displayCourseInfo = (booking) => {
  console.log(booking)
};
const getCourseShow = () => { }
document.addEventListener('DOMContentLoaded', initApp);
// courseButton.addEventListener('click', getCourseShow)