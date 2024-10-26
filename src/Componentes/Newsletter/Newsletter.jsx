
import bg-shwado from "../../assets/logo.png";
const Newsletter = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5 relative lg:h-[300px] mb-10 rounded-lg hero">
        <div>
          <img 
            className="p-5 rounded-3xl border-2 border-[#ffffff]" 
            src="./src/assets/bg-shadow.png" 
            alt="" 
          />
        </div>
        <div className="text-center mt-32">
          <h2 className="lg:text-4xl text-xl font-bold">Subscribe to our Newsletter</h2>
          <p className="text-gray-500 sm:text-sm lg:text-xl mb-5">Get the latest updates and news right in your inbox!</p>
          <div className="flex justify-center lg:mt-4">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="input input-bordered w-full max-w-xs mr-2" 
            />
            <button className="text-black font-bold p-2 bg-gradient-to-r from-[#f9d38f] to-[#e1788b] rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
