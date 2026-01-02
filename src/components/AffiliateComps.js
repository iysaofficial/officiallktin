import React from "react";
import "../css/Affiliate.css";

const AffiliateComps = () => {
  return (
    <section className="event_sponser_area sec_pad">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="organized-image image col-lg-12 col-md-8 text-center">
                <h1 className="garis-bawah mb-5">Diselenggarakan Oleh</h1>
                {/* <img
                  src="./assets/logo/aff1.svg"
                  className="image-ipb m-4"
                  alt="gallery"
                /> */}
                {/* <img
                  src="./assets/logo/LOGO-AKTUARIA.png"
                  className=" image-ipb2 m-4"
                  alt="gallery"
                /> */}
                <img
                  src="./assets/logo/iysa.png"
                  className=" image-iysa m-4"
                  alt="gallery"
                />
                {/* <img
                  src="./assets/logo/aff4.svg"
                  className=" image-prestasididik m-4"
                  alt="gallery"
                /> */}
              </div>
            </div>
          </div>
          {/* <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h4 className="h_head sponser_title">Afiliation :</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AffiliateComps;
