import "./Register.scss";

const Register = () => {
  return <div className="register">
    <div className="registerContainer">
        <div className="left">
          <h3>Ben-Social-App</h3>
          <span className="desc">
            Connect with friends and the world around you on Ben-Social-App.
          </span>
        </div>
        <div className="right">
            <div className="box">
                <input type="text" placeholder="Fullname" />
                <input type="date" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="logButton">Register</button>
                <span>Already signed in?</span>
                <button className="regButton">Login</button>
            </div>
        </div>
      </div>
  </div>;
};

export default Register;
