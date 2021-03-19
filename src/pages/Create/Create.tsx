import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import styles from './Create.module.css'
import * as tools from '../../tools/createUpdateTools'
import { addEmployee } from '../../redux/actions'
import { useHistory } from 'react-router-dom'

interface CreateEmployee {
  name: string,
  isArchive: boolean,
  role: string,
  phone: string,
  birthday: string
}


export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (value: CreateEmployee) => {
    const { name, isArchive, role, phone, birthday} = value;
    const employee = {
      id: tools.generateId(),
      name,
      isArchive,
      role,
      phone,
      birthday: tools.formatDate(birthday)
    }
    dispatch(addEmployee(employee));
    history.push('/');
  }

  return (
    <div className={styles.container}>
      <h1>Создать сотрудника</h1>
      <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
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
