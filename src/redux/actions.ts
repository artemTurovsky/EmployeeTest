import { ADD_EMPLOYEE, EDIT_EMPLOYEE, EmployeeAction, EmployeeType } from './types';

export const addEmployee = (payload: EmployeeType): EmployeeAction => ({ type: ADD_EMPLOYEE, payload });
export const editEmployee = (payload: EmployeeType): EmployeeAction => ({ type: EDIT_EMPLOYEE, payload });
