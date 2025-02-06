import { IRegistration } from './IRegistration';
import { ICourses } from './ICourses';
import { IStudent } from './IStudent';

export interface IOrder {
  id: string;
  user: IRegistration[];
  costumerOrders: ICourses[];
  costumer: IStudent;
}
