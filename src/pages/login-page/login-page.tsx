import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FormEvent, useLayoutEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeAuthStatus } from '../../store/action';
import './login-page.scss';
import { getToken, saveToken } from '../../services/token';

type LoginForm = {
  login: string;
  password: string;
}

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important',
  },
});


export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(({rootReducer}) => rootReducer.authorizationStatus);

  const token = getToken();

  const [form, setForm] = useState<LoginForm>({
    login: '123456',
    password: '123456'
  });

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    saveToken(form.login);

    if (form.login && form.password === '123456') {
      dispatch(changeAuthStatus(AuthorizationStatus.Auth))
    }
  }

  useLayoutEffect(() => {
    if (token && authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(changeAuthStatus(AuthorizationStatus.Auth))
    }
  }, [authorizationStatus, dispatch, token])


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>
  }

  if (token && authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="page login-page">
      <div className="login-conatainer">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
      <ValidationTextField
        aria-invalid={form.login.length < 6}
        label="Логин"
        type="text"
        required
        variant="outlined"
        defaultValue={form.login}
        id="validation-login-input"
        name="login"
        onBlur={(evt) => setForm((prev) => ({...prev, [evt.target.name]: evt.target.value}))}
      />
      <ValidationTextField
      aria-invalid={form.login.length < 6}
        type="password"
        label="Пароль"
        required
        variant="outlined"
        defaultValue={form.password}
        id="validation-password-input"
        name="password"
        onBlur={(evt) => setForm((prev) => ({...prev, [evt.target.name]: evt.target.value}))}
      />
      <Button type="submit" variant="contained" size='large'>Войти</Button>
      </form>
      </div>

    </div>
  )
}