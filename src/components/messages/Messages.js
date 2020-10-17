import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import MessageContent from './MessageContent';
import '../../Messages.css';

 class Messages extends Component {
     state = {
      messages: false,
      contacts: [
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,

        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }
        ,
        {
          name: 'john PaymentResponse',
          mesg: 'Hey! can you send the document for the ...'

        }

      ]

  
     }
      componentDidMount() {
        this.toggleMessagesActive()
      }

      toggleMessagesActive(){
        this.setState({ messages: true})
    
      }

    render() {
        return (
            <div>
             <Navigation  messagesActive={this.state.messages}/>
             <MessageContent contacts={this.state.contacts}/>
                
            </div>
        )
    }
}

export default Messages;
