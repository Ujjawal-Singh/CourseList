import React, { useState, useEffect, useRef } from "react";
import "./navba.css"; // Ensure the CSS file name is correct
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { useNavigate, useParams, Link } from "react-router-dom";

const Navbar1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [subCategories, setSubCategories] = useState({});
  const navigate = useNavigate();
  const { pk } = useParams();

  const handleMenuClick = async (categoryId) => {
    setOpenMenus((prevState) => {
      const newOpenMenus = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      return {
        ...newOpenMenus,
        [categoryId]: !prevState[categoryId],
      };
    });

    if (!subCategories[categoryId]) {
      await fetchSubCategories(categoryId);
    }
  };

  const handleSubcategoryClick = (sub_id) => {
    navigate(`/user/allproduct/${pk}/${sub_id}/`);
  };

  const fetchSubCategories = async (categoryId) => {
    // Fetch subcategories logic here
  };

  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);
  const countryMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShowUserMenu(false);
    }
    if (countryMenuRef.current && !countryMenuRef.current.contains(event.target)) {
      setShowCountryMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const india = [
    {
      name: 'India',
      href: '#',
      flagSrc: 'https://flagicons.lipis.dev/flags/4x3/in.svg',
    },
    {
      name: 'Canada',
      href: '#',
      flagSrc: 'https://tailwindui.com/img/flags/flag-canada.svg',
    },
  ];

  return (
    <nav className="navbar1">
      {/* Desktop Version */}
      <div className="navbar1-desktop">
        {/* Logo and Company Name */}
        <div className="navbar1-logo">
          <img
            src="https://your-company-logo-link.com/logo.png"
            alt="Company Logo"
          />
          <span className="company-name">The StarkMart</span>
        </div>

        {/* Search Bar */}
        <div className="navbar1-search">
          <input type="text" placeholder="Search products..." />
          <FaSearch className="search-icon" />
        </div>

        {/* Become a Seller Button */}
        <button className="seller-btn">
          <IoStorefront className="icon" />
          Become a Seller
        </button>

        {/* Country Popover */}
        <div className="popover" ref={countryMenuRef}>
          <button className="popover-btn" onClick={() => setShowCountryMenu(!showCountryMenu)}>
            <img
              src="https://flagicons.lipis.dev/flags/4x3/in.svg"
              alt="India"
              className="flag-icon"
            />
            India
          </button>
          {showCountryMenu && (
            <div className="popover-content">
              {india.map((country) => (
                <a key={country.name} href={country.href} className="country-option">
                  <img
                    src={country.flagSrc}
                    alt={country.name}
                    className="flag-icon"
                  />
                  <div className="country-info">
                    <span className="country-name">{country.name}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className="navbar1-cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">2</span>
        </div>

        {/* User Icon with Dropdown */}
        <div className="navbar1-user" ref={userMenuRef}>
          <FaUser className="user-icon" onClick={() => setShowUserMenu(!showUserMenu)} />
          {showUserMenu && (
            <ul className="user-dropdown">
              <li>My Profile</li>
              <li>Orders</li>
              <li>Logout</li>
            </ul>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar1-hamburger" onClick={() => setShowDropdown(!showDropdown)} ref={dropdownRef}>
          <FaBars />
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-links">
            <button className="seller-btn">
              <IoStorefront className="icon" />
              Become a Seller
            </button>
            <div className="popover" ref={countryMenuRef}>
              <button className="popover-btn" onClick={() => setShowCountryMenu(!showCountryMenu)}>
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                  alt="India"
                  className="flag-icon"
                />
                India
              </button>
              {showCountryMenu && (
                <div className="popover-content">
                  {india.map((country) => (
                    <a key={country.name} href={country.href} className="country-option">
                      <img
                        src={country.flagSrc}
                        alt={country.name}
                        className="flag-icon"
                      />
                      <div className="country-info">
                        <span className="country-name">{country.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="navbar1-cart">
              <FaShoppingCart className="cart-icon" />
              <span className="cart-count">2</span>
            </div>
            <div className="navbar1-user" ref={userMenuRef}>
              <FaUser className="user-icon" onClick={() => setShowUserMenu(!showUserMenu)} />
              {showUserMenu && (
                <ul className="user-dropdown">
                  <li>My Profile</li>
                  <li>Orders</li>
                  <li>Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Version */}
      <div className="navbar1-mobile">
        {/* Logo and Search Bar */}
        <div className="navbar1-logo-mobile">
          <img
            src="https://your-company-logo-link.com/logo.png"
            alt="Company Logo"
          />
          <span className="company-name-mobile">The StarkMart</span>
          <div className="navbar1-search-mobile">
            <input type="text" placeholder="Search products..." />
            <FaSearch className="search-icon-mobile" />
          </div>
        </div>

        {/* Menu Bar */}
        <div className="navbar1-menu">
          <button className="seller-btn">
            <IoStorefront className="icon" />
            Become a Seller
          </button>
          <div className="popover" ref={countryMenuRef}>
            <button className="popover-btn" onClick={() => setShowCountryMenu(!showCountryMenu)}>
              <img
                src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                alt="India"
                className="flag-icon"
              />
              India
            </button>
            {showCountryMenu && (
              <div className="popover-content">
                {india.map((country) => (
                  <a key={country.name} href={country.href} className="country-option">
                    <img
                      src={country.flagSrc}
                      alt={country.name}
                      className="flag-icon"
                    />
                    <div className="country-info">
                      <span className="country-name">{country.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="navbar1-cart">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">2</span>
          </div>
          <div className="navbar1-user" ref={userMenuRef}>
            <FaUser className="user-icon" onClick={() => setShowUserMenu(!showUserMenu)} />
            {showUserMenu && (
              <ul className="user-dropdown">
                <li>My Profile</li>
                <li>Orders</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Link to="/yoyo">
    <button className="course-list-btn">
      hello
    </button>
      </Link>
    </nav>
  );
};

export default Navbar1;
