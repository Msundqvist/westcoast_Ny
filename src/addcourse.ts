import { ICourses } from './models/ICourses.js';
const addcourseForm = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;
const initApp = () => {};

const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();

  if (addcourseForm === null) return;
  const data = new FormData(addcourseForm);
  const course: ICourses = {
    courseName: data.get('courseName') as string,
    courseNumber: data.get('courseNumber'),
  };
};

document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
