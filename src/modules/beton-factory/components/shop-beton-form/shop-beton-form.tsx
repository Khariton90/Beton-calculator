import { TextField, FormControlLabel, Switch, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grow, Fade } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { ShopBetonSelect } from '../shop-beton-select/shop-beton-select';
import { BetonPriceList, BetonTypes, antiFreeze, concreteType, typesBetonSelect, typesPumpBetonSelect } from '../../consts/mocks';
import { changeAmountBeton, changeConcreteBeton, getAmountPriceList } from '../../store/action';
import { RemaindType, getMixersCount } from '../../utils/utils';
import MapComponent from '../map-component/map-component';
import ShopBetonMixerSelect from '../shop-beton-mixer-select/shop-beton-mixer-select';
import { debounce } from "lodash";
import { ShopBetonFeatures } from '../shop-beton-features/shop-beton-features';
import { BetonSelect, BetonTotal } from '../../types/types';
import './shop-beton-form.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { ShopBetonTotalTable } from '../shop-beton-total-table/shop-beton-total-table';
import petrovichImg from '../../../../assets/petrovich.svg';

function ShopBetonForm(): JSX.Element {
  const [form, setForm] = useState(['', '', '', '']);
  const [qty, setQty] = useState<null | number>(null);
  const [checked, setChecked] = useState(false);
  const [remaind, setRemaind] = useState<RemaindType>();
  const [rentPupm, setRentPump] = useState(false);
  const [betonTypesList, setBetonTypesList] = useState<BetonSelect[]>(typesBetonSelect);
  const [antifreezeState, setAntifreezeState] = useState(false);
  const [antifreezeValue, setAntifreezeValue] = useState(0);

  const dispatch = useAppDispatch();
  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);
  const deliveryStore = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const amountBeton = useAppSelector(({ dataReducer }) => dataReducer.amountBeton);
  const shopMixers = useAppSelector(({ dataReducer }) => dataReducer.shopMixers);
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);

  const onChangeType = (id: number, value: string) => {
    if (value === BetonTypes.Pump || value === BetonTypes.WithoutPump) {
      dispatch(changeConcreteBeton(value));
      setForm((prevForm) => (prevForm = ['', '', '', '']))
    } else {
      setForm((prevForm) => (prevForm.map((el, index) => index + 1 === id ? el = value : el)))
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeQty = useCallback(debounce(({ target }: ChangeEvent<HTMLInputElement>) => {
    setQty((prev) => (prev = Number(target.value)));
    dispatch(changeAmountBeton(Number(target.value)));
  }, 500), [shopMixers])


  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => (prev = evt.target.checked));
  };

  const handleChangeAntifreeze = (evt: ChangeEvent<HTMLInputElement>) => {
    setAntifreezeState((prev) => (prev = evt.target.checked));
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAntifreezeValue((prev) => (prev = Number(event.target.value)));
  };


  const priceListKey = form.join('');
  const betonItem = BetonPriceList[priceListKey];

  useEffect(() => {
    if (betonItem && qty) {
      dispatch(getAmountPriceList({
        ...amountPriceList,
        [BetonTotal.Beton]: (betonItem + antifreezeValue) * qty
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
  }, [concreteBeton]);

  useEffect(() => {
    setRemaind((prev) => (prev = getMixersCount(amountBeton, shopMixers)));
  }, [amountBeton, shopMixers]);

  useEffect(() => {
    if (!antifreezeState) {
      setAntifreezeValue((prev) => prev = 0);
    }
  }, [antifreezeState]);

  useEffect(() => {
    if (!rentPupm && amountPriceList.features) {
      dispatch(getAmountPriceList({
        ...amountPriceList,
        [BetonTotal.Features]: 0
      }))
    }
  }, [amountPriceList, dispatch, rentPupm]);

  return (
    <div className="shop-beton">
      <div className="shop-beton-title"><h2>Расчет бетона</h2> <img src={petrovichImg} alt="" /></div>
      <form className="shop-beton-form">
        <ShopBetonSelect {...concreteType} onChangeType={onChangeType} />
        {betonTypesList.map((item) => <ShopBetonSelect key={item.id} {...item} onChangeType={onChangeType} />)}
        <ShopBetonMixerSelect />
        <TextField
          style={{ width: 150 }}
          inputProps={{ min: 1, max: 200, step: 0.1 }}
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
        {
          remaind && remaind.remaind - amountBeton > 0 ?
          <Fade in={remaind && remaind.remaind - amountBeton > 0} style={{ transitionDelay: remaind && remaind.remaind - amountBeton > 0 ? '300ms' : '0ms' }}>
            <p style={{ color: "#1976d2" }}>
              <b>Остаток свободного бетона {(remaind.remaind - amountBeton).toFixed(1)} м<sup>3</sup></b>
            </p></Fade> : null
        }

        <div className="shop-beton-antifreeze" style={{marginTop: remaind && remaind.remaind - amountBeton > 0 ? "0px" : '55.3px'}}>
          <FormControlLabel
            disabled={!amountBeton}
            value="End"
            control={<Switch color="primary" checked={antifreezeState} onChange={handleChangeAntifreeze} />}
            label={"Антифриз"}
            labelPlacement="end"
          />
          {
            antifreezeState ?
              <Grow
                in={antifreezeState}
                style={{ transformOrigin: '0 0 0' }}
                {...(antifreezeState ? { timeout: 400 } : {})}
              >
                {<div className="shop-beton-select">
                  <FormControl style={{ width: 150 }}>
                    <InputLabel>{"Антифриз"}</InputLabel>
                    <Select
                      defaultValue={""}
                      label={"Антифриз"}
                      onChange={handleChangeSelect}
                    >
                      {antiFreeze.map((item) => <MenuItem value={item.price} key={item.id}>{item.label}
                      </MenuItem>)}
                    </Select>
                  </FormControl>
                </div>}
              </Grow>
              : null
          }
        </div>
        <div>
          <FormControlLabel disabled={!amountBeton}
            value="End"
            control={<Switch color="primary" checked={checked} onChange={handleChange} />}
            label={!checked ? "Расчет доставки" : "Скрыть карту"}
            labelPlacement="end"
          />
        </div>

        <MapComponent dnone={checked} />

        <FormControlLabel
          value="End"
          control={<Switch color="primary" />}
          label="Аренда бетононасоса"
          labelPlacement="end"
          disabled={concreteBeton === "-1" || !amountBeton}
          checked={rentPupm}
          onChange={() => setRentPump((prev) => prev = !prev)}
        />
        {rentPupm && qty ? <ShopBetonFeatures /> : null}
      </div>
      <ShopBetonTotalTable
        qty={qty}
        betonItem={betonItem}
        form={form}
        antifreezeValue={antifreezeValue}
        remaind={remaind}
      />
    </div>
  )
}

export default memo(ShopBetonForm);