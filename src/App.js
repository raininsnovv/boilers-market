function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/icon-boiler.png" alt="" />
          <div>
            <h3 className="text-uppercase">Boilers Market</h3>
            <p className="opacity-6">У нас всегда тепло</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 d-flex align-center">
            <img src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30 d-flex align-center">
            <img src="/img/like.svg" alt="Like" />
            <span>Избранное</span>
          </li>
          <li className="d-flex align-center  ">
            <img src="/img/user.svg" alt="Profile" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div>
          <h1 className="mb-40">Все котлы</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {" "}
          <div className="card">
            <img height={180} width={180} src="/img/boilers/1.jpeg" alt="" />
            <h5>Котел напольный Лемакс UNO 10 сталь</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={180} width={180} src="/img/boilers/2.jpeg" alt="" />
            <h5>Котел напольный Лемакс UNO 10 сталь</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={180} width={180} src="/img/boilers/3.jpeg" alt="" />
            <h5>Котел напольный Лемакс UNO 10 сталь</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={180} width={180} src="/img/boilers/4.jpg" alt="" />
            <h5>Котел напольный Лемакс UNO 10 сталь</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
