import React, { Component } from 'react'
class MessageContent extends Component {
    render() {
        return (
            <div className="container msg-body">
                <p className="head">Messages</p>

           <div className="chatbox">
               <div className="chats">

                   <ul>
                       <li>
                   <div className="contact-image">

                   <img
                className="chat-avatar"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
              ></img>


                   </div>

                   <div className="contact-lstmsg">
                       <h6>John Doe</h6>
                       <p>Hey! when can you send the document for the...</p>
                   </div>
                   </li>

                   </ul>


               
              


               </div>

               <div className="current-chat">
                   <div className="contact-header">
                       <div className="avatar"><img
                className="card-profile"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
              ></img>
</div>
                       <div className="contact-details">
                           <p>John Doe</p>
                           <p className="chatted">Mentor</p>
                       </div>

                   </div>

                   <div className="chat-content">
                       <ul>
                           <li className="linked-list">
                       <div className="left-mesg">
                           <p className="hello">Hello, Goodmorning Mr David </p>
                       </div>
                       <div className="right-mesg">
                           <p className="hello">Hey! When can you send the document 
                               for the interview, Mr Gerrard have been waiting for the final document </p>
                       </div>
                       </li>

                       </ul>


                       <div className="the-document">
                           <div className="document-image">
                               <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fgrass&psig=AOvVaw2EGwi1rTsIkgcbODGL8Zp0&ust=1602610043685000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjp9ObJr-wCFQAAAAAdAAAAABAO" alt="image content"/>
                           </div>
                           <div className="image-download">
                               <div className="pdf"></div>
                               <div className="pdf-desc"></div>
                           </div>
                       </div>
                   </div>

               </div>
  
          </div>

                
            </div>
        )
    }
}


export default MessageContent;