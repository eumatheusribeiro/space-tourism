import React, { useState } from 'react';
import imageEngineer from '../../assets/crew/image-anousheh-ansari.png';
import imageCommander from '../../assets/crew/image-douglas-hurley.png';
import imageSpecialist from '../../assets/crew/image-mark-shuttleworth.png';
import imagePilot from '../../assets/crew/image-victor-glover.png';
import TabItem from './TabItem';
import styles from './TabsCrew.module.css';

const TabsCrew = () => {
    const [activeTab, setActiveTab] = useState("item1")

    const handleTabs = ({target}) => {
        setActiveTab(target.id)
    };

    function renderTab() {
      switch(activeTab){
        case 'item1': return (
            <TabItem>
                <div className={styles.left}>
                    <h6 className='subtitle'>Commander</h6>
                    <h1 className={styles.title}>Douglas Hurley</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    Douglas Gerald Hurley is an American engineer,<br/>
                    former Marine Corps pilot and former NASA astronaut.<br/>
                    He launched into space for the third time as commander of<br/>
                    Crew Dragon Demo-2.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={imageCommander} alt=''/>
                </div>
            </TabItem>
        )
        case 'item2': return (
            <TabItem>
                <div className={styles.left}>
                    <h6 className='subtitle'>Pilot</h6>
                    <h1 className={styles.title}>Victor Glover</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    Pilot on the first operational flight of the SpaceX Crew Dragon<br/>
                    to the International Space Station.Glover is a commander in<br/>
                    the U.S. Navy where he pilots an F/A-18.He was a crew member of<br/>
                    Expedition 64, and served as a station systems flight engineer.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={imagePilot} alt=''/>
                </div>
            </TabItem>
        )
        case 'item3': return (
            <TabItem>
                <div className={styles.left}>
                    <h6 className='subtitle'>Mission Specialist</h6>
                    <h1 className={styles.title}>Mark Shuttleworth</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical,<br/>
                    the company behind the Linux-based Ubuntu operating system.<br/>
                    Shuttleworth became the first South African to travel to<br/>
                    space as a space tourist.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={imageSpecialist} alt=''/>
                </div>
            </TabItem>
        )
        case 'item4': return (
            <TabItem>
                <div className={styles.left}>
                    <h6 className='subtitle'>Flight Engineer</h6>
                    <h1 className={styles.title}>Anousheh Ansari</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    Anousheh Ansari is an Iranian American engineer and co-<br/>
                    ounder of Prodea Systems. Ansari was the fourth self-<br/>
                    funded space tourist, the first self-funded woman to fly<br/>
                    to the ISS, and the first Iranian in space.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={imageEngineer} alt=''/>
                </div>
            </TabItem>
        )
        default: return null
       }
    }
    
  return (
    <React.Fragment>
        <div className={styles.main}>
            {
                renderTab()
            }
        </div>
        <div>
            {activeTab === 'item1' ? <input type='radio' name='radio-btn' id='item1' onClick={handleTabs} checked></input> : <input type='radio' name='radio-btn' id='item1' onClick={handleTabs}></input>}
            <input type='radio' name='radio-btn' id='item2' onClick={handleTabs}></input>
            <input type='radio' name='radio-btn' id='item3' onClick={handleTabs}></input>
            <input type='radio' name='radio-btn' id='item4' onClick={handleTabs}></input>
        </div>
    </React.Fragment>
  )
}

export default TabsCrew
