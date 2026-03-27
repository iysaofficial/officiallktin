import React from "react";
import "../../../css/low.css";

function Jenjang26() {
  return (
    <section className="low-section">
      <div className="her mt-5">
        <div id="low" class="cards mx-auto text-center">
          <h1 class="card-header text-center p-3">Daftar Pemenang 2026</h1>
          <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
          <div className="wrapper-btn text-center">
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1IU5NCrP_TQbM8xYzpEI3gDVI41XlOEEX/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Universitas
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1PJYz3uXGv7NzJ-vg0YpdaBCxPWUfCLR_/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Sekolah Menengah Atas (SMA)
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1UhqPEhBZbHISD77hdrpAWIxNNrK84PUo/view?usp=sharing"
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

export default Jenjang26;
