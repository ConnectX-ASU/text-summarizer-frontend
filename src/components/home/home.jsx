// import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faDownload, faCopy, faTrashCan, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default function Home({onThemeChange, theme}) {
  const navigation = useNavigate();
   
  return (
    <>
      <div className = {`header bg-dark`}>
        <div className="theme">
          <span>
            <FontAwesomeIcon className="icon" onClick={onThemeChange} icon={ theme ?  faSun : faMoon} />            
          </span>
        </div>
        <div className="inner-header col-md-10 d-flex justify-content-between mx-auto">
            <span className="title mx-2">ConnectX AI Summarizer</span>
            <div className="header-links d-flex justify-content-between w-25">
                <span>user history</span>
                <span
                onClick={() => navigation("/Login")}
                >login/user name</span>
            </div>
        </div>
      </div>
     
      {/* //////////!logo and name */}

      <div className={`home bg-dark w-100 min-vh-100 ${theme ? "dark text-white" : "light text-dark"}`}>
        <div className="summary-box col-md-10">
          <div className="options col-md-12 mt-2">
            <span>summary length</span>
            <input type="range" className="range"></input>
            <FontAwesomeIcon className="icon trash" icon={faTrashCan} />
          </div>

          <div className="summary-area">
            <div className="col-md-6">
              <div className="area">
                <textarea
                  name="textarea"
                  rows="13"
                  cols="40"
                  className={`w-100 p-2 form-control borders input ${theme ? "text-white" : "text-dark"}`}
                  placeholder="Enter your text"
                ></textarea>
              <div className="bottom-icons d-flex justify-content-between align-items-center col-md-12 mb-3">
                <FontAwesomeIcon className="icon" icon={faUpload} />
                <button className="btn btn-outline-primary">Summarize</button>
              </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="area output">
                <textarea
                  name="textarea"
                  disabled
                  rows="13"
                  cols="40"
                  className="w-100 p-2 form-control borders "
                  placeholder="summary will appear here:)"
                  style={{resize: "none"}}
                ></textarea>
                <div className="bottom-icons">
                <FontAwesomeIcon className="icon" icon={faDownload} />
                <FontAwesomeIcon className="icon" icon={faCopy} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}