import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Breadcrumb title="Sign Up" />

      <div className="login-wrapper py-3 home-wrapper-2">
      <div className="container-xl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card shadow">
              <h3 className="text-center mb-3">Create Account</h3>
              <form className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="txt"
                    name="name"
                    placeholder="Name"
                    className="form-control shadow"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control shadow"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control shadow"
                  />
                </div>

                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control shadow"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button  border-0 " type="submit">
                      SingUp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
