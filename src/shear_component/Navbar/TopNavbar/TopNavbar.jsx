import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <header className="hidden md:flex text-[.8rem]">
      {/* header content startrd */}
      <div className="container mx-auto flex justify-between h-6 -mb-1 border-b-2 border-gray-200">
        {/* left button and other link */}
        <div className="flex">
          <ul className="items-stretch hidden  md:flex ">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center  px-2 py-3 border-r-2 border-gray-200 button-hover"
              >
                NEWSLETTER
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center  px-2 py-3 border-r-2 border-gray-200 button-hover"
              >
                CONTACT US
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center  px-2 py-3 border-r-2 border-gray-200 button-hover"
              >
                FQAS
              </a>
            </li>
          </ul>
          <span className="px-2 py-3 flex items-center ">
            যেকোন প্রয়োজনে কল করুনঃ ০১৭৯৯-৮৮০৮৮৬
          </span>
        </div>
        {/* right side login & wishlist part */}
        <div className="md:flex ">
          <ul className="items-stretch hidden  md:flex ">
            {/* wishlist content*/}
            <li className="flex border-gray-200">
              <button
                type="button"
                className="flex items-center  px-2 py-3  border-r-2 border-gray-200 uppercase button-hover"
              >
                <div className="relative ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3 h-3 fill-current"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span className="absolute rounded-full text-[5px] px-[3px] bottom-1 left-2 wish-list-count">
                    0
                  </span>
                </div>
                <span className="ps-2">WISHLIST</span>
              </button>
            </li>

            {/* login registration part */}
            <li className="flex ">
              <button className="flex items-center px-2 py-3 border-gray-200 uppercase  button-hover">
                login/register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
