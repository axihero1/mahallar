import React from "react";
import "./center.css";

import { BsSearch } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import Yoshlar from "./Yoshlar/Yoshlar";
import Ayollar from './Ayollar/Ayollar';
import Temir from './Temir/Temir';
import Migrant from './Migrant/Migrant';

function Center() {
  const btn = () => {
    let classDiv = document.querySelector(".filter-container");
    classDiv.classList.toggle("active");
  };
  return (
    <div>
      <div className="center-container margin">
        <div className="center-item">
          <div className="input">
            <input type="search" placeholder="Search"></input>
            <BsSearch className="icons_search" />
          </div>
          <div className="center-navbar flex">
            <div className="center-nav flex">
                <p>Yoshlar daftari</p>
                <p>Ayollar daftari</p>
              <p>Temir daftar</p>
              <p>Migrant</p>
            </div>
            <div className="center-button flex">
              <button className="filter_btn flex filter1">
                Filter
                <HiFilter className="btn_icon filter" />
              </button>
            </div>
            <div className="filter-container">
              <div className="filter-box">
                <p>0-14 yoshgacha</p>
                <p>14-30 yoshgacha</p>
                <p>30 yoshdan yuqori</p>
              </div>
            </div>
          </div>
          <div className="head-container">
            <div className="head-item flex">
              <div className="head-start flex">
                <MdOutlineFormatListNumbered />
                <div className="tayoq"></div>
                <p>FIO</p>
              </div>
              <div className="head-finish flex">
                <div className="tayoq"></div>
                <p>Manzil</p>
              </div>
              <div></div>
            </div>
          </div>
        <Yoshlar/>
        </div>
      </div>
    </div>
  );
}

export default Center;
