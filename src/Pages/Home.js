import React from "react";
import Marquee from "react-fast-marquee";
import ReactStars from "react-rating-stars-component";
import Meta from "../Componets/Meta";
import Blogcard from "./Blogcard";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Meta title={"i - Store"} />

      <section className="home-wrapper-1 py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 Or $41.62/mo.</p>
                  <a className="button text-white">BUY NOW</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex  flex-wrap justify-content-between align-items-center">
                <div className="small-banner  position-relative p-1">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Leptops Max</h5>
                    <p>
                      From $1699.00 Or <br />
                      $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW APPIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599 Or
                      <br /> $49.91/mo. for 12 mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid  rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      shop the latest band
                      <br />
                      style and colors
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid  rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback &<br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center  gap-15">
                  <img
                    src="images/service.png"
                    alt="service"
                    className="header-cc"
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-1">From All Orders Over $100 </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-02.png"
                    alt="service"
                    className="header-cc "
                  />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-1">Save Up to 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-03.png"
                    alt="service"
                    className="header-cc"
                  />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-1">Shop With an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-04.png"
                    alt="service"
                    className="header-cc"
                  />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-1">Get Fectory direct price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-05.png"
                    alt="service"
                    className="header-cc"
                  />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-1">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-4">
        <div className="container-xl txt">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Computers & Leptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cametas & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="images/watch-1 1.png" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Protable Speakers</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured collection</h3>
            </div>
            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon  position-absolute">
                  <a href="#">
                    <img src="images/wish.svg" alt="wishlist" />
                  </a>
                </div>
                <div className="product-image">
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24_884x.jpg?v=1655098000"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-01_260x.jpg?v=1655098000	"
                    className="img-fluid"
                    alt="product"
                  />
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_260x.jpg?v=1655097254"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_00_260x.jpg?v=1655097265"
                    className="img-fluid"
                    alt="product"
                  />
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="/images/tab.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="/images/tab1.jpg"
                    className="img-fluid"
                    alt="product"
                  />
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_260x.jpg?v=1655096377"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                    className="img-fluid"
                    alt="product"
                  />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="femous-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="femous-card  zoom position-relative d-flex special-product-card flex-column h-100 justify-content-between bgc">
                <div className="femous-content text-white">
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inch 5k retina display</p>
                </div>
                <img
                  className="femous-img zoomimg"
                  src="/images/f1.jpg"
                  alt="watch"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="femous-card zoom position-relative d-flex special-product-card flex-column h-100 justify-content-between">
                <div className="femous-content">
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inch 5k retina display</p>
                </div>
                <img
                  className="femous-img"
                  src="/images/Frame 2.jpg"
                  alt="watch"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="femous-card zoom position-relative d-flex special-product-card flex-column h-100 justify-content-between">
                <div className="femous-content">
                  <h5>SMARTPHONES</h5>
                  <h6>Smartphone 13pro.</h6>
                  <p>Now in Green. From $41.62/mo. for 24 mo.footnote*</p>
                </div>
                <img
                  className="femous-img"
                  src="/images/Frame 4.jpg"
                  alt="watch"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="femous-card zoom position-relative d-flex special-product-card flex-column h-100 justify-content-between">
                <div className="femous-content">
                  <h5>HOME SPEAKER</h5>
                  <h6>Room-Filling Sound</h6>
                  <p>From $699 or $116.58/mo. For 12 mo.</p>
                </div>
                <img
                  className="femous-img"
                  src="/images/Frame 3.jpg"
                  alt="watch"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special products</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <div className="special-product-card ">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">Havells</h5>
                    <h6 className="title">
                      Sumsung Galaxy Note10+ Mobile Phone; Sim...
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">$100</span>&nbsp;&nbsp;
                      <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b>5</b>&nbsp;days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="product-count mt-3">
                      <p>products: 5</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a href="#" className="button my-3">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="special-product-card ">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">Havells</h5>
                    <h6 className="title">
                      Sumsung Galaxy Note10+ Mobile Phone; Sim...
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">$100</span>&nbsp;&nbsp;
                      <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b>5</b>&nbsp;days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="product-count mt-3">
                      <p>products: 5</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a href="#" className="button my-3">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="special-product-card ">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">Havells</h5>
                    <h6 className="title">
                      Sumsung Galaxy Note10+ Mobile Phone; Sim...
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">$100</span>&nbsp;&nbsp;
                      <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b>5</b>&nbsp;days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="product-count mt-3">
                      <p>products: 5</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a href="#" className="button my-3">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="special-product-card ">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">Havells</h5>
                    <h6 className="title">
                      Sumsung Galaxy Note10+ Mobile Phone; Sim...
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">$100</span>&nbsp;&nbsp;
                      <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b>5</b>&nbsp;days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="product-count mt-3">
                      <p>products: 5</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a href="#" className="button my-3">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="col-3">
              <NavLink to=":id" className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="images/wat-01.jpg"
                    className="img-fluid"
                    alt="product"
                  />
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

            <div className="col-3">
              <NavLink to=":id" className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="images/wat-01.jpg"
                    className="img-fluid"
                    alt="product"
                  />
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

            <div className="col-3">
              <NavLink to=":id" className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="images/wat-01.jpg"
                    className="img-fluid"
                    alt="product"
                  />
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

            <div className="col-3">
              <NavLink to=":id" className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="wishlist" />
                </div>
                <div className="product-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="images/wat-01.jpg"
                    className="img-fluid"
                    alt="product"
                  />
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
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper  bg-white p-3 card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Lateset Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
