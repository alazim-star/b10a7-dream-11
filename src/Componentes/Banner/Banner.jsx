

const Banner = () => {
    return (
        <div className="relative">
        <div className="mt-5">
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co/k6HXYQ6/cover-photo.jpg"
            alt="Cover Photo"
          />
          <div className="hero-content text-neutral-content text-center absolute inset-0 flex justify-center items-center">
           
      
            <div className="">
            <div className=" mb-5 flex justify-center"><img src="/src/assets/banner-main.png" alt="" />
            </div>
               
              <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
              <p className="mb-5">
              Beyond Boundaries Beyond Limits
              </p>
<div className="inline-block rounded-2xl border-2 p-2 border-[#d1e528]">
<button className="bg-[#d1e528] text-black font-bold py-2 px-4 rounded-md w-full h-full">
    Claim Free Credit
  </button>
</div>


            </div>
          </div>
        </div>
      </div>
      
       
    );
};

export default Banner;