import { ICourses } from '../models/ICourses';

// skapade första delen av en funktion för att byta ut document.create...
export const createElement = (element: string): HTMLElement => {
  return document.createElement(element);
};
export const displayCourse = (courses: Array<ICourses>) => {
  const app = document.querySelector('#all-courses') as HTMLDivElement;
  app.innerHTML = '';

  for (let course of courses) {
    const div = createElement('div') as HTMLDivElement;
    const imageAnchor = createElement('a') as HTMLAnchorElement;
    const imageurl = createElement('img') as HTMLImageElement;
    const cardBody = createElement('div') as HTMLDivElement;
    const heading = createElement('h5') as HTMLHeadingElement;
    const p = createElement('p') as HTMLParagraphElement;
    const small = createElement('small') as HTMLElement;

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

export const generateHtmlCourse = (course: ICourses) => {
  const div = document.createElement('div');

  div.innerHTML = `
  <div class = "details-top">
        <div>
          ${
            course.imageUrl
              ? `<img src="/src/assets/images/${course.imageUrl}" alt="${course.courseName}"/>`
              : ''
          }
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
    </div>
    `;
  return div;
};