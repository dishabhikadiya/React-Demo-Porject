import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:&nbsp;
                <a className="text-white" href="tel:+91 8866656210">
                   +91 8866656210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <a className="text-white abc1">Dev corner</a>
            </div>
            <div className="col-5">
              <div className="input-group abc">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Hare..."
                  aria-label="Search Product Hare..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch/></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <p className="d-flex align-items-center text-white mb-0 gap-15">
                    <img src="images/compare.svg" alt="compare" />
                    compare <br /> Product
                  </p>
                </div>
                <div>
                  <p className="d-flex align-items-center  text-white mb-0 gap-15">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    Favourrite <br /> wishlist
                  </p>
                </div>
                <div>
                  <p className="d-flex align-items-center  text-white mb-0 gap-15">
                    <img src="images/user.svg" alt="user" />
                    Log in <br /> My Account
                  </p>
                </div>
                <div>
                  <p className="d-flex align-items-center text-white">
                    <img src="images/cart.svg" alt="cart" />
                  </p>
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
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
                      <span className="me-5 d-inline-block">Shop Categories</span>
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
                    <a href="#">Home</a>
                    <a href="#">Our Store</a>
                    <a href="#">Blogs</a>
                    <a href="#">contact</a>
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
