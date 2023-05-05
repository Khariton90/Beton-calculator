import { useAppSelector } from "../../../../hooks/hooks";
import { BetonTypes, DEFAULT_FILING_HOURS } from "../../consts/mocks";
import { Delivery } from "../../types/types";
import { RemaindType, getFillingHours, priceFormat } from "../../utils/utils";

type ShopBetonDeliveryTotalProps = {
  deliveryStore: Delivery;
  remaind: RemaindType;
  price: number;
}

export function ShopBetonDeliveryTotal({deliveryStore, remaind, price}: ShopBetonDeliveryTotalProps): JSX.Element {
  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);

  return (
    <div className="shop-delivery">
          <div className="shop-delivery-body">
            <h3>Доставка:</h3>
            <ul>
              <li><span className="title-type">Ближайший завод:</span> {deliveryStore.from}</li>
              <li><span className="title-type">Адрес доставки:</span> {deliveryStore.to}</li>
              {
                concreteBeton === BetonTypes.Pump ?
                  <li><span className="title-type">Подача:</span> {deliveryStore.distance ? <>
                    <span>{DEFAULT_FILING_HOURS} + </span>
                    <span>{getFillingHours(deliveryStore.distance) - DEFAULT_FILING_HOURS} = </span>
                    <span>{getFillingHours(deliveryStore.distance)} ч.</span></> :
                    null}</li> : null
              }
              <li><span className="title-type">Количество миксеров:</span> <br /> {remaind ? Object.entries(remaind.mixers).map(([key, value]) => value ? <span key={key}>
                <span >{key} м<sup>3</sup> - {value} шт.</span><br /></span> : null) : null}</li>
              <li><span className="title-type">Расстояние до адреса:</span> {deliveryStore.distance} км.</li>
              <li><span className="title-type">Стоимость доставки:</span> {priceFormat(price * remaind.remaind)}.</li>
            </ul>
          </div>
        </div>
  )
}