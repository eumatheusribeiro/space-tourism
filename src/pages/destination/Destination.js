import React from 'react'
import Header from '../../components/header/Header'
import Tabs from '../../components/tabs/Tabs'
import styles from './Destination.module.css'

const Destination = () => {
  return (
    <section className={`${styles.destination} container`}>
        <Header></Header>
        <div className={styles.main}>
          <h6 className={`${'subtitle'} ${styles.mainTitle}`}><span>01</span>pick your destination</h6>
          <Tabs />
        </div>
    </section>
  )
}

export default Destination
