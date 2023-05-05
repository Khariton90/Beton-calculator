import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Fade } from "@mui/material";
import { priceFormat, RemaindType } from "../../utils/utils";
import { useAppSelector } from "../../../../hooks/hooks";
import { ShopBetonDeliveryTotal } from "../shop-beton-delivery-total/shop-beton-delivery-total";

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

  if (!qty || !betonItem) {
    return <></>;
  }

  const betonName = form.find((el) => el === '') ? null : form.join('').replace('P', 'П').replace('225', '22,5');

  return (
    <div className="total">
      <Fade in={qty > 0} style={{ transitionDelay: qty ? '300ms' : '0ms' }}>
        <TableContainer sx={{ maxHeight: 440, width: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  <span style={{ fontSize: '20px' }}>Бетон</span>
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
                <TableCell align={"left"}><b>{betonName}</b></TableCell>
                <TableCell align={"left"}>{`${qty} м3`}</TableCell>
                <TableCell align={"right"}>{priceFormat((betonItem + antifreezeValue))}</TableCell>
                <TableCell align={"right"}>{priceFormat((betonItem + antifreezeValue) * qty)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Fade>

      {deliveryStore?.price && remaind?.remaind && betonItem ?
        <>
          <ShopBetonDeliveryTotal deliveryStore={deliveryStore} remaind={remaind} price={deliveryStore.price} />
          <div className="total-price" style={{ fontSize: "28px" }}>
            <b>Итого:</b> {priceFormat(Object.values(amountPriceList).reduce((el, acc) => el += acc))}
            </div>
        </> : null
      }
    </div>
  )
}