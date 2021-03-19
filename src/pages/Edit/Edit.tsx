import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { useParams, useHistory } from 'react-router-dom'
import { EmployeeType } from '../../redux/types'
import styles from '../Create/Create.module.css'
import * as tools from '../../tools/createUpdateTools'
import { editEmployee } from '../../redux/actions'


export default function Edit() {
  const [employee, setEmployee] = useState<EmployeeType | undefined>(undefined);

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch()
  const history = useHistory()

  const employees = useSelector((state: EmployeeType[]) => state);

  useEffect(()=> {
    setEmployee(() => {
      return employees.find((emp) => emp.id === Number(id))
    })
  }, [id])

  const onSubmit = (value: EmployeeType) => {
    value.birthday = tools.formatDate(value.birthday);
    dispatch(editEmployee(value));
    history.push('/');
  }

  return (
    <div className={styles.container}>
      <h1>Редактировать сотрудника</h1>
      <Form
      onSubmit={onSubmit}
      initialValues={{
        id: employee?.id,
        name: employee?.name,
        isArchive: employee?.isArchive,
        role: employee?.role,
        phone: employee?.phone,
        birthday: tools.formatDateForInput(employee?.birthday)
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" validate={tools.requiredName}>
            {({ input, meta }) => (
              <div>
                <label>Имя и фамилия</label>
                <input {...input} type="text" />
                {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
              </div>
            )}
          </Field>
          <div>
            <label>Должность</label>
            <Field name="role" component='select'>
              <option>Выбрать</option>
              <option value='cook'>Повар</option>
              <option value='waiter'>Официант</option>
              <option value='driver'>Водитель</option>
            </Field>
          </div>
          <Field
            name="phone"
            validate={tools.requiredPhone}
          >
            {({ input, meta }) => (
              <div>
                <label>Номер телефона</label>
                <input {...input} type='tel' placeholder="+71231234567" />
                {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
              </div>
            )}
          </Field>
          <div>
            <label>Статус сотрудника</label>
            <Field
                name="isArchive"
                component="input"
                type="checkbox"
            />в архиве
          </div>
          <div>
            <label>День рождения</label>
            <Field
                name="birthday"
                component="input"
                type="date"
            />
          </div>
          <div className={styles.button}>
            <button type="submit" disabled={submitting}>
                Submit
            </button>
          </div>
        </form>
      )}
    />
    </div>
  )
}
