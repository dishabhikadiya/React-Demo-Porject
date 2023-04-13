import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <div className="login-wrapper py-3 home-wrapper-2">
       <div className="container-xl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card shadow">
              <h3 className="text-center mb-3">Login</h3>
              <form className="d-flex flex-column gap-15">
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control shadow"
                  />
                </div>
                <div>
                  <NavLink to="/Forgot-Password">Forgot Password?</NavLink>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button  border-0 " type="submit">
                      Login
                    </button>
                    <NavLink to="/Signup" className="button signup">
                      SingUp
                    </NavLink>
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

export default Login;
