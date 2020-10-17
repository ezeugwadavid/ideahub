import React, { Component } from 'react';
import IdeaContent from './IdeaContent';
import Navigation from '../../components/dashboard/Navigation';
import '../../Idea.css';

 class Ideas extends Component {
     state = {
      ideas: false
  
     }


    componentDidMount() {
        this.toggleIdeasActive()
      }

      toggleIdeasActive(){
        this.setState({ ideas: true})
    
      }


    render() {
        return (
            <div>
                <Navigation ideasActive={this.state.ideas}/>
               <IdeaContent />
                
            </div>
        )
    }
}

export default Ideas;
