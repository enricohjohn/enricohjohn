import { FunctionComponent } from 'react'
import mainstyle from '../../styles/Main.module.css'

const MainContent: FunctionComponent<{}> = ({})  => {

    return (
        <div className={mainstyle.block1}>
            Hey there this is currently my Personal Website
        </div>
    );
}

export default MainContent;