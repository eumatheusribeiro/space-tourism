import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shared/logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to='/'>
            <Logo />
        </Link>
        <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}><span>00</span> home</NavLink>
            <NavLink to='/destination' className={({ isActive }) => isActive ? styles.active : ''}><span>01</span> destination</NavLink>
            <NavLink to='/crew' className={({ isActive }) => isActive ? styles.active : ''}><span>02</span> crew</NavLink>
            <NavLink to='/technology' className={({ isActive }) => isActive ? styles.active : ''}><span>03</span> technology</NavLink>
        </nav>
    </header>
  )
}

export default Header
