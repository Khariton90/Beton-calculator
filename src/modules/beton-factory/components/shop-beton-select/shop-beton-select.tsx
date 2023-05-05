import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, FormHelperText } from '@mui/material';
import { useEffect, useState } from 'react';
import { BetonItemType, BetonTypes, MixerItemType } from '../../consts/mocks';
import { useAppSelector } from '../../../../hooks/hooks';
import './shop-beton-select.scss';

type ShopBetonSelectProps = {
  id: number;
  title: string;
  options: BetonItemType[] | MixerItemType[];
  onChangeType: (id: number, value: string) => void;
}

const PUMP_TITLE = 'Бетон без бетононасоса';
const WITHOUT_PUMP_TITLE = 'Бетон под бетононасос';

const formatSelectValue = (value: string) => {
  if (value === BetonTypes.WithoutPump) {
    return PUMP_TITLE;
  }

  if (value === BetonTypes.Pump) {
    return WITHOUT_PUMP_TITLE;
  }

  if (value.includes('P')) {
    return value.replace('P', 'П')
  }

  return value;
};

export function ShopBetonSelect({ title, options, id, onChangeType }: ShopBetonSelectProps): JSX.Element {
  const [value, setValue] = useState('');
  const concreteBeton = useAppSelector(({ dataReducer }) => dataReducer.concreteBeton);

  const handleChange = (event: SelectChangeEvent) => {
    setValue((prev) => {
      onChangeType(id, event.target.value);
      return prev = event.target.value as string
    });
  };

  useEffect(() => {
    if (title !== 'Вид') {
      setValue((prev) => (prev = ''));
    }
  }, [concreteBeton, title])

  return (
    <div className="shop-beton-select">
      <FormControl fullWidth disabled={concreteBeton === BetonTypes.UnknownPump && id !== 0}>
        <InputLabel>{title}</InputLabel>
        <Select
          labelId={`${id}-select`}
          id={`${id}-select`}
          value={value}
          label={title}
          onChange={handleChange}
        >
          {options.map((item) => <MenuItem
            key={item.id}
            value={item.value.includes('.') ? item.value.replace('.', '') : item.value}>{formatSelectValue(item.value)}
          </MenuItem>
          )}
        </Select>
        {concreteBeton === BetonTypes.UnknownPump ? <FormHelperText>Выберите вид бетона</FormHelperText> : null}
      </FormControl>
    </div>
  )
}