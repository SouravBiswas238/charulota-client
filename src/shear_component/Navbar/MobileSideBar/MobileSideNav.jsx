import { Link, useLocation } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { navRoute } from "../../../routes/routes";

export default function MobileSideNav({ setMenuState }) {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const routerLocationPathname = decodeURI(location.pathname);

  return (
    <div className="h-[calc(100vh-178px)] overflow-y-scroll">
      {navRoute.map((link) => {
        const linkIdentity = link.path;
        return (
          <div key={link.path}>
            <div className="border-b-[1px] text-sm font-semibold border-[#c9c9c9] flex justify-between">
              <Link
                onClick={() => setMenuState(false)}
                to={"/product-category" + link.path}
                className={`py-4 px-3 w-full ${
                  routerLocationPathname.includes(link.path)
                    ? "text-primary-green"
                    : "hover:text-primary-green"
                }`}
              >
                <p>{link.name}</p>
              </Link>
              {link.children && (
                <button
                  onClick={() =>
                    isOpen ? setIsOpen(false) : setIsOpen(linkIdentity)
                  }
                  className="py-4 px-4 border-x-2 border-[#e1e1e1]"
                >
                  <BiChevronRight
                    className={`text-xl duration-150 ease-in-out ${
                      isOpen && "rotate-90"
                    }`}
                  />
                </button>
              )}
            </div>
            {/* nested route  */}
            <div
              className={` duration-150 ease-in-out ${
                isOpen === link.path ? "h-auto" : "h-0 overflow-hidden"
              }`}
            >
              {link.children &&
                link.children.map((nestedLink) => {
                  const nestedLinkPath =
                    "/product-category" + link.path + nestedLink.path;
                  return (
                    <Link
                      onClick={() => setMenuState(false)}
                      to={nestedLinkPath}
                      key={nestedLinkPath}
                    >
                      <div
                        className={`py-4 pl-5 pr-2 w-full border-b-[1px] text-sm font-semibold border-[#c9c9c9] ${
                          routerLocationPathname.includes(nestedLinkPath)
                            ? "text-primary-green"
                            : "hover:text-primary-green"
                        }`}
                      >
                        {nestedLink.name}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
