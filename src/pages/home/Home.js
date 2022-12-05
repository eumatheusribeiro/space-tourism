import React from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`${styles.home} container`}>
        <Header></Header>
        <div className={styles.main}>
          <div className={styles.left}>
            <h6 className='subtitle'>So, you want to travel to</h6>
            <h1 className='title'>Space</h1>
            <p className='text'> Let’s face it; if you want to go to space, 
            you might as well<br/>genuinely go to outer space and not hover 
            kind of on the<br />edge of it. Well sit back, and relax because we’ll 
            give you<br />a truly out of this world experience! </p>
          </div>
          <div className={styles.right}>
            <span className={styles.explore}>
              explore
            </span>
          </div>
        </div>
    </section>
  )
}

export default Home
