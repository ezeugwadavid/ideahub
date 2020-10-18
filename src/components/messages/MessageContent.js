import React, { Component } from 'react'
class MessageContent extends Component {
  
  render() {
    const { contacts } = this.props;
    const contactList = contacts.map((contact) => (

      
      <li>
        <div className="contact-image">
          <img
            className="chat-avatar"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
          ></img>
        </div>

        <div className="contact-lstmsg">
        <h6>{contact.name}</h6>
        <p>{contact.mesg}</p>
        </div>
      </li>
    



      ))
    return (
      <div className="container msg-body">
        <p className="head">Messages</p>

        <div className="cover">
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
                {contactList}
              </ul>
            
            </div>

            <div className="current-chat">
              <div className="contact-header">
                <div className="avatar">
                  <img
                    className="card-profile user"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
                  ></img>
                </div>
                <div className="contact-details">
                  <p>John Doe</p>
                  <p className="chatted">Mentor</p>
                </div>
              </div>

              <div className="chat-content">
                <div className="linked-list">
                  <div className="left-mesg">
                    <p className="hello">Hello, Goodmorning Mr David </p>
                  </div>
                  <div className="right-mesg">
                    <p className="hello">
                      Hey! When can you send the document for the interview, Mr
                      Gerrard have been waiting for the final document{" "}
                    </p>
                  </div>
                </div>
                <div className="linked-list">
                  <div className="left-mesg">
                    <p className="hello">Hello, Goodmorning Mr David</p>
                  </div>
                  <div className="right-mesg">
                    <p className="hello">
                      Hey! When can you send the document for the interview, Mr
                      Gerrard have been waiting for the final document{" "}
                    </p>
                  </div>
                </div>

                <div className="the-document">
                  <div className="document-image">
                    <img
                      src="https://i.pinimg.com/originals/18/7b/8b/187b8b0f18167b3c80f36deb37f66ac3.jpg"
                      alt="image content"
                    />
                  </div>
                  <div className="image-download">
                    <div className="pdf">
                      {" "}
                      <i className="far  fa-file-pdf" aria-hidden="true"></i>
                    </div>
                    <div className="pdf-desc">
                      <p>Apollosite.pdf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card msg-card last-card">
            <div className="card-body card-content">
              <div className="card-head">
                <img
                  className="card-profile"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
                ></img>

                <div className="card-mentor">
                  <h5>John Doe</h5>
                  <p>Mentor</p>
                </div>
              </div>

              <p className="card-text card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's <content className="br"></content>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <content className="br"></content>Some quick example text to
                build on the card title and make up the bulk of the card's
                content.
              </p>
              <h3 className="results">89%</h3>
              <p className="comment">Performance</p>

              <div className="messages">
                <div className="chat"></div>
                <div className="send">
                  <p>Send Message</p>
                </div>
              </div>

              <div className="socials">
                <div className="linkedin">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div className="twitter">
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MessageContent;