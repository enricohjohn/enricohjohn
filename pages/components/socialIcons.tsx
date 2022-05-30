import {FunctionComponent } from 'react'
import { type } from 'os'
import styles from '../../styles/Home.module.css'
import Image from 'next/dist/client/image'
import github from '../../public/pngs/github-50.png'
import linkedin from '../../public/pngs/linkedin-48.png'
import twitter from '../../public/pngs/twitter-48.png'

const SocialIcons: FunctionComponent<{}> = ({})  => {

    return (
 
        
        <div className={styles.socialIcons}>
            {/* Twitter */}
            {/*
            <div className={styles.socialIcon}>
                <Image  src={twitter} width={30} height={30}
                    onClick={() => {
                        window.open("https://twitter.com/enricohjohn")
                    }} 
                />
            </div>
            */}
   
            {/* Github */}
            <div className={styles.socialIcon}>
                <Image  src={github} width={30} height={30} 
                    onClick={() => {
                        window.open("https://github.com/enricohjohn")
                    }} 
                />
            </div>
            {/* Linked In */}
            <div className={styles.socialIcon}>
                <Image  src={linkedin} width={30} height={30}
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/enrico-john-486988112/")
                    }} 
                />
            </div>

        </div>
    );
}

export default SocialIcons;