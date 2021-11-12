import {React, Component} from 'react'
import './SubTitle.css'



class SubTitle extends Component {
    render() {
        var classNames1 = '',
            classNames2 = ''
            
        if (this.props.boolSub) {
            classNames1 = 'alteration'
        }else{
            classNames2 = 'alteration'
        }
        return (
            <div className="sub_title">
                <div className="sub_title_title">Тип платежа</div>
                <div className="sub_title_change">
                    <div className={'sub_title_change_items ' + classNames1} onClick={this.props.toClicker.bind(this, 'subTitle1')} id="change_1">Дифференцированный</div>
                    <div className={'sub_title_change_items ' + classNames2} onClick={this.props.toClicker.bind(this, 'subTitle2')} id="change_2">Аннуитевный</div>
                </div>
            </div>
        )
    }
}

export default SubTitle