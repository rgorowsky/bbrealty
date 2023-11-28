import React from "React";
import { BottomLinks } from "./BottomLinks";
import "./style.css";

export const DesktopWepage = () => {
  return (
    <div className="desktop-wepage">
      <div className="div">
        <BottomLinks
          className="bottom-links-instance"
          lookingToBuy="looking-to-buy.svg"
          lookingToSell="looking-to-sell.svg"
          schedule="schedule-consultation.svg"
        />
        <div className="TRANSFORMATIVE">TRANSFORMATIVE SERVICE &amp; CARE</div>
        <div className="banner-photo">
          <img className="img" alt="Banner photo" src="assets/banner-photo.png" />
        </div>
        <div className="nav">
          <div className="top-left-menu">
            <div className="search-homes">
              <div className="text-wrapper">SEARCH HOMES</div>
            </div>
            <div className="buying">
              <div className="text-wrapper-2">BUYING</div>
            </div>
            <div className="selling">
              <div className="text-wrapper-3">SELLING</div>
            </div>
          </div>
          <div className="logo">
            <img className="logo-large" alt="Logo large" src="assets/logo-large.png" />
          </div>
          <div className="top-right-menu">
            <div className="div-wrapper">
              <div className="text-wrapper-4">ABOUT</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-5">CONTACT</div>
            </div>
            <div className="client-testimony">
              <div className="text-wrapper-6">CLIENT TESTIMONY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
