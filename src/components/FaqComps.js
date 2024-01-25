import "../css/Faq.css";

const FaqComps = () => {
  return (
    <section className="her mt-5">
      <div id="About" class="cards mx-auto">
        <div class="card-header text-center">FAQ</div>
        <div class="accordion" id="accordionExample">
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Setelah Mendaftar
          </h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Minsa, kapan kami akan mendapatkan LoA kami? Dikirimnya kemana
                sih?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Setelah pendaftaran kamu kami terima, kami akan mengirimkan
                email konfirmasi selambatnya 1X24 jam. Dan untuk LoA akan kami
                kirimkan ke alamat email ketua tim selambatnya 3X24 jam setelah
                pendaftaran.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Minsa, kapan kami akan mendapatkan LoA kami? Dikirimnya kemana
                sih
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Coba deh cek folder spam di email ketua tim kamu, mungkin email
                dari tim IYSA masuk ke folder spam.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Upload berkas lomba di mana sih Minsa ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Link drive untuk upload berkas dan link untuk upload bukti
                pembayaran akan dicantumkan di invoice.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingfour">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Aku mau bayar biaya registrasi nih tapi kok aku tidak bisa
                menemukan Invoicenya ya ? dan & pembayarannya di transfer kemana
                sih ?
              </button>
            </h2>
            <div
              id="collapsefour"
              class="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Link drive untuk upload berkas dan link untuk upload bukti
                pembayaran akan dicantumkan di invoice. Kalian akan mendapatkan
                invoice seperti ini 
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingfive">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Minsa, aku sudah bayar registrasinya nih, upload bukti
                pembayarannya kemana ya ?
              </button>
            </h2>
            <div
              id="collapsefive"
              class="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Jika sudah melakukan pembayaran, kamu bisa upload buktinya ke
                link yang tercantum di invoice, dan pastikan kamu mengisi dan
                mengupload bukti transfer dengan benar agar panitia dapat
                mendatanya dengan benar juga.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingsix">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                Kalau kuitansinya kapan di kirimkan ke kami ?
              </button>
            </h2>
            <div
              id="collapsesix"
              class="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Kuitansi pembayaran akan kami kirimkan maksimal 7 hari kerja ke
                email ketua tim, setelah kamu upload bukti pembayaran ya!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingseven">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseseven"
              >
                Minsa, satu minggu lagi penjurian nih kok aku belum terima
                jadwal presentasi tim aku ya ?
              </button>
            </h2>
            <div
              id="collapseseven"
              class="accordion-collapse collapse"
              aria-labelledby="headingseven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Jadwal presentasi peserta online akan kami kirimkan selambatnya
                2 hari sebelum penjurian berlangsung ke whatsapp grup dan juga
                email ketua tim. Pastikan kamu rajin cek informasi yang kami
                berikan di whatsapp grup dan juga email ya!
              </div>
            </div>
          </div>
        </div>

        {/* faq 2 */}

        <div class="accordion" id="accordionExample">
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Selama event berlangsung
          </h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingeight">
              <button
                class="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeight"
                aria-expanded="true"
                aria-controls="collapseeight"
              >
                Kapan jadwal presentasi akan diberikan oleh panitia ?
              </button>
            </h2>
            <div
              id="collapseeight"
              class="accordion-collapse collapse show"
              aria-labelledby="headingeight"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Jadwal presentasi akan kami berikan selambatnya 2 hari sebelum
                penjurian berlangsung atau bisa juga lebih cepat, dan kami
                kirimkan melalui WA grup dan juga e-mail ketua tim.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingnine">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsenine"
                aria-expanded="false"
                aria-controls="collapsenine"
              >
                Presentasi online menggunakan aplikasi apa? Zoom,Google meet
                atau yg lainnya?
              </button>
            </h2>
            <div
              id="collapsenine"
              class="accordion-collapse collapse"
              aria-labelledby="headingnine"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Untuk penjurian online kami selalu memakai aplikasi Zoom ya
                teman-teman, dan pastikan aplikasi Zoom kamu sudah yang terbaru
                yaa.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingten">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseten"
                aria-expanded="false"
                aria-controls="collapseten"
              >
                Kapan link zoom akan di berikan oleh panitia?
              </button>
            </h2>
            <div
              id="collapseten"
              class="accordion-collapse collapse"
              aria-labelledby="headingten"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Link Zoom akan kami berikan dihari penjurian, dan akan kami
                kirim berkala di grup sesuai jam presentasi tim kalian
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingeleven">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeleven"
                aria-expanded="false"
                aria-controls="collapseeleven"
              >
                Berapa banyak akun zoom yang bisa join dan penamaannya seperti
                apa?
              </button>
            </h2>
            <div
              id="collapseeleven"
              class="accordion-collapse collapse"
              aria-labelledby="headingeleven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Teman-teman bisa masuk ke Zoom maksimal dengan 5 akun untuk
                peserta, dan semua akun Zoom harus mengikuti format nama yang
                sudah kami berikan yaitu "Nomor ruangan_Nama Ketua Tim_Nama
                Institusi”.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingduabelas">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseduabelas"
                aria-expanded="false"
                aria-controls="collapseduabelas"
              >
                Berapa durasi peserta melakukan presentasi?
              </button>
            </h2>
            <div
              id="collapseduabelas"
              class="accordion-collapse collapse"
              aria-labelledby="headingduabelas"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Teman-teman akan diberikan waktu 15 menit untuk 1 sesi
                presentasi yang akan dibagi 2 yaitu 7 menit awal untuk
                presentasi dan 8 menit akhir untuk sesi tanya jawab dengan juri
              </div>
            </div>
          </div>
        </div>

        {/* faq 2 */}

        {/* faq 3 */}

        <div class="accordion" id="accordionExample">
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Setelah Acara
          </h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingsatu">
              <button
                class="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesatu"
                aria-expanded="true"
                aria-controls="collapsesatu"
              >
                Kapan pengumuman pemenang?
              </button>
            </h2>
            <div
              id="collapsesatu"
              class="accordion-collapse collapse show"
              aria-labelledby="headingsatu"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Pengumuman pemenang dilaksanakan pada hari terakhir disetiap
                event, kamu bisa cek tanggalnya di jadwal yang tertera di Guide
                Book.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingdua">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsedua"
                aria-expanded="false"
                aria-controls="collapsedua"
              >
                Di mana kami bisa melihat hasil pemenang
              </button>
            </h2>
            <div
              id="collapsedua"
              class="accordion-collapse collapse"
              aria-labelledby="headingdua"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Kamu bisa cek hasil pemenang di official website dari event yang
                kamu ikuti
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingtiga">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsetiga"
                aria-expanded="false"
                aria-controls="collapsetiga"
              >
                Kapan E-certificate akan dikirmkan
              </button>
            </h2>
            <div
              id="collapsetiga"
              class="accordion-collapse collapse"
              aria-labelledby="headingtiga"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                IYSA TIDAK mengirimkan E-Certificate untuk peserta Nasional atau
                Peserta Indonesia yang mengikuti event secara online. Peserta
                Nasional Online hanya akan mendapatkan sertifikat dalam bentuk
                TERCETAK/Hard yang nantinya akan dikirimkan bersama dengan
                medali melalui ekspedisi JNE
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingelempat">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseelempat"
                aria-expanded="false"
                aria-controls="collapseelempat"
              >
                Kapan pengiriman sertifikat peserta online?
              </button>
            </h2>
            <div
              id="collapseelempat"
              class="accordion-collapse collapse"
              aria-labelledby="headingelempat"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Sertifikat akan dikirimkan selambatnya satu bulan setelah
                pengumuman pemenang. Kamu bisa cek secara berkala resi
                pengiriman yang kami kirimkan di Whatsapp grup apakah sertifikat
                kamu sudah dikirim atau belum.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headinglima">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapselima"
                aria-expanded="false"
                aria-controls="collapselima"
              >
                Dimana kami bisa mendapatkan sertifikat supervisor/pembimbing?
              </button>
            </h2>
            <div
              id="collapselima"
              class="accordion-collapse collapse"
              aria-labelledby="headinglima"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Kamu bisa melihat dan mengunduh sertifikat supervisor/pembimbing
                di official website dari event yang kamu ikuti
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingenam">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseenam"
                aria-expanded="false"
                aria-controls="collapseenam"
              >
                Bagaimana cara melakukan penggandaan medali?
              </button>
            </h2>
            <div
              id="collapseenam"
              class="accordion-collapse collapse"
              aria-labelledby="headingenam"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Untuk peserta offline kamu bisa langsung melakukan penggandaan
                medali di tempat setelah pengumuman pemenang berlangsung. Dan
                untuk peserta online kamu bisa melakukan penggandaan medali
                melalui link yang kami kirimkan di Whatsapp grup, kami akan
                mengirimkan informasi penggandaan di Whatsapp grup selambatnya 2
                hari setelah pengumuman pemenang.
              </div>
            </div>
          </div>
        </div>

        {/* faq 3 */}
      </div>
    </section>
  );
};

export default FaqComps;
