import React from "react";
import "../../css/low.css";

function lowtahun() {
  return (
    <section className="low-section">
      <div className="her mt-5">
        <div id="low" class="cards mx-auto text-center">
          <h1 class="card-header text-center p-3">Daftar Pemenang</h1>
          <h3>Pilih berdasarkan tahun event yang Anda ikuti</h3>
          <div className="wrapper-btn text-center">
            <a className="btn slep" href="/Jenjang24">2024</a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1qfi4WH9g_dKtAliKvOElrZpyJuyH5WVf/view?usp=sharing"
              target="_blank"
            >
              2023
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1GGVs9LOiirtrCoXhDK2MCu8Y_E7x-HHH/view?usp=sharing"
              target="_blank"
            >
              2022
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default lowtahun;
