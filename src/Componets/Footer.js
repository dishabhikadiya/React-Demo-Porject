import React from "react";
import { NavLink } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img
                  src="http://localhost:3000/images/newsletter.png"
                  alt="newsletter"
                  className="rte"
                />
                <h5 className="mb-0 text-white ctr">Sign Up For Newsletter</h5>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Your Email Address"
                  aria-label=" Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <a href="#" className="input-group-text " id="basic-addon2">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <h6 className="text-white mb-4 ">Contact Us</h6>
              <div className="text-white">
                <address className="fs-10">
                  406 RJD Businesshub,Kasa Nagar,Katargam,surat,
                  <br />
                  395004
                </address>
                <a href="tel:+91 8866656210" className="mt-3 d-block mb-3"></a>
                +91 8866656210
                <a
                  href="mailto:rashmitabhikadiya777@gmail.com"
                  className="mt-4 d-block mb-2"
                ></a>
                rashmitabhikadiya777@gmail.com
                <div className="social_icons align-items-center gap-30 d-flex mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <h6 className="text-white mb-4">Information</h6>
              <div className="footer-links d-flex flex-column">
                <NavLink
                  to="Privacypolicy"
                  className="text-white py-2 mb-1 font2"
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  to="Refundpolicy"
                  className="text-white py-2 mb-1 font2"
                >
                  Refundpolicy
                </NavLink>
                <NavLink
                  to="Shippingpolicy"
                  className="text-white py-2 mb-1 font2"
                >
                  Shipping Policy
                </NavLink>
                <NavLink
                  to="Turmandconditon"
                  className="text-white py-2 mb-1 font2"
                >
                  Terms Of Service
                </NavLink>
                <NavLink to="blogs" className="text-white py-2 mb-1 font2">
                  Blog
                </NavLink>
              </div>
            </div>

            <div className="col">
              <h6 className="text-white mb-4">Account</h6>
              <div className="footer-links d-flex flex-column">
                <span className="text-white py-2 mb-1 font2">Search</span>
                <NavLink to="Aboutus" className="text-white py-2 mb-1 font2">
                  About Us
                </NavLink>
                <span className="text-white py-2 mb-1 font2">Faq</span>
                <NavLink to="contact" className="text-white py-2 mb-1 font2">
                  Contact
                </NavLink>
                <span className="text-white py-2 mb-1 font2">Size Chart</span>
              </div>
            </div>

            <div className="col">
              <h6 className="text-white mb-4">Quick Links</h6>
              <div className="footer-links d-flex flex-column">
                <span className="text-white py-2 mb-1 font2">Accessories</span>
                <span className="text-white py-2 mb-1 font2">Leptops</span>
                <span className="text-white py-2 mb-1 font2">Headphones</span>
                <span className="text-white py-2 mb-1 font2">Tablets</span>
                <span className="text-white py-2 mb-1 font2">
                  Smart Watches
                </span>
              </div>
            </div>

            <div className="col">
              <h6 className="text-white mb-4">Our App</h6>
              <div className="footer-links d-flex flex-column">
                <span className="text-white py-2 mb-1 font-ab">
                  Download our App and get extra 15% <br />
                  Discount on your first order..!
                </span>
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-01.png?v=1654931267" />
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-02.png?v=1654931286" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()},powered by developer's corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
