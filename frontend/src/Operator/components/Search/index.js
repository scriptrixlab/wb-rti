import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Search = () => {
  const [values, setValues] = useState({
    caseno: null,
    fullname: null,
    query: null,
  });

  const [caseDetails, setCaseDetails] = useState(null);

  const loadCase = async () => {
    if (values.caseno?.length === 0) return;
    const { data } = await axios.get(`/api/search`, {
      params: {
        caseno: values?.caseno,
        fullname: values?.fullname || undefined,
        query: values?.query || undefined,
      },
    });
    // console.log(data);
    if (!data) {
      return setCaseDetails(null);
    }
    setCaseDetails(data);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm- mx-auto">
            <div className="card">
              <div className="card-body">
                {/* <form  > */}
                <div class="row">
                  <div class="col">
                    <label>Case No</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input Case No "
                      value={values?.caseno}
                      onChange={(e) =>
                        setValues({ ...values, caseno: e.target.value })
                      }
                    />
                    <label>Date-Of-Application</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Input date of application "
                    />
                  </div>
                  <div class="col">
                    <label>Applicant Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input applicant name"
                    />
                    <label>Category</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="form-group text-center">
                  <button onClick={loadCase} className="btn btn-primary">
                    Search
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-header">
                <button type="button" class="btn btn-success">
                  <i class="bi bi-bell"></i>Pending
                </button>
              </div>
              <div className="card-body">
                <ul>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Case No
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Case No"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={caseDetails?.caseno}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Applicant Name
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Applicant Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={caseDetails?.Applicant?.fullname}
                    />
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Query</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea" value={caseDetails?.Query?.query} >
                      
                    </textarea>
                  </div>
                </ul>
                <div className="form-group text-center">
                  <a href="#" class="btn btn-primary">
                    view more....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
