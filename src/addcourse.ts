import { ICourses } from './models/ICourses.js';
import { HttpClient } from './utilities/httpClient.js';
const addcourseForm = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;
const initApp = () => {};
const verifyAddedCourse = async (courses: ICourses) => {
  const httpClient = new HttpClient('http://localhost:300/courses?');
  return await httpClient.Get();
};

const addNewcourse = async (course: ICourses) => {
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
  } else {
    throw new Error('du har skrivit fel användaruppgifter');
  }
};
const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();

  if (addcourseForm.length === 0) return displayErrorMessage();
  const data = new FormData(addcourseForm);
  const formdata = Object.fromEntries(data);

  const course: ICourses = {
    courseName: formdata.courseName.toString(),
    courseNumber: +formdata.courseNumber.toString(),
    id: +formdata.id.toString(),
    classRoom: formdata.classRoom.toString(),
    distans: formdata.distans.toString(),
    popular: formdata.popular.toString(),
    startDate: formdata.startDate.toString(),
    duration: +formdata.duration.toString(),
    imageUrl: data.get('imageUrl') as string,
  };
  verifyAddedCourse(course);
  addNewcourse(course);
};
const displayErrorMessage = () => {
  console.log('fel');
};
document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
