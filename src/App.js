import './App.css';
import React, {Component} from 'react'
import Title from './Title/Title'
import SubTitle from './SubTitle/SubTitle';
import Range from './Range/Range';
import Side from './Side/Side';


class App extends Component { 
	toCurrency = price => {
		return new Intl.NumberFormat('ru-RU', {
			currency: 'rub',
			style: 'currency',
			minimumFractionDigits: 0
		}).format(price)
	}

	changeRange = event => {
		if (event.target.id === 'range1') {
			const range = this.state.range1
			range.styleBG = ((event.target.value - 15000) * 100) / 995000
			range.cost = event.target.value
			this.setState({
				range1: range
			})
		}else {
			const range = this.state.range2
			range.styleBG = ((event.target.value - 2) * 100) / 10
			range.cost = event.target.value
			this.setState({
				range2: range
			})
		}


	}

	toClicker = classNames => {
		if (classNames === 'subTitle1') {
			this.setState({
				subTitle: 1
			})
			}else {
			this.setState({
				subTitle: 0
			})
		}
	}

	mainCost = () => {
		var cost
		if (this.state.subTitle) {
			cost = Number(0.027 * this.state.range1.cost)
		}else {
			cost = Number(this.state.range1.cost * 0.027 * Math.pow(1 + 0.027, this.state.range2.cost) / (Math.pow(1 + 0.027, this.state.range2.cost) - 1))
		}
		return cost.toFixed()
	}


	state = { 
		width: window.innerWidth, 
		subTitle: 1,
		range1: {
			styleBG: 13.5,
			cost: 138000
		},
		range2: {
			styleBG: 60,
			cost: 8
		}
	};

	render() {
		var width = this.state.width / 1520
		if (width < 1) {
			width = 1
		}
		return (
			<div className="main" style={{zoom: width}}>
				<Title /> 
				<div className="sub_main">
					<div className="sub_main_items">
						<SubTitle 
							toClicker={this.toClicker}
							boolSub={this.state.subTitle}
						/>
						<Range 
							toCurrency={this.toCurrency}
							changeRange={this.changeRange}
							range1={this.state.range1}
							range2={this.state.range2}
						/>
						<div className="main_info main_info_mar">Условия выдачи займа могут отличаться, исходя из анализа документов и состояния вашего автомобиля</div>
					</div>
					<div className="sub_main_items">
						<Side 
							toCurrency={this.toCurrency}
							mainCost={this.mainCost}
						/>
					</div>
				</div>
			</div>
		)
	}
	updateDimensions = () => {
		this.setState({ width: window.innerWidth });
	};
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
}

export default App;
