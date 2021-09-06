import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// using ES7's function snippet instead of using React Class
const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Hello" />
        </header>
    )
}

// Wrapping CSS values in a variable

// const headerStyle = {
//     color : 'red',
//     backgroundColor : "black",
// }


// setting default props' values with JS object
Header.defaultProps = {
    title : "Task Tracker",
}

// validating incoming props
Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header
