import React, { useState } from "react";
import ApplicationQuery from "./Application Query";
import Caseno from "./CaseNO";
import DirectApplicant from "./Direct Applicant";
import Fees from "./Fees";
import OtherPublicAuthority from "./Other Public Authority";
import Header from "../Header";

const ApplicationInputForm = () => {
  const [state, setState] = useState({
    input: null,
    direct: null,
    other: null,
    fees_details: null,
    query: null,
  });


  function showAlert(message) {
    alert(message)
  }

  const saveInput = (input) => {
    setState({ ...state, input: input });
    showAlert("Inputs are saved successfully")
  };
  const saveDirect = (obj) => {
    setState({ ...state, direct: obj });
    showAlert("Direct applicant is saved successfully")

  };
  const saveOther = (obj) => {
    setState({ ...state, other: obj });
    showAlert("Public authority data is saved successfully")
  };
  const saveFees = (obj) => {
    setState({ ...state, fees_details: obj });
    showAlert("Applicant fees is saved successfully")
  };
  const saveQuery = (obj) => {
    setState({ ...state, query: obj });
    showAlert("Applicant  query is saved successfully")
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm- mx-auto">
            <div className="card" style={{boxShadow:'8px 8px grey'}}>
              <div className="card-header">
                <a
                  class="btn btn-success"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Input Form
                </a>
              </div>
              <div class="collapse" id="collapseExample">
                <Caseno saveData={saveInput} />
              </div>
            </div>
            <br />
            { (state.input != null && 
            state.input?.apply) &&
              <div className="card"  style={{boxShadow:'8px 8px grey'}}>
                <div className="card-header">
                  <a
                    class="btn btn-success"
                    data-bs-toggle="collapse"
                    href="#collapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                  >
                    Direct Applicant
                  </a>
                </div>
                <div class="collapse" id="collapseExample1">
                  <DirectApplicant saveData={saveDirect} caseno={state.input?.caseno} />
                </div>
              </div>
            }
            {( state.input != null &&  state.input?.apply === "other") && 
              <div className="card"  style={{boxShadow:'8px 8px grey'}}>
                <div className="card-header">
                  <a
                    class="btn btn-success"
                    data-bs-toggle="collapse"
                    href="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                  >
                    Other Public Authority
                  </a>
                </div>
                <div class="collapse" id="collapseExample2">
                  <OtherPublicAuthority saveData={saveOther} caseno={state.input?.caseno}  />
                </div>
              </div>
            }
            <br />
            { (state.input && (state.direct || state.other )) &&<div className="card"  style={{boxShadow:'8px 8px grey'}}>
              <div className="card-header">
                <a
                  class="btn btn-success"
                  data-bs-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  Fees Details
                </a>
              </div>
              <div class="collapse" id="collapseExample3">
                <Fees saveData={saveFees} caseno={state.input?.caseno} />
              </div>
            </div>}
            <br />
            { (state.input && (state.direct || state.other ) && state.fees_details ) && <div className="card"  style={{boxShadow:'8px 8px grey'}}>
              <div className="card-header">
                <a
                  class="btn btn-success"
                  data-bs-toggle="collapse"
                  href="#collapseExample4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  Application Query
                </a>
              </div>
              <div class="collapse" id="collapseExample4">
                <ApplicationQuery saveData={saveQuery} caseno={state.input?.caseno}/>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationInputForm;
