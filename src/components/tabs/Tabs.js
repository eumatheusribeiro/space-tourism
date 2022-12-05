import React, { useState } from 'react';
import Europa from './Europa';
import Mars from './Mars';
import Moon from './Moon';
import styles from './Tabs.module.css';
import Titan from './Titan';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTabs = ({target}) => {
        setActiveTab(target.id)
    };

    function renderTab() {
      switch(activeTab){
        case 'tab1': return <Moon />;
        case 'tab2': return <Mars />;
        case 'tab3': return <Europa />;
        case 'tab4': return <Titan />;
        default: return null
       }
    }
    
  return (
    <div className={styles.Tabs}>
      <div className={styles.center}>
        <ul className={styles.nav}>
          <li className={activeTab === 'tab1' ? styles.active : ""} onClick={handleTabs} id='tab1'>Moon</li>
          <li className={activeTab === 'tab2' ? styles.active : ""} onClick={handleTabs} id='tab2'>Mars</li>
          <li className={activeTab === 'tab3' ? styles.active : ""} onClick={handleTabs} id='tab3'>Europa</li>
          <li className={activeTab === 'tab4' ? styles.active : ""} onClick={handleTabs} id='tab4'>Titan</li>
        </ul>
      </div>
      <div className={styles.outlet}>
      {
        renderTab()
      }
      </div>
    </div>
  )
}

export default Tabs
