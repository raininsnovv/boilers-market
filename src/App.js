function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="cartItem d-flex align-center mt-20">
            <img
              className="mr-15"
              width={110}
              height={110}
              src="/img/boilers/1.jpeg"
              alt="Boilers"
            />
            <div className="mr-20 mb-15">
              <p className="mb-5">Котел напольный Лемакс UNO 10 сталь</p>
              <b>13 500 руб.</b>
            </div>
            <img
              className="removeBtn mr-30"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center mt-20">
            <img
              className="mr-15"
              width={110}
              height={110}
              src="/img/boilers/2.jpeg"
              alt="Boilers"
            />
            <div className="mr-20 mb-15">
              <p className="mb-5">Котел напольный Лемакс UNO 10 сталь</p>
              <b>13 500 руб.</b>
            </div>
            <img
              className="removeBtn mr-30"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
      </div>
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
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все котлы</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
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
