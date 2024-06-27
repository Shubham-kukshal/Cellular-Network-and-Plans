import React from 'react'

function Location() {
  return (
    <div><section className="location text-light py-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 d-flex align-items-center">
                <div className="p-2"><i className="far fa-map fa-3x"></i></div>
                <div className="ms-2">
                    <h6>ADDRESS</h6>
                    <p>Kotdwara Uttrakhand EST. 2013</p>
                </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center" >
                <div className="p-2"><i className="fas fa-mobile-alt fa-3x"></i></div>
                <div className="ms-2">
                    <h6>CALL FOR QUERY</h6>
                    <p>91+6397526408</p>
                </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center" >
                <div className="p-2"><i className="far fa-envelope fa-3x"></i></div>
                <div className="ms-2">
                    <h6>SEND US MESSAGE</h6>
                    <p>shub.kukshal.1@gmail.com</p>
                </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center" >
                <div className="p-2"><i className="far fa-clock fa-3x"></i></div>
                <div className="ms-2">
                    <h6>OPENING HOURS</h6>
                    <p>08:00 AM - 20:00 PM</p>
                </div>
            </div>
        </div>
    </div> 
</section></div>
  )
}

export default Location