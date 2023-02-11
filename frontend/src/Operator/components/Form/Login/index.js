import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated, authenticate, signin } from "../../../auth";

import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const history = useHistory()
  const [values, setValues] = useState({
    
  });
  const { email, password, loading, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      console.log({ data});
      if ( !data || data.error ) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
          // history.replace('/admin')
          props?.onReload?.()
        // });
      }
    });
  };

  // const redirectUser = () => {
  //   if (redirectToReferrer) {
  //     return <Redirect to="/admin" />;
  //   }
  // };

  const showError = () => (
    <div className=" alert alert-dark" style={{ display: error ? "" : "" }}>
      {error}
    </div>
  );
  const showLoading = () =>
    loading && (
      <div className="alert alert-dark">
        <h2>Loading...</h2>
      </div>
    );

  const signinForm = () => (
    <form className="d-grid gap-3">
      <div className="form-group">
        <label style={{ fontSize: "15px", color: "white" }}>Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          onChange={handleChange("email")}
          value={email}
        />
      </div>
      <div className="form-group">
        <label style={{ fontSize: "15px", color: "white" }}>Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={handleChange("password")}
          value={password}
        />
      </div>

      <div className="form-group mx-auto">
        <button className="btn btn-primary" onClick={clickSubmit}>
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <>
      <Header />
      {/* {JSON.stringify(values)} */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm- mx-auto">
            <div className="card" style={{ background: "#1B5E20" }}>
              <div className="card-header text-center card-img-top">
                <img
                  src="/images/login.png"
                  className="img-fluid rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div
                className="card-title text-center"
                style={{ fontSize: "35px", color: "white" }}
              >
                Login
              </div>
              <div className="card-body">
                {signinForm()}
                {/* {redirectUser()} */}
                <br />
                {showError}
                {showLoading}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Footer />
      </div>
    </>
  );
};
export default Signin;
