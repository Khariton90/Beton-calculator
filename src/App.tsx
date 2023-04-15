import './App.scss';
import { BetonCard } from './components/beton-card/beton-card';
import { BetonList } from './consts/mocks';
import { useState } from 'react';
import { TruckList } from './components/truck-list/truck-list';
import { FeaturesList } from './components/features-list/features-list';
import { useId } from 'react';
import { useAppSelector } from './hooks';
import { BetonTable } from './components/beton-table/beton-table';
import MapComponent from './components/map-component/map-component';
import { Progress } from './components/progress/progress';

function App() {
  const [card, setCard] = useState('');
  const qtyBeton = useAppSelector(({ dataReducer }) => dataReducer.amountBeton);
  const id = useId;

  const onChangeCard = (name: string) => {
    setCard((prevName) => prevName = name);
  }

  return (
    <div className="App">
      <Progress />
      <div className="beton-list-wrapper">
      <h2 className="section-title">Тип бетона</h2>
      <div className="beton-card-list">
        {BetonList.map((item) => (
          <BetonCard key={id()} {...item} onChangeCard={onChangeCard} card={card}/>
        ))}
      </div>
      </div>
      <TruckList qtyBeton={qtyBeton}/>
      <FeaturesList />
      <MapComponent />
      <BetonTable />
          <footer className="footer">
              <p>Калькулятор в разработке</p>
          </footer>
    </div>
  );
}

export default App;
