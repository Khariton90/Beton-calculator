import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addMixer, changeRemaind, removeMixer } from "../../store/action";
import { Mixer } from "../../types";

type TruckCardProps = {
  qtyBeton: number;
  mixer: Mixer
}

export function TruckCard({ qtyBeton, mixer }: TruckCardProps): JSX.Element {
  const { weight, description, image, id } = mixer;
  const [count, setCount] = useState(0);
  const remaind = useAppSelector(({ dataReducer }) => dataReducer.remaind);
  const beton = useAppSelector(({ dataReducer }) => dataReducer.beton);
  const dispatch = useAppDispatch();

  const decCount = () => {
    const value = remaind + weight;
    if (count) {
      setCount((prevCount) => (prevCount - 1));
      dispatch(changeRemaind(value));
    }
  }

  const incCount = () => {
    const value = remaind - weight;
    if (remaind > 0) {
      setCount((prevCount) => (prevCount + 1));
      dispatch(changeRemaind(value));
    }
  }

  useEffect(() => {
    if (!beton) {
      setCount(0);
    }

    if (count) {
      dispatch(addMixer({ id: id, weight: weight, qty: count }))
    } else {
      dispatch(removeMixer({ id: id, weight: weight, qty: count }))
    }
  }, [beton, count, dispatch, id, weight]);

  return (
    <fieldset className="fieldset truck truck-9">
      <div className="truck-image">
      <img src={image} alt="truck" />
      </div>

      <div className="truck__body">
        <div className="title">
          <h3>Автобетоносмеситель {weight}м<sup>3</sup></h3>
        </div>

        <div className="description">
          {description}
          {weight === 13 ? 
          <>
          <p className="truck-info">Важно!</p>
          <p className="truck-info">
          Необходимо
          подтверждение клиентом, что на объекте есть возможность для проезда миксера с такими
          габаритами. Если подтверждения нет, то расчет 9 куб. миксерами.</p>
          </> : null}
        </div>

        {
          !beton ? <div className="beton-amout">
            <p>Для расчета необходимо выбрать тип бетона</p>
          </div> :
            <div className="beton-amout">
              <p>Количество бетона: {qtyBeton} м<sup>3</sup></p>
              {remaind > 0 ? <p>Остаток: {remaind} м<sup>3</sup></p> : null}
              {remaind <= 0 && count ? <p>АБС укомплектован</p> : null}
            </div>
        }
        {
          beton ? <div className="truck__count">
            <label>
              <span className="minus" onClick={decCount}>-</span>
              <input type="number" value={count} readOnly style={!count ? { color: 'white' } : { color: 'black' }} disabled={remaind <= 0} />
              <span className="plus" onClick={incCount}>+</span>
            </label>
          </div> : null
        }
      </div>
    </fieldset>
  )
}