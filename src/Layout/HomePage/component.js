
// import { Timeout } from 'Base';
// import Enums from 'Config/Enums';
// import HOCRequestComponent from 'HOC/Request';
// import { ModelRequest, ModelView } from './model';
// import Logger from 'Services/Logger';
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Header from './Header';
import Categories from './categories';
import Products from './products';

class HomPageComponent extends Component{
    render() {
        // const { timeout, ui } = this.state;
        return (
          <>
            <NavigationBar/>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
          </>
        );
      }
    }
    

export default HomPageComponent

