
// import { Timeout } from 'Base';
// import Enums from 'Config/Enums';
// import HOCRequestComponent from 'HOC/Request';
// import { ModelRequest, ModelView } from './model';
// import Logger from 'Services/Logger';
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Header from './Header';

class HomPageComponent extends Component{
    render() {
        // const { timeout, ui } = this.state;
        return (
          <>
            <NavigationBar/>
            <Header></Header>
          </>
        );
      }
    }
    

export default HomPageComponent

