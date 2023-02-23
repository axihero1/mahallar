import React from "react";
import "./registratsiya.css";

function Registratsiya() {
  return (
    <div className="registr-container margin">
      <div className="registr-item1">
        <div className="registr-item">
          <div className="registr-box ">
            <input type="text" placeholder="Ismingiz" />
          </div>
          <div className="registr-box ">
            <input type="text" placeholder="Familiyangiz" />
          </div>
          <div className="registr-box">
            <input type="text" placeholder="Ochistva" />
          </div>
          <div className="registr-box ">
            <input type="text" placeholder="seriya raqami" />
          </div>
          <div className="registr-box ">
            <input type="file" />
          </div>
          <div className="registr-box">
            <input type="date" />
          </div>
        </div>
        <div className="registr-radio">
          <div className="radio-box">
            <strong htmlFor="temir">Temir daftarda turadimi</strong>
              <label htmlFor="ha1">Ha</label>
              <input type="radio" id="ha1" name="temir" /> <br />

              <label htmlFor="yuq1">Yuq</label>
              <input type="radio" id="yuq1" name="temir" />
          </div>
          <div className="radio-box">
            <strong htmlFor="temir">Hozir cheteldami</strong>
            <label htmlFor="ha2">Ha</label>
            <input type="radio" id="ha2" name="chet" /> <br />

            <label htmlFor="yuq2">Yuq</label>
            <input type="radio" id="yuq2" name="chet" />
          </div>
          <div className="radio-box">
            <strong htmlFor="nogiron">Nogironli bormi</strong>
            <label htmlFor="ha3">Ha</label>
            <input type="radio" id="ha3" name="nogiron" /> <br />

            <label htmlFor="yuq3">Yuq</label>
            <input type="radio" id="yuq3" name="nogiron" />
          </div>
          <div className="radio-box">
            <strong htmlFor="temir">Ayollar daftarida turadimi</strong>
            <label htmlFor="ha4">Ha</label>
            <input type="radio" id="ha4" name="ayollar" /> <br />

            <label htmlFor="yuq4">Yuq</label>
            <input type="radio" id="yuq4" name="ayollar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registratsiya;
