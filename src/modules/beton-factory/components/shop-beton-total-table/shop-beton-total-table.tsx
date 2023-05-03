import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Fade } from "@mui/material";
import { DEFAULT_FILING_HOURS } from "../../consts/mocks";
import { priceFormat, getFillingHours, RemaindType } from "../../utils/utils";
import { useAppSelector } from "../../../../hooks/hooks";

interface Column {
  id: 'name' | 'qty' | 'price' | 'amount';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Название', minWidth: 200 },
  { id: 'qty', label: 'Количество', minWidth: 100 },
  { id: 'price', label: 'Цена', minWidth: 170, align: 'right' },
  { id: 'amount', label: 'Всего', minWidth: 170, align: 'right' },
];

type ShopBetonTotalTableProps = {
  qty: null | number;
  betonItem: number | undefined;
  form: string[];
  antifreezeValue: number;
  remaind: RemaindType | undefined;
}

export function ShopBetonTotalTable({ qty, betonItem, form, antifreezeValue, remaind }: ShopBetonTotalTableProps): JSX.Element {
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);
  const deliveryStore = useAppSelector(({ dataReducer }) => dataReducer.delivery);

  return (
    <div className="total">
      {
        qty && betonItem ?
        <Fade in={qty > 0} style={{ transitionDelay: qty ? '300ms' : '0ms' }}>
          <TableContainer sx={{ maxHeight: 440, width: "100%" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <span style={{fontSize: '20px'}}>Бетон</span>
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
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell align={"left"}><b>{form.find((el) => el === '') ? null : form.join('').replace('P', 'П').replace('225', '22,5')}</b></TableCell>
                  <TableCell align={"left"}>{qty ? `${qty} м3` : <b style={{ color: 'red' }}>Необходимо выбрать Количество</b>}</TableCell>
                  <TableCell align={"right"}>{betonItem && qty ? priceFormat((betonItem + antifreezeValue)) : null}</TableCell>
                  <TableCell align={"right"}>{betonItem && qty ? priceFormat((betonItem + antifreezeValue) * qty) : null}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer></Fade> : null
      }
      {deliveryStore?.price && remaind?.remaind ?
        <div className="shop-delivery">
          <div className="shop-delivery-body">
            <h3>Доставка:</h3>
            <ul>
              <li><span className="title-type">Ближайший завод:</span> {deliveryStore.from}</li>
              <li><span className="title-type">Адрес доставки:</span> {deliveryStore.to}</li>
              <li><span className="title-type">Подача:</span> {deliveryStore.distance ? <>
              <span>{DEFAULT_FILING_HOURS} + </span>
              <span>{getFillingHours(deliveryStore.distance) - DEFAULT_FILING_HOURS} = </span>
              <span>{getFillingHours(deliveryStore.distance)} ч.</span></> :
              null}</li>
              <li><span className="title-type">Количество миксеров:</span> <br/> {remaind ? Object.entries(remaind.mixers).map(([key, value]) => value ? <span key={key}>
                <span >{key} м<sup>3</sup> - {value} шт.</span><br /></span> : null) : null}</li>
              <li><span className="title-type">Расстояние до адреса:</span> {deliveryStore.distance} км.</li>
              <li><span className="title-type">Стоимость доставки:</span> {priceFormat(deliveryStore.price * remaind.remaind)}.</li>
            </ul>
          </div>
          {<p style={{ fontSize: "28px" }}><b>Итого:</b> {priceFormat(Object.values(amountPriceList).reduce((el, acc) => el += acc))}</p>}
        </div> : null
      }
    </div>
  )
}