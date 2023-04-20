import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NestedRoute.css";

export default function NestedRoute({ routeLink }) {
  //Root route styles
  const routeStyleActive =
    "mr-2 relative group/fast font-semibold text-sm text-gray-500 inline px-3 py-4 md:px-2 md:py-1 root_link border-b-[1px] md:border-0 border-[#dfdfdf]";
  const routeStyleDeActive =
    "mr-2 relative group/fast font-semibold text-sm text-gray-500 inline px-3 py-4 md:px-2 md:py-1 root_link border-b-[1px] md:border-0 border-[#dfdfdf] root_link_hover_effect root_link_hover_effect";

  const location = useLocation();
  const routerLocationPathname = decodeURI(location.pathname);

  return (
    <div>
      <ul className="flex flex-col md:flex-row md:relative z-30">
        {routeLink.map((route) => {
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                isActive ? routeStyleActive : routeStyleDeActive
              }
            >
              <div className="flex md:block justify-between">
                {route.name}
                {route?.children && (
                  <FaAngleDown className="md:inline ml-1 group-hover/fast:rotate-180 text-gray-400" />
                )}
              </div>

              {route?.children && (
                <ul className="min-w-[13.5rem] w-auto pt-7 md:absolute md:left-0 hidden group-hover/fast:flex duration-700 ease-in-out z-30">
                  <div className="py-3 min-w-[13.5rem] w-auto bg-white border-2 border-gray-200 rounded-md flex-col flex">
                    {route?.children?.map((route2) => {
                      const pathLink2 = route.path + route2.path;
                      return (
                        <Link
                          to={pathLink2}
                          key={pathLink2}
                          className="group/2nd"
                        >
                          <div
                            className={`flex justify-between items-center px-3 py-2 hover:text-primary-green ease-in-out duration-150 z-30 ${
                              routerLocationPathname.includes(pathLink2)
                                ? "text-primary-green"
                                : "hover:text-primary-green"
                            }`}
                          >
                            {route2.name}
                            {route2?.children && (
                              <FaAngleDown className="rotate-[-90deg] text-gray-400" />
                            )}
                          </div>
                          <div className="relative hidden group-hover/2nd:block">
                            {route2?.children && (
                              <ul className="min-w-[13.5rem] w-auto bg-white border-2 border-gray-200 rounded-md p-3 absolute left-[13.3rem] top-[-40px] flex-col flex">
                                {route2?.children?.map((route3) => {
                                  const pathLink3 =
                                    route.path + route2.path + route3.path;
                                  return (
                                    <Link
                                      to={pathLink3}
                                      key={pathLink3}
                                      className={`px-3 py-2 ease-in-out duration-150 ${
                                        routerLocationPathname.includes(
                                          pathLink3
                                        )
                                          ? "text-primary-green"
                                          : "hover:text-primary-green"
                                      }`}
                                    >
                                      <p>{route3.name}</p>
                                    </Link>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </ul>
              )}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
