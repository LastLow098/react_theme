import './Side.sass'

function Side(props) {
    var visit
    props.opacityBtn ? visit = 'visible' : visit = 'hidden' 
    return (
        <div className="main_side">
            <div className="main_side_items">
                <div className="main_side_item">
                    <div className="main_side_item_title">Ставка</div>
                    <div className="main_side_item_info">2.7%</div>
                </div>
                <div className="main_side_item">
                    <div className="main_side_item_title">Ежемесячный платеж</div>
                    <div className="main_side_item_info" id="currency">{props.toCurrency(props.mainCost())}</div>
                </div>
            </div>
            <button className="main_side_submit" onClick={props.cliked_btn}>Подать заявку</button>
            <div className="main_side_info main_info">Расчет займа предварительный</div>
            <div className="alert" style={{
                opacity: props.opacityBtn,
                visibility: visit
            }}>
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                Заявка успешно отправлена
            </div>
        </div>
    )
}

export default Side