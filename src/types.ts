export type AntiFreeze = {
  id: number;
  label: number;
  price: number;
};

export type Delivery = {
  from: string | null;
  to: string | null;
  distance: number | null;
  price: number | null;
  fromCoords: number[];
}

export type PropertiesPlantPlacemark = {
  hintContent: string;
  balloonContent: string;
}

export type PlantPlacemark = {
  id: number;
  title: string;
  description: string;
  location: number[],
  properties: PropertiesPlantPlacemark
}

export type Beton = {
  title: string;
  qty: number;
  price: number;
  antifreeze: Pick<AntiFreeze, 'label' | 'price'>;
  amount: number;
}

export type Mixer = {
  id: number;
  description: string;
  weight: number;
  image: string;
}

export type TruckItem = {
  id: string;
  weight: number;
  qty: number;
  total: number;
}
