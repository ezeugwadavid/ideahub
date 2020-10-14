import React, { Component } from 'react';


 class IdeaContent extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row d-sm-flex no-gutters ml-5">
                    <div className=" col-9  bg-white border">

                    <ul className="list-group">
  <li className="list-group-item mb-4 text-muted border-white d-flex justify-content-between align-items-center">
   #id
    <span className="text-muted idea-name">Idea name</span>
    <span className="text-muted submit-date">submit date</span>
    <span className="text-muted">status</span>
    
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  #1
  <span className="text-muted ml-5 justify-content-end pr-0  small">Food processing and auto delivery web app</span>
    <span className="text-muted small">12/10/2020</span>
    <span class="badge badge-pill text-white badge-warning">processing</span>
    <span className="text-muted badge badge-primary badge-pill small"><i class="fas fa-arrow-right"></i></span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  #2
    <span className="badge badge-primary badge-pill">1</span>
  </li>
</ul>



                    


                    </div>
                    <div className="col-4 ml-5  border bg-white ml-3">
                        <div className="header d-flex">
                            <div className="rounded bg-blue"></div>
                            <div className="heading"><h5>john doe</h5></div>
                        </div>


                    </div>
                </div>
                
            </div>
        )
    }
}


export default IdeaContent;
