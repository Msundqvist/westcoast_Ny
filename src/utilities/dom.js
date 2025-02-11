import { handleCourseList } from "../admin.js";
const courseList = document.querySelector('#showbookings')

const listCourses = document.querySelector('#listAllcourses')
export const displayCourseInfo = (bookings) => {
    for (let booking of bookings) {
        const div = document.createElement('div')
        const studentName = document.createElement('span')
        const studentEmail = document.createElement('span')
        const courseId = document.createElement('span')


        studentName.textContent = `Studentens Namn: ${booking.studentName}`
        studentEmail.textContent = `Studentens E-post: ${booking.studentEmail}`
        courseId.textContent = `Har bokat kurs: ${booking.courseId}`



        div.appendChild(studentName)
        div.appendChild(studentEmail)
        div.appendChild(courseId)
        courseList.appendChild(div)

    }

};
export const displayAllcourses = (courses) => {

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