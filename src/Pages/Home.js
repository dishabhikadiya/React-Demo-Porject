import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
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
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-1">
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
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 Or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 Or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 Or $41.62/mo.</p>
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
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-1">From All Orders Over $100 </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-1">Save Up to 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-1">Shop With an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-1">Get Fectory direct price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
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

      <section className="home-wrapper-3 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cametas</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cametas</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cametas</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cametas</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
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
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                      <a href="#">
                  <img src="images/wish.svg" alt="wishlist" />

                        </a>                  
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              <div className="special-product-card">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="watch" />
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
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>
                      </div> 
                    </div>
                    <div className="product-count mt-3">
                        <p>products: 5</p>
                       <div className="progress">
                       <div className="progress-bar" role="progressbar" 
                       style={{width:"25%"}} aria-valuenow="25" 
                       aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                      </div>
                      <a href="#" className="button my-3">add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="special-product-card">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="watch" />
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
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>
                      </div> 
                    </div>
                    <div className="product-count mt-3">
                        <p>products: 5</p>
                       <div className="progress">
                       <div className="progress-bar" role="progressbar" 
                       style={{width:"25%"}} aria-valuenow="25" 
                       aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                      </div>
                      <a href="#" className="button my-3">add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="special-product-card">
                <div className="d-flex justify-content-between ">
                  <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="watch" />
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
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>
                      </div> 
                    </div>
                    <div className="product-count mt-3">
                        <p>products: 5</p>
                       <div className="progress">
                       <div className="progress-bar" role="progressbar" 
                       style={{width:"25%"}} aria-valuenow="25" 
                       aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                      </div>
                      <a href="#" className="button my-3">add to cart</a>
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
            <div className="col-2">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
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
            <div className="col-3">
              <div className="blog-card">
                <div className="card-image">
                  <img
                    src="images/blog-1.jpg"
                    className="img-fluid"
                    alt="blog"
                  />
                </div>
                <div className="blog-content">
                  <p className="date">11 JUNE, 2023</p>
                  <h5 className="title">
                    A Beautiful sunday morning renaissance
                  </h5>
                  <p className="desc">
                    You're Only As Your last collection, Which is An Enormous
                    Pressure. I think Thare Is Something About...
                  </p>
                  <a href="#" className="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-image">
                  <img
                    src="images/blog-1.jpg"
                    className="img-fluid"
                    alt="blog"
                  />
                </div>
                <div className="blog-content">
                  <p className="date">11 JUNE, 2023</p>
                  <h5 className="title">
                    A Beautiful sunday morning renaissance
                  </h5>
                  <p className="desc">
                    You're Only As Your last collection, Which is An Enormous
                    Pressure. I think Thare Is Something About...
                  </p>
                  <a href="#" className="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-image">
                  <img
                    src="images/blog-1.jpg"
                    className="img-fluid"
                    alt="blog"
                  />
                </div>
                <div className="blog-content">
                  <p className="date">11 JUNE, 2023</p>
                  <h5 className="title">
                    A Beautiful sunday morning renaissance
                  </h5>
                  <p className="desc">
                    You're Only As Your last collection, Which is An Enormous
                    Pressure. I think Thare Is Something About...
                  </p>
                  <a href="#" className="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-image">
                  <img
                    src="images/blog-1.jpg"
                    className="img-fluid"
                    alt="blog"
                  />
                </div>
                <div className="blog-content">
                  <p className="date">11 JUNE, 2023</p>
                  <h5 className="title">
                    A Beautiful sunday morning renaissance
                  </h5>
                  <p className="desc">
                    You're Only As Your last collection, Which is An Enormous
                    Pressure. I think Thare Is Something About...
                  </p>
                  <a href="#" className="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
