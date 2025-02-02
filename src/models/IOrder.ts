import { IRegistration } from './IRegistration';
import { ICourses } from './ICourses';
import { ICoustumer } from './ICoustumer';

export interface IOrder {
  id: string;
  user: IRegistration[];
  costumerOrders: ICourses[];
  costumer: ICoustumer;
}
