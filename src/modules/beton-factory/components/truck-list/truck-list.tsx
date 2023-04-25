import './truck-list.scss';
import { TruckCard } from '../truck-card/truck-card';
import { Mixer } from '../../types/types';

const mixerTruckList: Mixer[] = [
  {
    id: 1,
    description: `При заказе от 3 до 9 куб. м. доставка осуществляется 9-ти кубовым АБС. Для расчета
    стоимости доставки берется «9 куб. м.»`,
    weight: 9,
    image: 'https://spb.rbauto.ru/upload/resize_cache/webp/iblock/d88/480_320_2/m9kc3hvpbzy2j2hinkg8o4gjsv1g91p0.webp'
  },
  {
    id: 2,
    description: `При заказе 10 куб. м. доставка осуществляется 10-ти кубовым АБС. Для расчета
    стоимости доставки берется «10 куб. м.».`,
    weight: 10,
    image: "https://spb.rbauto.ru/upload/resize_cache/webp/iblock/a0a/480_320_2/2n0oxe7pofjyzdot8byzzsfjdlagkr04.webp"
  },
  {
    id: 3,
    description: `При заказе от 11 до 13 куб. м. и наличия технической возможности на объекте у клиента
    принять 13-ти кубовый 4-х осный АБС доставка этого объема осуществляется 13-ти
    кубовым АБС и для расчета берется «13 куб. м.».   
    `,
    weight: 13,
    image: "https://spb.rbauto.ru/upload/resize_cache/webp/iblock/14b/480_320_2/8on6mgrvz6ay2spprjx66102182ppiw9.webp"
  },
];

type TruckListProps = {
  qtyBeton: number;
}

export function TruckList({qtyBeton}: TruckListProps): JSX.Element {
  return (
    <section className="trucks">
      <div className="truck-list">
        <h2 className="section-title">Подбор АБС</h2>
        <form>
         {mixerTruckList.map((mixer) => <TruckCard 
         key={mixer.id} 
         mixer={mixer} 
         qtyBeton={qtyBeton}
         />)}
        </form>
      </div>
    </section>
  )
}