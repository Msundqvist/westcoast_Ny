import { IRegistration } from './IRegistration';
import { ICourses } from './ICourses';

export interface IOrder {
  id: string;
  customer: IRegistration;
  orderItems: ICourses[];
}
