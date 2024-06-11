import React from "react";
import "../../../css/low.css";

function Jenjang23() {
  return (
    <section className="low-section">
      <div className="her mt-5">
        <div id="low" class="cards mx-auto text-center">
          <h1 class="card-header text-center p-3">Daftar Pemenang 2023</h1>
          <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
          <div className="wrapper-btn text-center">
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1fYdO4ZKNzGFyv6fzN3t1geZeJyNTj6WS/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Special Award
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1UtbqjW5cgSdhFBbxTdzm0AQZjU4qsSSy/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Universitas
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1ZuSPFpmb81F4gBcxM9GqEbNqwpUrsBph/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Sekolah Menengah Atas (SMA)
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1zlqjh6vaVRF6P5ABERib0STI00DVUBm9/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Sekolah Menengah Pertama (SMP)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jenjang23;
