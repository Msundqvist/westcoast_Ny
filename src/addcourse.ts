import { ICourses } from './models/ICourses.js';
import { INewcourse } from './models/INewcourse.js';
import { createElement } from './utilities/dom.js';
const addcourseForm = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;
const initApp = () => {};
let courseNumber = 0;

const addNewcourse = async (course: INewcourse) => {
  const newcourse = {
    courseName: course.courseName,
    courseNumber: course.courseNumber,
    // id: course.id,
    duration: course.duration,
    price: course.price,
    // classRoom: course.classRoom,
    // popular: course.popular,
    // distans: course.distans,
    // imageUrl: course.imageUrl,
    // startDate: course.startDate,
  };
  const url = 'http://localhost:3000/newcourse';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newcourse),
  });
  if (response.ok) {
    return newcourse;
  } else {
    throw new Error('du har skrivit fel användaruppgifter');
  }
};

const addedCourse = async (courseNumber: number) => {
  const url = 'http://localhost:3000/newCourse/' + courseNumber;
  const response = await fetch(url);
  if (response.ok) {
    const course = await response.json();
    return course;
  }
};
const displayErrorMessage = () => {
  const errormsg = document.querySelector('errorMsg') as HTMLDivElement;
  errormsg.innerHTML = '';

  const div = createElement('div') as HTMLDivElement;
  div.classList.add('errorMsg');
  div.textContent = `Du har inte fyllt i alla fält!!!`;
  errormsg.appendChild(div);
};

const formControl = async () => {
  const filter = document.querySelector<HTMLInputElement>('#item-input')!.value;
  if (filter === null || filter === '') {
    return console.log('du har inte fyllt');
  }
};
const getAddedcourse = () => {
  // const url = location.search.split('=')[1];
  // location.href = `./courses.html?id=${url}`;
};

const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();
  if (addcourseForm.value === null || addcourseForm.value === '') {
    return displayErrorMessage();
  } else {
    const data = new FormData(addcourseForm);
    const newCourse = {
      courseName: data.get('courseName') as string,
      courseNumber: parseInt(data.get('courseNumber')!.toString()),
      // id: parseInt(data.get('id')!.toString()),
      // classRoom: Boolean(data.get('classRoom')!.toString()),
      // distans: Boolean(data.get('distans')!.toString()),
      // popular: Boolean(data.get('distans')!.toString()),
      // startDate: data.get('startdate') as string,
      duration: parseInt(data.get('duration')!.toString()),
      price: parseInt(data.get('price')!.toString()),
      // imageUrl: data.get('imageUrl') as string,
    };
    await formControl();
    console.log('här');
    addNewcourse(newCourse);
    // addedCourse();
    console.log(newCourse);
    getAddedcourse();
  }
};

document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
