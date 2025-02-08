import { ICourses } from './models/ICourses.js';
import { createElement } from './utilities/dom.js';
const addcourseForm = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;
const initApp = () => {};

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

const formControl = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#item-input')!.value;
  if (filter.trim().length === 0) {
    displayErrorMessage();
  }
};

const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();
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
  addNewcourse(course);
  await formControl();
};
const displayErrorMessage = () => {
  const errormsg = document.querySelector('errorMsg') as HTMLDivElement;
  errormsg.innerHTML = '';

  const div = createElement('div') as HTMLDivElement;
  div.classList.add('errorMsg');
  div.textContent = `Du har inte fyllt i alla fält!!!`;
  errormsg.appendChild(div);
};

document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
