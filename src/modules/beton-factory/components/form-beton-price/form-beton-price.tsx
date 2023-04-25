import './form-beton-price.scss';
import { BetonPriceList, FrostResistList, plasticList, strehgthList, waterResistList } from "../../consts/mocks";
import { SelectBetonPrice } from "../select-beton-price/select-beton-price";
import { useState } from 'react';

export function FormBetonPrice(): JSX.Element {
  const [name, setName] = useState({
    strength: strehgthList[0].value,
    plastic: plasticList[0].value,
    water: waterResistList[0].value,
    frost: FrostResistList[0].value,
  });

  const [stringPrice, setStringPrice] = useState<number>(BetonPriceList['B15P3W2F50'])

  const onChangeName = (key: string, value: string) => {
    setName((prev) => ({...prev, [key]: value}));
      const val = Object.values(name).join('');
      setStringPrice((prev) => prev = BetonPriceList[val]);
  }

  return (
    <div className='form-beton-price-wrapper'>
      <h2>Стоимость бетона</h2>
      <form className='form-beton-price'>
        <SelectBetonPrice name="strength" title="Прочность" list={strehgthList} onChangeName={onChangeName}/>
        <SelectBetonPrice name="plastic" title="Пластичность" list={plasticList} onChangeName={onChangeName}/>
        <SelectBetonPrice name="water" title="Водостойкость" list={waterResistList} onChangeName={onChangeName}/>
        <SelectBetonPrice name="frost" title="Морозостойкость" list={FrostResistList} onChangeName={onChangeName}/>

        <div className="name"><h3>Наименование</h3></div>
        <div className="name-result"><h3>Бетон</h3></div>
        <div className="name"><p>Цена за м<sup>3</sup>, руб</p></div>
        <div className="name-result"><p>{stringPrice}</p></div>
        <div className="name"><p>Объем бетона</p></div>
        <div className="name-result"><p>9</p></div>
        <div className="name"><h3>Итоговая стоимость:</h3></div>
        <div className="name-result"><h3>{stringPrice ? stringPrice * 9 : null}</h3></div>
      </form>
    </div>
  )
}