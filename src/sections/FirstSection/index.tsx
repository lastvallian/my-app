import {FC} from "react";
import BannerImage from '../../assessts/banner.jpg';
import  styles from './styles.module.scss';
const FirstSection: FC=()=>{
     return (
        <div className={styles.firstSection}>
          <img src={BannerImage} alt="Banner"/>
                    </div>
     )
}

export default FirstSection;