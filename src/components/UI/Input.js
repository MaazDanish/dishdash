import clasess from './Input.module.css'

const Input = (props) => {
    return (
        <div className={clasess.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input} ></input>
        </div>
    )
}

export default Input;