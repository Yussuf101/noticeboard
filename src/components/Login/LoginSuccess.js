import { Button } from "../Button";
import { Link } from "react-router-dom";


const LoginSuccess = () => {
    return (
      <div>
        <h1>Login Success</h1>
        <button
          className="register-input-btn login-btn"
          type="submit"
          onClick={<Link to='/noticeboard'></Link>}
        >
          NoticeBoard
        </button>
      </div>
    );
  };
  
  export default LoginSuccess;
  