import { FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormHelperText, FormControlLabel, Switch } from "@mui/material";
import { useEffect, useId, useState } from "react";
import { getFillingHours, priceFormat } from "../../utils/utils";
import { BetonTypes, arrowPrice, lengthPumpArrow, } from "../../consts/mocks";
import { BetonTotal, PumpArrow } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getAmountPriceList } from "../../store/action";
import cn from 'classnames';

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


type ServiceSwitch = {
  id: number;
  name: string;
  label: string;
  value: number;
  hintText: string;
}

const washingSwitch: ServiceSwitch = {
  id: 1,
  name: "washing",
  label: "Технологическая замывка АБН",
  value: 11500,
  hintText: "При отсутствии места для технологической замывки АБН компенсация составляет 11 500р."
};

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
            <div className="switch-item">
              <div className={cn("hint", { "active": concreteBeton === BetonTypes.Pump })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM13.395 9.882L11.895 16.9395C11.79 17.4495 11.9385 17.739 12.351 17.739C12.642 17.739 13.0815 17.634 13.38 17.37L13.248 17.994C12.8175 18.513 11.868 18.891 11.0505 18.891C9.996 18.891 9.5475 18.258 9.8385 16.9125L10.9455 11.7105C11.0415 11.271 10.9545 11.112 10.515 11.0055L9.8385 10.884L9.9615 10.3125L13.395 9.882ZM12 8.25C11.6022 8.25 11.2206 8.09196 10.9393 7.81066C10.658 7.52936 10.5 7.14782 10.5 6.75C10.5 6.35218 10.658 5.97064 10.9393 5.68934C11.2206 5.40804 11.6022 5.25 12 5.25C12.3978 5.25 12.7794 5.40804 13.0607 5.68934C13.342 5.97064 13.5 6.35218 13.5 6.75C13.5 7.14782 13.342 7.52936 13.0607 7.81066C12.7794 8.09196 12.3978 8.25 12 8.25Z" fill={concreteBeton !== BetonTypes.Pump ? "#ccc" : "#1976d2"} />
                </svg>

                <div className="hint-text">{washingSwitch.hintText}</div>
              </div>
              <FormControlLabel
                value={washingSwitch.value}
                control={<Switch />}
                label={washingSwitch.label}
                labelPlacement="end"
              />
            </div>

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