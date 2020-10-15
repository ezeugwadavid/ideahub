import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import GroupContent from './GroupContent';
import '../../Groups.css';


export default class Groups extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <GroupContent />
            </div>
          
        )
    }
}
