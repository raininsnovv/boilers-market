const Drawer = () => {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="removeBtn mr-30 cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          {" "}
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
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 698 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1077 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
