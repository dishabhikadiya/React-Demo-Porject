import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Breadcrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.9331072023997!2d72.8358653942838!3d21.22181065161278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ee861286f63%3A0x57f141ce265e3867!2sRJD%20Business%20Hub!5e0!3m2!1sen!2sin!4v1676477172890!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 shadow w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper shadow justify-content-between d-flex">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control shadow"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control shadow"
                        placeholder="Email*"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control shadow"
                        placeholder="Phone number "
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control shadow"
                        placeholder="Comments"
                        cols="30"
                        rows="4"
                      />
                    </div>
                    <div>
                      <button className="button shadow border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div className="ps-0">
                    <ul>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          406 RJD Businesshub,Kasa Nagar,Katargam,surat,395004
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 8866656210">+91 8866656210</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a className="mailto:rashmitabhikadiya777@gmail.com">
                          rashmitabhikadiya777@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 9 AM - 7 PM</p>
                      </li>
                    </ul>
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

export default Contact;
