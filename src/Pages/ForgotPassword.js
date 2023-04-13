import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <Breadcrumb title="Forgot Password" />
      <div className="login-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card shadow">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">
                  We Will Send you an email to resat your password
                </p>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control shadow"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column  align-items-center gap-15">
                      <button className="button  border-0" type="submit">
                        Submit
                      </button>
                      <NavLink to="/login">Cencal</NavLink>
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

export default ForgotPassword;
