// import { useState } from "react";
// import { BetonList } from "../../consts/mocks";
// import { BetonCard } from "../beton-card/beton-card";
// import { BetonTable } from "../beton-table/beton-table";
// import { FeaturesList } from "../features-list/features-list";
// import MapComponent from "../map-component/map-component";
// import { Progress } from "../progress/progress";
// import { TruckList } from "../truck-list/truck-list";
import ShopBetonForm from "../shop-beton-form/shop-beton-form";
// import { useAppSelector } from "../../../../hooks/hooks";

export function BetonFactoryModule(): JSX.Element {
  // const [card, setCard] = useState('');
  // const qtyBeton = useAppSelector(({ dataReducer }) => dataReducer.amountBeton);

  // const onChangeCard = (name: string) => {
  //   setCard((prevName) => prevName = name);
  // }

  return (
    <div>
      {/* <Progress /> */}
      <div className="beton-list-wrapper">
        {/* <h2 className="section-title">Тип бетона</h2> */}
        <div className="beton-card-list">
          {/* {BetonList.map((item) => (
            <BetonCard key={id()} {...item} onChangeCard={onChangeCard} card={card} />
          ))} */}
        </div>
      </div>
      <ShopBetonForm />
      {/* <MapComponent /> */}
      {/* <TruckList qtyBeton={qtyBeton} /> */}
      {/* <FeaturesList /> */}
      {/* <MapComponent />
      <BetonTable />
      <footer className="footer">
        <p>Калькулятор в разработке</p>
      </footer> */}
    </div>
  )
}