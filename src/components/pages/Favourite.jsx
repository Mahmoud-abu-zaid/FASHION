import ButtonShopNow from "../ButtonShopNow";

export default function Favourite() {
  return (
    <>
      <div className="py-[60px]">
        <div className=" flex justify-center items-center flex-wrap bg-[#DFC23E]">
          <div>
            <img src="/img/Screenshot 2025-02-26 160734.png" alt="" />
          </div>
          <div className=" p-4">
            <h2 className="text-[45px]">
              <b>
                <span className="bg-white pr-6 ">PAYDAY</span>
                <br /> SALE NOW
              </b>
            </h2>
            <p className="py-3">
              Spend minimal $100 get 30% off <br />
              voucher code for your next purchase
            </p>
            <p>
              <b>1 June - 10 June 2021</b>
            </p>
            <p className="pb-3">*Terms & Conditions apply</p>
            <ButtonShopNow />
          </div>
        </div>
      </div>
    </>
  );
}
