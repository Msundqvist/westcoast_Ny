import { ICourses } from '../models/ICourses';

export const addToStorage = (courseNumber: ICourses) => {
  localStorage.setItem('costumerOrders', JSON.stringify(courseNumber));
};
