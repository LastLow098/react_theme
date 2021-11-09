import './App.css';
import React, {Component} from 'react'
import $ from 'jquery'
import Title from './Title'
import SubTitle from './subTitle';
import Range from './Range';
import Side from './Side';

function main_currency() {
  if ($('#change_1').attr('data-click') === "1") {
    let  number = 0.027 * Number($('#range1').val())
    $('#currency').html(new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency',
        minimumFractionDigits: 0
    }).format(number.toFixed(0)))
  }else{
    let percent = 0.027
    let money = Number($('#range1').val())
    let month = Number($('#range2').val())
    let number = money * percent * Math.pow(1 + percent, month) / (Math.pow(1 + percent, month) - 1)
    $('#currency').html(new Intl.NumberFormat('ru-RU', {
      currency: 'rub',
      style: 'currency',
      minimumFractionDigits: 0
  }).format(number.toFixed(0)))
  }
}

class App extends Component { 
  cliked_btn = () => {
      $('.alert').fadeIn(200).delay(1000).fadeOut(200)
  }

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
          $('#range_change_1').html(new Intl.NumberFormat('ru-RU', {
                currency: 'rub',
                style: 'currency',
                minimumFractionDigits: 0
            }).format(rangeChan.value))
      }else {
          rangeValueNew = ((rangeChan.value - 2) * 100) / 10
          if (rangeChan.value < 5) {
            $('#range_change_2').html(rangeChan.value + ' месяца')
          }else{
            $('#range_change_2').html(rangeChan.value + ' месяцев')
          }
      }

      main_currency()

      rangeChan.style.background = "-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b "+ rangeValueNew +"%, rgb(215,216,220) "+ rangeValueNew +"%, rgb(215,216,220) 100%)"
  }

  cliked_change = (show) => {
      let main_color =  'rgb(103,172,91)'
      let second_color = 'rgb(215,216,220)';
      $('.' + $(show.target).attr('class')).css({
        'border': '3px solid ' + second_color,
        'z-index': 0
      })
      $(show.target).css({
        'border': '3px solid ' + main_color,
        'z-index': 1
      })
      if ($(show.target).attr('id') === 'change_1') {
        $(show.target).attr('data-click', "1")
        $("#change_2").attr('data-click', "0")
      }else {
        $(show.target).attr('data-click', "1")
        $("#change_1").attr('data-click', "0")
      }

      main_currency()
  }

  state = { width: window.innerWidth, height: 0 };

  render() {
      var width = this.state.width / 1520
      if (width < 1) {
        width = 1
      }
      return (
        <div className="main" style={{zoom: width}}>
          <div className="alert">
            Заявка оформлена
          </div>
          <Title /> 
          <div className="sub_main">
            <div className="sub_main_items">
              <SubTitle 
              toCliked={this.cliked_change}
              />
              <Range 
              toCurrency={this.toCurrency}
              changeRange={this.changeRange}
              />
              <div className="main_info main_info_mar">Условия выдачи займа могут отличаться, исходя из анализа документов и состояния вашего автомобиля</div>
            </div>
            <div className="sub_main_items">
              <Side 
              toCurrency={this.toCurrency}
              cliked_btn={this.cliked_btn}
              />
            </div>
          </div>
        </div>
      )
    }
    updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
}

export default App;
