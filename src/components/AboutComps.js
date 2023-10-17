import "../css/About.css";
import styled from "styled-components";
import React from "react";

const AboutComps = () => {
  return (
    <section className="her mt-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 hero-content mt-auto mb-auto text-center">
            {/* <h1 className="sub">WELCOME</h1> */}
            <h1 className="">IIF - Nasional</h1>
            <h2 className="">INVENTION AND INNOVATION FAIR NASIONAL 2024</h2>
            {/* <p className="">
                Indonesian Young Scientist Association (IYSA) is an institution
                engaged in developing Indonesian students potential, talents, and
                creativity by providing them opportunities to participate in
                scientific and non competitive competitions also activities in
                Indonesia and abroad.
              </p>
              <p>
                Since its inception, IYSA has been active in various activities so
                that it can be affiliated with many countries such as: Malaysia,
                Thailand, Singapore, China, India, Korea, Taiwan, Turkey, Tunisia,
                Egypt, Abu Dhabi and so on.{" "}
              </p> */}
            {/* <a href="/About" className="btn btn-primary">
                See More
              </a> */}
            <button type="button" class="slep btn-outline-primary mt-3">
              <a href="/" rel="noreferrer noopener">
                Pendaftaran Ditutup
              </a>
            </button>
          </div>

          <div className="col-md-6  hero-image text-center">
            <img src="assets/logo/surabaya.WebP " className="img-fluid"></img>
            {/* <QuoteWrapper className="flexCenter darkBg radius8 mx-auto">
              <QuotesWrapper className="mx-auto"> */}
                {/* <QuotesIcon /> */}
              {/* </QuotesWrapper>
              <div className="mx-auto">
                <p className="font15 whiteColor mx-auto">
                  <em>
                    Silahkan daftarkan team terbaik mu, selamat berlomba dan
                    juara.
                  </em>
                </p>
                <p
                  className="font13 orangeColor textRight"
                  style={{ marginTop: "10px" }}
                >
                  IYSA Official
                </p>
              </div>
            </QuoteWrapper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComps;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
