"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footTxt">
        <div>
          <h2>explore the Reginas</h2>
          <p>and uphold their legacy from within..</p>
          <br />
          <div className="footSocials">
            <i
              className="bi bi-twitter-x"
              title="X"
              onClick={() => {
                window.open("https://mobile.x.com/EmiiShion");
              }}
            ></i>
            <i
              className="bi bi-twitch"
              title="twitch"
              onClick={() => {
                window.open("https://twitch.tv/EmiiShion");
              }}
            ></i>
            <i
              className="bi bi-youtube"
              title="youtube"
              onClick={() => {
                window.open("https://youtube.com/@EmiiShion");
              }}
            ></i>
            <i
              className="bi bi-discord"
              title="discord"
              onClick={() => {
                window.open("https://discord.gg/bwPvTbqwD6");
              }}
            ></i>
            <i
              className="bi bi-envelope-at-fill"
              title="email"
              onClick={() => {
                window.open("mailto:EmiiShionALVR@gmail.com", "_self");
              }}
            ></i>
            {/* <i
              className="bi bi-moon-fill"
              title="our vtNet offering"
              onClick={() => {
                window.open("https://tbmassoc.github.io/vtNet/emiishion");
              }}
            ></i> */}
          </div>
          <br />
          <p className="vtNet-foot">
            ©2022{" "}
            <a
              rel="noopener noreferrer"
              className="vtNetLnk"
              onClick={() => {
                // window.open("https://tbmassoc.github.io/vtNet");
                window.open("https://tbmassoc.github.io/vtNet/emiishion");
              }}
              title="explore our vtNet offering"
            >
              vt<b className="vtNet-netDesig">Net</b>, a tbmassoc network&ensp;
              <i
                style={{ display: "inline-block" }}
                className="bi bi-moon-fill"
              ></i>
            </a>
          </p>
        </div>
      </div>
      <div>
        <img src="/images/promo_EmiiLeidram.png" alt="" />
      </div>
    </footer>
  );
};

export const ReginaPromote: React.FC = () => {
  return (
    <div className="reginaPromote">
      <div className="reginaSplit">
        <img
          src="/images/model/trailer/20251125_1.png"
          alt=""
          style={{ objectPosition: "56.25% center" }}
        />
        <img
          src="/images/model/trailer/20251125_2.png"
          alt=""
          style={{ objectPosition: "43.75% center" }}
        />
      </div>
      <div className="reginaTxt">
        <div>
          <h1>
            two worlds meet
            <br />
            at an unexpected moment..
          </h1>
          <br />
          <p>
            when two worlds felt like everything around them fell apart, one
            fate brought them together -- albeit in an unexpected manner.
          </p>
          <br />
          <p>
            can they work with each other to overcome the odds and become the
            Regents of the Future?
          </p>
          <br />
          <p>
            <b>their story is about to be unveiled soon..</b>
          </p>
          {/* <br />
          <button>explore their story</button> */}
        </div>
      </div>
    </div>
  );
};
