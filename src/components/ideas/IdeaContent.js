import React, { Component } from 'react';


 class IdeaContent extends Component {
   render() {
     const { Ideas } = this.props;
     const IdeaList = Ideas.map((Idea) => (

      <li className="list-group-item text-muted  d-flex justify-content-between align-items-center">
      {Idea.id}
      <span className="text-muted ml-5 justify-content-end pr-0  small">
      {Idea.ideaname}
      </span>
     <span className="text-muted small">{Idea.submitdate}</span>
      <span className={Idea.status === 'rejected' ? 'badge badge-pill text-white badge-danger' :
       'badge badge-pill text-white badge-warning' }>
        {Idea.status}
      </span>
      <span className="text-muted badge badge-primary badge-pill">
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </span>
    </li>

      
 
    



      ))
     return (
       <div className="container">
         <p className="idea-desc">Ideas</p>
         <div className="row idea-content no-gutters  ml-5">
           <div className=" col-9  shadow table bg-white border">
             <ul className="list-group">
               <li className="list-group-item mb-4 text-muted  border-white d-flex justify-content-between align-items-center">
                 #id
                 <span className="text-muted idea-name">Idea name</span>
                 <span className="text-muted date submit-date">
                   submit date
                 </span>
                 <span className="text-muted status">status</span>
               </li>
               <li className="list-group-item text-muted  d-flex justify-content-between align-items-center">
                 #1
                 <span className="text-muted ml-5 justify-content-end pr-0  small">
                   Food processing and auto delivery web app
                 </span>
                 <span className="text-muted small">12/10/2020</span>
                 <span className="badge badge-pill text-white badge-warning">
                   processing
                 </span>
                 <span className="text-muted badge badge-primary badge-pill">
                   <span>
                     <i className="fas fa-arrow-right"></i>
                   </span>
                 </span>
               </li>
               {IdeaList}
               <li className="list-group-item d-flex  justify-content-between align-items-center">
                 #2
                 <span className="badge badge-primary badge-pill">1</span>
               </li>
             </ul>
           </div>

           <div className="col-sm-4  ml-5 right-card   mb-4 shadow  border bg-white">
             <div className="header d-flex mr-3 justify-content-between mb-3">
               <img
                 className="photo ml-4 mt-4"
                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
               ></img>
               <div className="doe">
                 <h5>John doe</h5>
                 <p>Mentor</p>
               </div>
             </div>

             <p className="para-text mx-4">
               Some quick example text to build on the card title and make up
               the bulk of the card's <content className="br"></content>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.<content className="br"></content>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </p>
             <h3 className="results mt-3 ml-4">89%</h3>
             <p className="comment text-muted ml-4">Performance</p>

             <div className="messages   ml-4">
               <div className="chat"></div>
               <div className="send">
                 <p className="text-muted">Send Message</p>
               </div>
             </div>

             <div className="socials ml-4 mb-3">
               <div className="linkedin">
                 <i class="fab text-muted icons fa-linkedin"></i>
               </div>
               <div className="twitter ml-2">
                 <i class="fab text-muted icons fa-twitter"></i>
               </div>
             </div>
           </div>

           <div className="light-icon">
             <i className="far fa-lightbulb" style={{ fontSize: "22rem" }}></i>
           </div>
         </div>
       </div>
     );
   }
 }


export default IdeaContent;
