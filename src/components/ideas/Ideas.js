import React, { Component } from 'react';
import IdeaContent from './IdeaContent';
import Navigation from '../../components/dashboard/Navigation';
import '../../Idea.css';

 class Ideas extends Component {
   state = {
     Ideas:
    [ 
      {
      id: '#2',
     ideaname: 'machine design and delivery web application',
     status: 'processing',
     submitdate: '6/11/2020'
      },

      {
      id: '#3',
     ideaname: 'machine design and delivery web  application',
     status: 'processing',
     submitdate: '6/11/2020'
      },

      {
      id: '#4',
     ideaname: 'machine design and delivery web application',
     status: 'processing',
     submitdate: '6/11/2020'
      },

      {
      id: '#2',
     ideaname: 'gas station locator and delivery web application',
     status: 'rejected',
     submitdate: '6/11/2020'
      }

    ]
   }




    render() {
        return (
            <div>
                <Navigation />
               <IdeaContent Ideas={this.state.Ideas} />
                
            </div>
        )
    }
}

export default Ideas;
