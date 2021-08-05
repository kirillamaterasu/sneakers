import './index.scss';
import 'macro-css';

function App() {
return (
<div className="wrapper clear">
  <div style={{display: 'none'  }} className="overlay">
    <div className="drawer p-10">
      <h2 className="mb-30 d-flex justify-between  p-20">Cart
        <img className="removeBtn mr-20 cu-p" src="/img/btn-remove.svg" alt="remove" />
      </h2>
      <div className="items">
      <div className="cartItem d-flex align-center mb-20">

        <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg ml-20"></div>
        <div className="mr-20 flex">
          <p className="mb-5">Nike Air Max 270</p>
          <b>270$</b>
        </div>
        <img className="removeBtn mr-20" src="/img/btn-remove.svg" alt="remove" />
      </div>

      <div className="cartItem d-flex align-center mb-20">

        <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg ml-20"></div>
        <div className="mr-20 flex">
          <p className="mb-5">Nike Air Max 270</p>
          <b>270$</b>
        </div>
        <img className="removeBtn mr-20" src="/img/btn-remove.svg" alt="remove" />
      </div>

      
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Final price</span>
              <div></div>
              <b>340$</b>
            </li>
            <li>
              <span>tax 5%:</span>
              <div></div>
              <b>17$</b>
            </li>
          </ul>
          <button className="greenButton">Purchase
            <img src="/img/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>


  <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img width={18} height={18} src="/img/logo.svg" alt="" />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p>Bang for your buck</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30">
        <img width={18} height={18} src="/img/cart.svg" alt="" />
        <span>21$.</span>
      </li>
      <li>
        <img width={18} height={18} src="/img/person.svg" alt="" />
      </li>
    </ul>
  </header>
  <div className="content p-40">
    <div class="d-flex align-center justify-between mb-40">
      <h1>All sneakers</h1>
      <div className="search d-flex">
        <img src="/img/search.svg" alt="search" />
        <input placeholder="search" />
      </div>
    </div>

    <div class="d-flex">
      <div className="card">
        <div className="favorite"><img src="img/empty-heart.svg" alt="empty heart" /></div>
        <img width={133} height={112} src="/img/1.jpg" alt="" />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:
              <b>220$</b>
            </span>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/2.jpg" alt="" />
        <h5>Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:
              <b>220$</b>
            </span>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/3.jpg" alt="" />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:
              <b>170$</b>
            </span>
          </div>

          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/4.jpg" alt="" />
        <h5>Puma X Aka Boku Future Rider</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:
              <b>270$</b>
            </span>
          </div>

          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

    </div>
  </div>


</div>
);
}

export default App;