import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { EmployeeType } from '../../redux/types'
import Employee from '../../components/Employee/Employee'
import EmpForm from '../../components/Form/EmpForm'
import styles from './Main.module.css'

interface SortByNameType {
  name: string,
}

export default function Main() {

  const employees = useSelector((state: EmployeeType[]) => state)
  const [shownEmplyees, setShownEmployees] = useState<EmployeeType[]>(employees)

  // const onSortByName = (sortByNameValue: SortByNameType) => {
  //   if (sortByNameValue.name === 'fromStart') {
  //     setShownEmployees(state => {
  //       const clone: EmployeeType[] = [...state]
  //       return clone.sort((a, b): number => {
  //         const firstName = a.name.toLowerCase()
  //         const secondName = b.name.toLowerCase()
  //         if (firstName > secondName) {
  //           return 1
  //         }
  //         if (firstName < secondName) {
  //           return -1
  //         }
  //         return 0
  //       })
  //     })
  //   } else if (sortByNameValue.name === 'fromEnd') {
  //     setShownEmployees(state => {
  //       const clone: EmployeeType[] = [...state]
  //       return clone.sort((a, b): number => {
  //         const firstName = a.name.toLowerCase()
  //         const secondName = b.name.toLowerCase()
  //         if (firstName > secondName) {
  //           return -1
  //         }
  //         if (firstName < secondName) {
  //           return 1
  //         }
  //         return 0
  //       })
  //     })
  //   }
  // };
  
  return (
    <div className={styles.container}>
      <div className={styles.empContainer}>
        { shownEmplyees && shownEmplyees.map(({ id, name, isArchive, birthday, role,  phone}) => (
          <Employee key={id} {...{ id, name, isArchive, role, birthday, phone}}/>
        ))}
      </div>
      <div className={styles.formContainer}>
        <EmpForm {...{setShownEmployees, employees}}/>
      </div>
    </div>
  )
}
