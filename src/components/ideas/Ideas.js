import React, { Component } from 'react';
import IdeaContent from './IdeaContent';
import Navigation from '../../components/dashboard/Navigation';
import '../../Idea.css';

 class Ideas extends Component {
    render() {
        return (
            <div>
                <Navigation />
               <IdeaContent />
                
            </div>
        )
    }
}

export default Ideas;
