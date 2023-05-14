import { DEFAULT_FILING_HOURS, filingHours } from "../consts/mocks";

export const priceFormat = (price: number) => {
  return price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
}

export type RemaindType = {
  mixers: { [key: string]: number },
  remaind: number;
}

export const getMixersCount = (total: number, mixerList: number[]): RemaindType => {
  const mixers: { [key: string]: number } = mixerList.reduce((obj, el) => ({ ...obj, [el.toString()]: 0 }), {});
  let remaind = 0;
  let count = 0;
  const sortMixerList = mixerList.slice().sort((a, b) => b - a);

  while (total && remaind < total) {
    let value = Math.max(...sortMixerList);
    mixers[value] = mixers[value] += 1;
    remaind += value;
    count = total - remaind;

    if (count < value && sortMixerList.length > 1) {
      sortMixerList.shift();
    }
  }

  return {
    mixers: mixers,
    remaind: remaind
  };
};

export const getFillingHours = (distance: number) => {
  if (distance >= 10) {
    const value = (distance / 10).toString();
    const hours = filingHours[parseInt(value, 10) * 10] + DEFAULT_FILING_HOURS;
    return hours;
  }

  return DEFAULT_FILING_HOURS;
}

export const switchStyle = {
  borderRadius: 2,
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fc3"
  },
}