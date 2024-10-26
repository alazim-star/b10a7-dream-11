import React from 'react';

const Header = ({ addCredit}) => {
    return (
        <div>
            <nav >
                <div className="navbar bg-base-100">
                    {/* Drop down menu for mobile */}
     <div className="navbar-start">
         <div className="dropdown flex">
            <div role="button" className="btn lg:hidden">
                   <svg
                               xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                  strokeLinecap="round"
                                 strokeLinejoin="round"
                                  strokeWidth="2"
                                 d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <div>
                                <img src="/src/assets/logo.png" alt="Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="navbar-center lg:ml-[400px] hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                         <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                 <li><a>Teams</a></li>
                      <li><a>Schedules</a></li>
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <a className="btn" >
                            {addCredit} Coin <img className="w-5" src="/src/assets/coin.png" alt="coin" />
            </a>
                    </div>
        </div>
            </nav>
        </div>
    );
};

export default Header;
