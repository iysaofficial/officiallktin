import React, { useState, useEffect } from "react";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../data/term";
import "../../css/registration.css";
import Navigation from "../../components/NavigationComps";  

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");
  
  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setShowModal(true); // Tampilkan modal
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true); // Set status sudah diterima
    }
  }, []);

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                FORMULIR REGISTRASI
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Kompetisi untuk Registrasi LKTIN 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center m-5">
            <a
              className="btn btn-custom text-center m-5"
              onClick={() =>
                handleOpenModal("/indonesiaparticipants", indonesiaOnlineTerms)
              }
            >
              Kompetisi Daring<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>  

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Syarat & Ketentuan</h2>
            <div className="m-2">{termsContent}</div> {/* Isi dinamis */}
            <div className="checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms">Saya menyetujui Syarat & Ketentuan</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-custom"
                onClick={() => setShowModal(false)}
              >
                Kembali
              </button>
              <button className="btn btn-custom" onClick={handleAccept}>
                Terima & Proses
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeIndo;
