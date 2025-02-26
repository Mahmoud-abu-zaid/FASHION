export default function Fashion() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-[30px] py-[60px] mx-9 relative">
            <img className="  absolute z-[-1]  left-20 bottom-14 w-[140px]" src="/public/img/Vector 8.png" alt="" />
            <b>NEW ARRIVALS</b>
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <div className="m-3">
            <img className="w-[300px]" src="/img/Screenshot 2025-02-26 160734.png" alt="" />
            <div className="flex justify-between py-3">
              <div>
                <h3>
                  <b>Hoodies & Sweetshirt</b>
                </h3>
                <p>Explore Now!</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="m-3">
            <img className="w-[300px]" src="/img/Screenshot 2025-02-26 160734.png" alt="" />
            <div className="flex justify-between py-3">
              <div>
                <h3>
                  <b>Coats & Parkas</b>
                </h3>
                <p>Explore Now!</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="m-3">
            <img className="w-[300px]" src="/img/Screenshot 2025-02-26 160734.png" alt="" />
            <div className="flex justify-between py-3">
              <div>
                <h3>
                  <b>Tees & T-Shirt</b>
                </h3>
                <p>Explore Now!</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
