// import $ from 'jquery';

function SubTitle (props) {
    

    return (
        <div className="sub_title">
            <div className="sub_title_title">Тип платежа</div>
            <div className="sub_title_change">
                <div className="sub_title_change_items" onClick={props.toCliked} id="change_1" data-click="1">Дифференцированный</div>
                <div className="sub_title_change_items" onClick={props.toCliked} id="change_2" data-click="0">Аннуитевный</div>
            </div>
        </div>
    )
}

export default SubTitle