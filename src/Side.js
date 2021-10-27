function Side(props) {
    return (
        <div className="main_side">
            <div className="main_side_items">
                <div className="main_side_item">
                    <div className="main_side_item_title">Ставка</div>
                    <div className="main_side_item_info">2.7%</div>
                </div>
                <div className="main_side_item">
                    <div className="main_side_item_title">Ежемесячный платеж</div>
                    <div className="main_side_item_info">{props.toCurrency(3729)}</div>
                </div>
            </div>
            <button className="main_side_submit">Подать заявку</button>
            <div className="main_side_info main_info">Расчет займа предварительный</div>
        </div>
    )
}

export default Side