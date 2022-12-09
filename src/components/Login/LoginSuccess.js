import { Link } from "react-router-dom";
import '../Button.css';
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const LoginSuccess = (
  {
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
  
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
      <div>
        <h1>Login Success</h1>
        <Link to='/Noticeboard' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
      </div>
    );
  };
  
  export default LoginSuccess;
  