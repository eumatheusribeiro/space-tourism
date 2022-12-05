import React from 'react'
import imageMoon from '../../assets/destination/image-moon.png'
import styles from './TabItem.module.css'

const Moon = () => {
  return (
    <>
      <div className={styles.left}>
        <img src={imageMoon} alt='moon'/>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Moon</h1>
        <p className={`${'text'} ${styles.text}`}>Don’t forget to pack your hiking boots. You’ll need them<br/>to tackle Olympus Mons,
        the tallest planetary mountain in<br />our solar system.
        It’s two and a half times the size of
        <br />Everest!</p>
        <div className={styles.infos}>
          <span>
            <p>avg. distance</p>
            <p className={styles.destaque}>384,400 km</p>
          </span>
          <span>
            <p>Est. travel time</p>
            <p className={styles.destaque}>3 day</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Moon
