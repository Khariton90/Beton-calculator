import { FormControl, InputLabel, Select, MenuItem, TextField, FormControlLabel, Switch, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormHelperText } from "@mui/material";
import { useEffect, useId, useState } from "react";
import { getFillingHours, priceFormat } from "../../utils/utils";
import { arrowPrice, lengthPumpArrow, } from "../../consts/mocks";
import { BetonTotal, PumpArrow } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getAmountPriceList } from "../../store/action";

const HOSES_PRICE = 350;
const COMPENSATOR_PRICE = 1750;
const HYDROLOTOK = 3000;

interface Column {
  id: 'name' | 'qty' | 'price' | 'amount';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Название', minWidth: 170 },
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

export function ShopBetonFeatures(): JSX.Element {
  const [hosesCount, setHosesCount] = useState<number>();
  const [compensator, setCompensator] = useState<boolean>(false);
  const [hydrolotok, setHydrolotok] = useState<boolean>(false);
  const [hydrolotokCount, setHydrolotokCount] = useState<number | string>("1");
  const [value, setValue] = useState<PumpArrow>(PumpArrow.TwentyFour);

  const id = useId();
  const dispatch = useAppDispatch();
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);

  const hosesPrice = hosesCount ? hosesCount * HOSES_PRICE : null;
  const compensatorPrice = compensator ? COMPENSATOR_PRICE : null;
  const hydrolotokPrice = hydrolotok ? HYDROLOTOK : null;
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
  }, [dispatch, price])

  return (
    <div className="pump-features-wrapper">
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
          style={{ width: 300 }}
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
      </div>
      <div className="pump-toggle">
        <FormControlLabel
          value="End"
          checked={compensator}
          control={<Switch color="primary" onChange={(evt) => setCompensator(evt.target.checked)} />}
          label="Аренда Гасителя"
          labelPlacement="end"
        />
        <br />
        <div className="hydrolotok-field">
          <FormControlLabel
            value="End"
            checked={hydrolotok}
            control={<Switch color="primary" onChange={(evt) => setHydrolotok(evt.target.checked)} />}
            label="Гидролоток"
            labelPlacement="end"
          />

          {hydrolotok ? <TextField
            style={{ width: "300px" }}
            inputProps={{ min: 1, max: 200 }}
            id="hidro-lotok-number"
            label="Количество"
            type="number"
            value={hydrolotokCount ? hydrolotokCount : ''}
            helperText={hydrolotok ? "минимальное 1 ед." : null}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(evt) => setHydrolotokCount(parseInt(evt.target.value, 10))}
          /> : null}
        </div>

      </div>

      <div className="features-total">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Услуги
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
                    <TableCell align={"left"}><b>Гаситель</b></TableCell>
                    <TableCell align={"left"}>1 ед.</TableCell>
                    <TableCell align={"right"}>{priceFormat(compensatorPrice)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(compensatorPrice)}</TableCell>
                  </TableRow>
                  : null
              }
              {
                hydrolotokPrice && hydrolotokCount ?
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"left"}><b>Гидролоток</b></TableCell>
                    <TableCell align={"left"}>{hydrolotokCount} ед.</TableCell>
                    <TableCell align={"right"}>{priceFormat(hydrolotokPrice)}</TableCell>
                    <TableCell align={"right"}>{priceFormat(hydrolotokPrice * Number(hydrolotokCount))}</TableCell>
                  </TableRow>
                  : null
              }
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}