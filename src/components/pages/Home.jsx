import ButtonShopNow from "../ButtonShopNow";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center md:h-[100vh]">
        <div className="flex justify-around items-center flex-wrap bg-[#F4F6F5] rounded-lg px-3 pt-3  mx-2 mt-8 ">
          <div className="my-5 pt-2">
            <h2 className="text-[60px] ">
              <b>
                <span className="bg-white pr-11 p-1">LET’S</span> <br /> EXPLORE <br /> <span className="bg-[#EBD96B] pr-11 p-1"> UNIQUE </span> <br /> CLOTHES.
              </b>
            </h2>
            <p className="my-3">Live for Influential and Innovative fashion!</p>
            <ButtonShopNow />
          </div>
          <div className="md:w-[45%] w-[300px] ">
            <img src="/img/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
