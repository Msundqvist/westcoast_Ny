// skapade första delen av en funktion för att byta ut document.create...
export const createElement = (element) => {
    return document.createElement(element);
};
export const displayCourse = (courses) => {
    const app = document.querySelector('#all-courses');
    app.innerHTML = '';
    for (let course of courses) {
        const div = createElement('div');
        const imageAnchor = createElement('a');
        const imageurl = createElement('img');
        const cardBody = createElement('div');
        const heading = createElement('h5');
        const p = createElement('p');
        const small = createElement('small');
        div.classList.add('card');
        imageAnchor.href = `./course-details.html?courseNumber=${course.courseNumber}`;
        imageurl.alt = `${course.courseName}`;
        imageurl.src = `/src/assets/images/${course.imageUrl}`;
        imageAnchor.appendChild(imageurl);
        div.appendChild(imageAnchor);
        cardBody.classList.add('card-body');
        heading.classList.add('card-title');
        heading.textContent = course.courseName;
        p.classList.add('card-text');
        small.textContent = `Kursstart: ${course.startDate}`;
        p.appendChild(small);
        cardBody.append(heading);
        cardBody.append(p);
        div.append(cardBody);
        app.appendChild(div);
    }
};
export const generateHtmlCourse = (course) => {
    const div = document.createElement('div');
    div.innerHTML = `
  <div class = "details-top">
        <div>
          ${course.imageUrl
        ? `<img src="/src/assets/images/${course.imageUrl}" alt="${course.courseName}"/>`
        : ''}
        </div>
    </div>
    <div class="info">
    <h2>${course.courseName}</h2>
    <div class ="boolean">
    <p>Populär : ${course.popular.toString()}</p>
    <p>Klassrum : ${course.classRoom.toString()}</p>
    <p>Distans : ${course.distans.toString()}</p>
    </div>
    <p>Kursen är: ${course.duration} dagar</p>
    <p>Kursstart: ${course.startDate}</p>
    <p>Pris för kurs: ${course.price}</p>
    </div>
    `;
    return div;
};
export const getBookedCourse = (course) => {
    const courseList = document.querySelector('#displayOrders');
    courseList.innerHTML = '';
    const div = createElement('div');
    const heading = createElement('h5');
    const p = createElement('p');
    div.classList.add('orderDisplay');
    heading.classList.add('booked-title');
    heading.textContent = `Bokade kurser`;
    p.classList.add('booking-text');
    p.textContent = `${course.courseName}`;
    div.appendChild(heading);
    div.appendChild(p);
    courseList.appendChild(div);
};
