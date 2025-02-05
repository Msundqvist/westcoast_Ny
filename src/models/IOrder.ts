import { IRegistration } from './IRegistration';
import { ICourses } from './ICourses';
import { ICoustumer } from './IStudent';

export interface IOrder {
  id: string;
  user: IRegistration[];
  costumerOrders: ICourses[];
  costumer: ICoustumer;
}
