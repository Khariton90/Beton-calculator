import { BetonItemType } from "../consts/mocks";

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

export type BetonSelect = {
  id: number,
  title: string,
  options: BetonItemType[],
}

export enum PumpArrow {
  TwentyFour = "24-28",
  ThirtyTwo = "32-36",
  Fourty = "40-42",
  FortyFour = "44-46",
  FortyEight = "48",
  FiftyTwo = "52",
  FiftyFive = "55",
  FiftyEight = "58"
}

export enum BetonTotal {
  Beton = "beton",
  Features = "features",
  Delivery = "delivery"
}

export type BetonTotalPrice = {
  [key in BetonTotal]: number;
};

export type BetonFactory = {
  beton: string[];
  pupm: string[];
  hoses: string[];
  compensator: string[];
  hydrolotok:  string[];
}

export type Services = {
  compensator: number;
  hydrolotok: number;
  antifreeze: number;
  stone: number;
  fibro: number;
  masterTop: number;
  schemaG: number;
  launcher: number;
};

export enum ServiceName {
  Compensator = "compensator",
  Hydrolotok = "hydrolotok",
  Antifreeze = "antifreeze",
  Stone = "stone",
  Fibro = "fibro",
  MasterTop = "masterTop",
  SchemaG = "schemaG",
  Launcher = "launcher",
}

export type ServiceSwitch = {
  id: number;
  name: ServiceName;
  label: string;
  value: number;
  hintText?: string;
}

export type ServiceStore = {
  id: number;
  name: ServiceName;
  qty: number;
  price: number;
  total: number;
}

export type PdfDto = string[];