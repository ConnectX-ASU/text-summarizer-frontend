import style from "./UserHistory.module.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Userhistory() {
  const navigation = useNavigate();
  return (
    <>
      <div className="header bg-dark">
        <div
          className={`${style.headerCursor} inner-header col-md-10 d-flex justify-content-between mx-auto`}
        >
          <span className="title mx-2" onClick={() => navigation("/")}>
            ConnectX AI Summarizer
          </span>
          <div className="header-links d-flex justify-content-between w-25">
            <span>user history</span>
            <span onClick={() => navigation("/Login")}>login/user name</span>
          </div>
        </div>
      </div>
      <div className="w-100 min-vh-100 bg-dark pt-5">
        <div className="row mx-5 gy-3">
          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body input">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
