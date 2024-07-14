import React from "react";
import classess from './MealsItem.module.css';

const MealsItem = (props) => {
    const price = `$${props.meal.price.toFixed(2)}`;
    return (
        <li className={classess.meal}>
            <div>
                <h3> {props.meal.name}</h3>
                <div className={classess.description}>{props.meal.description}</div>
                <div className={classess.price}>{price}</div>
            </div>
            <div></div>
        </li>
    )
}

export default MealsItem;