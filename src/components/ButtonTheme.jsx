/* eslint-disable react/prop-types */
import '../styles/ButtonTheme.css'

export const ButtonTheme = (props) => {
    return (
        <button className={`button ${props.theme}`} onClick={props.change}> 
            {`${props.theme} Theme`}
        </button>
    )
}
