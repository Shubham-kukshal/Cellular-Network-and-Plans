import React from 'react';
import { Link } from "react-router-dom";
 import { useRef } from 'react';
 import Navbar from './Navbar';
 

function Index() {
   const home = useRef(null);

  const handleScrollTo = (elRef) => {
    const el = elRef.current ? elRef.current : elRef;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <>      
        <section  ref={home} className="home py-5 d-flex align-items-center" id="header"  onClick={() => { handleScrollTo(home) }}>
          <div className="container text-light py-5">
            <h1 className="headline">
              Best <span className="home_text">Broadband</span>
              <br />
              Internet Plans For You
            </h1>
            <p className="para para-light py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              tempore accusamus quis magnam doloremque itaque ad modi, pariatur
              iste labore similique officiis impedit aspernatur aperiam facere
              architecto. Eligendi, repellendus inventore!
            </p>
            <div className="my-3">
              <Link className="btn" to="/plans">
                View Plans
              </Link>
            </div>
          </div>
        </section>
       <Navbar/>
    </>
  );
}

export default Index;
