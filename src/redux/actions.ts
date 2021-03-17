import { ADD_EMPLOYEE, EDIT_EMPLOYEE, EmployeeAction, Employee } from './types';

export const addEmployee = (payload: Employee): EmployeeAction => ({ type: ADD_EMPLOYEE, payload });
export const editEmployee = (payload: Employee): EmployeeAction => ({ type: EDIT_EMPLOYEE, payload });