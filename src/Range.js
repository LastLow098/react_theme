// import React, {Component} from 'react'

function Range (props) {
        const styleRange = {
            background: '-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b 60%, #d7d8dc 60%, #d7d8dc 100%)'
        }
        return (
            <div>
                <div className="range">
                    <div className="range_text">
                        <div className="range_text_items">Сумма займа</div>
                        <div className="range_text_items">{props.toCurrency(138100)}</div>
                    </div>
                    <input type="range" className="range_sub" id="range1" min="15000" max="1000000" defaultValue="138000" onChange={props.changeRange.bind(this, 'range1')} />
                    <div className="range_sub_items">
                        <div className="range_sub_item">от {props.toCurrency(15000)}</div>
                        <div className="range_sub_item">до {props.toCurrency(1000000)}</div>
                    </div>
                </div>
                <div className="range">
                    <div className="range_text">
                        <div className="range_text_items">Срок займа</div>
                        <div className="range_text_items">8 месяцев</div>
                    </div>
                    <input type="range" style={styleRange} className="range_sub" id="range2" min="2" max="12" defaultValue="8" onChange={props.changeRange.bind(this, 'range2')} />
                    <div className="range_sub_items">
                        <div className="range_sub_item">от 2 месяцев</div>
                        <div className="range_sub_item">до 12 месяцев</div>
                    </div>
                </div>
            </div>
        )
}

export default Range