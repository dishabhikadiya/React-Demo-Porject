import React from "react";
import { Link, NavLink } from "react-router-dom";

const Breadcumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcumb mb-0 py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <NavLink to="/" className="text-dark">
                Home&nbsp;
              </NavLink>
              /{title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
