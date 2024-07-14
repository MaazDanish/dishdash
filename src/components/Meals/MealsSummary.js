import React from "react";
import classess from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classess.summary}>
            <h2>Delicious Food Delivered To You</h2>
            <p>Craving something tasty? Let us bring your favorite dishes straight to your door.</p>
            <p>From local favorites to international delights, we’ve got something to satisfy every palate.</p>
        </section>

    )
}

export default MealsSummary;