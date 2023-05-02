import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { changeShopMixer } from '../../store/action';
import { useAppDispatch } from '../../../../hooks/hooks';

const names = [
  "9",
  "10",
  "11",
  "12",
];

export default function ShopBetonMixerSelect() {
  const [personName, setPersonName] = useState<string[]>(['9']);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {target: { value }} = event;
    setPersonName((prev) => typeof value === 'string' ? prev = value.split(',').slice(0,3) : prev = value.slice(0,3));
  };

  useEffect(() => {
    dispatch(changeShopMixer(personName.join(',')));
  },[dispatch, personName])

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Автобетоносмеситель (АБС)</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Автобетоносмеситель (АБС)" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name.toString()) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}