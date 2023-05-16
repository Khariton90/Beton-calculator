import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import { ChangeEvent } from 'react';
import { Client } from '../../types/types';
import './shop-beton-user-form.scss';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+7(#00) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

type ShopBetonUserFormProps = {
  client: Client;
  onChangeUserForm: (form: Client) => void;
}

export default function ShopBetonUserForm({onChangeUserForm, client}: ShopBetonUserFormProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeUserForm({
      ...client,
      [event.target.name]: event.target.value,
    });

  };

  return (
    <div  className="shop-beton-user-form">
      <h3>Контакты:</h3>
      <Box className="user-form-box">
      <Input
          
          autoComplete="off"
          value={client.telephone}
          onChange={handleChange}
          placeholder="+7(911) 000-00-00"
          name="telephone"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
      <FormControl variant="standard">
      <Input
        autoComplete="off"
        name="client"
        placeholder="ФИО"
        type="text"
        value={client.client}
        onChange={handleChange}
      />
      </FormControl>
    </Box>
    <p>Телефон: {client.telephone}</p>
    <p>ФИО: {client.client}</p>
    </div>
  );
}
