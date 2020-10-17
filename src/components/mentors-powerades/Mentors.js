import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import MentorsContent from './MentorsContent';
import '../../Mentors.css';

class Mentors extends Component {
    state = {
        mentors: false
      
    }


      componentDidMount() {
        this.toggleMentorsActive()
      }

      toggleMentorsActive(){
        this.setState({ mentors: true})
    
      }


    render() {
        return (
            <div>
                <Navigation mentorsActive={this.state.mentors}/>
                <MentorsContent />
                
            </div>
        )
    }
}

export default Mentors;
