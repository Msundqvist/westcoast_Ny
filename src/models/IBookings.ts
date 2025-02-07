import { IRegistration } from './IRegistration';
import { ICourses } from './ICourses';
import { IStudent } from './IStudent';

export interface IBookings {
  student: IStudent[];
  courses: ICourses[];
  booking: IRegistration;
}
