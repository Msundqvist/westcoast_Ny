const addcourseForm = document.querySelector('#addCourseForm');
const initApp = () => { };
const handleAddCourse = async (e) => {
    e.preventDefault();
    if (addcourseForm === null)
        return;
    const data = new FormData(addcourseForm);
    const formdata = Object.fromEntries(data);
    const course = {
        courseName: formdata.courseName.toString(),
        courseNumber: +formdata.courseNumber.toString(),
        id: +formdata.id.toString(),
        classRoom: formdata.classRoom.toString(),
        distans: formdata.distans.toString(),
        popular: formdata.popular.toString(),
        startDate: formdata.startDate.toString(),
        duration: +formdata.duration.toString(),
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
        console.log(error);
    }
    localStorage.setItem('courses', JSON.stringify(course));
};
document.addEventListener('DOMContentLoaded', initApp);
addcourseForm.addEventListener('submit', handleAddCourse);
export {};
