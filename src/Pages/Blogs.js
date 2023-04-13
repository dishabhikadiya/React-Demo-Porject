import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";
import Blogcard from "./Blogcard";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <Breadcrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card  mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Leptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <Blogcard />
                </div>
                <div className="col-6 mb-3">
                  <div className="blog-card  zoomimg">
                    <div className="card-image">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-4_405x.jpg?v=1654928936"
                        className="img-fluid w-100"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-content">
                      <p className="date">11 JUNE, 2023</p>
                      <h5 className="title">
                        A Beautiful sunday morning renaissance
                      </h5>
                      <p className="desc">
                        You're Only As Your last collection, Which is An
                        Enormous Pressure. I think Thare Is Something About...
                      </p>
                      <NavLink to="/Singleblogs" className="button">
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="blog-card  zoomimg">
                    <div className="card-image">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-3_405x.jpg?v=1654928829"
                        className="img-fluid w-100"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-content">
                      <p className="date">11 JUNE, 2023</p>
                      <h5 className="title">
                        A Beautiful sunday morning renaissance
                      </h5>
                      <p className="desc">
                        You're Only As Your last collection, Which is An
                        Enormous Pressure. I think Thare Is Something About...
                      </p>
                      <NavLink to="/Singleblogs" className="button">
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="blog-card  zoomimg">
                    <div className="card-image">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-2_405x.jpg?v=1654928783"
                        className="img-fluid w-100"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-content">
                      <p className="date">11 JUNE, 2023</p>
                      <h5 className="title">
                        A Beautiful sunday morning renaissance
                      </h5>
                      <p className="desc">
                        You're Only As Your last collection, Which is An
                        Enormous Pressure. I think Thare Is Something About...
                      </p>
                      <NavLink to="/Singleblogs" className="button">
                        Read More
                      </NavLink>
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

export default Blogs;
