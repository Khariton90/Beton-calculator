import { createAction } from "@reduxjs/toolkit";

export const changeAmountBeton = createAction('data/changeAmountBeton', (value) => ({
  payload: value
}));

export const changeRemaind = createAction('data/changeRemaind', (value) => ({
  payload: value
}));

export const getDelivery = createAction('data/getDelivery', (value) => ({
  payload: value
}));

export const addBeton = createAction('data/addBeton', (value) => ({
  payload: value
}));

export const addMixer = createAction('data/addMixer', (value) => ({
  payload: value
}));

export const removeMixer = createAction('data/removeMixer', (value) => ({
  payload: value
}));

export const changeConcreteBeton = createAction('data/changeConcreteBeton', (value) => ({
  payload: value
}));

export const changeShopMixer = createAction('data/changeShopMixer', (value) => ({
  payload: value
}));

export const getAmountPriceList = createAction('data/getAmountPriceList', (value) => ({
  payload: value
}));

export const getBetonFactoryEntity = createAction('data/getBetonFactoryEntity', (value) => ({
  payload: value
}));