import { Link } from "react-router-dom";

export default function MenuComponent() {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            home
          </li>
        </Link>
        <Link to="/shop">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            shop
          </li>
        </Link>
        <Link to="/আমাদের সম্পর্কে">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            আমাদের সম্পর্কে
          </li>
        </Link>
        <Link to="/যোগাযোগ করুন">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            যোগাযোগ করুন
          </li>
        </Link>
        <Link to="/Wishlist">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            Wishlist
          </li>
        </Link>
        <Link to="/Login">
          <li className="px-3 py-4 uppercase text-sm font-semibold border-b-[1px] border-[#dfdfdf]">
            Login / Register
          </li>
        </Link>
      </ul>
    </div>
  );
}
