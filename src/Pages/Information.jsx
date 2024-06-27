import React from 'react'
function Information() {
  return (
    <>
    <section className="information">
    <div className="container">  
        <div className="row text-light">
            <div className="col-lg-4 text-center p-5 " >
            <i class="fas fa-tachometer-alt fa-3x p-2"></i>
                <h4 className="py-3">Download 1 GBPS</h4>
                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
            </div>
            
            <div className="col-lg-4 text-center p-5">
            <i class="fas fa-clock fa-3x p-2"></i>
                <h4 className="py-3">99% Internet Uptime</h4>
                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>

            </div>
            <div className="col-lg-4 text-center p-5 text-light"> 
            <i class="fas fa-headset fa-3x p-2"></i>
                <h4 className="py-3">24/7 Support </h4>
                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
            </div>
        </div>
    </div> 
    </section>
        </>
  )
}

export default Information