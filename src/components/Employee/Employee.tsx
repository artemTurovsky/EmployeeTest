import React, { memo, useState, useEffect } from 'react'
import styles from './Employee.module.css'
import { Link, useHistory } from 'react-router-dom';
import convertRole from '../../tools/convertRoles'

interface EmployeeProps {
  id: number,
  name: string,
  isArchive: boolean,
  role: string,
  phone: string,
  birthday: string
}

function Employee({ id, name, isArchive, role, phone, birthday }: EmployeeProps) {

  const history = useHistory()
  const [roleName, setRoleName] = useState<string | undefined>(undefined)

  useEffect(() => {
    setRoleName(() => {
      return convertRole(role)
    })
  }, [role])

  const handleClick = () => {
    history.push(`edit/${id}`);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div>{name}</div>
      <div>{roleName}</div>
      <div>{phone}</div>
      <div>{birthday}</div>
      { isArchive && <div className={styles.archive}>в архиве</div>}
    </div>
  )
}

export default memo(Employee)
