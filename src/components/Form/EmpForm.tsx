import React from 'react'
import { Form, Field } from 'react-final-form'
import './Form.css'

export default function EmpForm() {
  
  const onSubmit = () => {

  };

  return (
      <>
          <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                  <div>
                  <label>Должность</label>
                  <Field name="role" component="select">
                      {/* тут опшены бум мепить */}
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
              </form>
          )} />
      </>
  )
}
