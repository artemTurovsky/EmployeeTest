export interface EmployeeType {
  id: number,
  name: string,
  isArchive: boolean,
  role: string,
  phone: string,
  birthday: string
}

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';

export interface EmployeeAction {
  type: typeof ADD_EMPLOYEE | typeof EDIT_EMPLOYEE,
  payload: EmployeeType
}
