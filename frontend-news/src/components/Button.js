const Button = ({click, disabled = false, children}) => {
    return (
        <button className='button' onClick={click} disabled={disabled}>{children}</button>
    )
}

export default Button
