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
            <p className="new">New Idea</p>
            </div>
        
          </div>

        



        </div>




        <div className="recent mt-5 "><h4>Recent Ideas</h4></div>

        <div className="cards">
        <div className="card mt-5 card-img mb-3">
  <img src="https://cdn.pixabay.com/photo/2014/07/05/08/30/lawnmower-384589_1280.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="project-name">Project Name</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Tags</p>

    <div className="tags">
      <div className="food"><p>food</p></div>
      <div className="agriculture"><p>Agriculture</p></div>
      <div className="technology"><p>Technology</p></div>
      <div className="file"><i class="fa fa-file" aria-hidden="true"></i></div>
      <div className="insert-link"><i class="fa fa-link" aria-hidden="true"></i></div>
     
    </div>

    
    
    <div className="accepted"><p>Accepted</p></div>
  

    
   
    
  </div>
</div>




<div className="card mt-5 card-img mb-3">
  <img src="https://cdn.pixabay.com/photo/2014/07/05/08/30/lawnmower-384589_1280.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="project-name">Project Name</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Tags</p>

    <div className="tags">
      <div className="food"><p>food</p></div>
      <div className="agriculture"><p>Agriculture</p></div>
      <div className="technology"><p>Technology</p></div>
      <div className="file"><i class="fa fa-file" aria-hidden="true"></i></div>
      <div className="insert-link"><i class="fa fa-link" aria-hidden="true"></i></div>
    </div>

    <div className="accepted"><p>Accepted</p></div>
   
    
  </div>
</div>





<div className="card last-card">
  <div className="card-body card-content">
    <div className="card-head">
    
     <img className="card-profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"></img>
      
      <div className="card-mentor">
        <h5>John Doe</h5>
        <p>Mentor</p>
      </div>

    </div>

    
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's <content className="br"></content>
    Some quick example text to build on the card title and make up the bulk of the card's 
    content.<content className="br"></content>Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <h3 className="results">89%</h3>
    <p className="comment">Performance</p>

    <div className="messages">
      <div className="chat"></div>
      <div className="send"><p>Send Message</p></div>
    </div>

    <div className="socials">
      <div className="linkedin"><i class="fa fa-linkedin-square" aria-hidden="true"></i></div>
      <div className="twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></div>
    </div>



  </div>
</div>






</div>



   




        








      </div>
    );
}

export default Body;
