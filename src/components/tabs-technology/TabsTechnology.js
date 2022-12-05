import React, { useState } from 'react';
import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';
import styles from './TabsTechnology.module.css';

const TabsTechnology = () => {
    const [activeTab, setActiveTab] = useState("item1")

    const handleTabs = ({target}) => {
        setActiveTab(target.id)
    };

    function renderTab() {
      switch(activeTab){
        case 'item1': return (
            <React.Fragment>
                <div className={styles.left}>
                    <h6 className='subtitle'>The terminology...</h6>
                    <h1 className={styles.title}>Launch vehicle</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    A launch vehicle or carrier rocket is a rocket-propelled<br/>
                    vehicle used to carry a payload from Earth's surface to<br/>
                    space, usually to Earth orbit or beyond. Our WEB-X<br/>
                    carrier rocket is the most powerful in operation.<br/>
                    Standing 150 metres tall, it's quite an awe-inspiring sight<br/>
                    on the launch pad!
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={launchVehicle} alt='launch vehicle'/>
                </div>
            </React.Fragment>
        )
        case 'item2': return (
            <React.Fragment>
                <div className={styles.left}>
                    <h6 className='subtitle'>The terminology...</h6>
                    <h1 className={styles.title}>Spaceport</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    A spaceport or cosmodrome is a site for launching<br/>
                    (or receiving) spacecraft, by analogy to the seaport<br/>
                    for ships or airport for aircraft.<br/>
                    Based in the famous Cape Canaveral, our spaceport is ideally situated to<br/>
                    take advantage of the Earth’s<br/>
                    rotation for launch.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={spaceport} alt='spaceport'/>
                </div>
            </React.Fragment>
        )
        case 'item3': return (
            <React.Fragment>
                <div className={styles.left}>
                    <h6 className='subtitle'>The terminology...</h6>
                    <h1 className={styles.title}> Space capsule</h1>
                    <p className={`${'text'} ${styles.paragrafo}`}>
                    A space capsule is an often-crewed spacecraft that<br/>
                    uses a blunt-body reentry capsule to reenter the Earth's<br/>
                    atmosphere without wings. Our capsule is where you'll spend<br/>
                    your time during the flight. It includes a space gym, cinema,<br/>
                    and plenty of other activities<br/>
                    to keep you entertained.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={spaceCapsule} alt='space capsule'/>
                </div>
            </React.Fragment>
        )
        default: return null
       }
    }

  return (
    <div className={styles.tabs}>
      <div className={styles.navigate}>
        <ul className={styles.nav}>
          <li className={activeTab === 'item1' ? styles.active : ""} onClick={handleTabs} id='item1'>1</li>
          <li className={activeTab === 'item2' ? styles.active : ""} onClick={handleTabs} id='item2'>2</li>
          <li className={activeTab === 'item3' ? styles.active : ""} onClick={handleTabs} id='item3'>3</li>
        </ul>
      </div>
      <div className={styles.main}>
            {
                renderTab()
            }
      </div>
    </div>
  )
}

export default TabsTechnology
