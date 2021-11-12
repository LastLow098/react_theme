import './SubTitle.sass'

function SubTitle (props) {
    var classNames = ["sub_title_change_items ", "sub_title_change_items "]
    classNames[!props.boolSub ? 1 : 0] += "alteration"
    return (
        <div className="sub_title">
            <div className="sub_title_title">Тип платежа</div>
            <div className="sub_title_change">
                <div className={classNames[0]} onClick={props.toClicker.bind(this, 'subTitle1')}>Дифференцированный</div>
                <div className={classNames[1]} onClick={props.toClicker.bind(this, 'subTitle2')}>Аннуитевный</div>
            </div>
        </div>
    )
}

export default SubTitle