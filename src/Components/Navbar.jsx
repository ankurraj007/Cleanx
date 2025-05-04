import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/">
          <img src="./logo.png" className="w-36" alt="cleanX Logo" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700 ">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/About" },
              { name: "FRANCHISE", path: "/Franchise" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 hover:text-blue-400 ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                {item.name}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-blue-400 scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </NavLink>
            ))}
          </ul>

          <NavLink to="/Book">
            <StyledWrapper>
              <div>
                <button className="btn">
                  <i className="animation" />
                  Book Wash
                  <i className="animation" />
                </button>
              </div>
            </StyledWrapper>
          </NavLink>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow-md">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/About" },
            { name: "FRANCHISE", path: "/Franchise" },
            { name: "BOOK WASH", path: "/Book" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-lg font-medium text-gray-700 hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

const StyledWrapper = styled.div`
  .btn {
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #40b3a2;
    min-width: 200px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.95;
  }

  .btn .animation {
    border-radius: 100%;
    animation: ripple 0.6s linear infinite;
  }

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
        0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1),
        0 0 0 60px rgba(255, 255, 255, 0.1);
    }

    100% {
      box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
        0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1),
        0 0 0 80px rgba(255, 255, 255, 0);
    }
  }
`;

export default Navbar;
