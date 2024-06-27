/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom';
import { useRef} from "react";
import Information from './Information.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Plans from './Plans.jsx';
import Works from './Works.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';
import Location from './Location.jsx';


function Navbar() {
    
    const about = useRef(null);
    const services = useRef(null);
    const plan = useRef(null);
    const contact = useRef(null);
  
  
    const handleScrollTo = (elRef) => {
      const el = elRef.current ? elRef.current : elRef;
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };
  
  return (
    <>
    <nav
          id="navbar"
          className="navbar navbar-expand-lg fixed-top navbar-dark"
          aria-label="Main navigation"
        >
          <div className="container">
            <Link className="navbar-brand logo-text" to="/">
              Speedy
            </Link>

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ms-auto navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" >
                    Home
                  </a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link page-section" onClick={() => { handleScrollTo(about) }}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => { handleScrollTo(services) }}>
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => { handleScrollTo(plan) }}>
                    Plan
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="dropdown01"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Drop
                  </span>

                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li>
                      <Link className="dropdown-item" to="/Article">
                        Article Details
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Terms">
                        Terms Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Privacy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Logout">
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => { handleScrollTo(contact) }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Information />
        <section ref={about} className="page-section nav-link">
 <About />
</section>

<section ref={services} className="page-section nav-link">
<Services  />
</section>

<section ref={plan} className="page-section nav-link">
<Plans  />
</section>

<Works/>
<section ref={contact} className="page-section nav-link">
<Contacts />
</section>

<Location />
<Footer />
    </>
  )
}

export default Navbar;