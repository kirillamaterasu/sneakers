function Card () {
    return(
        <div className="card">
  <div className="favorite">
    <img src="img/empty-heart.svg" alt="empty heart" />
  </div>
  <img width={133} height={112} src="/img/1.jpg" alt="" />
  <h5>Nike Blazer Mid Suede</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
      <span>
        Price:
        <b>220$</b>
      </span>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="plus" />
    </button>
  </div>
</div>
    );
}

export default Card