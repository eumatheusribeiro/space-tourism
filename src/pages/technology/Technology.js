import React from 'react'
import Header from '../../components/header/Header'
import TabsTechnology from '../../components/tabs-technology/TabsTechnology'
import styles from './Technology.module.css'

const Technology = () => {
  return (
    <section className={`${styles.technology} container`}>
        <Header></Header>
        <div className={styles.main}>
          <h6 className={`${'subtitle'} ${styles.mainTitle}`}><span>03</span>Space launch 101</h6>
          <TabsTechnology />
        </div>
    </section>
  )
}

export default Technology
