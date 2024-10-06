
import style from './card.module.scss'
export default function Card({FlagImg, title, population, region, capital, handleCountry}){
   
    return(
        <>
         <div onClick={handleCountry} className={style.card}>
            <img src={FlagImg} alt='img'/>
            <div className={style.all}>
                <h2>{title}</h2>
                <ul>
                    <li>Population: <span>{population}</span></li>
                    <li>Region: <span>{region}</span></li>
                    <li>Capital: <span>{capital}</span></li>
                </ul>
            </div>
         </div>
        </>
    )
}