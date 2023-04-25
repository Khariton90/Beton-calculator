import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../constants';
import { BetonFactoryPage } from '../pages/beton-factory-page/beton-factory-page';
import { LoginPage } from '../pages/login-page/login-page';
import { PrivateRoute } from '../components/private-route';
import { useAppSelector } from '../hooks/hooks';
import { MainPage } from '../pages/main-page/main-page';

export function App() {
  const autorizationStatus = useAppSelector(({rootReducer}) => rootReducer.authorizationStatus);
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoute.Main} element={<PrivateRoute autorizationStatus={autorizationStatus}>
            <MainPage />
          </PrivateRoute>}/>
          <Route path={AppRoute.BetonFactory} element={<PrivateRoute autorizationStatus={autorizationStatus}>
            <BetonFactoryPage />
          </PrivateRoute>}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
