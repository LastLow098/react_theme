import './Range.sass'

function Range (props) {
    var styleRange1 = {
        background: '-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b '+ props.range1.styleBG +'%, #d7d8dc '+ props.range1.styleBG +'%, #d7d8dc 100%)'
    }
    var styleRange2 = {
        background: '-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b '+ props.range2.styleBG +'%, #d7d8dc '+ props.range2.styleBG +'%, #d7d8dc 100%)'
    }
    return (
        <div>
            <div className="range">
                <div className="range_text">
                    <div className="range_text_items">Сумма займа</div>
                    <div className="range_text_items">{props.toCurrency(props.range1.cost)}</div>
                </div>
                <input type="range" style={styleRange1} className="range_sub" min="15000" max="1000000" defaultValue="138000" id="range1" onChange={props.changeRange} />
                <div className="range_sub_items" >
                    <div className="range_sub_item">от {props.toCurrency(15000)}</div>
                    <div className="range_sub_item">до {props.toCurrency(1000000)}</div>
                </div>
            </div>
            <div className="range">
                <div className="range_text">
                    <div className="range_text_items">Срок займа</div>
                    <div className="range_text_items">{
                        (props.range2.cost < 5)
                        ?  props.range2.cost + " месяца"
                        :  props.range2.cost + " месяцев"
                    }</div>
                </div>
                <input type="range" style={styleRange2} className="range_sub" min="2" max="12" defaultValue="8" id="range2" onChange={props.changeRange} />
                <div className="range_sub_items">
                    <div className="range_sub_item">от 2 месяцев</div>
                    <div className="range_sub_item">до 12 месяцев</div>
                </div>
            </div>
        </div>
    )
}

export default Range