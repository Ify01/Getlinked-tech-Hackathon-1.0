import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="nav-flex">
        <div className="nav-logo">
          <h1>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "act" : "ina")}
            >
              get<span>linked</span>
            </NavLink>
          </h1>
        </div>

        <div className="nav-list">
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAqs</li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="nav-btn">
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Register
            </NavLink>
          </button>
        </div>

        <div id="menuToggle">
          <input type="checkbox" id="check" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <div className="menu-inner">
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </div>

            <div className="menu-btn">
              <button>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Register
                </NavLink>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
