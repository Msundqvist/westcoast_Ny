import { ICourses } from './ICourses';
import { IStudent } from './IStudent';

export interface IBookings {
  student: IStudent[];
  courseId: ICourses[];
}
