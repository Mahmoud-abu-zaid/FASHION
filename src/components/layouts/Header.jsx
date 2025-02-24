import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div>
        <nav className="flex justify-between p-5 fixed right-0 left-0">
          <div className="">
            <Link to="/">
              <img className="inline-block p-2 pt-0" src="/img/Vector (1).png" alt="" />
              <b className=" text-[25px]">FASHION</b>
            </Link>
          </div>
          <ul className="md:flex ">
            <li>
              <Link to="/CATALOGUE" className="p-3">CATALOGUE</Link>
            </li>
            <li>
              <Link to="/FASHION" className="p-3">FASHION</Link>
            </li>
            <li>
              <Link to="/FAVOURITE" className="p-3">FAVOURITE</Link>
            </li>
            <li>
              <Link to="/LIFESTYLE" className="p-3">LIFESTYLE</Link>
            </li>
            <li>
              <Link to="/SIGN" className="p-3">SIGN UP</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
