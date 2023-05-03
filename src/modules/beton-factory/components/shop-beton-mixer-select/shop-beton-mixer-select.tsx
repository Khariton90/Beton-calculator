import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { memo, useEffect, useLayoutEffect, useState } from 'react';
import { changeShopMixer } from '../../store/action';
import { useAppDispatch } from '../../../../hooks/hooks';

const mixers = [
  "9",
  "10",
  "11",
  "12",
];

 function ShopBetonMixerSelect() {
  const [mixerList, setPersonName] = useState<string[]>(['9']);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof mixerList>) => {
    const {target: { value }} = event;
    setPersonName((prev) => typeof value === 'string' ? prev = value.split(',').slice(0,4) : prev = value.slice(0,4));
  };

  useLayoutEffect(() => {
    if (!mixerList.length) {
      setPersonName((prev) => (prev = ['9']));
    }
  }, [mixerList.length]);

  useEffect(() => {
    dispatch(changeShopMixer(mixerList.join(',')));
  },[dispatch, mixerList]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Автобетоносмеситель (АБС)</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={mixerList}
          onChange={handleChange}
          input={<OutlinedInput label="Автобетоносмеситель (АБС)" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {mixers.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={mixerList.indexOf(value.toString()) > -1} />
              <ListItemText primary={value + ' м3'} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default memo(ShopBetonMixerSelect);