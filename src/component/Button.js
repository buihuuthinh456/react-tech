
import './Button.css'

function Button({children,type,onClick,buttonStyle,buttonSize,cName}){
    const STYLES = [
        'btn--primary',
        'btn--outline',
    ]
    const SIZES = [
        'btn--medium',
        'btn--large',
    ]

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkCName =  cName ? cName : ''

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkCName}`} onClick={onClick} type={type}>
            {children}
        </button>
    )

}


export default Button