import React from 'react'
import imageTitan from '../../assets/destination/image-titan.png'
import styles from './TabItem.module.css'

const Titan = () => {
  return (
    <>
      <div className={styles.left}>
        <img src={imageTitan} alt='titan'/>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Mars</h1>
        <p className={`${'text'} ${styles.text}`}> Don’t forget to pack your hiking boots. You’ll need them
        <br/>to tackle Olympus Mons, the tallest planetary mountain in<br />
        our solar system. It’s two and a half times the size of
        <br />Everest!</p>
        <div className={styles.infos}>
          <span>
            <p>avg. distance</p>
            <p className={styles.destaque}>225 mil. km</p>
          </span>
          <span>
            <p>Est. travel time</p>
            <p className={styles.destaque}>9 months</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Titan
