import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";
import { BsArrowLeft } from "react-icons/bs";

const Singleblogs = () => {
  return (
    <>
      <Meta title={"dynamic Blog Name"} />
      <Breadcrumb title="dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="images/blog-1.jpg" className="img-fluid my-4 " />
                <p>
                  Sed Ut Perspiciatis Unde Omnis Renaissance Sed ut perspiciatis
                  unde omnis renaissance To enjoy alternately the sight of their
                  distress. He really shouted with pleasure; and, shaking
                  Monsieur Du Bois strenuously by the hand, wished him joy of
                  having touched English ground; and then he held a candle to
                  Madame Mokil, that he might have a more complete view of her
                  disaster, declaring repeatedly, that he had never been better
                  pleased in his life.
                </p>
                <NavLink to="/blogs">
                  <BsArrowLeft />
                  &nbsp;Go Back to Blogs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblogs;
