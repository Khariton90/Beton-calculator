import { TextField, FormControlLabel, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { ShopBetonSelect } from '../shop-beton-select/shop-beton-select';
import { BetonPriceList, BetonTypes, DEFAULT_FILING_HOURS, concreteType, typesBetonSelect, typesPumpBetonSelect } from '../../consts/mocks';
import { changeAmountBeton, changeConcreteBeton, getAmountPriceList } from '../../store/action';
import { RemaindType, getFillingHours, getMixersCount, priceFormat } from '../../utils/utils';
import MapComponent from '../map-component/map-component';
import ShopBetonMixerSelect from '../shop-beton-mixer-select/shop-beton-mixer-select';
import { debounce } from "lodash";
import { ShopBetonFeatures } from '../shop-beton-features/shop-beton-features';
import { BetonSelect, BetonTotal } from '../../types/types';
import './shop-beton-form.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';

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

function ShopBetonForm(): JSX.Element {
  const [form, setForm] = useState(['', '', '', '']);
  const [qty, setQty] = useState<null | number>(null);
  const [checked, setChecked] = useState(true);
  const [remaind, setRemaind] = useState<RemaindType>();
  const [rentPupm, setRentPump] = useState(false);


  const dispatch = useAppDispatch();
  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);
  const deliveryStore = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const amountBeton = useAppSelector(({ dataReducer }) => dataReducer.amountBeton);
  const shopMixers = useAppSelector(({ dataReducer }) => dataReducer.shopMixers);
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);
  const [betonTypesList, setBetonTypesList] = useState<BetonSelect[]>(typesBetonSelect);

  const onChangeType = (id: number, value: string) => {
    if (value === BetonTypes.Pump || value === BetonTypes.WithoutPump) {
      dispatch(changeConcreteBeton(value));
      setForm((prevForm) => (prevForm = ['', '', '', '']))
    } else {
      setForm((prevForm) => (prevForm.map((el, index) => index + 1 === id ? el = value : el)))
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeQty = useCallback(debounce((evt: ChangeEvent<HTMLInputElement>) => {
    setQty((prev) => (prev = parseInt(evt.target.value, 10)));
    dispatch(changeAmountBeton(parseInt(evt.target.value, 10)));
  }, 500), [shopMixers])


  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => (prev = evt.target.checked));
  };

  const priceListKey = form.join('');
  const betonItem = BetonPriceList[priceListKey];

  useEffect(() => {
    if (betonItem && qty) {
      dispatch(getAmountPriceList({
        ...amountPriceList,
        [BetonTotal.Beton]: betonItem * qty
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [betonItem, dispatch, qty]);

  useEffect(() => {
    if (deliveryStore?.price && remaind?.remaind) {
      dispatch(getAmountPriceList({
        ...amountPriceList,
        [BetonTotal.Delivery]: deliveryStore.price * remaind.remaind
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryStore?.price, dispatch, remaind?.remaind])

  useEffect(() => {
    if (concreteBeton === BetonTypes.WithoutPump) {
      setBetonTypesList((prevList) => prevList = typesBetonSelect);
    }

    if (concreteBeton === BetonTypes.Pump) {
      setBetonTypesList((prevList) => prevList = typesPumpBetonSelect);
    }
  }, [concreteBeton])

  useEffect(() => {
    setRemaind((prev) => (prev = getMixersCount(amountBeton, shopMixers)));
  }, [amountBeton, shopMixers]);

  return (
    <div className="shop-beton">
      <h2 style={{ color: "#333" }}>Расчет бетона</h2>
      <form className="shop-beton-form">
        <ShopBetonSelect {...concreteType} onChangeType={onChangeType} />
        {betonTypesList.map((item) => <ShopBetonSelect key={item.id} {...item} onChangeType={onChangeType} />)}
        <ShopBetonMixerSelect />
        <TextField
          style={{ width: 150 }}
          inputProps={{ min: 1, max: 200 }}
          id="outlined-number"
          label="Объем"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChangeQty}
        />
      </form>
      <div>
        {remaind && remaind.remaind - amountBeton > 0 ? <p style={{ color: "green" }}>
          <b>Остаток свободного бетона {remaind.remaind - amountBeton} м<sup>3</sup></b></p> : null}

        <p><FormControlLabel
          value="End"
          control={<Switch color="primary" checked={checked} onChange={handleChange} />}
          label={!checked ? "Расчет доставки" : "Скрыть карту"}
          labelPlacement="end"
        />
        </p>

        <MapComponent dnone={checked} />

        <FormControlLabel
          value="End"
          control={<Switch color="primary" />}
          label="Аренда бетононасоса"
          labelPlacement="end"
          disabled={concreteBeton === "0"}
          checked={rentPupm}
          onChange={() => setRentPump((prev) => prev = !prev)}
        />
        {rentPupm && qty ? <ShopBetonFeatures /> : null}
      </div>
      <div className="total">
        {
          qty ?
            <TableContainer sx={{ maxHeight: 440, width: "100%" }}>

              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
                      Бетон
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
                    <TableCell width={260} align={"left"}><b>{form.find((el) => el === '') ? null : form.join('').replace('P', 'П').replace('225', '22,5')}</b></TableCell>
                    <TableCell width={170} align={"left"}>{qty ? `${qty} м3` : <b style={{ color: 'red' }}>Необходимо выбрать Количество</b>}</TableCell>
                    <TableCell align={"right"}>{betonItem && qty ? priceFormat(betonItem) : null}</TableCell>
                    <TableCell align={"right"}>{betonItem && qty ? priceFormat(betonItem * qty) : null}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer> : null
        }
        {deliveryStore?.price && remaind?.remaind ?
          <div className="shop-delivery">
            <div className="shop-delivery-body">
              <p><b>Доставка:</b></p>
              <p>Ближайший завод: {deliveryStore.from}</p>
              <p>Адрес доставки: {deliveryStore.to}</p>
              <p>Подача: {deliveryStore.distance ? <>
                <span>{DEFAULT_FILING_HOURS}ч. + </span>
                <span>{getFillingHours(deliveryStore.distance) - DEFAULT_FILING_HOURS}ч. = </span>
                <span>{getFillingHours(deliveryStore.distance)}ч.</span></> :
                null}</p>
              <div>
                Количество миксеров:
                <br />
                <p>{remaind ? Object.entries(remaind.mixers).map(([key, value]) => value ? <span key={key}>
                  <span >Миксер {key} м3: {value} шт.</span><br /></span> : null) : null}</p>
              </div>
              <p>Расстояние до адреса {deliveryStore.distance} км</p>
              <p>Стоимость доставки: {priceFormat(deliveryStore.price * remaind.remaind)}</p>

            </div>
            {<p style={{ fontSize: "24px" }}><b>Итого:</b> {priceFormat(Object.values(amountPriceList).reduce((el, acc) => el += acc))}</p>}
          </div> : null
        }
      </div>
    </div>
  )
}

export default memo(ShopBetonForm);