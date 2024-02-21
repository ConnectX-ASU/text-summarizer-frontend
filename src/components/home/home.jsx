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
    <div className="home bg-dark w-100 min-vh-100 mb-5">
      <div className="header bg-dark">
        <span className="title mx-1">Connect X Text Summarizer</span>
        <FontAwesomeIcon
          className="icon user mx-2"
          icon={faUser}
          style={{ color: "white" }}
          onClick={() => navigation("/Login")}
        />
      </div>
      <div className="summary-box">
        <div className="options">
          <span>summary length</span>
          <input type="range" className="range"></input>
          <FontAwesomeIcon className="icon trash" icon={faTrashCan} />
        </div>
        <div className="input area">
          input
          <div className="bottom left">
            <FontAwesomeIcon className="icon" icon={faUpload} />
            <button className="summarize-btn">Summarize</button>
          </div>
        </div>
        <div className="output area">
          output
          <div className="bottom right">
            <FontAwesomeIcon className="icon" icon={faDownload} />
            <FontAwesomeIcon className="icon" icon={faCopy} />
          </div>
        </div>
      </div>
    </div>
  );
}
