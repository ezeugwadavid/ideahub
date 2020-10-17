import React, { Component } from 'react';
import Navigation from '../dashboard/Navigation';
import Body from '../dashboard/Body';




 class Dashboard extends Component  {

  state = {
    dashboard: false  
}

componentDidMount(){
  this.toggleDashboardActive()
}




  toggleDashboardActive(){
  this.setState({ dashboard: true})

   }

 

   render() {
   return (
    <div>
      <Navigation dashboardActive={this.state.dashboard} />
      <Body />

    </div>

   );
 }
};

 export default Dashboard;
