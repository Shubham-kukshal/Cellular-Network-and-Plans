import React from 'react'
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
    <section className="about d-flex align-items-center text-light py-5 ps-5" id="about">
        <div className="container" >
            <div className="row d-flex align-items-center">
                <div className="col-lg-7">
                    <p>ABOUT </p>
                    <h1>Discover A Wider World <br/> of Recreation</h1>
                    <p className="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>
                    <p className="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>

                    <div className="my-3">
                        <Link className="btn" to="/about">Learn More</Link>
                    </div>
                </div>
                <div className="col-lg-5 text-center py-4 py-sm-0"> 
                    <img className="img-fluid" src="./assets/images/about.jpg" alt="about" />
                </div>
            </div> 
        </div> 
    </section>
    </>
  )
}

export default About