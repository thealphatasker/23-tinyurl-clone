import React from 'react';
import './BodyMain1.css';

const BodyMain1 = () => {
  return (
    <div className="body-part1">
      <div className="body-p-left">
        <div className="bpl-heading">
          <h1>URL Shortener, Branded <br /> Short Links & Analytics</h1>
        </div>


        <div className="bpl-paragraph">
          <p className="bpl-paragraph1">
            Welcome to the original link shortener — simplifying the Internet <br />
            through the power of the URL since 2002.
          </p>

          <p className="bpl-paragraph2">
            You can use branded domains for fully custom links, track link
            analytics, <br /> and enjoy other powerful features with our paid plans.
          </p>

        </div>

        <div className="bpl-btn">
          <button className="bpl-btn-plans">View Plans</button>
          <button className="bpl-btn-account">Create Free Account</button>
        </div>
      </div>

      {/* Right side */}
      <div className="body-p-right">
        <button className="bpr-shorten-btn">
          <i className="bpr-shorten-btn-icon fa-solid fa-link" style={{ color: '#000000' }}></i>
          Shorten a Link
        </button>
        <button className="bpr-qr-btn">
          <i className="bpr-qr-btn-icon fa-solid fa-qrcode" style={{ color: 'rgb(0, 0, 0)' }}></i>
          Generate QR Code
        </button>

        <div className="Rightside-box">
          <form className="body-p-right-form" onSubmit={(e) => e.preventDefault()}>
            <label className="bpr-form-label" htmlFor="user-url">
              <i className="bpr-form-label-icon fa-solid fa-location-arrow" style={{ color: 'rgb(0, 0, 0)' }}></i>
              Long URL
            </label>
            <br />
            <input className="bpr-form-input" type="text" name="user-rule" id="user-url" placeholder="Paste your long URL here" required />
            <br />
            <div className="bottom-input">
              <div className="bpr-form-p2">
                <label className="bpr-form-label" htmlFor="bpr-form-select1">
                  <i className="bpr-form-label-icon fa-solid fa-location-arrow" style={{ color: 'rgb(0, 0, 0)' }}></i>
                  Domain
                </label>
                <br />
                <select className="bpr-form-select" name="bpr-form-select1" id="bpr-form-select1">
                  <option value="tinyurl.com">tinyurl.com</option>
                  <option value="theahsan.com">theahsan.com</option>
                </select>
              </div>
              <div className="bpr-form-p2-input2">
                <label className="bpr-form-label" htmlFor="alias-url">
                  <i className="bpr-form-label-icon fa-solid fa-location-arrow" style={{ color: 'rgb(0, 0, 0)' }}></i>
                  Alias (optional)
                </label>
                <br />
                <input className="bpr-form-input2" type="text" name="alias-rule" id="alias-url" placeholder="Paste your long URL here" required />
                <br />
                <label className="bpr-form-4" htmlFor="alias-url">Must be at least 5 characters</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyMain1;
