import { ADD_EMPLOYEE, EDIT_EMPLOYEE, EmployeeAction, Employee } from './types';
import employeesArr from '../constants/employees.json'

const initialValue: Employee[] = employeesArr

export const reduser = (state = initialValue, action: EmployeeAction): Employee[] => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    case EDIT_EMPLOYEE: 
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        } else  {
          return el;
        }
      });
    default:
      return state
  }

}