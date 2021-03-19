import { ADD_EMPLOYEE, EDIT_EMPLOYEE, EmployeeAction, EmployeeType } from './types';
import employeesArr from '../constants/employees.json'

const initialValue: EmployeeType[] = employeesArr

export const reduser = (state = initialValue, action: EmployeeAction): EmployeeType[] => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [ action.payload, ...state];
    case EDIT_EMPLOYEE: 
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        } else  {
          return el;
        }
      });
    default:
      return state;
  }
}
