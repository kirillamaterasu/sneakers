import './index.scss';
import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
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
        <h1>All sneakers</h1>

        <div className="card">
          <img width={133} height={112} src="/img/1.jpg" alt="" />
          <p></p>
          <div>
            <span>Price:
              <b>220$</b>
            </span>
          </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
