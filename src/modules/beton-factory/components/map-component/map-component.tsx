import { RoutePanel, YMaps, Map, RulerControl } from "@pbe/react-yandex-maps";
import { useState, useEffect, memo } from "react";
import { PlaceMarkComponent } from "../place-mark-component/place-mark-component";
import { defaultMapCoords, defaultRoutePanel, plants } from "../../consts/mocks";
import { getDelivery } from "../../store/action";
import { distancePrice } from "../../consts/mocks";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getDistance } from "../../utils/utils";
import cn from "classnames";
import './map-component.scss';
import pin from '../../assets/pin.png';

const key = "177ce460-adee-4e9d-9899-3cd38cedd130";
const MAX_DELIVERY_DISTANCE = 200;

type MapComponentProps = {
  dnone: boolean;
}

function MapComponent({ dnone }: MapComponentProps): JSX.Element {
  const [panel, setPanel] = useState<any>();
  const [plantLocation, setPlantLocation] = useState<null | number[]>(null);
  const [distance, setDistance] = useState<null | number>(null);
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const dispatch = useAppDispatch();

  const onChangePlant = (location: number[] | null) => {
    setPlantLocation((prev) => prev = location);
  }

  useEffect(() => {
    if (panel) {
      panel.routePanel.state.set({
        fromEnabled: false
      });

      panel.routePanel.options.set({
        types: { auto: true }
      });
    }

    if (plantLocation && delivery && plantLocation[0] === delivery.fromCoords[0]) {
      panel.routePanel.state.set({
        from: plantLocation
      });

      panel.routePanel.getRouteAsync().then((route: any) => getDistance(route, setDistance));
    }

    if (delivery && delivery.distance !== distance) {
      dispatch(getDelivery({
        ...delivery,
        distance: distance,
        to: panel.routePanel.state._data.to ? panel.routePanel.state._data.to.toString() : null,
        price: distance && distance <= MAX_DELIVERY_DISTANCE ? distancePrice[distance] : null
      }))
    }

  }, [panel, plantLocation, delivery, distance, dispatch]);

  return (
    <div className={cn("map")} style={!dnone ? { display: "none" } : {}}>
      <YMaps query={{ apikey: key }}>
        <Map
          defaultState={defaultMapCoords}
          width={"100%"}
          height={"600px"}>
          {plants.map((el) =>
            <PlaceMarkComponent
              key={el.id}
              placeMarkItem={el}
              onChangePlant={onChangePlant}
              plantLocation={plantLocation} />
          )}
          <RoutePanel instanceRef={setPanel} options={defaultRoutePanel}>
            <div className={cn("search-img", { "active": plantLocation })}>
              <img src={pin} alt="search" width={28} height={28} />
            </div>
          </RoutePanel>
          <RulerControl />
        </Map>
      </YMaps>
      {
        distance ?
          <div className="map-footer">
            <span>Расстояние: {distance} км </span>
          </div>
          : null
      }
    </div>
  );
}

export default memo(MapComponent);