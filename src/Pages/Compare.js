import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Color from "../Componets/Color";
import Meta from "../Componets/Meta";

const Compare = () => {
  return (
    <>
      <Meta title={"Compare products"} />
      <Breadcrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-prouct-details">
                  <h5 className="title">
                    Honor T17.0 1GB RAM 8 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havells</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availability:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color:</h6>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h6>Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-prouct-details">
                  <h5 className="title">
                    Honor T17.0 1GB RAM 8 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havells</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availability:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color:</h6>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h6>Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-prouct-details">
                  <h5 className="title">
                    Honor T17.0 1GB RAM 8 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havells</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availability:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color:</h6>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h6>Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
