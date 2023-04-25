import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { BetonItemType, BetonTypes } from "../../consts/mocks";
import { useState } from "react";

type SelectBetonPriceProps = {
  title: string;
  name: string;
  list: Array<BetonItemType>;
  onChangeName: (key: string, value: string) => void;
}

export function SelectBetonPrice({ title, list, name, onChangeName }: SelectBetonPriceProps): JSX.Element {
  const [value, setValue] = useState<BetonTypes | string>(list[0].value);

  const handleChange = (event: SelectChangeEvent) => {
      setValue(event.target.value);
      onChangeName(event.target.name, event.target.value);
  }
  return (
    <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            name={name}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value || list[0].value}
            label={title}
            onChange={handleChange}
          >
           { list.map(({id, value}) => <MenuItem key={id} value={value}>{value}</MenuItem>) } 
          </Select>
        </FormControl>
  )
}