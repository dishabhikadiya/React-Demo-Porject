import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white p-3 mb-0">
                Free Shipping Over $100 Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end p-3 text-white mb-0">
                Hotline:&nbsp;
                <a className="text-white" href="tel:+91 8866656210">
                  +91 8866656210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-2">
              <a href="http://localhost:3000/">
                <img src="http://localhost:3000/images/logo.svg" className="logo" alt="istore" />
              </a>
            </div>
            <div className="col-5">
              <div className="input-group abc">
                <input
                  type="text"
                  className="form-control shadow-none "
                  placeholder="Search Product Hare..."
                  aria-label="Search Product Hare..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex">
                <div className="header-cc ">
                  <NavLink to="/Compare" className="text-white ">
                    <img src="http://localhost:3000/images/compare.svg" alt="compare" />
                  </NavLink>
                </div>
                <div className="header-cc">
                  <NavLink to="/Wishlist" className="text-white ">
                    <img src="http://localhost:3000/images/wishlist.svg" alt="wishlist" />
                  </NavLink>
                </div>
                <div className="header-cc">
                  <NavLink to="/login" className="text-white">
                    <img src="http://localhost:3000/images/user.svg" alt="user" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="cart" className="header-cc text-white">
                    <img src="http://localhost:3000/images/cart.svg" alt="cart" />
                  </NavLink>
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0 text-white">$ 500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-itaems-center">
                <div className="gap">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle  bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item text-white " href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 marg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">our store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
