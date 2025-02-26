import { Link } from "react-router";

export default function Catalogue() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center flex-wrap  pt-8">
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 36.png" alt="" />
          </Link>
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 38.png" alt="" />
          </Link>
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 41.png" alt="" />
          </Link>
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 43.png" alt="" />
          </Link>
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 44.png" alt="" />
          </Link>
          <Link>
            <img className="w-[130px] p-2 m-1" src="/img/Rectangle 45.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
