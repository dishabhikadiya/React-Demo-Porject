import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <Breadcrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="wishlist-card-img">
                  <img src="images/tab.jpg" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h6 className="title">
                    Beoplay A1 Protable Blutooth Speacker With Microphone
                  </h6>
                  <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="wishlist-card-img">
                  <img src="images/tab.jpg" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h6 className="title">
                    Beoplay A1 Protable Blutooth Speacker With Microphone
                  </h6>
                  <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card shadow position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross "
                />
                <div className="wishlist-card-img">
                  <img src="images/tab.jpg" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h6 className="title">
                    Beoplay A1 Protable Blutooth Speacker With Microphone
                  </h6>
                  <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
