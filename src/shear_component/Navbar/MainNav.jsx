import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import NestedRoute from "./NestedRoute/NestedRoute";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar/MobileSideBar";
import { routeLink } from "../../routes/routes";

export default function MainNav() {
  // navbar social media route
  const socialRoute = [
    {
      bgColor: "hover:bg-[#3b5998]",
      borderColor: "hover:border-[#3b5998] ",
      icon: <FaFacebookF />,
    },
    {
      bgColor: "hover:bg-[#00aff0]",
      borderColor: "hover:border-[#00aff0] ",
      icon: <FaTwitter />,
    },

    {
      bgColor: "hover:bg-[#bd081c]",
      borderColor: "hover:border-[#bd081c] ",
      icon: <FaPinterest />,
    },
    {
      bgColor: "hover:bg-[#0077b5]",
      borderColor: "hover:border-[#0077b5] ",
      icon: <FaLinkedinIn />,
    },
    {
      bgColor: "hover:bg-[#00405d]",
      borderColor: "hover:border-[#00405d] ",
      icon: <FaTelegramPlane />,
    },
  ];

  const logoImage =
    "https://charulata.green/wp-content/uploads/2022/06/logocharulata-1.png";

  const [menuState, setMenuState] = useState(false);

  return (
    <nav className=" bg-white">
      {/* Mobile Sidebar menu */}
      <div className="md:hidden">
        <MobileSideBar menuState={menuState} setMenuState={setMenuState} />
      </div>

      <div className="container mx-auto flex flex-row justify-between items-center py-4">
        {/* Humbugger menu */}

        <button
          onClick={() => setMenuState(true)}
          className="text-[1.7rem] text-[#3e3e3e] hover:text-[#838383] block md:hidden"
        >
          <BsList />
        </button>

        {/* charulata Logo  */}
        <div className="w-[10rem] md:w-[16rem] h-auto">
          <img src={logoImage} alt="Charulata-logo" />
        </div>

        {/* Routes link */}
        <div className="hidden md:block">
          <NestedRoute routeLink={routeLink} />
        </div>

        {/* social media */}
        <div>
          <ul className="hidden md:flex flex-row">
            {socialRoute?.map((route, index) => (
              <li
                key={route.path + index}
                className={`mr-3 w-7 h-7 border-[2px] border-gray-300 rounded-full flex justify-center items-center ${route.bgColor} ${route.borderColor} hover:text-white duration-150 ease-in-out cursor-pointer`}
              >
                {route.icon}
              </li>
            ))}
          </ul>
        </div>

        {/* cart option */}
        <div className="w-8 h-8 text-[1.3rem] relative cursor-pointer block md:hidden">
          <FiShoppingCart />
          <div className="w-4 h-4 box-border bg-primary-green rounded-full text-white text-xs absolute top-[-6px] right-0 flex justify-center items-center">
            0
          </div>
        </div>
      </div>
    </nav>
  );
}
