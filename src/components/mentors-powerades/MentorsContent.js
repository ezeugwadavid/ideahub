import React, { Component } from 'react'

 class MentorsContent extends Component {
   render() {
     return (
       <div className="container powerades">
         <div className="idea-small">
           <p>Idea</p>
         </div>

         <div className="row">
           <div className="col-7">
             <h5 className="project-desc">Powerades Project</h5>
             <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1500s, when an unknown printer took a galley of
               type and scrambled it to make a type specimen book.{" "}
             </p>
             <div className="light-icon">
               <i
                 className="far  fa-lightbulb"
                 style={{
                   fontSize: "22rem",
                   marginLeft: "270px",
                   marginTop: "40px",
                 }}
               ></i>
             </div>
           </div>
           <div className="col-5">
             <div className="right-content row  ml-5">
               <div className="stats col-6">
                 <p className="stats-desc">Status</p>
                 <span className="badge badge-pill text-white badge-warning">
                   processing
                 </span>
               </div>
               <div className="duration col-6">
                 <p className="stats-desc">Duration</p>
                 <p className="low-desc">16 weeks</p>
               </div>
               <div className="date-time col-12 ml-1">
                 <p className="stats-desc">Date</p>
                 <p className="date-now">
                   02/10/2020 <span className="ml-2">03.47PM</span>
                 </p>
               </div>
               <div className="power-icons col-12">
                 <div className="file-icons">
                   <i
                     className="far fa-file-pdf"
                     aria-hidden="true"
                     style={{ fontSize: "28px" }}
                   ></i>
                 </div>

                 <div className="link-icons">
                   <i
                     className="fa fa-link"
                     aria-hidden="true"
                     style={{ fontSize: "19px" }}
                   ></i>
                 </div>
               </div>
             </div>
           </div>

           <div className="col-8">
             <div className="project-image">
               <img
                 className="border shadow prj-img"
                 src="https://netstorage-legit.akamaized.net/images/vllkyt5sdprjsa9hk.jpg?imwidth=1200&impolicy=default-amp"
                 alt="projects"
               />
             </div>
           </div>

           <div className=" col-sm-4 prd-crd    mb-4  shadow ml-2 border bg-white">
             <div className="header d-flex mr-2 justify-content-between mb-3">
               <img
                 className="photo ml-4 mt-4"
                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
               ></img>
               <div className="john-de">
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
         </div>
       </div>
     );
   }
 }

export default MentorsContent;
