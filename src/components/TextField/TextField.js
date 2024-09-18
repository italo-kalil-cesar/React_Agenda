import './TextField.css'
export const TextField = (props) => {
    console.log(props);


    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} />
        </div>
    )
}