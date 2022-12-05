import React from 'react'
import Header from '../../components/header/Header'
import TabsCrew from '../../components/tabs-crew/TabsCrew'
import styles from './Crew.module.css'

const Crew = () => {
  return (
    <section className={`${styles.crew} container`}>
        <Header></Header>
        <div className={styles.main}>
          <h6 className={`${'subtitle'} ${styles.mainTitle}`}><span>02</span>Meet your crew</h6>
          <TabsCrew />
        </div>
    </section>
  )
}

export default Crew
