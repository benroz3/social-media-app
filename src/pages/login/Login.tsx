import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="left">
          <h3>Ben-Social-App</h3>
          <span className="desc">
            Connect with friends and the world around you on Ben-Social-App.
          </span>
        </div>
        <div className="right">
            <div className="box">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="logButton">Login</button>
                <span>Forgot Password?</span>
                <button className="regButton">Create a new account</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
