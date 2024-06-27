import React from 'react'

function Footer() {
  return (
    <div>
        <section class="footer text-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 py-4 py-md-5">
                <div class="d-flex align-items-center">
                    <h4 class="">Speedy</h4>
                </div>
                <p class="py-3 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi repudiandae explicabo esse maxime, impedit rem voluptatibus amet error quas.</p>
                <div class="d-flex">
                    <div class="me-3">
                        <a href="#your-link">
                            <i class="fab fa-facebook-f fa-2x py-2"></i>
                        </a>
                    </div>
                    <div class="me-3">
                        <a href="#your-link">
                            <i class="fab fa-twitter fa-2x py-2"></i>
                        </a>
                    </div>
                    <div class="me-3">
                        <a href="#your-link">
                            <i class="fab fa-instagram fa-2x py-2"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 py-4 py-md-5">
                <div>
                    <h4 class="py-2">Quick Links</h4>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="#about"><p class="ms-3">About</p></a>
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="https://google.com"><p class="ms-3">Services</p></a>
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="https://google.com"><p class="ms-3">Plans</p></a>
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="https://google.com"><p class="ms-3">Contact</p></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 py-4 py-md-5">
                <div>
                    <h4 class="py-2">Useful Links</h4>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="privacy.html"><p class="ms-3">Privacy</p></a>
                        
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="terms.html"><p class="ms-3">Terms</p></a>
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="#your-link"><p class="ms-3">Disclaimer</p></a>
                    </div>
                    <div class="d-flex align-items-center py-2">
                        <i class="fas fa-caret-right"></i>
                        <a href="#your-link"><p class="ms-3">FAQ</p></a>
                    </div>
                </div>
            </div> 

            <div class="col-lg-3 py-4 py-md-5">
                <div class="d-flex align-items-center">
                    <h4>Newsletter</h4>
                </div>
                <p class="py-3 para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                <div class="d-flex align-items-center">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email"/>
                        <button class="btn-secondary text-light"><i class="fas fa-envelope fa-lg"></i></button>       
                    </div>
                </div>
            </div> 
        </div> 
    </div> 
</section>
<div className="bottom py-2 text-light" >
        <div className="container d-flex justify-content-between">
            <div>
                <p>©Copyright © 2024 Speedy Template Designed By Shubham Kukshal</p><br/>
                </div>
        </div>    
    </div>
</div>

  )
}

export default Footer