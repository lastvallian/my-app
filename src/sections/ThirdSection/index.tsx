import {FC} from "react";
import title1Image from '../../assessts/title1.jpg';
import title2Image from '../../assessts/title2.jpg';
import CommentImage from '../../assessts/comment.jpg';
import  styles from './styles.module.scss';
const ThirdSection: FC=()=>{
     return (
        <div className="styles.thirdSection">
         <img src={title1Image} alt="Title1"/>
         < img  className={styles.comment}src={CommentImage} alt="Comment"/>
         <img src={title1Image} alt="Title1"/>
         < img   className={styles.comment}src={CommentImage} alt="Comment"/>

                    </div>
     )
}

export default ThirdSection;