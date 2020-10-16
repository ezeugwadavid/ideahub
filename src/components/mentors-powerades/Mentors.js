import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import MentorsContent from './MentorsContent';
import '../../Mentors.css';

class Mentors extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <MentorsContent />
                
            </div>
        )
    }
}

export default Mentors;
