import React from 'react'

const menu = ({img, title, price, desc}) => {
    return (
        <div className="item">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <div>
                    <h4>{title}</h4>
                    <span>${price}</span>
                </div>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}

export default menu
