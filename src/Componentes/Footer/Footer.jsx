

const Footer = () => {
    return (
    
        <footer className="bg-[#06091a] mt-24 ] 
        container mx-auto  w-full h-full object-cover">
           
            <div className="flex justify-center" >
                <img className="mt-56" src="/src/assets/logo-footer.png" alt="" />
            </div>
            <div className="grid grid-cols-3 text-white p-24 gap-10">
            <div >
                <h3>About Us</h3>
                <p className="text-gray-600">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul className="text-gray-600">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div >
                    <h3>Subscribe</h3>
                    <p className="text-gray-600">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex">
                    <input type="text"placeholder="Enter your email"className="input input-bordered input-error w-full max-w-xs"  />
                        <button className="text-black font-bold p-2 bg-gradient-to-r from-[#f9d38f] to-[#e1788b] rounded-xl">Subscribe</button>
                    </div>
              
          
                </div>
              
            </div>
            <div className="w-full text-gray-600">
                <hr />

                </div>
                <div className="text-center py-2">
                <p >&copy; 2024 Your Company All Rights Reserved.</p>
                </div>



        </footer>
    );
};

export default Footer;