import React from "react";
import clasess from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealItemForm = () => {
    return (
        <form className={clasess.form}>
            <Input label="Amount" input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button>+ add</button>
        </form >
    )
}

export default MealItemForm;