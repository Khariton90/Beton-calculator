import { Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect, useCallback } from "react";
import { defaultPlacemarkOptions } from "../../consts/mocks";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getDelivery } from "../../store/action";
import { PlantPlacemark } from "../../types";

type PlaceMarkComponentProps = {
  placeMarkItem: PlantPlacemark;
  onChangePlant: (location: number[] | null) => void;
  plantLocation: number[] | null
}

export function PlaceMarkComponent({placeMarkItem, onChangePlant, plantLocation}: PlaceMarkComponentProps): JSX.Element {
  const [placeMark, setPlaceMark] = useState<any>();
  const delivery = useAppSelector(({dataReducer}) => dataReducer.delivery);
  const dispatch = useAppDispatch();

  const handleChangeLocation = useCallback((location: number[] | null) => {
      onChangePlant(location);
      dispatch(getDelivery({
        ...delivery,
        from: placeMarkItem.description,
        fromCoords: [...placeMarkItem.location]
      }))
  },[delivery, dispatch, onChangePlant, placeMarkItem.description, placeMarkItem.location])


  useEffect(() => {
    if (placeMark) {
      placeMark.events.add("click", function() {
        handleChangeLocation(placeMarkItem.location);
      })
    }
  }, [handleChangeLocation, onChangePlant, placeMark, placeMarkItem.location]);

  return (
    <Placemark
      instanceRef={setPlaceMark}
      className="pin"
      key={placeMarkItem.id}
      geometry={placeMarkItem.location}
      properties={placeMarkItem.properties}
      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      options={defaultPlacemarkOptions} />
  )
}