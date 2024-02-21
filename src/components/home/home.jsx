import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home () {
    const navigation = useNavigate();
    return (
        <div className="home">
            <header>
                <span className="title">AI Summarizer</span>
                <FontAwesomeIcon className="icon user" icon={faUser} style={{color: "black"}} onClick={() => navigation("/Login")}/>
            </header>
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
