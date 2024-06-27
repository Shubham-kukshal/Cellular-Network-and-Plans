import React from 'react'
import { Link } from "react-router-dom";
function Article() {
  return (
    <>

    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
        <div className="container">

            <Link className="navbar-brand logo-text" to="index.html">Speedy</Link>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
                <ul className="navbar-nav ms-auto navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Plans">Plans</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false" to="/">Drop</Link>
                        
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            <li><Link className="dropdown-item" to="/article">Article Details</Link></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><Link className="dropdown-item" to="/terms">Terms Conditions</Link></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><Link className="dropdown-item" to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="index.html#contact">Contact</Link>
                    </li>
                </ul>
            </div> 
        </div> 
    </nav>

    <header className="ex-header">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 offset-xl-1">
                    <h1>Article Details</h1>
                </div> 
            </div> 
        </div> 
    </header> 


    <div className="ex-basic-1 pt-5 pb-5">
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-fluid mt-5 mb-3" src="assets/images/article.jpg" alt="alternative"/>
                </div>
            </div> 
        </div> 
    </div> 


    <div className="ex-basic-1 pt-4">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 offset-xl-1">
                    <p>Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Last sentence of words thus better.</p>
                    <p className="py-2">Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. Way mrs end gave fat skin brown yesterday tall walk fact bed.</p>

                    <h2 className="my-3">Advantages of working with this package</h2>
                    <p className="py-2">High drew west we no or at john. About or given on witty event. Or sociable up material bachelor bringing landlord confined. Busy so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so. Ye on properly handsome returned throwing am no whatever.</p>
                    <p className="mb-4">Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet. The and collecting motionless difficulty son. His hearing staying ten colonel met. Word drew six easy four dear cold deny. Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient.</p>
                </div> 
            </div> 
        </div> 
    </div> 


    
    <div className="ex-cards-1 pt-3 pb-3 ">
        <div className="container">
            <div className="row col-xl-10 offset-xl-1" >
                    
                    <div className="card col-lg-4">
                        <ul className="list-unstyled">
                            <li className="d-flex">
                                <span className="fa-stack">
                                    <span className="fas fa-circle fa-stack-2x"></span>
                                    <span className="fa-stack-1x">1</span>
                                </span>
                                <div className="flex-grow-1">
                                    <h5>High Quality Service</h5>
                                    <p>Features include an eye catching morphtext in the header, details lightbox for more details information</p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                
                    
                
                    <div className="card col-lg-4">
                        <ul className="list-unstyled">
                            <li className="d-flex">
                                <span className="fa-stack">
                                    <span className="fas fa-circle fa-stack-2x"></span>
                                    <span className="fa-stack-1x">2</span>
                                </span>
                                <div className="flex-grow-1">
                                    <h5>Prompt Timely Delivery</h5>
                                    <p>Statistics numbers for important values, card slider for testimonials, image slider for customer logos</p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                    
                    
                    
                    <div className="card col-lg-4">
                        <ul className="list-unstyled">
                            <li className="d-flex">
                                <span className="fa-stack">
                                    <span className="fas fa-circle fa-stack-2x"></span>
                                    <span className="fa-stack-1x">2</span>
                                </span>
                                <div className="flex-grow-1">
                                    <h5>Skilled Team Involved</h5>
                                    <p>Some useful extra pages are bundled with the template lik article details, terms conditions and privacy policy</p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                
            </div> 
        </div> 
    </div> 
    


    <div className="ex-basic-1 pt-3 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 offset-xl-1">
                    <p className="mb-5">Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Last sentence of words thus better.</p>
                    
                    <h2 className="mb-4">New elements added to the package</h2>
                    <img className="img-fluid mb-5" src="assets/images/article1.jpg" alt="alternative"/>
                    <p className="py-3">Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. Way mrs end gave fat skin brown yesterday tall walk fact bed.</p>
                    <p className="py-3">High drew west we no or at john. About or given on witty event. Or sociable up material bachelor bringing landlord confined. Busy so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so. Ye on properly handsome returned throwing am no whatever.</p>
                    <div className="text-box mb-5 p-4">
                        <h3>Visitors love Link beautiful and efficient website</h3>
                        <p>Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly. Covered as an examine so regular of. Ye astonished friendship remarkably no. Window admire matter praise you bed whence. Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire ously arranging frankne its the did figure wonder off.</p>
                    </div> 
                    <p className="mb-4">Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. Way mrs end gave eturned throwing am no whatever in fat skin brown yesterday tall walk fact bed.</p>
                    <ul className="list-unstyled li-space-lg mb-5">
                        <li className="d-flex py-2">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1"><strong>Card slider</strong> for testimonials, statistics numbers for important values image slider for logos</div>
                        </li>
                        <li className="d-flex py-2">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1"><strong>Dropdown navigation</strong> and useful extra pages for article details, terms conditions and privacy policy</div>
                        </li>
                        <li className="d-flex py-2">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1"><strong>Clean light design</strong> mixing purple, orange and gray hues with one color backgrounds to maximize</div>
                        </li>
                        <li className="d-flex py-2">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1"><strong>Together with</strong> touches of call to action green, the overall landing page design will showcase your app</div>
                        </li>
                        <li className="d-flex py-2">
                            <i className="fas fa-square"></i>
                            <div className="flex-grow-1"><strong>This template</strong> is built with HTML, CSS and Bootstrap to ensure the highest flexibility for all users</div>
                        </li>
                    </ul>
                                 
                    <Link className="btn btn-tertiary" to="index.html#contact">Contact Us</Link>

                </div> 
            </div>
        </div> 
    </div> 


    <section className="footer text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className="">Speedy</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi repudiandae explicabo esse maxime, impedit rem voluptatibus amet error quas.</p>
                    <div className="d-flex">
                        <div className="me-3">
                            <Link to="#your-link">
                                <i className="fab fa-facebook-f fa-2x py-2"></i>
                            </Link>
                        </div>
                        <div className="me-3">
                            <Link to="#your-link">
                                <i className="fab fa-twitter fa-2x py-2"></i>
                            </Link>
                        </div>
                        <div className="me-3">
                            <Link to="#your-link">
                                <i className="fab fa-instagram fa-2x py-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="py-2">Quick Links</h4>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="index.html#about"><p className="ms-3">About</p></Link>
                            
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="index.html#services"><p className="ms-3">Services</p></Link>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="index.html#plans"><p className="ms-3">Plans</p></Link>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="index.html#contact"><p className="ms-3">Contact</p></Link>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="py-2">Useful Links</h4>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="privacy.html"><p className="ms-3">Privacy</p></Link>
                            
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="terms.html"><p className="ms-3">Terms</p></Link>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="#your-link"><p className="ms-3">Disclaimer</p></Link>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <Link to="#your-link"><p className="ms-3">FAQ</p></Link>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4>Newsletter</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                    <div className="d-flex align-items-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email" aria-describedby="button-addon2"/>
                            <button className="btn-secondary text-light" id="button-addon2"><i className="fas fa-envelope fa-lg"></i></button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section> 


    <div className="bottom py-2 text-light" >
        <div className="container d-flex justify-content-between">
            <div>
                <p>Copyright © 2021 Speedy Template Designed By Akash Rawat</p>
            </div>
            <div>
                <i className="fab fa-cc-visa fa-lg p-1"></i>
                <i className="fab fa-cc-mastercard fa-lg p-1"></i>
                <i className="fab fa-cc-paypal fa-lg p-1"></i>
                <i className="fab fa-cc-amazon-pay fa-lg p-1"></i>
            </div>
        </div> 
    </div> 

    <button onclick="topFunction()" id="myBtn">
        <img src="assets/images/up-arrow.png" alt="alternative"/>
    </button>

</>
  )
}

export default Article