import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100">
      <div className="container-fluid w-100">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <form className={`d-flex search-form`}>
              <div className="input-group">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search Products..."
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <img
                    src="/Icons/search-interface-symbol.png"
                    alt="Search Icon"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto">
            <a className="navbar-brand" href="#">
              <img
                src="https://alistos.in/image/catalog/ali-stos-logo.png"
                title="Alistos"
                alt="Alistos"
                className="img-responsive"
              />
            </a>
          </div>

          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item">
              <a href="#">
                <img src="/Icons/user.png" alt="User Icon" width={20} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <img
                  src="/Icons/shopping-bag.png"
                  alt="Shopping Bag"
                  width={25}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
