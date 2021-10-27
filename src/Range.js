function Range () {
    return (
        <div className="range">
            <div className="range_text">
                <div className="range_text_items">Сумма займа</div>
                <div class="range_text_items">138100 P</div>
            </div>
            <input type="range" className="range_sub" min="15000" max="1000000" value="138000" />
            <div className="range_sub_items">
            <div class="range_sub_item">от 15000</div>
            <div class="range_sub_item">до 1000000</div>
            </div>
        </div>
    )
}

export default Range