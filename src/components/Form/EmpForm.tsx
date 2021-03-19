import React, { SetStateAction, Dispatch } from 'react'
import { Form, Field } from 'react-final-form'
import styles from './Form.module.css'
import { EmployeeType } from '../../redux/types';
import * as tools from '../../tools/createUpdateTools'


interface SortByNameType {
  name: string,
}

interface SortByBitrhdayType {
  birthday: string,
}

interface FilterFromType {
  role?: string,
  isArchive?: boolean
}

interface EmpFormProps {
  setShownEmployees: Dispatch<SetStateAction<EmployeeType[]>>
  employees: EmployeeType[],
}

export default function EmpForm({ setShownEmployees, employees }: EmpFormProps) {
  
  const onSortByName = (sortByNameValue: SortByNameType): void => {
    console.log(sortByNameValue)
    if (sortByNameValue.name === 'default') {
      setShownEmployees(employees)
    } else if (sortByNameValue.name === 'fromStart') {
      setShownEmployees(state => {
        const clone: EmployeeType[] = [...state]
        return clone.sort((a, b): number => {
          const firstName = a.name.toLowerCase()
          const secondName = b.name.toLowerCase()
          if (firstName > secondName) {
            return 1
          }
          if (firstName < secondName) {
            return -1
          }
          return 0
        })
      })
    } else if (sortByNameValue.name === 'fromEnd') {
      setShownEmployees(state => {
        const clone: EmployeeType[] = [...state]
        return clone.sort((a, b): number => {
          const firstName = a.name.toLowerCase()
          const secondName = b.name.toLowerCase()
          if (firstName > secondName) {
            return -1
          }
          if (firstName < secondName) {
            return 1
          }
          return 0
        })
      })
    }
  };

  const onSortByBitrhday = (sortByBitrhdayValue: SortByBitrhdayType): void => {
    if (sortByBitrhdayValue.birthday === 'default') {
      setShownEmployees(employees)
    } else if (sortByBitrhdayValue.birthday === 'youngest') {
      setShownEmployees(state => {
        const clone: EmployeeType[] = [...state]
        return clone.sort((a, b): number => {
          const firstPersonBirthday = tools.formatDateForInput(a.birthday)
          const secondPersonBirthday = tools.formatDateForInput(b.birthday)
          if (firstPersonBirthday > secondPersonBirthday) {
            return -1
          }
          if (firstPersonBirthday < secondPersonBirthday) {
            return 1
          }
          return 0
        })
      })
    } else if (sortByBitrhdayValue.birthday === 'oldest') {
      setShownEmployees(state => {
        const clone: EmployeeType[] = [...state]
        return clone.sort((a, b): number => {
          const firstPersonBirthday = tools.formatDateForInput(a.birthday)
          const secondPersonBirthday = tools.formatDateForInput(b.birthday)
          if (firstPersonBirthday > secondPersonBirthday) {
            return 1
          }
          if (firstPersonBirthday < secondPersonBirthday) {
            return -1
          }
          return 0
        })
      })
    }
  };

  const onFilterSubmit = (filter: FilterFromType): void => {
      setShownEmployees(() => {
        let filterResult: EmployeeType[] = [...employees];
        for (let key in filter) {
          filterResult = filterResult.filter((emp) => emp[key as keyof FilterFromType]=== filter[key as keyof FilterFromType]);
        }
        return filterResult;
      })
  }

  const onResetClick = () => {
    setShownEmployees(employees)
  }

  return (
      <>
        <div>
          <div>
            <h4>Отсортировать сотрудников</h4>
            <Form
            onSubmit={onSortByName}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onChange={handleSubmit}>
                    <div className={styles.filterContainer}>
                      <label>По имени</label>
                      <Field name="name" component="select">
                          <option value='default'>По умолчанию</option>
                          <option value='fromStart'>А-Я</option>
                          <option value='fromEnd'>Я-А</option>
                      </Field>
                    </div>
                </form>
            )} />
            <Form
            onSubmit={onSortByBitrhday}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onChange={handleSubmit}>
                    <div className={styles.filterContainer}>
                      <label>По возрасту</label>
                      <Field name="birthday" component="select">
                          <option value='default'>По умолчанию</option>
                          <option value='youngest'>Помоложе</option>
                          <option value='oldest'>Постарше</option>
                      </Field>
                    </div>
                </form>
            )} />
          </div>
          <div>
            <h4>Отфильтровать сотрудников</h4>
            <Form
            onSubmit={onFilterSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                      <label>Должность</label>
                      <Field name="role" component="select">
                        <option/>
                        <option value='cook'>Повар</option>
                        <option value='waiter'>Официант</option>
                        <option value='driver'>Водитель</option>
                      </Field>
                    </div>
                    <div>
                      <label>Статус</label>
                      <Field
                          name="isArchive"
                          component="input"
                          type="checkbox"
                      />в архиве
                    </div>
                    <div>
                      <button type="submit" disabled={submitting}>
                        Отфильтровать
                      </button>
                      <button
                      type="button"
                      onClick={onResetClick}
                      >
                        Обнулить
                      </button>
                    </div>
                </form>
            )} />
          </div>
        </div>
      </>
  )
}
