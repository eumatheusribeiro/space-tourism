import React from 'react'
import imageEuropa from '../../assets/destination/image-europa.png'
import styles from './TabItem.module.css'

const Europa = () => {
  return (
    <>
      <div className={styles.left}>
        <img src={imageEuropa} alt='europa'/>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Europa</h1>
        <p className={`${'text'} ${styles.text}`}> The smallest of the four Galilean moons orbiting Jupiter,
        <br/>Europa is a winter lover’s dream.With an icy surface,<br />
        it’s perfect for a bit of ice skating, curling,<br />
        hockey, or simple relaxation in your snug wintery
        <br />cabin</p>
        <div className={styles.infos}>
          <span>
            <p>avg. distance</p>
            <p className={styles.destaque}>628 mil. km</p>
          </span>
          <span>
            <p>Est. travel time</p>
            <p className={styles.destaque}>3 years</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Europa
