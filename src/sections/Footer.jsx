import React, { useState, useEffect } from "react";
import { navItems, socials } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Footer = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FooterLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
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
      <div className="flex max-lg:flex-col-reverse ">
        <div className="py-28 pr-28 flex-50 relative max-lg:pt-28 max-lg:pb-11 max-lg:px-0 max-md:pt-14 s4 pl-16 max-xl:pl-10 max-lg:pl-6 max-sm:pl-4">
          {/* Content for the first column */}
          {/* Logo and Navigation */}
          <div
            className="absolute right-[-50%] flex items-center justify-center w-full h-full border-2 border-[#0c1838] rounded-full sm:bg-none sm:border-none sm:rounded-none"
            style={{ top: "-30%", transform: "translateY(1%)" }}
          >
            <div className="rounded-half absolute z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
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
                  className="h5 text-p5 mb-[46px] max-md:mb-[30px]"
                >
                  <FooterLink title={item.label} />
                </li>
              ))}
            </ul>
          </nav>
          <div className="small-compact flex w-full max-md:flex-col">
            <p className="opacity-70">Copyright, JS Mastery</p>
            <ul className="small-compact flex items-center justify-center sm:ml-auto">
              <li className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy <span>Policy</span>
              </li>
              <li className="text-p5 transition-all duration-500 hover:text-p1">
                Terms <span>of services</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-28 flex-50 pl-28 pr-16 max-xl:pr-10 max-lg:pr-6 max-sm:pr-4 bg-opacity-90 g7 z-5">
          {/* Content for the second column */}

          {/* Subscribe Section */}
          <div className="flex flex-col space-y-4 max-md:hidden">
            <h3 className="h3 max-md:h5 text-p4">Subscribe</h3>
            <p className="body-1 mb-10 max-w-md">
              Sign up to our newsletter for feature updates and our undying
              love.
            </p>
            <form className="relative flex after:absolute after:top-[calc(50%-11px)] after:right-0 after:w-2 after:h-[22px] after:transform after:scale-x-[-1] before:absolute before:inset-[5px] before:border before:border-s1 before:rounded-[20px] before:pointer-events-none">
              <input
                type="email"
                placeholder="youremail@domain.com"
                required
                className="w-full h-[84px] pl-8 pr-12 bg-[rgba(8,13,39,0.5)] border-2 border-[rgba(25,89,173,0.25)] rounded-[24px] font-poppins text-[16px] font-medium text-p5 leading-[24px] tracking-[0.03em] transition-colors duration-[0.4s]  hover:border-s4 focus:border-s4 ring-s4 placeholder:text-s3"
              />
              <button
                type="submit"
                className="text-white transition-colors absolute right-[22px] top-[21px] hover:fill-p1 h-[42px] w-[42px]"
              >
                <img src={"/images/arrow-right.svg"} alt="submit" />
              </button>
              <Marker className="absolute right-0 top-[21px] rotate-180" />
            </form>
          </div>
          {/*{Social Icons}*/}
          <ul className="flex md:justify-end gap-3 max-md:mt-10 mt-[120px]">
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
