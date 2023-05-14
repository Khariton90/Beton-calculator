import ShopBetonForm from "../shop-beton-form/shop-beton-form";
import "./beton-factory-module.scss";

export function BetonFactoryModule(): JSX.Element {
  return (
    <div className="beton-factory-module">
      <ShopBetonForm />
      <p className="notification"> Уважаемые Пользователи, для продолжения оформления Заказа на аренду спецтехники,
        Вам необходимо уточнить у клиента, будут ли на объекте заливки предусмотрены подъездные пути, условия для
        разгрузки, а также место для замывки автобетононасоса.</p>

      <footer className="footer">
        <p>Евгений Харитонов, e.kharitonov@petrovich.ru</p>
      </footer>
    </div>
  )
}