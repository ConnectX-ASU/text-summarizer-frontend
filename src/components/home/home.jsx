import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigation = useNavigate();
  return (
    <>
      <div className="header bg-dark">
        <span className="title mx-2">UserName</span>
        <FontAwesomeIcon
          className="mr-auto icon user"
          icon={faUser}
          style={{ color: "white" }}
          onClick={() => navigation("/Login")}
        />
      </div>
    {/* //////////!logo and name */}
      {/* <div className=" bg-dark">
        <h1 className="title mx-1 text-light">Connect X </h1>

      </div> */}
      <div className="home bg-dark w-100 min-vh-100">

        <div className="summary-box col-md-10">

          <div className="options col-md-12 mt-2">
            <span>summary length</span>
            <input type="range" className="range"></input>
            <FontAwesomeIcon className="icon trash" icon={faTrashCan} />
          </div>

          <div className="summary-area">
            <div className="col-md-6">
              <div className="area">
                <textarea name="textarea" rows="13" cols="40" className="w-100 p-2 form-control borders" placeholder="Enter your text"></textarea>
                <FontAwesomeIcon className="icon" icon={faUpload} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="area">
                <textarea name="textarea" disabled rows="13" cols="40" className="w-100 p-2 form-control borders" placeholder="summary will appear here:)"></textarea>
                <FontAwesomeIcon className="icon" icon={faDownload} />
                <FontAwesomeIcon className="icon" icon={faCopy} />
              </div>
            </div>

          </div>

          <div className="d-flex justify-content-center align-items-center col-md-12 mb-3">
            <button className="btn btn-outline-primary">Summarize</button>
          </div>

        </div>
      </div >
    </>
  );
}