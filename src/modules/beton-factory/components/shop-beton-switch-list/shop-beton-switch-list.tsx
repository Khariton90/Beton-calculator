import { FormControlLabel, Switch } from '@mui/material';
import cn from 'classnames';
import './shop-beton-switch-list.scss';

type ServiceSwitch = {
  id: number;
  name: string;
  label: string;
  value: number;
  hintText: string;
}

const serviceSwitchList: ServiceSwitch[] = [
  {
    id: 1,
    name: "stone",
    label: "Щебень 5-10 мм",
    value: 300,
    hintText: "При использовании щебня фракции 5-10 цена за каждый 1 м3 увеличивается на 300 р."
  },
  {
    id: 2,
    name: "schemaG",
    label: "«Схема Г»",
    value: 100,
    hintText: "При заказе бетонной смеси по «Схеме Г» цена за каждый 1м3 увеличивается на 100р."
  },
  {
    id: 3,
    name: "fibro",
    label: "Фиброволокно",
    value: 350,
    hintText: "В случае дозировки фибры на производстве, цена за 1м3  увеличивается на 70р. При перекачивании бетона с фиброй стоимость перекачки бетонной смеси увеличивается на 350 р/м3"
  },
]

type ShopBetonSwitchListProps = {
  amountBeton: number;
}

export function ShopBetonSwitchList({ amountBeton }: ShopBetonSwitchListProps): JSX.Element {
  return (
    <div className="shop-beton-switch-list">
      {
        serviceSwitchList.map(({ id, name, label, value, hintText }) => <div className="switch-item" key={id}>
          <div className={cn("hint", {"active": amountBeton})}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM13.395 9.882L11.895 16.9395C11.79 17.4495 11.9385 17.739 12.351 17.739C12.642 17.739 13.0815 17.634 13.38 17.37L13.248 17.994C12.8175 18.513 11.868 18.891 11.0505 18.891C9.996 18.891 9.5475 18.258 9.8385 16.9125L10.9455 11.7105C11.0415 11.271 10.9545 11.112 10.515 11.0055L9.8385 10.884L9.9615 10.3125L13.395 9.882ZM12 8.25C11.6022 8.25 11.2206 8.09196 10.9393 7.81066C10.658 7.52936 10.5 7.14782 10.5 6.75C10.5 6.35218 10.658 5.97064 10.9393 5.68934C11.2206 5.40804 11.6022 5.25 12 5.25C12.3978 5.25 12.7794 5.40804 13.0607 5.68934C13.342 5.97064 13.5 6.35218 13.5 6.75C13.5 7.14782 13.342 7.52936 13.0607 7.81066C12.7794 8.09196 12.3978 8.25 12 8.25Z" fill={!amountBeton ? "#ccc" : "#1976d2"} />
            </svg>

            <div className="hint-text">{hintText}</div>
          </div>
          <FormControlLabel
            value="End"
            control={<Switch disabled={!amountBeton} value={value} color="primary" name={name} />}
            label={label}
            labelPlacement="end"
          />
        </div>)
      }
    </div>
  )
}