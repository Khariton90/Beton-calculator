import { FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import { ChangeEvent, useState, useEffect } from 'react';
import { BetonTypes, antiFreeze } from '../../consts/mocks';
import { ServiceName, ServiceStore, ServiceSwitch, Services } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getBetonServices } from '../../store/action';
import './shop-beton-switch-list.scss';
import { switchStyle } from '../../utils/utils';

const accessoriesList: ServiceSwitch[] = [
  {
    id: 1,
    name: ServiceName.Hydrolotok,
    label: "Труба-удлинитель",
    value: 3000,
  },
  {
    id: 2,
    name: ServiceName.Compensator,
    label: "Аренда гасителя",
    value: 1750,
  },
];

const additivesList: ServiceSwitch[] = [
  {
    id: 1,
    name: ServiceName.Antifreeze,
    label: "Антифриз",
    value: 154,
  },
  {
    id: 2,
    name: ServiceName.Stone,
    label: "Щебень 5-10 мм",
    value: 300,
  },
  {
    id: 3,
    name: ServiceName.Fibro,
    label: "Фиброволокно",
    value: 70,
  },
];

const otherList: ServiceSwitch[] = [
  {
    id: 1,
    name: ServiceName.MasterTop,
    label: "«Мастер ТОП»",
    value: 100,
  },
  {
    id: 2,
    name: ServiceName.SchemaG,
    label: "«Схема Г»",
    value: 100,
  }
];

type ShopBetonSwitchListProps = {
  amountBeton: number;
  hoses: number;
}

export function ShopBetonSwitchList({ amountBeton, hoses }: ShopBetonSwitchListProps): JSX.Element {
  const [antifreezeValue, setAntifreezeValue] = useState(antiFreeze[0].price);
  const [hydrolotokCount, setHydrolotokCount] = useState(1);
  const [services, setServices] = useState<Services>({
    [ServiceName.Compensator]: 0,
    [ServiceName.Hydrolotok]: 0,
    [ServiceName.Antifreeze]: 0,
    [ServiceName.Stone]: 0,
    [ServiceName.Fibro]: 0,
    [ServiceName.MasterTop]: 0,
    [ServiceName.SchemaG]: 0,
    [ServiceName.Launcher]: 0,
  });

  const concreteBeton = useAppSelector(({dataReducer}) => dataReducer.concreteBeton);

  const dispatch = useAppDispatch();

  const handleChange = ({ target: { name, value, checked } }: ChangeEvent<HTMLInputElement>) => {
    const val = !checked ? 0 : Number(value);
    if (name === ServiceName.Antifreeze && !checked) {
      setAntifreezeValue((prev) => prev = antiFreeze[0].price);
    }
    if (name === ServiceName.Hydrolotok && !checked) {
      setHydrolotokCount((prevValue) => prevValue = 0);
    }
    if (name === ServiceName.Hydrolotok && checked) {
      setHydrolotokCount((prevValue) => prevValue = 1);
    }
    setServices((prev) => ({ ...prev, [name]: val }));
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAntifreezeValue((prev) => prev = Number(event.target.value));
    setServices((prev) => ({ ...prev, [ServiceName.Antifreeze]: Number(event.target.value) }));
  };

  const handleChangeField = ({target}: ChangeEvent<HTMLInputElement>) => {
    setHydrolotokCount((prevValue) => prevValue = Number(target.value));
  };

  const antifreezeId = antiFreeze.findIndex((el) => el.price === antifreezeValue);

  useEffect(() => {
    const servicesStore: ServiceStore[] = [{
      id: 983267,
      name: ServiceName.Compensator,
      price: services[ServiceName.Compensator],
      total: services[ServiceName.Compensator],
      qty: 1
    },
    {
      id: 992281,
      name: ServiceName.Hydrolotok,
      price: services[ServiceName.Hydrolotok],
      total: services[ServiceName.Hydrolotok] * hydrolotokCount,
      qty: hydrolotokCount
    },
    {
      id: 960999,
      name: ServiceName.Launcher,
      price: hoses >= 30 && concreteBeton === BetonTypes.Pump ? 4738 : 0,
      total: hoses >= 30 && concreteBeton === BetonTypes.Pump ? 4738 : 0,
      qty: hoses >= 30 && concreteBeton === BetonTypes.Pump ? 1 : 0
    },
    {
      id: antiFreeze[antifreezeId].id,
      name: ServiceName.Antifreeze,
      price: services[ServiceName.Antifreeze],
      total: services[ServiceName.Antifreeze] * amountBeton,
      qty: amountBeton
    },
    {
      id: 1000000,
      name: ServiceName.Stone,
      price: services[ServiceName.Stone],
      total: services[ServiceName.Stone] * amountBeton,
      qty: amountBeton
    },
    {
      id: 1000001,
      name: ServiceName.Fibro,
      price: services[ServiceName.Fibro],
      total: services[ServiceName.Fibro] * amountBeton,
      qty: amountBeton
    },
    {
      id: 1000002,
      name: ServiceName.MasterTop,
      price: services[ServiceName.MasterTop],
      total: services[ServiceName.MasterTop] * amountBeton, 
      qty: amountBeton
    },
    {
      id: 1000003,
      name: ServiceName.SchemaG,
      price: services[ServiceName.SchemaG],
      total: services[ServiceName.SchemaG] * amountBeton,
      qty: amountBeton
    }
  ] 
    dispatch(getBetonServices(servicesStore));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountBeton, dispatch, hydrolotokCount, services, antifreezeValue, hoses, antifreezeId]);

  return (
    <div className="shop-beton-switch-list">
      <FormGroup className="shop-beton-switch-field">
        {additivesList.map(({ id, name, label, value }) => <FormControlLabel disabled={!amountBeton} key={id} control={
          <Switch sx={switchStyle} size='small' 
          name={name} 
          value={value} 
          onChange={handleChange} 
          checked={!!services[name]} />
        } label={label} />)}

        {
          services.antifreeze ?
            <FormControl className="shop-beton-switch-select" disabled={!amountBeton}>
              <InputLabel id="demo-simple-select-label">Антифриз</InputLabel>
              <Select 
                size="small"
                labelId="shop-beton-switch-select-antifreeze"
                id="demo-simple-select"
                defaultValue={"154"}
                label="Антифриз"
                onChange={handleChangeSelect}
              >
                {antiFreeze.map((element) => <MenuItem key={element.id} value={element.price}>{element.label}</MenuItem>)}
              </Select>
            </FormControl> :
            null
        }
      </FormGroup>

      <FormGroup className="shop-beton-switch-field">
        {accessoriesList.map(({ id, name, label, value }) => <FormControlLabel  disabled={!amountBeton} key={id} control={
          <Switch sx={switchStyle} size='small' 
          name={name} 
          value={value} 
          onChange={handleChange} 
          checked={!!services[name]} />} 
          label={label} />)}

        {
          services.hydrolotok ?
          <TextField
          size="small"
          className="shop-beton-switch-hydro-count"
          id="outlined-number"
          label="количество"
          type="number"
          disabled={!amountBeton}
          value={hydrolotokCount ? hydrolotokCount : ""}
          onChange={handleChangeField}
        /> :
        null
        }
      </FormGroup>

      <FormGroup className="shop-beton-switch-field">
        {otherList.map(({ id, name, label, value }) => <FormControlLabel  disabled={!amountBeton} key={id} control={
          <Switch sx={switchStyle} size='small' 
          name={name} 
          value={value} 
          onChange={handleChange} 
          checked={!!services[name]} />} 
          label={label} />)}
      </FormGroup>
    </div>
  )
}