import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <NavLink
        exact={true}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        to='/'
      >
        Главная
      </NavLink>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        to='/create'
      >
        Создать сотрудника
      </NavLink>
    </nav>
  )
}
