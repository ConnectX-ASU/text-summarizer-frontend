import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import img from "./download.png";

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

      <div className="home bg-dark w-100 min-vh-100 text-white">
        <div className="summary-box col-md-10">
          {/* <div className="header bg-dark text-center">
            <h2 className="mx-1 mb-3 text-light">
              <img src={img} width="100" height="200" alt="Logo" />
              Text Summarizer
            </h2>
          </div> */}

          <div className="options col-md-12 mt-2">
            <span>summary length</span>
            <input type="range" className="range" />
            <FontAwesomeIcon className="icon trash" icon={faTrashCan} />
          </div>

          <div className="summary-area row">
            <div className="col-md-6">
              <div className="area">
                <textarea
                  name="textarea"
                  rows="13"
                  cols="40"
                  className="w-100 p-2 form-control borders input"
                  placeholder="Enter your text"
                ></textarea>
                <FontAwesomeIcon className="icon" icon={faUpload} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="area output">
                <textarea
                  name="textarea"
                  disabled
                  rows="13"
                  cols="40"
                  className="w-100 p-2 form-control borders"
                  placeholder="Summary will appear here :)"
                ></textarea>
                <FontAwesomeIcon className="icon" icon={faDownload} />
                <FontAwesomeIcon className="icon" icon={faCopy} />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center col-md-12 mb-3">
            <button className="btn btn-outline-primary">Summarize</button>
          </div>
        </div>
      </div>
    </>
  );
}
