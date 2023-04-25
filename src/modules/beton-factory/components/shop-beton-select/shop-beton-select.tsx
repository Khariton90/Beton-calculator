import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, FormHelperText } from '@mui/material';
import { useEffect, useState } from 'react';
import { BetonItemType, MixerItemType } from '../../consts/mocks';
import './shop-beton-select.scss';
import { useAppSelector } from '../../../../hooks/hooks';

type ShopBetonSelectProps = {
  id: number;
  title: string;
  options: BetonItemType[] | MixerItemType[];
  onChangeType: (id: number, value: string) => void;
}

const PUMP_TITLE = 'Бетон без бетононасоса';
const WITHOUT_PUMP_TITLE = 'Бетон под бетононасос';

const formatSelectValue = (value: string) => {
  if (value === "0") {
    return PUMP_TITLE;
  }

  if (value === "1") {
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
      <FormControl fullWidth disabled={concreteBeton === "-1" && id !== 0}>
        <InputLabel id={id + title}>{title}</InputLabel>
        <Select
          labelId={id + title}
          id={id + title}
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
        {concreteBeton === "-1" && id !== 0 ? <FormHelperText>Выберите вид бетона</FormHelperText> : null}
      </FormControl>
    </div>
  )
}