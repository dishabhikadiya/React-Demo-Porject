import React from "react";
import { NavLink } from "react-router-dom";

const Blogcard = () => {
  return (
    <>
      <div className="blog-card zoomimg">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">11 JUNE, 2023</p>
          <h5 className="title">A Beautiful sunday morning renaissance</h5>
          <p className="desc">
            You're Only As Your last collection, Which is An Enormous Pressure.
            I think Thare Is Something About...
          </p>
          <NavLink to="/Singleblogs" className="button">
            Read More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
