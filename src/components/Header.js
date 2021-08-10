function Header() {
    
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
  </header>;
}
export default Header;
