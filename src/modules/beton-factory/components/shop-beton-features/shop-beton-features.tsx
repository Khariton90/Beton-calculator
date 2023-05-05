import { FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormHelperText } from "@mui/material";
import { useEffect, useId, useState } from "react";
import { getFillingHours, priceFormat } from "../../utils/utils";
import { BetonTypes, arrowPrice, lengthPumpArrow, } from "../../consts/mocks";
import { BetonTotal, PumpArrow } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getAmountPriceList } from "../../store/action";

const HOSES_PRICE = 350;

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
  {
    id: 'price',
    label: 'Цена',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'amount',
    label: 'Всего',
    minWidth: 170,
    align: 'right',
  },
];

const getPrice = (array: Array<[number | null, number | null | undefined]>): number => {
  const totalFeatures = array
    .reduce((acc, [price, count]) => {
      let value = price && count ? price * count : 0;
      return value += acc;
    }, 0);

  return totalFeatures;
}

type ShopBetonFeaturesProps = {
  compensatorPrice: number | null;
  hydrolotokPrice: number | null;
  hydrolotokCount: number | string;
}

export function ShopBetonFeatures({ compensatorPrice, hydrolotokPrice, hydrolotokCount }: ShopBetonFeaturesProps): JSX.Element {
  const [hosesCount, setHosesCount] = useState<number | null>(null);
  const [value, setValue] = useState<PumpArrow | null>(null);
  const id = useId();
  const dispatch = useAppDispatch();
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);
  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);

  const hosesPrice = hosesCount ? hosesCount * HOSES_PRICE : null;
  const purmArrowPrice = value ? arrowPrice[value] : null;
  const getHours = delivery?.distance ? getFillingHours(delivery?.distance) : 0;

  const price = getPrice(
    [
      [hosesPrice, 1],
      [compensatorPrice, 1],
      [hydrolotokPrice, Number(hydrolotokCount)],
      [purmArrowPrice, getHours]
    ]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue((prev) => {
      return prev = event.target.value as PumpArrow
    });
  };

  useEffect(() => {
    dispatch(getAmountPriceList({
      ...amountPriceList,
      [BetonTotal.Features]: price
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, price]);

  useEffect(() => {
    if (concreteBeton === BetonTypes.WithoutPump) {
      setValue((prev) => (prev = null));
      setHosesCount((prev) => (prev = null));
    }
  }, [concreteBeton, value]);

  return (
    <div className="pump-features-wrapper">
      {
        concreteBeton === BetonTypes.Pump ?
          <div className="pump-features">
            <div className="shop-beton-select">
              <FormControl fullWidth disabled={!delivery?.distance}>
                <InputLabel>{lengthPumpArrow.title}</InputLabel>
                <Select
                  labelId={id}
                  id={id}
                  value={value ? value : ''}
                  label={lengthPumpArrow.title}
                  onChange={handleChange}
                >
                  {lengthPumpArrow.options.map((item) => <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>)}
                </Select>
                {!delivery?.distance ? <FormHelperText>Расчитайте доставку на карте</FormHelperText> : null}
              </FormControl>
            </div>
            <TextField

              inputProps={{ min: 1, max: 300 }}
              id="outlined-number"
              label="Дополнительные шланги (м.п.)"
              type="number"
              value={hosesCount ? hosesCount : ''}
              helperText={hosesCount ? "максимальное кол-во 300 м.п." : null}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(evt) => setHosesCount(parseInt(evt.target.value))}
            />
          </div> : null
      }

      <div className="features-total">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            {
              purmArrowPrice || hosesPrice || compensatorPrice || hydrolotokPrice ?
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
                      <span style={{ fontSize: '20px' }}>Услуги</span>
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
                </TableHead> : null
            }

            <TableBody>
              {
                purmArrowPrice !== null && delivery?.distance ?
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"left"}><b>Стоимость работы АБН, с НДС:</b></TableCell>
                    <TableCell align={"left"}>{getFillingHours(delivery.distance)} ч.</TableCell>
                    <TableCell align={"right"}>{priceFormat(purmArrowPrice)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(purmArrowPrice * getFillingHours(delivery.distance))}</TableCell>
                  </TableRow>
                  : null
              }
              {
                hosesPrice ?
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"left"}><b>Дополнительные шланги</b></TableCell>
                    <TableCell align={"left"}>{hosesCount} м.п.</TableCell>
                    <TableCell align={"right"}>{priceFormat(HOSES_PRICE)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(hosesPrice)}</TableCell>
                  </TableRow>
                  : null
              }
              {
                compensatorPrice ?
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"left"}><b>Аренда Гасителя</b></TableCell>
                    <TableCell align={"left"}>1 ед.</TableCell>
                    <TableCell align={"right"}>{priceFormat(compensatorPrice)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(compensatorPrice)}</TableCell>
                  </TableRow>
                  : null
              }
              {
                hydrolotokPrice && hydrolotokCount ?
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"left"}><b>Труба удлинитель</b></TableCell>
                    <TableCell align={"left"}>{hydrolotokCount} ед.</TableCell>
                    <TableCell align={"right"}>{priceFormat(hydrolotokPrice)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(hydrolotokPrice * Number(hydrolotokCount))}</TableCell>
                  </TableRow>
                  : null
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}