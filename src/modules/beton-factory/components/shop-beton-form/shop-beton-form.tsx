import { TextField, FormControlLabel, Switch, FormGroup, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { ShopBetonSelect } from '../shop-beton-select/shop-beton-select';
import { BetonPriceList, BetonTypes, betonIdList, concreteType, typesBetonSelect, typesPumpBetonSelect } from '../../consts/mocks';
import { changeAmountBeton, changeConcreteBeton, getAmountPriceList, setDirty } from '../../store/action';
import { RemaindType, getMixersCount, switchStyle } from '../../utils/utils';
import MapComponent from '../map-component/map-component';
import ShopBetonMixerSelect from '../shop-beton-mixer-select/shop-beton-mixer-select';
import { debounce } from "lodash";
import { BetonSelect, BetonTotal } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import petrovichImg from '../../../../assets/petrovich.svg';
import { ShopBetonSwitchList } from '../shop-beton-switch-list/shop-beton-switch-list';
import { ShopBetonTotalTable } from '../shop-beton-total-table/shop-beton-total-table';
import './shop-beton-form.scss';

function getStringMixers(value: number) {
  if (value >= 5) {
    return `${value} единиц`
  }

  if (value === 1) {
    return `${value} единица`
  }

  return `${value} единицы`
}

function ShopBetonForm(): JSX.Element {
  const [form, setForm] = useState(['', '', '', '']);
  const [, setQty] = useState<null | number>(null);
  const [checked, setChecked] = useState(false);
  const [remaind, setRemaind] = useState<RemaindType>();
  const [rentPupm, setRentPump] = useState(false);
  const [betonTypesList, setBetonTypesList] = useState<BetonSelect[]>(typesBetonSelect);
  const [pumpValue, setPumpValue] = useState(992271);
  const [technologyWashing, setTechnologyWashing] = useState(false);
  const [additionalHoses, setAdditionalHoses] = useState<number | undefined>();

  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);
  const deliveryStore = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const amountBeton = useAppSelector(({ dataReducer }) => dataReducer.amountBeton);
  const shopMixers = useAppSelector(({ dataReducer }) => dataReducer.shopMixers);
  const amountPriceList = useAppSelector(({ dataReducer }) => dataReducer.amountPriceList);
  const dirty = useAppSelector(({ dataReducer }) => dataReducer.dirty);

  const servicesList = useAppSelector(({ dataReducer }) => dataReducer.services);
  const dispatch = useAppDispatch();

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

  const handleChangePupm = ({ target }: SelectChangeEvent) => {
    setPumpValue((prevValue) => prevValue = Number(target.value));
  };

  const handleChangeTechnologyWashing = () => {
    setTechnologyWashing((prev) => prev = !prev);
  }

  const handleChangeHoses = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value) {
      setAdditionalHoses((prev) => prev = parseInt(target.value, 10));
    } else {
      setAdditionalHoses((prev) => prev = undefined);
    }
  };

  const handleChangeDirty = () => {
    if (!dirty) {
      dispatch(setDirty(true));
    };
  };

  useEffect(() => {
    setRemaind((prev) => (prev = getMixersCount(amountBeton, shopMixers)));
  }, [amountBeton, shopMixers]);

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
    if (rentPupm && concreteBeton === BetonTypes.WithoutPump) {
      setRentPump((prevPump) => !prevPump);
    }

    if (!rentPupm && concreteBeton === BetonTypes.Pump) {
      setRentPump((prevPump) => !prevPump);
    }

  }, [amountPriceList, concreteBeton, dispatch, rentPupm]);

  const priceListKey = form.join('');
  const betonItem = BetonPriceList[priceListKey];
  const rentPupmId = rentPupm ? pumpValue : 0;
  const remaindValue = remaind?.remaind ? remaind.remaind : 0;
  const technologyWashingValue = technologyWashing ? 11500 : 0;
  const hoses = additionalHoses ? additionalHoses : 0;

  return (
    <><div className="shop-beton" onClick={handleChangeDirty}>
      <div className="shop-beton-title"><h2>Расчет бетона</h2> <img src={petrovichImg} alt="" /></div>
      <form className="shop-beton-form">
        <div className="shop-beton-select-wrapper">
          <ShopBetonSelect {...concreteType} onChangeType={onChangeType} />
          {betonTypesList.map((item) => <ShopBetonSelect key={item.id} {...item} onChangeType={onChangeType} />)}
          <ShopBetonMixerSelect />
          <div className="weight-field">
            <div>
              <div>
                <TextField
                  disabled={!betonItem}
                  style={{ width: 150 }}
                  inputProps={{ min: 1, max: 200, step: 0.1 }}
                  id="outlined-number"
                  label="Объем"
                  type="number"
                  onChange={handleChangeQty} />

                {
                  !betonItem && !form.includes('') ?
                    <><br /><small style={{ color: "red" }}>
                      Бетон {priceListKey.replace('P', 'П').replace('225', '22.5')} в ассортименте отсутствует
                    </small></> : null
                }

                {
                  remaind && remaind.remaind - amountBeton > 0 && betonItem ?
                    <><br /><small className="text-message">
                      Пустые кубы {remaind.remaind - amountBeton} м<sup>3</sup>
                    </small></> : null
                }
                <br />
                {
                  remaind?.mixers && amountBeton && betonItem ?
                    Object.entries(remaind.mixers).map(([key, value]) => {
                      if (!value) {
                        return null;
                      }
                      return <small key={key} className="text-message">Миксер {key}м<sup>3</sup>: {getStringMixers(value)}; <br /></small>
                    }) : null
                }
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="switch-block">
        <ShopBetonSwitchList hoses={hoses} amountBeton={amountBeton} />
        <div className="switch-delivery" style={{ marginBottom: !checked ? '20px' : '0' }}>
          <FormControlLabel disabled={!amountBeton}
            value="End"
            control={<Switch sx={switchStyle} color="primary" checked={checked} onChange={handleChange} />}
            label={!checked ? "Расчет доставки" : "Скрыть карту"}
            labelPlacement="end" />
        </div>
        <MapComponent dnone={checked} />
        <FormControlLabel
          value="End"
          control={<Switch sx={switchStyle} color="primary" />}
          label="Аренда бетононасоса"
          labelPlacement="end"
          disabled={concreteBeton === BetonTypes.UnknownPump || concreteBeton === BetonTypes.WithoutPump}
          checked={rentPupm} />
      </div>

      {rentPupm ?
        <div className="shop-beton-switch-list">
          <FormGroup className="shop-beton-switch-field">
            <FormControlLabel control={<Switch sx={switchStyle} size='small'
              checked={technologyWashing}
              onChange={handleChangeTechnologyWashing} />}
              label="Технологическая замывка" />
          </FormGroup>

          <div className="pumb-block">
            <FormControl className="select-length-pump">
              <InputLabel size='small' id="select-length-pump">Длина стрелы</InputLabel>
              <Select
                labelId="select-hoses"
                id="select-length-pump-select"
                label="Длина стрелы"
                size='small'
                value={pumpValue.toString()}
                onChange={handleChangePupm}
              >
                <MenuItem value={992271}>Аренда АБН 24-28</MenuItem>
                <MenuItem value={992272}>Аренда АБН 32-36</MenuItem>
                <MenuItem value={992273}>Аренда АБН 40-42</MenuItem>

                <MenuItem value={992274}>Аренда АБН 44-46</MenuItem>
                <MenuItem value={992275}>Аренда АБН 48</MenuItem>
                <MenuItem value={992276}>Аренда АБН 52</MenuItem>

                <MenuItem value={992277}>Аренда АБН 55</MenuItem>
                <MenuItem value={992278}>Аренда АБН 58</MenuItem>
              </Select>
            </FormControl>

            <div>
              <TextField
                className="hoses-field"
                id="hoses-field"
                label="Дополнительные шланги"
                type="number"
                size="small"
                value={additionalHoses ? additionalHoses : ""}
                onChange={handleChangeHoses} />
              <br />
              {additionalHoses && additionalHoses > 300 ?
                <small>Максимальное количество 300 м.п.</small> : null}
            </div>
          </div>

        </div> : null}

      {betonItem && amountBeton ?
        <ShopBetonTotalTable
          betonId={betonIdList[priceListKey]}
          betonItem={betonItem}
          amountBeton={amountBeton}
          betonName={priceListKey}
          servicesList={servicesList}
          rentPupmId={rentPupmId}
          remaind={remaindValue}
          technologyWashing={technologyWashingValue}
          hoses={hoses}
          mixers={remaind?.mixers}
        /> : null}
    </div></>
  )
}

export default memo(ShopBetonForm);