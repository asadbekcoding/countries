import { useState } from 'react'
import style from './search.module.scss'
export default function Search({regions, setInpValue, setpagenation}){
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const [filter, setFilter] = useState('Filter by Region')
    function hiDrop(){
        setIsOpenDropDown(!isOpenDropDown)
    }
     let  region = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']
    
     const  handleValue = (e)=> {
        setInpValue(e.target.value)
     }
     
    const handleClick = (item) => {
        setFilter(item)
        regions(item)
        setIsOpenDropDown(!isOpenDropDown)
        setpagenation(8)
    }
    return(
        <>
        <div className={style['inputs']}>
        <div className={style['input_content']}>
            <img src="./images/search-light.svg" alt="no-foto" className={style['search-light']}/>
            <img src="./images/search.svg" alt="no-foto" className={style['search-dark']}/>
            <input onChange={(e) => handleValue(e)} type="text" placeholder='Search for a country…' />
        </div>
        <div className={style['drop_down']}>
            <div className={style['drop_down_content']} onClick={() => hiDrop()}>
                <h4>{filter}</h4>
                <img className={isOpenDropDown ? style.rotate : null} src="./images/strelka.svg" alt=''/>
            </div>
            {
               isOpenDropDown ?  <ul>{
                (region.map((item, ind) => {
                    return <li onClick={() => handleClick(item)} key={ind}>{item}</li>
                }))
                }</ul> : null
             }
        </div>
        </div>
        </>
    )
}