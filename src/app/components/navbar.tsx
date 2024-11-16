export default function Navbar() {
  return (
    <div className="h-[91px] m-auto text-white flex justify-around items-center">
      {/* Navbar End */}

      <div className="w-[158px] h-[58px] ">
        <h3 className="w-[152px] h-[52px] font-bold text-2xl leading-8 place-content-center">
          BrandName
        </h3>
      </div>
      <div className="w-[815px] h-[58px] left-[365px] font-bold flex justify-between items-center">
        <ul className="w-[275px] h-6 top-[16px] flex gap-[21px]">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="w-[159px] h-[52px] gap-[45px] flex items-center">
          <div className="w-[41px] h-[22px]">
            <button>Login</button>
          </div>
          <div className="w-[214px] h-[52px]">
            <button className="w-[110px] h-[52px] px-[25px] py-[15px] rounded-[5px] bg-[#23A6F0]">
              Join US
            </button>
          </div>
          <div className="w-[24px] h-[13.71px]"></div>
        </div>
      </div>

      {/* Navbar End */}
    </div>
  );
}
