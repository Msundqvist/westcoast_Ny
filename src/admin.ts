import { ICourses } from './models/ICourses';

const formAddCourse = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;

const initApp = () => {
  getCourseInfo(2);
};
const addCourse = async (courses: ICourses) => {
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
// const loadCourses = async (courseNumber) => {
//   const url = 'http://localhost:3000/courses?courseNumber=' + courseNumber;
//   const response = await fetch(url)

//   if (response.ok) {
//     const courses = await response.json();
//     displayCou(courses)
//   }
// }

const getCourseInfo = async (courseId: number) => {
  const url = 'http://localhost:3000/bookings?courseId=' + courseId;
  const response = await fetch(url);

  if (response.ok) {
    const bookings = await response.json();
    displayCourseInfo(bookings);
  }
};

const displayCourseInfo = async (booking: string) => {
  console.log(booking);
};
const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();
  if (formAddCourse === null || formAddCourse.value === '') return;
  const data = new FormData(formAddCourse);
  const course: ICourses = {
    courseName: data.get('courseName') as string,
    courseNumber: parseInt(data.get('courseNumber') as string),
    duration: parseInt(data.get('duration') as string),
    price: parseInt(data.get('price') as string),
    id: parseInt(data.get('id') as string),
    startDate: data.get('startDate') as string,
    classRoom: Boolean(data.get('classrom') as string),
    popular: Boolean(data.get('popular') as string),
    distans: Boolean(data.get('distans') as string),
    imageUrl: data.get('imageUrl') as string,
  };
  try {
    await fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/js',
      },
      body: JSON.stringify(course),
    });
  } catch (error) {
    console.log('error');
  }
};

document.addEventListener('DOMContentLoaded', initApp);
formAddCourse?.addEventListener('submit', handleAddCourse);
