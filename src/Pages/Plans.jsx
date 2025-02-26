import React from 'react';
import {Link } from 'react-router-dom';
function Plans() {
  return (
    <>
    <section className="plans d-flex align-items-center py-5" id="plans">
        <div className="container text-light" >
            <div className="text-center pb-4">
                <p>OUR PLANS</p>
                <h2 className="py-2">Discover Our Best Plans</h2>
                <p className="para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores, quia accusantium sunt corporis optio recusandae? Nostrum libero pariatur cumque, ipsa dolores voluptatibus voluptate alias sit fuga. Itaque, ea quo.</p>
            </div>
            <div className="row gy-4">
                <div className="col-lg-4">
                    <div className="card bg-transparent px-4">
                        <h4 className="py-2">BASIC BUNDLE</h4>
                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <h4 className="py-3">$24/Month</h4>
                        <div className="my-3">
                            <Link className="btn" to="/link" >View Plans</Link>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4">
                    <div className="card bg-transparent px-4">
                        <h4 className="py-2">BUSINESS BUNDLE</h4>
                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <h4 className="py-3">$44/Month</h4>
                        <div className="my-3">
                            <Link className="btn" to="/link" >View Plans</Link>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4">
                    <div className="card bg-transparent px-4" >
                        <h4 className="py-2">PREMIUM BUNDLE</h4>
                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <h4 className="py-3">$99/Month</h4>
                        <div className="my-3">
                            <Link className="btn" to="/link" >View Plans</Link>                    
                        </div>
                    </div>  
                </div>
            </div> 
        </div> 
    </section>
    </>
  )
}

export default Plans