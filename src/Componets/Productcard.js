import React from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink, useLocation } from "react-router-dom";

const Productcard = (props) => {
  const { grid } = props;
  let locetion = useLocation();
  console.log("grid", grid, locetion.pathname);
  return (
    <>
      <div
        className={`${
          locetion.pathname == "/product" ? `gr-${grid}` : "col-3 "
        }`}
      >
        <NavLink to=":id" className="product-card shadow position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="/images/ab.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for studants
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <img src="images/prodcompare.svg" alt="addcart" />
              <img src="images/view.svg" alt="addcart" />
              <img src="images/add-cart.svg" alt="addcart" />
            </div>
          </div>
        </NavLink>
      </div>
      <div
        className={`${
          locetion.pathname == "/product" ? `gr-${grid}` : "col-3 "
        }`}
      >
        <NavLink to=":id" className="product-card shadow position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/ab.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for studants
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <img src="images/prodcompare.svg" alt="addcart" />
              <img src="images/view.svg" alt="addcart" />
              <img src="images/add-cart.svg" alt="addcart" />
            </div>
          </div>
        </NavLink>
      </div>

      <div
        className={`${
          locetion.pathname == "/product" ? `gr-${grid}` : "col-3 "
        }`}
      >
        <NavLink to=":id" className="product-card shadow position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/ab.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for studants
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <img src="images/prodcompare.svg" alt="addcart" />
              <img src="images/view.svg" alt="addcart" />
              <img src="images/add-cart.svg" alt="addcart" />
            </div>
          </div>
        </NavLink>
      </div>

      <div
        className={`${
          locetion.pathname == "/product" ? `gr-${grid}` : "col-3 "
        }`}
      >
        <NavLink to=":id" className="product-card shadow position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/ab.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for studants
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <img src="images/prodcompare.svg" alt="addcart" />
              <img src="images/view.svg" alt="addcart" />
              <img src="images/add-cart.svg" alt="addcart" />
            </div>
          </div>
        </NavLink>
      </div>

      <div
        className={`${
          locetion.pathname == "/product" ? `gr-${grid}` : "col-3 "
        }`}
      >
        <NavLink to=":id" className="product-card shadow position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/ab.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for studants
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <img src="images/prodcompare.svg" alt="addcart" />
              <img src="images/view.svg" alt="addcart" />
              <img src="images/add-cart.svg" alt="addcart" />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Productcard;
