import React from 'react'
import Counter from './Counter.jsx';

function Works() {
  return (
    <>

    <section className="work d-flex align-items-center py-5" >
        <div className="container-fluid text-light">
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center ">
                    <img className="img-fluid" src="./assets/images/our-work.jpg" alt="work"/>        
                </div>
                <div className="col-lg-5 d-flex align-items-center px-4 py-3">
                    <div className="row">
                        <div className="text-center text-lg-start py-4 pt-lg-0">
                            <p>OUR WORK</p>
                            <h2 className="py-2">Speedy Is Available At All <br/>Corners Of The Country<br/></h2>
                            <p className="para-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
                        </div>
                        <div className="container" >
                            <div className="row g-5">
                                <div className="col-6 text-start" >
                                <i class="fas fa-briefcase fa-2x text-start"></i>
                                   <Counter targetNumber={120}/>
                                    <p>PROJECTS COMPLETED</p>
                                </div>
                                <div className="col-6" >
                                <i class="fas fa-award fa-2x"></i>
                                <Counter targetNumber={80}/>
                                    <p>AWARDS</p>
                                </div>
                                <div className="col-6">
                                <i class="fas fa-users fa-2x"></i>
                                <Counter targetNumber={500}/>
                                    <p>CUSTOMER ACTIVE</p>
                                </div>
                                <div className="col-6">
                                <i class="fas fa-clock fa-2x"></i>
                                <Counter targetNumber={250}/>
                                    <p>GOOD REVIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    </>
  )
}

export default Works