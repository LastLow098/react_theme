import './App.sass';
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
		var index
		event.target.id === 'range1' ? index = 0 : index = 1
		const range = this.state.range
		range[index].styleBG = index ? ((event.target.value - 2) * 100) / 10 : ((event.target.value - 15000) * 100) / 985000
		range[index].cost = event.target.value
		this.setState({ range })
	}

	toClicker = classNames => {
		var subTitle
		classNames === 'subTitle1' ? subTitle = 1 : subTitle = 0
		this.setState({ subTitle })
	}

	mainCost = () => {
		var cost
		if (this.state.subTitle) {
			cost = Number(0.027 * this.state.range[0].cost)
		}else {
			cost = Number(this.state.range[0].cost * 0.027 * Math.pow(1 + 0.027, this.state.range[1].cost) / (Math.pow(1 + 0.027, this.state.range[1].cost) - 1))
		}
		return cost.toFixed()
	}
	
	state = { 
		width: window.innerWidth, 
		subTitle: 1,
		range: [
			{
				styleBG: 13.5,
				cost: 138000
			},
			{
				styleBG: 60,
				cost: 8
			}
		]
	};

	render() {
		var width
		(this.state.width / 1520) > 1 ? width = this.state.width / 1520 : width = 1
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
							range = {this.state.range}
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
