import './App.css';
import React, {Component} from 'react'
import Title from './Title'
import SubTitle from './subTitle';
import Range from './Range';

class App extends Component {
    render() {
      return (
        <div className="main">
          <Title /> 
          <div className="sub_main">
            <div className="sub_main_items">
              <SubTitle />
              <Range />
            </div>
          </div>
        </div>
      )
    }
}

export default App;
