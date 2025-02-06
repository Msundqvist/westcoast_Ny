import { ICourses } from '../models/ICourses';

export const courses: ICourses[] = [
  {
    courseName: 'Brewing class',
    courseNumber: 1,
    duration: 10,
    classRoom: true,
    distans: false,
    imageUrl: 'beer.jpg',
    startDate: '2025-04-10',
    popular: true,
    id: '1',
  },
  {
    courseName: 'obedience class',
    courseNumber: 2,
    duration: 5,
    classRoom: false,
    distans: true,
    imageUrl: 'miniature-schnauzer.jpg',
    startDate: '2025-05-10',
    popular: false,
    id: '2',
  },
  {
    courseName: 'Bird watching',
    courseNumber: 3,
    duration: 3,
    classRoom: true,
    distans: false,
    imageUrl: 'naturePhotographers.jpg',
    startDate: '2025-09-11',
    popular: false,
    id: '30',
  },
  {
    courseName: 'Painting class',
    courseNumber: 4,
    duration: 15,
    classRoom: false,
    distans: true,
    imageUrl: 'painting.jpg',
    startDate: '2025-07-15',
    popular: true,
    id: '40',
  },
  {
    courseName: 'Cooking class',
    courseNumber: 5,
    duration: 5,
    classRoom: true,
    distans: false,
    imageUrl: 'food.jpg',
    startDate: '2025-07-15',
    popular: false,
    id: '5',
  },
  {
    courseName: 'Survive in the wilderness',
    courseNumber: 6,
    duration: 5,
    classRoom: false,
    distans: true,
    imageUrl: 'wildernessgirl.jpg',
    startDate: '2025-03-15',
    popular: true,
    id: '6',
  },
];
