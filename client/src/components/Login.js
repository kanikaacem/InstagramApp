function Login({ register }) {
  const LoginRight = () => {
    return (
      <div className="LoginRight">
        <input type="email" className="LoginInput" placeholder="Email" />
        <input type="password" className="LoginInput" placeholder="Password" />
        <button className="LoginButton">Login In</button>
        <span className="ForgetPassword">Forget Password</span>
        <button className="NewAccount">Create a New Account</button>
      </div>
    );
  };

  const RegisterRight = () => {
    return (
      <div className="LoginRight">
        <input type="text" className="LoginInput" placeholder="Username" />
        <input type="email" className="LoginInput" placeholder="Email" />
        <input type="password" className="LoginInput" placeholder="Password" />
        <input
          type="password"
          className="LoginInput"
          placeholder="Confirm Password"
        />
        <button className="LoginButton">Sign up</button>
        <button className="NewAccount">Log into Account</button>
      </div>
    );
  };
  return (
    <div className="LoginPage">
      <div className="LoginPageWrapper">
        <div className="LoginPageContainer">
          <div className="Loginleft">
            <h1 className="AppName"> SocialApp</h1>
            <span className="AppDescription">
              Connect with Friends and world around you on SocialApp
            </span>
          </div>
          {register === "register" ? (
            <RegisterRight></RegisterRight>
          ) : (
            <LoginRight></LoginRight>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
