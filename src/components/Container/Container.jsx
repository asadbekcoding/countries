import { useState, useEffect } from 'react';
import style from './container.module.scss';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Search from '../Search/Search';
import Card from '../Card/Card';

export default function Container() {
  const [countryData, setcountryData] = useState(null);
  const [inpValue, setInpValue] = useState('');
  const [pagenation, setpagenation] = useState(8);
  const [lightmode, setLightmode] = useState(false)
  const [regions, setRegions] = useState('all');
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState(null);

  const filterRegion = regions.toLowerCase() === 'all' ? 'all' : `region/${regions.toLowerCase()}`;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${filterRegion}`)
      .then(data => data.json())
      .then(data => {
        setcountryData(data);
      });
  }, [regions]);

  const pagenationcountry = countryData && countryData.slice(0, pagenation);
  
  const hiLight = () => {
     setLightmode(!lightmode)
  }

  useEffect(() => {
    if(lightmode){
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light')
    }
  }, [lightmode])

  const handlePagination = () => {
    setpagenation(pagenation + 8);
  };

  const handleCountry = countryItem => {
    setModal(!modal);
    setCountry(countryItem);
  };

  const searchCountry =
    countryData &&
    countryData.filter(item => {
      return item.name.common
        .toLowerCase()
        .includes(inpValue.toLocaleLowerCase().trim());
    });

  const filter = inpValue === '' ? pagenationcountry : searchCountry.slice(0, pagenation);

  return (
    <>
      <Header hiLight={hiLight}/>
      <Search regions={setRegions} setInpValue={setInpValue} setpagenation={setpagenation} />
      <div className={style.container}>
        <div className={style.containercontent}>
          {countryData ? (
            filter.map((country, ind) => {
              const { flags, name, population, capital, region } = country;
              return (
                <Card
                  handleCountry={() => handleCountry(country)}
                  key={ind}
                  FlagImg={flags.png}
                  title={name.common}
                  population={population.toLocaleString()}
                  region={region}
                  capital={capital}
                />
              );
            })
          ) : (
            <div className={style['lds-roller']}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        {((searchCountry && searchCountry.length > 8) ||
          (pagenation && pagenationcountry?.length > 8)) && (
          <button onClick={handlePagination}>More...</button>
        )}
        {modal ? (
          <Modal
            countryData={country}
            setModal={setModal}
            modal={modal}
            handleCountry={() => handleCountry()}
          />
        ) : null}
      </div>
    </>
  );
}
