import { FormEvent, useState } from "react";
import "./beton-card.scss";
import "../../_variables.scss";
import cn from 'classnames';
import { AntiFreeze } from "../../types";
import { BetonPriceList } from "../../consts/mocks";
import { useAppDispatch } from "../../hooks";
import { addBeton, changeAmountBeton, changeRemaind } from "../../store/action";
import { useId } from 'react';
import { priceFormat } from "../../utils/utils";

type BetonCardProps = {
  name: string;
  description: string;
  waterResist: string[];
  frostResist: string[];
  plastocity: string[];
  antifreeze: AntiFreeze[];
  onChangeCard: (name: string) => void;
  card: string
};

const getPrice = (name: string) => {
  return BetonPriceList[name];
}

const DEFAULT_BETON_VALUE = 3;

export function BetonCard({
  name,
  description,
  waterResist,
  frostResist,
  plastocity,
  antifreeze,
  onChangeCard,
  card
}: BetonCardProps): JSX.Element {
  const [betonValue, setBetonValue] = useState(DEFAULT_BETON_VALUE);
  const [antifreezeValue, setAntifreezeValue ] = useState(antifreeze[0]);
  const dispatch = useAppDispatch();
  const id = useId;

  const cardName = name.split(' ')[0].replace('.', '');
  const [priceString, setPriceString] = useState([cardName, plastocity[0].replace('П', 'P') , waterResist[0], frostResist[0]]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (card === name) {
      onChangeCard('');
      dispatch(addBeton(null));
    } else {
      onChangeCard(name);
      dispatch(changeRemaind(betonValue));
      dispatch(changeAmountBeton(betonValue))
      dispatch(addBeton({
        title: priceString.join(''),
        qty: betonValue,
        price: getPrice(priceString.join('')) + antifreezeValue.price,
        antifreeze: {
          label: antifreezeValue.label,
          price: antifreezeValue.price
        },
        amount: (getPrice(priceString.join('')) + antifreezeValue.price) * betonValue
      }));
    }
  };

  return (
    <div className={cn("beton-card", {"blur" : card !== name && card !== ''})}>
      <div className="title">
        <h3>{name}</h3>
      </div>
      <div className="description">{description}</div>
      <div className="beton-card-form">
        <form onSubmit={handleSubmit} >
          <fieldset className="fieldset" disabled={card !== ''}>
            <div className="radio-label">Водонепронецаемость</div>
            {waterResist.map((item) => (
              <label htmlFor="water-resist" key={item}>
                {item}
                <input type="radio" name="water-resist" 
                checked={priceString[2] === item} 
                onChange={() => setPriceString(prev => prev = [...priceString.slice(0, 2), item, ...priceString.slice(3, priceString.length)])}/>
              </label>
            ))}
          </fieldset>

          <fieldset className="fieldset" disabled={card !== ''}>
            <div className="radio-label">Морозостойкость</div>
            {frostResist.map((item) => (
              <label htmlFor="frost-resist" key={item}>
                {item}
                <input type="radio" name="frost-resist" 
                checked={priceString[3] === item} 
                onChange={() => setPriceString(prev => prev = [...priceString.slice(0, 3), item])}/>
              </label>
            ))}
          </fieldset>

          <fieldset className="fieldset" disabled={card !== ''}>
            <div className="radio-label">Пластичность</div>
            {plastocity.map((item) => (
              <label htmlFor="plastocity" key={item}>
                {item}
                <input 
                checked={priceString[1] === item.replace('П', 'P')} 
                type="radio" 
                name="plastocity" 
                onChange={() => setPriceString(prev => prev = [...priceString.slice(0, 1), item.replace('П', 'P'), ...priceString.slice(2, priceString.length)])}/>
              </label>
            ))}
          </fieldset>

          <fieldset className="fieldset" disabled={card !== ''}>
            <div className="radio-label">Противоморозная добавка</div>
            {antifreeze.map((item) => (
              <label htmlFor="antifreeze" key={id()}>
                {item.label ? item.label + '❄' : `Нет`}
                <input 
                type="radio" 
                name="antifreeze" 
                checked={item.price === antifreezeValue.price}
                onChange={() => setAntifreezeValue(item)} />
              </label>
            ))}
          </fieldset>

          <p className="beton-card-price">{priceFormat(getPrice(priceString.join('')) + antifreezeValue.price)} <span>/ м<sup>3</sup></span></p>
          <p className="beton-card-price">Итого: {priceFormat(getPrice(priceString.join('')) * betonValue + (betonValue * antifreezeValue.price))}</p>

          <div className="total">
          <button type="submit" disabled={card !== name && card !== ''} className="btn-submit">{card === name ? 'Изменить' : 'Выбрать'}</button>
          <div className="qty">
            <span className="minus" onClick={() => betonValue > DEFAULT_BETON_VALUE && !card && setBetonValue(betonValue - 1)}>-</span>
            <input type="number" disabled={card !== ''}  value={betonValue} min={DEFAULT_BETON_VALUE} onChange={(evt) => setBetonValue(Number(evt.target.value))}/>
            <span className="plus" onClick={() => !card && setBetonValue(betonValue + 1)}>+</span>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
