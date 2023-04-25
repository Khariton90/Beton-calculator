import { BetonTotal } from './../../types/types';
import { getAmountPriceList } from './../action';
import { createReducer } from "@reduxjs/toolkit";
import { addBeton, addMixer, changeAmountBeton, changeConcreteBeton, changeRemaind, changeShopMixer, getDelivery, removeMixer } from "../action";
import { TruckItem, Beton, Delivery, BetonTotalPrice } from "../../types/types";

type DataReducer = {
  amountBeton: number;
  remaind: number;
  delivery: Delivery | null,
  beton: Beton | null,
  mixerList: Pick<TruckItem, 'id' | 'weight' | 'qty'>[],
  progress: number,
  concreteBeton: string,
  shopMixers: number[],
  amountPriceList: BetonTotalPrice;
}

const PROGRESS_VALUE = 25;

const initialState: DataReducer = {
  amountBeton: 0,
  remaind: 0,
  delivery: {
    from: null,
    to: null,
    distance: null,
    price: null,
    fromCoords: []
  },
  beton: null,
  mixerList: [],
  progress: 0,
  concreteBeton: "-1",
  shopMixers: [9],
  amountPriceList: {
    [BetonTotal.Beton]: 0,
    [BetonTotal.Features]: 0,
    [BetonTotal.Delivery]: 0,
  }
}

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeAmountBeton, (state, action) => {
    state.amountBeton = action.payload;
  }).addCase(changeRemaind, (state, action) => {
    state.remaind = action.payload;
  }).addCase(getDelivery, (state, action) => {
    state.delivery = action.payload;
    if (action.payload.distance) {
      state.progress = PROGRESS_VALUE * 3;
    }
  }).addCase(addBeton, (state, action) => {
    state.beton = action.payload;
    if (state.beton === null && state.remaind > 0) {
      state.progress = 0;
    } else {
      state.progress = PROGRESS_VALUE;
    }
  }).addCase(addMixer, (state, action) => {
    const item = state.mixerList.find((value) => value.id === action.payload.id);
    if (state.remaind <= 0) {
      state.progress = PROGRESS_VALUE * 2;
    } else {
      state.progress = PROGRESS_VALUE;
    }

    if (!item) {
      state.mixerList.push(action.payload);
      return;
    }
    item.qty = action.payload.qty;
  }).addCase(removeMixer, (state, action) => {
    state.mixerList = state.mixerList.filter((item) => item.id !== action.payload.id);
    if (state.progress > PROGRESS_VALUE) {
      state.progress = PROGRESS_VALUE;
    }
  }).addCase(changeShopMixer, (state, action) => {
    state.shopMixers = action.payload.split(',').map((el: string) => parseInt(el, 10))
  }).addCase(changeConcreteBeton, (state, action) => {
    state.concreteBeton = action.payload;
  }).addCase(getAmountPriceList, (state, action) => {
    state.amountPriceList = action.payload;
  })
});

export { dataReducer };