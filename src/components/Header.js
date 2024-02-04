function Header() {
  return (
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
  );
}

export default Header;
