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

  // const max = Math.max(...mixerList);
  const min = Math.min(...mixerList);

  while (total && remaind < total) {
    const [maxValue, middleValue] = mixerList.slice().sort((a,b) => b-a);
   if(maxValue > remaind && remaind) {
      remaind += maxValue;
      mixers[maxValue] = mixers[maxValue] + 1;
    } else if (middleValue > remaind && remaind) {
      remaind += maxValue;
      mixers[middleValue] = mixers[middleValue] + 1; 
    } else {
      remaind += min;
      mixers[min] = mixers[min] + 1;
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