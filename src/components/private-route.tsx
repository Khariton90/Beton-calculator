import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../constants/index';

type PrivateRouteProps = {
  children: JSX.Element;
  autorizationStatus: AuthorizationStatus
}

export function PrivateRoute({children, autorizationStatus}: PrivateRouteProps): JSX.Element {

  if (autorizationStatus === AuthorizationStatus.Auth) {
    return children;
  }

  return <Navigate to={AppRoute.Login} />;
}