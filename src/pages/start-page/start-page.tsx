import './start-page.scss';

export function StartPage(): JSX.Element {
  return (
    <div className="start-page page">

      <div className="text-container">
        <img src={'image'} alt="" />
        <br />
        <h1>Микросервисы</h1>
        <h3>Сервис для расчета материалов и услуг</h3>
        <div className="buttons">
          <button>Регистрация</button> <button>Войти</button>
        </div>
      </div>
    </div>
  )
}