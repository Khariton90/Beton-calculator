import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { BetonTypes, DEFAULT_MAX_ID_VALUE, MIXER_LAUNCH, THIRTY_HOSES, arrowNewPrice, arrowPriceMoreThanLimit, distancePrice } from "../../consts/mocks"
import { getFillingHours, priceFormat } from "../../utils/utils"
import { Client, Delivery, PdfDto, ServiceName, ServiceStore } from "../../types/types";
import { useAppSelector } from "../../../../hooks/hooks";
import { ShopBetonPdfMake } from "../shop-beton-pdf-make/shop-beton-pdf-make";
import ShopBetonUserForm from "../shop-beton-user-form/shop-beton-user-form";
import { useState } from "react";

interface Column {
  id: 'id' | 'name' | 'qty' | 'price' | 'amount';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'id',
    label: 'Код',
  },
  {
    id: 'name',
    label: 'Название',
  },
  {
    id: 'qty',
    label: 'Количество',
  },
  {
    id: 'price',
    label: 'Цена',
    align: 'right',
  },
  {
    id: 'amount',
    label: 'Всего',
    align: 'right',
  },
];

const tableNames = {
  [ServiceName.Compensator]: "Аренда гасителя",
  [ServiceName.Hydrolotok]: "Труба-удлинитель",
  [ServiceName.Antifreeze]: "Противоморозная добавка",
  [ServiceName.Stone]: "Щебень 5-10мм",
  [ServiceName.Fibro]: "Фиброволокно",
  [ServiceName.MasterTop]: "«Мастер ТОП»",
  [ServiceName.SchemaG]: "«Схема Г»",
  [ServiceName.Launcher]: "Пусковой раствор",
};

const arrowNames: { [key: number]: string } = {
  992271: "Аренда АБН 24-28",
  992272: "Аренда АБН 32-36",
  992273: "Аренда АБН 40-42",
  992274: "Аренда АБН 44-46",
  992275: "Аренда АБН 48",
  992276: "Аренда АБН 52",
  992277: "Аренда АБН 55",
  992278: "Аренда АБН 58",
};


type PumpDto = {
  id: number;
  name: string;
  qty: string;
  price: string;
  total: number;
}

const getPumpData = (delivery: Delivery, rentPupmId: number, amountBeton: number): PumpDto => {
  if (amountBeton >= 71) {
    return {
      id: rentPupmId,
      name: arrowNames[rentPupmId],
      qty: `${amountBeton} ед.`,
      price: `${priceFormat(arrowPriceMoreThanLimit[rentPupmId])}/м3`,
      total: amountBeton * arrowPriceMoreThanLimit[rentPupmId]
    }
  }

  const distance = delivery.distance ? getFillingHours(delivery.distance) : 1;

  return {
    id: rentPupmId,
    name: arrowNames[rentPupmId],
    qty: `${distance} ч.`,
    price: priceFormat(arrowNewPrice[rentPupmId]),
    total: arrowNewPrice[rentPupmId] * distance
  }
};

function createData(id: number | string, name: string, qty: number, price: number, total: number, unit: string = "") {
  if (!qty || !total) {
    return [];
  }

  return [id.toString(), name, `${qty} ${unit}`, priceFormat(price), priceFormat(total)];
};

function createDelivery(name: string, value: string) {
  return [name, value];
}

type ShopBetonTotalTableProps = {
  betonId: number;
  betonItem: number;
  amountBeton: number;
  betonName: string;
  servicesList: ServiceStore[];
  rentPupmId: number;
  remaind: number;
  technologyWashing: number;
  hoses: number;
  mixers: { [key: string]: number } | undefined;
}

