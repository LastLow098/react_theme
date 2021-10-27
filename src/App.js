import './App.css';
import React, {Component} from 'react'
import Title from './Title'
import SubTitle from './subTitle';
import Range from './Range';
import Side from './Side';

class App extends Component {

  toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency',
        minimumFractionDigits: 0
    }).format(price)
}

changeRange = (id) => {
  let rangeChan = document.querySelector('#'+ id)
  var rangeValueNew
  if (id === 'range1') {
      rangeValueNew = ((rangeChan.value - 15000) * 100) / 1000000
  }else {
      rangeValueNew = ((rangeChan.value - 2) * 100) / 10
  }
  rangeChan.style.background = "-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b "+ rangeValueNew +"%, rgb(215,216,220) "+ rangeValueNew +"%, rgb(215,216,220) 100%)"
}
    render() {
      return (
        <div className="main">
          <Title /> 
          <div className="sub_main">
            <div className="sub_main_items">
              <SubTitle />
              <Range 
              toCurrency={this.toCurrency}
              changeRange={this.changeRange}
              />
              <div className="main_info">Условия выдачи займа могут отличаться, исходя из анализа документов и состояния вашего автомобиля</div>
            </div>
            <div className="sub_main_items">
              <Side 
              toCurrency={this.toCurrency}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default App;
