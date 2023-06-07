import './cutt-card-module.scss';
import logo from '../../../../assets/petlogo.png';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useId, useState } from 'react';
import { Rnd } from 'react-rnd';
import { CuttingBox } from '../cutt-box/cutt-box';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    width: 100,
    height: 100
  },
]


type CuttBox = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const x = 386;
const y = 186;

type BoxProps = {
  cuttBox: CuttBox
}

function incrementId() {
  let id = 0;
  return function () {
    id++
    return id.toString();
  }
}

const id = incrementId();

function CuttCardModule(): JSX.Element {
  const [cuttList, setCuttList] = useState<CuttBox[]>([]);

  const [w, setW] = useState(0);
  const [h, setH] = useState(0);

  const addBox = () => {
    setCuttList((prev) =>
      [...prev, {
        id: id(), 
        width: w, 
        height: h, 
        x: 0,
        y: 0
      }])
  }

  return (
    <div className="cutt-card-module">

      <div className="list-materials">
        <input type="number" onChange={(e) => setH(+e.target.value)} />
        <input type="number" onChange={(e) => setW(+e.target.value)} />
        <ul>
          <li>Плита OSB <button onClick={addBox}>add</button></li>
          <li>Плита OSB</li>
          <li>Плита OSB</li>
          <li>Плита OSB</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="paper">
        <div className="paper__header">
          <div className="paper__logo">
            <img src={logo} alt="logo" />
          </div>
          <a className="paper__link" href="/">ЗА-088_1</a>
        </div>

        <div className="paper__title">
          <h1>Карта нестандартного распила</h1>
        </div>

        <div className="paper__subtitle">
          <span>к Заказу № </span>
          <input type="text" />
          <span>от 29.05.2023</span>
        </div>

        <div className="table-top">
          <h4 className="table-top__title">Внимание! Заполняется только при самовывозе!</h4>
          <table>
            <thead>
              <tr>
                <th>Наименование товара</th>
                <th>Количество</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="main-cutt-card">
          <div className="main-cutt-card__title">Схема нарезки</div>
          <div className="main-cutt-card__wrapper">
            <div className="cutt-card">
              <div className="cutt-card__width-title">1500 мм</div>
              <div className="cutt-card__height-title">300 мм</div>
              <div className="cutt-card-box">

                {
                  cuttList.map(({ x, y, width, height, id }) => <CuttingBox key={id} cuttBox={{
                    id,
                    x,
                    y,
                    width,
                    height
                  }} />)
                }

              </div>
            </div>
          </div>
        </div>

        <div className="paper-description">

          <h3 className="paper-description__title">Правила распила:</h3>
          <ol className="paper-description-list">
            <li>Компания осуществляет 1 рез бесплатно, для удобства транспортировки,следующих товаров:
              Доска, шпунт, брусок; Брус; Арматура; Уголок и проф. труба; Гипсокартон (ГКЛ) и
              Гипсоволокнистый лист (ГВЛ)
            </li>
            <li>Точность распила/нарезки материалов составляет ± 1см;</li>
            <li>При распиле листа горяче катанного нарезка производится только газом, край листа будет оплавлен (допуск составляет +/- 2 см);</li>
            <li>Распил подоконников, поликарбоната и других листовых материалов производится только
              поперек целого листа;
            </li>
            <li>Фигурные распилы не осуществляются;</li>
            <li>Оплачивается вся единица товара, подлежащего распилу;</li>
            <li>Распиленный товар обмену и возврату не подлежит.</li>
          </ol>
        </div>

        <div className="paper-footer">
          <ul>
            <li>
              <label htmlFor="">
                Карту составил:
                <input type="text" />
              </label>
            </li>
            <li>
              С условиями распила ознакомлен:
            </li>
            <li>
              Распил выполнил (фамилия):
            </li>
          </ul>
        </div>
      </div>
      <div className="right-menu">
        <div className="options-menu">
          <ul className="options-menu-list">
            <li>Добавить рез</li>
            <li>Удалить рез</li>
            <li>Сбросить</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default CuttCardModule;