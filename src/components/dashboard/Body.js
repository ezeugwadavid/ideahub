import React from 'react'

 const Body = () => {
    return (
      <div className="container">

          <div className="welcome">
              <p>Welcome Back, <span className="name">John!</span></p>
          </div>

          
          <div className="display">
        <div className="card  mt-4 ">
          <div className="card-body">
            <h1 className="card-subtitle">12</h1>
            <h5 className="card-title">
              All ideas
            </h5>
           
          </div>
        </div>


        <div className="card mt-4">
          <div className="card-body">
            <h1 className="card-subtitle">3</h1>
            <h5 className="card-title">
             Accepted
            </h5>
            
          </div>
        </div>

        <div className="card rejected mt-4">
          <div className="card-body">
            <h1 className="card-subtitle text-white">9</h1>
            <h5 className="card-title text-white">
              Rejected
            </h5>
            
          </div>
        </div>

        <div className="new-idea">

            <div className="idea">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <p>New Idea</p>
            </div>
        
        </div>



        </div>



      </div>
    );
}

export default Body;
