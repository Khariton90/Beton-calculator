import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../modules/beton-factory';
import { rootReducer } from './root-reducer/root-reducer';

export const store = configureStore({
  reducer: {
    rootReducer,
    dataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch