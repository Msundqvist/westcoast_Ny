const addcourseForm = document.querySelector('#addCourseForm');
const initApp = () => { };
const handleAddCourse = async (e) => {
    e.preventDefault();
    if (addcourseForm === null)
        return;
    const data = new FormData(addcourseForm);
    const course = {
        courseName: data.get('courseName'),
        courseNumber: data.get('courseNumber'),
    };
};
document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
export {};
