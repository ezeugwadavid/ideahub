import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import MessageContent from './MessageContent';
import '../../Messages.css';

 class Messages extends Component {
    render() {
        return (
            <div>
             <Navigation />
             <MessageContent />
                
            </div>
        )
    }
}

export default Messages;
