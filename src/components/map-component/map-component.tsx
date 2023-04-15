import { RoutePanel, YMaps, Map } from "@pbe/react-yandex-maps";
import { useState, useEffect, useLayoutEffect } from "react";
import { PlaceMarkComponent } from "../place-mark-component/place-mark-component";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { defaultMapCoords, defaultRoutePanel, plants } from "../../consts/mocks";
import pin from '../../assets/pin.png';
import cn from "classnames";
import './map-component.scss';
import { getDelivery } from "../../store/action";
import { distancePrice } from "../../consts/mocks";

const getDistance = (route: any, cb: (value: number) => void) => {
  route.model.setParams({ results: 1 }, true);
  route.model.events.add('requestsuccess', function () {
    const activeRoute = route.getActiveRoute();
    if (activeRoute) {
      const length = route.getActiveRoute().properties.get("distance");
      // Вычислим стоимость доставки.
      const distance = Math.ceil(length.value / 1000);
      console.log(distance);
      cb(distance);
    }
  });
};

const key = "177ce460-adee-4e9d-9899-3cd38cedd130";

const MAX_DELIVERY_DISTANCE = 200;

export default function MapComponent(): JSX.Element {
  const [panel, setPanel] = useState<any>();
  const [plantLocation, setPlantLocation] = useState<null | number[]>(null);
  const [distance, setDistance] = useState<null | number>(null);
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const remaind = useAppSelector(({dataReducer}) => dataReducer.remaind);
  const dispatch = useAppDispatch();

  const onChangePlant = (location: number[] | null) => {
    setPlantLocation((prev) => prev = location);
  }

  useLayoutEffect(() => {
    if (panel) {
      console.log('1')
      panel.routePanel.state.set({
        fromEnabled: false
      });

      panel.routePanel.options.set({
        types: { auto: true }
      });
    }
  }, [panel]);

  useEffect(() => {
    // if (plantLocation && !delivery.fromCoords[0]) {
    //   console.log('2')
    //   panel.routePanel.state.set({
    //     from: plantLocation
    //   });
    //   panel.routePanel.getRouteAsync().then((route:any) => getDistance(route, setDistance));
    //   return;
    // }

    if (plantLocation && delivery && plantLocation[0] === delivery.fromCoords[0]) {
      console.log('3')
      panel.routePanel.state.set({
        from: plantLocation
      });

      panel.routePanel.getRouteAsync().then((route:any) => getDistance(route, setDistance));
    }
  }, [panel, plantLocation, delivery]);

  useEffect(() => {
    console.log('3')
    if (delivery && delivery.distance !== distance) {
      dispatch(getDelivery({
        ...delivery,
        distance: distance,
        to: null,
        price: distance && distance <= MAX_DELIVERY_DISTANCE ? distancePrice[distance] : null
      }))
    }

  }, [delivery, dispatch, distance]);

  console.log(delivery);

  return (
    <>
      <h2 className="section-title">Доставка</h2>
      <div className={cn("map", {"disactive": remaind > 0})} style={remaind > 0 ? { pointerEvents: "none"} : {}}>
        <YMaps query={{ apikey: key }}>
          <Map defaultState={defaultMapCoords} width={"100%"} height={500}>
            {plants.map((el) =>
              <PlaceMarkComponent key={el.id} placeMarkItem={el} onChangePlant={onChangePlant} plantLocation={plantLocation} />
            )}
            <RoutePanel instanceRef={setPanel} options={defaultRoutePanel}>
              <div className={cn("search-img", { "active": plantLocation })}><img src={pin} alt="" width={28} height={28} /></div>
            </RoutePanel>
          </Map>
        </YMaps>
      </div>
    </>
  );
}
