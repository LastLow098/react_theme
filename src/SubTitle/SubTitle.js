import './SubTitle.css'



function SubTitle (props) {
    return (
        <div className="sub_title">
            <div className="sub_title_title">Тип платежа</div>
            <div className="sub_title_change">
                <div className="sub_title_alteration sub_title_change_items" onClick={props.toClicker} id="change_1">Дифференцированный</div>
                <div className="sub_title_change_items" onClick={props.toClicker} id="change_2">Аннуитевный</div>
            </div>
        </div>
    )
}

export default SubTitle