import React, { useState, useEffect } from "react";
import { navItems, socials } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Footer = () => {
  const FooterLink = ({ title }) => (
    <LinkScroll
      to={title}
      offset={-250}
      spy
      smooth
      activeClass="nav-active"
      className="hover:text-p1 transition-colors cursor-pointer"
    >
      {title}
    </LinkScroll>
  );
  return (
    <footer className="max-lg:p-0 overflow-hidden relative footer-before">
      <div className="flex max-lg:flex-col-reverse">
        <div className="py-28 pr-28 flex-50 relative max-lg:pt-28 max-lg:pb-11 max-md:pt-14 s4 pl-16 max-xl:pl-10 max-lg:px-8 max-sm:px-4">
          {/* Content for the first column */}
          {/* Logo and Navigation */}
          <div
            className="absolute right-[-50%] flex items-center justify-center w-full h-full  rounded-full"
            style={{ top: "-30%", transform: "translateY(1%)" }}
          >
            <div className="max-sm:hidden rounded-half absolute z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>
            <div className="absolute z-[-1] opacity-10 sm:w-[486px] sm:h-[486px]">
              <img src="/images/xora-large.svg" alt="logo" />
            </div>
          </div>

          <nav className="text-sm mb-[130px] max-lg:mb-[106px]">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="h5 text-p5 mb-[46px] max-md:mb-[30px] capitalize"
                >
                  <FooterLink title={item.label} />
                </li>
              ))}
            </ul>
          </nav>
          <div className="small-compact flex w-full max-sm:flex-col">
            <p className="opacity-70 max-sm:text-center max-sm:pb-4">
              Copyright, Jacobs David &copy;2024
            </p>
            <ul className="small-compact flex items-center justify-center ml-auto max-sm:ml-0">
              <li className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy <span>Policy</span>
              </li>
              <li className="text-p5 transition-all duration-500 hover:text-p1">
                Terms <span>of services</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-md:hidden py-28 flex-50 pl-28 pr-16 max-xl:pr-10 max-lg:pr-6 max-sm:pr-4 bg-opacity-90 g7 z-5">
          {/* Content for the second column */}

          {/* Subscribe Section */}
          <div className="flex flex-col space-y-4 ">
            <h3 className="h3 max-md:h5 text-p4">Subscribe</h3>
            <p className="body-1 mb-10 max-w-md">
              Sign up to our newsletter for feature updates and our undying
              love.
            </p>
            <form className="relative flex after:absolute after:top-[calc(50%-11px)] after:right-0 after:w-2 after:h-[22px] after:transform after:scale-x-[-1] before:absolute before:border before:border-s1 before:rounded-[20px] before:pointer-events-none">
              <input
                type="email"
                placeholder="youremail@domain.com"
                required
                className="w-full h-[84px] pl-8 pr-12 bg-[rgba(8,13,39,0.5)] border-2 border-[rgba(25,89,173,0.25)] rounded-[24px] font-poppins text-[16px] font-medium text-p5 leading-[24px] tracking-[0.03em] transition-colors duration-[0.4s] hover:border-s4 focus:outline-none focus:ring-1 transition-focus  focus:ring-s4 ring-s4 placeholder:text-s3"
              />
              <button
                type="submit"
                className="text-white transition-colors absolute right-[22px] top-[21px] h-[42px] w-[42px] hover:text-p1"
              >
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    opacity="0.05"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7202 1.99805H11.7202C9.59519 1.99805 7.64217 2.73453 6.1025 3.96617L15.3914 13.2551C17.1153 11.8444 19.3189 10.998 21.7202 10.998C24.1215 10.998 26.3251 11.8444 28.0489 13.2551L37.3379 3.96613C35.7982 2.73451 33.8452 1.99805 31.7202 1.99805ZM26.6258 14.6782C25.2712 13.6251 23.5689 12.998 21.7202 12.998C19.8715 12.998 18.1692 13.6251 16.8145 14.6782L21.7202 19.5838L26.6258 14.6782ZM13.9772 14.6693L4.68829 5.3804C3.45668 6.92006 2.72021 8.87305 2.72021 10.998V30.998C2.72021 33.1231 3.45668 35.076 4.6883 36.6157L13.9773 27.3268C12.5666 25.6029 11.7202 23.3993 11.7202 20.998C11.7202 18.5968 12.5666 16.3932 13.9772 14.6693ZM15.4003 25.9037C14.3473 24.549 13.7202 22.8468 13.7202 20.998C13.7202 19.1494 14.3473 17.4471 15.4003 16.0924L20.306 20.9981L15.4003 25.9037ZM15.3915 28.741L6.10251 38.0299C7.64219 39.2616 9.59519 39.998 11.7202 39.998H31.7202C33.8452 39.998 35.7982 39.2616 37.3379 38.03L28.0489 28.741C26.325 30.1517 24.1215 30.998 21.7202 30.998C19.3189 30.998 17.1153 30.1517 15.3915 28.741ZM26.6258 27.3179C25.2711 28.371 23.5689 28.998 21.7202 28.998C19.8715 28.998 18.1692 28.371 16.8146 27.3179L21.7202 22.4123L26.6258 27.3179ZM28.04 25.9037L23.1344 20.9981L28.0401 16.0924C29.0931 17.4471 29.7202 19.1493 29.7202 20.998C29.7202 22.8468 29.0931 24.549 28.04 25.9037ZM29.4631 27.3268C30.8738 25.6029 31.7202 23.3993 31.7202 20.998C31.7202 18.5968 30.8738 16.3932 29.4631 14.6693L38.7521 5.38034C39.9837 6.92002 40.7202 8.87303 40.7202 10.998V30.998C40.7202 33.1231 39.9837 35.0761 38.7521 36.6158L29.4631 27.3268ZM11.7202 -0.00195312C5.64508 -0.00195312 0.720215 4.92292 0.720215 10.998V30.998C0.720215 37.0732 5.64508 41.998 11.7202 41.998H31.7202C37.7953 41.998 42.7202 37.0732 42.7202 30.998V10.998C42.7202 4.92292 37.7953 -0.00195312 31.7202 -0.00195312H11.7202Z"
                    fill="currentColor"
                  />
                  <path
                    fill="currentColor"
                    d="M16.837 5.755l.123.092 6.063 5.055.038.036-.1-.092.071.063.099.103.074.092.067.099.08.146.038.086c.071.174.11.365.11.565s-.039.39-.11.564l-.092.188-.06.095-.086.113-.079.088-.087.082-6.026 5.022a1.5 1.5 0 0 1-2.033-2.201l.113-.104 2.815-2.348H10a1.5 1.5 0 0 1-.144-2.993L10 10.5h7.857L15.04 8.152a1.5 1.5 0 0 1 1.669-2.475l.129.078zM4 10.5a1.5 1.5 0 0 1 .144 2.993L4 13.5H2a1.5 1.5 0 0 1-.144-2.993L2 10.5h2z"
                    transform="translate(10, 8)"
                  />
                </svg>
              </button>

              <figure className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-180">
                <Marker />
              </figure>
            </form>
          </div>
          {/*{Social Icons}*/}
          <ul className="flex md:justify-end gap-3 max-lg:mt-10 lg:mt-[140px] max-md:hidden">
            {socials.map(({ id, url, icon, title }, index) => (
              <li
                key={id}
                className={clsx(index === socials.length ? "mr-6" : "mr-0")}
              >
                <a href={url} className="social-icon ">
                  {/* Preserve custom size and object-contain for SVGs */}
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/2 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
