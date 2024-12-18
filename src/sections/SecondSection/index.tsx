import {FC, useEffect, useRef, useState} from "react";
import CartoonImage from '../../assessts/cartoon2.jpg';
import FoodImage from '../../assessts/food.jpg';
import LifeImage from '../../assessts/life.jpg';
import MovieImage from '../../assessts/movie.png';
import LogoImage from '../../assessts/logo.png';
import  styles from './styles.module.scss';
import classNames from "classnames";
const tabs=[
     {
          key:'cartoon',
          title:'cartoon',
          Image:CartoonImage,
     },
     {
          key:'food',
          title:'food',
          image:FoodImage,
     },
     {
          key:'movie',
          title:'movie',
          image:MovieImage,
     },
     {
          key:'life',
          title:'life',
          image:LifeImage,}
          
]

const TAB_HEIGHT=56;
const SecondSection:FC=()=>{
     const [activeTab, setActiveTab] = useState<string>('cartoon');
     const [isFixed,setIsFixed]=useState<boolean>(false);
     const secondSectionRef=useRef<HTMLDivElement>(null);
     const activate=(key:string)=>{
            const tabContentEL =document.querySelector(  '[data-id=${key}]')
              if (tabContentEL){
               tabContentEL.scrollIntoView({behavior:'smooth'});
              }

     }


     const onScroll=()=>{
                  if(secondSectionRef.current){
                    const {top}=secondSectionRef.current.getBoundingClientRect();
                    setIsFixed(top<=0);
                    const sectionNodes=secondSectionRef.current.querySelectorAll('selectors');
                    Array.from(sectionNodes).forEach(sectionEL=>{
                         const {top}=sectionEL.getBoundingClientRect();
                         const key=sectionEL.getAttribute('data-id')||'';
                         if(top<=TAB_HEIGHT){
                              setActiveTab(key);
                         }
                    })
                    if (top <=0){
                      setIsFixed(true);   
                    }else{
                    setIsFixed(false);   
                    }

                  }
     }
    
     useEffect(()=>{
         window.addEventListener('scroll',onScroll);
         return()=>{
          window.removeEventListener('scroll',onScroll);
         }
     },[])
     return (
          <div className={styles.secondSection} ref={secondSectionRef}>
           
         <ul   className={classNames({[styles.isFixed]: isFixed})} >
          {tabs.map(tab => (
                 <li key={tab.key} onClick={()=>activate(tab.key)}>
               <span>{tab.title}</span>
               //<span className={`${styles.line} ${activeTab === tab.key ? 'visible' : ''}`} />
               <span className={classNames(styles.line,{[styles.visible]:activeTab===tab.key})}/>
                 </li>
          ))}
  
         </ul>
                 <div>
                   {tabs.map(tab=>(
                     <section data-id={tab.key}>
                         <h2>{tab.title}</h2>
                           <img src={tab.image} alt={tab.key}>
                           </img> </section>
                   
                   ))
                   }

                 </div>
                 <div className="classNames({styles.btnWrapper,{[styles.visible]:isFixed}})">
              <img src="LogoImage" alt="LOGO"/>
               <a href="https://www.youtube.com" target="_blank">
               <button>App APPLICATION :</button>
               </a>
            
                 </div>
                    </div>
     )
}

export default SecondSection;