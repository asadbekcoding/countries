import style from "./modal.module.scss";

export default function Modal({ setModal, modal, countryData, handleCountry}) {
    if(!countryData) return ''
     
    const { flags, name, population, capital, region, subregion, tld, currencies, languages, borders} = countryData;
    let native = Object.keys(name.nativeName)
    let curren = Object.keys(currencies)
    let lang = Object.keys(languages)

  return (
    <>
      <div className={style.modals} onClick={(e) => setModal(e.target.className?.slice(0,7) !== '_modals')}>
        <div className={style["modal_content"]}>
          <div className={style.close}>
            <img onClick={handleCountry} className={style["closes_content"]}   src="./images/close-modal.svg" alt="no-image" />
            <img onClick={handleCountry} className={style["closes_content_light"]} src="./images/close-modal-light.svg" alt="no-foto" />
          </div>
          <div className={style.info}>
            <div className={style["modal_img"]}>
              <img src={flags.png} alt="" />
            </div>
            <div className={style["modal_info"]}>
              <h3>{name.common}</h3>
              <div className={style.list}>
                <ul>
                  <li>
                    Native Name: <span>{name.nativeName[native[0]].common}</span>
                  </li>
                  <li>
                    Population: <span>{population?.toLocaleString('en')}</span>
                  </li>
                  <li>
                    Region: <span>{region}</span>
                  </li>
                  <li>
                    Sub Region: <span>{subregion}</span>
                  </li>
                  <li>
                    Capital: <span>{capital[0]}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Top Level Domain: <span>{tld[0]}</span>
                  </li>
                  <li>
                    Currencies: <span>{currencies[curren[0]].name}</span>
                  </li>
                  <li>
                    Languages: {lang.map((item) => {
                    return <span>{languages[item]}</span>
                    })}
                  </li>
                </ul>
              </div>
              <div className={style.borderline}>
                <h4>Border Countries: </h4>
                <div className={style.btn}>
                  {
                    borders?.map((item) => {
                     return <button>{item}</button>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
