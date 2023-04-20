import { useState } from "react";
import MenuComponent from "./MenuComponent";
import MobileSideNav from "./MobileSideNav";
import { IoCloseSharp } from "react-icons/io5";

export default function MobileSideBarMenu({ setMenuState }) {
  const [menuSwitch, setMenuSwitch] = useState(false);

  return (
    <div className="p-2">
      <div>
        {/* nav close button */}
        <div className="my-2 flex justify-end">
          <button
            onClick={() => setMenuState(false)}
            className="text-[1.7rem] bg-[#dfdfdf] text-[#3e3e3e] hover:text-[#838383] duration-150 ease-in-out w-8 h-8 p-1 rounded-md flex justify-center items-center mr-5"
          >
            <IoCloseSharp />
          </button>
        </div>

        {/* search  */}
        <form>
          <div className="flex mx-3 relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for products"
              required
            />
            <button
              type="submit"
              className="text-black absolute right-0 bottom-2.5  focus:outline-none font-medium text-sm px-4 py-2 "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>

        <div className="flex mt-3">
          <div
            onClick={() => setMenuSwitch(false)}
            className={`flex-grow py-4 text-center uppercase font-medium cursor-pointer ${!menuSwitch ? "bg-[#dfdfdf]" : "bg-[#f5f5f5]"
              } `}
          >
            Categories
          </div>
          <div
            onClick={() => setMenuSwitch(true)}
            className={`flex-grow py-4 text-center uppercase font-medium cursor-pointer ${menuSwitch ? "bg-[#dfdfdf]" : "bg-[#f5f5f5]"
              } `}
          >
            menu
          </div>
        </div>
      </div>

      {/* menu render */}
      {menuSwitch ? (
        <MenuComponent />
      ) : (
        <MobileSideNav setMenuState={setMenuState} />
      )}
    </div>
  );
}
