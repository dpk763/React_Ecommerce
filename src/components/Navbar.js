import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
   
   
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              E-Com
            </Link>
          </div>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">           

          </div> */}

          <div className="d-md-none">
            <Link to="/cart" className="text-dark mx-4">
              <i className="bi bi-cart3 text-primary mx-2"></i>
              <span className="badge text-bg-danger">4</span>
            </Link>

            <Link to="/reg" type="button" className="btn btn-primary">
              <i className="bi bi-person-circle mx-2"></i>Log In / Register
            </Link>
          </div>

          <div style={{ width: "50rem" }} className="my-2 my-md-1">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text bg-primary text-light"
                  id="basic-addon2"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="d-none d-lg-block">
            <Link to="/cart" className="text-dark mx-4">
              <i className="bi bi-cart3 text-primary mx-2"></i>
              <span className="badge text-bg-danger">4</span>
            </Link>

            <Link to="/reg" type="button" className="btn btn-primary">
              <i className="bi bi-person-circle mx-2"></i>Log In / Register
            </Link>
          </div>
        </div>

      </nav>
        <ul className="nav d-flex justify-content-center bg-body-light">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newin">
              New In
            </Link>
          </li>
        </ul>
        
    </>
  );
};

export default Navbar;
