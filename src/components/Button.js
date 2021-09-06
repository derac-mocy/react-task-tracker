import React from 'react'
import PropTypes from 'prop-types'


// using ES7's function snippet instead of using React Class
const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className='btn'  
            style={{backgroundColor: color}}>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func.isRequired,
}
export default Button
