import { ICourses } from './models/ICourses.js';
import { HttpClient } from './utilities/httpClient.js';
const addcourseForm = document.querySelector(
  '#addCourseForm'
) as HTMLFormElement;
const initApp = () => {};

const handleAddCourse = async (e: SubmitEvent) => {
  e.preventDefault();

  if (addcourseForm === null) return;
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
  try {
    await fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/js',
      },
      body: JSON.stringify(course),
    });
  } catch (error) {
    console.log(error);
  }
  localStorage.setItem('courses', JSON.stringify(course));
};

document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
