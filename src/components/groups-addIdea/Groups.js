import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import GroupContent from './GroupContent';
import '../../Groups.css';


export default class Groups extends Component {

    state = {
        groups: false
      
    }
    componentDidMount() {
        this.toggleGroupsActive()
      }

      toggleGroupsActive(){
        this.setState({ groups: true})
        
    
      }

      


    render() {
        return (
            <div>
            <Navigation groupsActive={this.state.groups}/>
            <GroupContent />
            </div>
          
        )
    }
}
