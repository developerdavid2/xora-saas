import React from "react";
import Spinner from "./components/Spinner.jsx";

const LoadingScreen = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[999] flex bg-[#080d27] transition-opacity duration-400 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-[324px] mx-auto items-center justify-center flex pointer-events-none">
          <div className="items-center justify-center flex absolute top-1/2 left-1/2 w-full h-full max-md:h-[320px] bg-[rgba(25,89,173,0.5)] blur-[200px] transform -translate-x-1/2 -translate-y-1/2 md:w-[160px] md:h-[160px] md:blur-[100px]"></div>
          <img
            src="/images/xora.svg"
            alt="Loading"
            className="w-full max-md:w-4/5"
          />
        </div>
      </div>
      <div className="absolute right-12 bottom-12 w-8 h-8">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingScreen;
