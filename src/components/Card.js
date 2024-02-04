function Card() {
  return (
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
  );
}

export default Card;
