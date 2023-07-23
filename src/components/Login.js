import React from "react";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container my-5">
      <h3 className="text-center my-4">My Account</h3>
        <div className="row border">
          <div className="col-md-6">
            <form className="row g-3 p-5">
          <h5>LOGIN</h5>
          <p>If you have an account with us, please log in.</p>
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <div className="p-5">
            <h5>NEW CUSTOMER?</h5>
            <p>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>

            <div className="col-12">
            <Link to="/signup">

                <button type="submit" className="btn btn-primary">
                  CREATE AN ACCOUNT
                </button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