export function ShopBetonTotalTable({
  betonId,
  betonItem,
  amountBeton,
  betonName,
  servicesList,
  rentPupmId,
  remaind,
  technologyWashing,
  hoses,
  mixers }: ShopBetonTotalTableProps): JSX.Element {
  const filteredServices = servicesList.filter((item) => item.price);
  const totalList = filteredServices.length ? filteredServices.reduce((acc, el) => el.total + acc, 0) : 0;
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const fibroItem = filteredServices.find((item) => item.name === ServiceName.Fibro);
  const costFibroPump = fibroItem ? amountBeton * 350 : 0;

  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);

  const [client, setClient] = useState<Client>({
    telephone: "",
    client: "",
    comment: ""
  });

  const onChangeUserForm = (form: Client) => {
    setClient({
      ...form,
    });
  };

  if (!delivery) {
    return <></>
  }

  if (!delivery?.distance) {
    return <></>
  }

  const deliveryLauncherPrice = hoses >= THIRTY_HOSES ? distancePrice[delivery.distance] * MIXER_LAUNCH : 0;
  const pumpTotal = rentPupmId ? getPumpData(delivery, rentPupmId, amountBeton).total : 0;
  const priceDelivery = distancePrice[delivery.distance] * remaind;
  const totalHoses = 350 * hoses;
  const totalPrice = concreteBeton === BetonTypes.Pump ?
    totalList + costFibroPump + priceDelivery + pumpTotal + totalHoses + technologyWashing + amountBeton * betonItem + deliveryLauncherPrice :
    totalList + priceDelivery + amountBeton * betonItem;

  const filteredString = filteredServices.map(({ id, name, qty, price, total }) => {
    const stringID = id >= DEFAULT_MAX_ID_VALUE ? "000000" : id.toString();
    return [stringID, tableNames[name], `${qty} ед.`, priceFormat(price), priceFormat(total)];
  });

  const totalBeton = amountBeton * betonItem;
  const pumpData = pumpTotal ? Object.values(getPumpData(delivery, rentPupmId, amountBeton))
    .map((item, idx, arr) => idx === arr.length - 1 ? priceFormat(+item) : item.toString()) : [];

  const mixersCountString = mixers ? Object.entries(mixers).map(([key, value]) => value ? `${key}м3 - ${value}шт; ` : "").join("") : "";

  const pdfData: PdfDto[] = [
    ["Код", "Название", "Кол-во", "Цена", "Всего"],
    createData(betonId, `Бетон ${betonName.replace('P', 'П').replace('225', '22,5')}`, amountBeton, betonItem, totalBeton, "м3"),
    createData(992270, "Доставка бетона", 1, priceDelivery, priceDelivery, "ед."),
    pumpData,
    ...filteredString,
    concreteBeton === BetonTypes.Pump &&
      deliveryLauncherPrice ? createData("000000", "Доставка пускового раствора", 1, deliveryLauncherPrice, deliveryLauncherPrice, "ед.") : [],
    concreteBeton === BetonTypes.Pump ?
      createData("000000", "Дополнительные шланги", hoses, 350, totalHoses, "м.п.") : [],
    concreteBeton === BetonTypes.Pump ?
      createData("000000", "Технологическая замывка", 1, technologyWashing, technologyWashing, "ед.") : [],
    concreteBeton === BetonTypes.Pump ?
      createData("000000", "Прокачка бетона с фиброй", amountBeton, 350, costFibroPump, "м3") : [],
    ['', '', '', 'Итого:', priceFormat(totalPrice)]
  ].filter((el) => el.length);

  const pdfDelivery: string[][] = [
    createDelivery("Адрес доставки", delivery.to ? delivery.to : ""),
    createDelivery("Ближайший завод", delivery.from ? delivery.from : ""),
    createDelivery("Количество миксеров", mixersCountString),
    createDelivery("Расстояние до адреса", `${delivery.distance} км.`),
  ];

  return (
    <><TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              <span style={{ fontSize: '20px' }}>Расчет</span>
            </TableCell>
          </TableRow>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pdfData.slice(1, pdfData.length - 1)
              .map((item, idx) => <TableRow key={idx} hover role="checkbox" tabIndex={-1}>
                <TableCell align={"left"}>{+item[0] >= DEFAULT_MAX_ID_VALUE ? "000000" : item[0]}</TableCell>
                <TableCell align={"left"}>{item[1]}</TableCell>
                <TableCell align={"left"}>{item[2]}</TableCell>
                <TableCell align={"right"}>{item[3]}</TableCell>
                <TableCell align={"right"}>{item[4]}</TableCell>
              </TableRow>)
          }
          <TableRow className="table-total">
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1}>Адрес доставки:</TableCell>
            <TableCell colSpan={1} align="right">{delivery.to}</TableCell>
          </TableRow>
          <TableRow className="table-total">
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1}>Ближайший завод:</TableCell>
            <TableCell align="right">{delivery.from}</TableCell>
          </TableRow>
          <TableRow className="table-total">
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1}>Количество миксеров:</TableCell>
            <TableCell colSpan={1} align="right">{mixersCountString}</TableCell>
          </TableRow>
          <TableRow className="table-total">
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1}>Расстояние до адреса:</TableCell>
            <TableCell colSpan={1} align="right">{delivery.distance} км.</TableCell>
          </TableRow>

          <TableRow className="table-total">
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1} align={"right"}></TableCell>
            <TableCell colSpan={1} align="right" style={{ fontSize: 24 }}>
              {<strong>Итого:</strong>} {priceFormat(totalPrice)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      <ShopBetonUserForm onChangeUserForm={onChangeUserForm} client={client} />
      <ShopBetonPdfMake pdfData={pdfData} pdfDelivery={pdfDelivery} client={client} />
    </>
  )
}