import { type } from 'os'
import {FunctionComponent } from 'react'
import styles from '../../styles/Home.module.css'
import MainContent from '../components/mainContent'
import SocialIcons from '../components/socialIcons'


const Home: FunctionComponent<{}> = ({})  => {
  return    (
      <>
      
      <div className={styles.title}>
        <h1>enrico</h1>
        <div className={styles.subtitle}>
            <h5>Software </h5>
            <h5>Developer & </h5>
            <h5>Analyst</h5>
        </div>
        <SocialIcons />
        {/* Twitter */}
         

        {/* Github */}
       
    </div>
      <MainContent />
      </>

    )
}



export default Home;