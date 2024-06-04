import React from "react";
import "../../../css/low.css";

function jenjang24() {
  return (
    <section className="low-section">
      <div className="her mt-5">
        <div id="low" class="cards mx-auto text-center">
          <h1 class="card-header text-center p-3">Daftar Pemenang</h1>
          <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
          <div className="wrapper-btn text-center">
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1TbK3s64M2q1y_sEYmMzxc2u0syNCbJUc/view?usp=sharing"
              target="_blank"
            >
              Universitas
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1is6djM5dXLTgGaz9bXtd-am9JcUevLLl/view?usp=sharing"
              target="_blank"
            >
              Sekolah Menengah Atas (SMA)
            </a>
            <a
              className="btn slep"
              href="https://drive.google.com/file/d/1UqXS0gG09yiqLAJ8iec0WMY0B4wZIfsU/view?usp=sharing"
              target="_blank"
            >
              Sekolah Menengah Pertama (SMP)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default jenjang24;
