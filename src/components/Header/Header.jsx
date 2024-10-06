import style  from './header.module.scss'
export default function Header({hiLight}){
    return(
        <>
        <header>
            <div className={style['header_content']}>
                <h1>Where in the world?</h1>
                <div onClick={hiLight} className={style['dark']}>
                    <div className={style["dark_theme"]}>
                    <img src="./images/month.svg" alt="no-foto" />
                    <p>Light Mode</p>
                    </div>
                    <div className={style["light_theme"]}>
                        <img src="./images/lightmode-img.svg" alt="" />
                        <p>Dark Mode</p>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}