import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Ganti dengan cerita Anda di sini. Setiap elemen dalam array adalah satu "halaman" atau bab.
const storyChapters = [
  {
    title: "Bab Pertama: Awal Mula — Antara Pondok, Sunyi, dan Takdir Lucu yang Mempertemukan Kita",
    content: [
      "Awal mula aku menapaki kehidupan di Pondok Al Huda terjadi pada 22 November 2019. Saat itu, jujur aku merasa seperti orang asing di tengah keramaian. Semua terasa baru dan sunyi pada waktu yang sama. Aku tidak memiliki teman dekat karena sebagian besar santri di sana berasal dari suku Jawa dan Madura, sedangkan aku satu-satunya yang berasal dari Sunda. Ada rasa canggung, bahkan sedikit terasing, karena perbedaan bahasa dan kebiasaan membuatku sulit untuk langsung berbaur.Hari demi hari berlalu, hingga waktu membawa kejutan kecil. Tahun 2020, adikku juga masuk ke Pondok Al Huda. Sejak itu, aku merasa lebih tenang karena setidaknya ada keluarga di sisiku. Tapi ternyata, di tahun itu juga takdir mempertemukan aku denganmu — sebuah pertemuan yang tidak pernah aku duga akan menjadi cerita panjang yang begitu berarti dalam hidupku."
    ]
  },
  {
    title: "Bab Kedua: Tatapan Pertama — Aku Nggak Sengaja Jatuh (Bukan karena Kesandung, tapi Karena Kamu)",
    content: [
      "Masih kuingat dengan jelas, saat pertama kali kita berpapasan. Kala itu aku baru saja pulang dari masjid menuju asrama, dan di tengah jalan sempit pondok, kita berpas-pasan. Sekilas pandangmu tertuju kepadaku, dan di saat itulah terjadi pandangan pertama yang membekas di hati. Ada sesuatu yang berbeda — entah apa, tapi cukup untuk membuat dadaku terasa hangat. Sejak saat itu, aku menyimpan rasa kagum yang tumbuh perlahan-lahan di dalam diam. Namun, karena aturan pondok yang ketat, aku memilih untuk memendamnya. Perasaan itu hanya kusimpan dalam doa, tanpa pernah berani kuungkapkan."
    ]
  },
  {
    title: "Bab Ketiga: Drama Pondok — Salah Paham, Salah Waktu, Tapi Nggak Salah Orang",
    content: [
      "Waktu terus bergulir, hingga tiba tahun 2021. Saat perpulangan Ramadan, aku mengetahui bahwa kamu sedang menjalin hubungan dengan Ilyas. Sementara di waktu yang sama, aku juga sedang bersama Nadia. Semua terasa berjalan biasa saja, hingga kita kembali ke pondok dan kembali menjalani rutinitas program seperti biasanya. takdir kadang suka bercanda y...., karena pada suatu malam, kejadian yang tak terduga mengubah segalanya — sebuah kejadian yang memisahkan aku dengan Nadia, dan kamu dengan Ilyas.Kejadian itu terjadi tanpa aku terlibat, tapi entah bagaimana, namaku ikut terseret dalam masalah yang bukan perbuatanku.malam itu, Ilyas berencana bertemu denganmu secara diam-diam.tempat yang bisa digunakan untuk berbicara dengan santri putri adalah di area dapur santri putri, tepatnya di pintu kecil berwarna hijau tua, tempat pengambilan makan.Ia sempat berkata kepadaku bahwa ia juga akan mengajak Nadia, karena aku masih berhubungan dengannya saat itu. Aku tidak tahu apa-apa mengenai rencana tersebut dan mengira semua hanya obrolan ringan."
    ]
  },
  {
    title: "Bab Keempat: Malam Itu, Tuduhan, dan Takdir yang Iseng Banget",
    content: [
      "rencana pun di mulai pada tengah malam, sekitar pukul 12 malam, Ilyas sudah datang lebih awal dan mengetuk pintu kecil itu berulang kali. Dari dalam, terdengar suara Nadia, tapi ilyas tidak mengetahui apa yang dia bicarakan karena pintu itu cukup tebal dan suasana sunyi malam membuat segalanya samar. Naasnya, di saat itulah zainab memergoki kejadian itu. karena pada saat itu ada nadia yang mana aku masih berstatus sebagai orang yang berhubungan dengannya, tuduhan pun jatuh padaku. Aku dianggap terlibat dalam kejadian itu, meski sebenarnya aku sama sekali tidak tahu apa-apa.Keesokan paginya, suasana pondok berubah. Tatapan para ustadz kepadaku terasa berat, seperti menyimpan kekecewaan. Hari-hari terasa panjang dan menyesakkan — mungkin hampir sebulan penuh aku harus menanggung rasa bersalah dan tuduhan yang tak pernah aku lakukan.Akhirnya, aku dan Ilyas dipanggil oleh pengurus. Kami dinasehati dengan tegas, diminta fokus kembali menuntut ilmu, dan memutuskan hubungan kami masing-masing."
    ]
  },
  {
    title: "Bab Kelima: Antara Diam dan Doa — Rasa yang Tumbuh Tapi Belum Siap Diucap",
    content: [
      "Setelah kejadian itu, aku tahu bahwa kamu masih memiliki perasaan terhadap Ilyas, meski di sisi lain Ilyas mulai berusaha melupakan dan memperbaiki diri. Namun, waktu ternyata membawa arah yang berbeda. Kamu sempat mempunyai masalah dengan Ilyas, dan entah bagaimana, kamu mulai bercerita kepadaku — mungkin hanya sekadar tempat berbagi keluh kesah. Tapi dari situlah, perlahan-lahan jarak di antara kita mulai berkurang. dengan keadaan kita berdua masih sama-sama menyembunyikan perasaan. Ada batas yang tidak diucapkan, ada rasa yang tumbuh tapi belum berani diungkapkan. Tahun 2023 menjadi salah satu tahun yang paling berkesan dalam hidupku. Saat perpulangan Ramadan, aku mulai benar-benar merasakan bahwa kamu tulus mencintaiku. Namun, saat itu aku masih belum bisa membuka hati sepenuhnya.Bukan karena ragu, tapi karena aku ingin mengenalmu lebih dalam — memahami dirimu dalam diam, tanpa tergesa-gesa, tanpa harus langsung menyatakan perasaan."
    ]
  },
  {
    title: "Bab Keenam: Suara Sholawatmu — Tenang Sekaligus Bikin Jantung Lupa Irama",
    content: [
      "Waktu berjalan, hingga tiba satu momen yang masih kuingat jelas. Setelah Idul Adha, di hari Minggu, diadakan kajian ibu-ibu di masjid pondok.Acara itu dibuka dengan lantunan sholawat, dan kamu menjadi vokalis utama.Aku mendengarnya dari kejauhan — sendirian di ujung serambi masjid, tengah melamun entah memikirkan apa. Tapi ketika suara sholawatmu mulai terdengar, hatiku tiba-tiba menjadi begitu tenang dan tenteram.Ada perasaan damai yang sulit kujelaskan, bercampur aduk antara kagum, bahagia, dan haru.Saat itu aku sadar, aku benar-benar telah membuka hatiku untukmu.Namun meski perasaan itu sudah begitu kuat, aku masih malu untuk mengungkapkannya.Aku memilih menyimpannya dalam diam, berharap waktu akan memberi kesempatan yang tepat.Hari-hari berikutnya pun berjalan dengan penuh rasa yang tak bisa kusembunyikan.Setiap kali aku hendak pergi ke masjid, selalu saja terdengar suara dari santri putri yang memanggil namamu, seolah sengaja ingin mengusikku.Dan di momen-momen seperti itu, aku sering kali tidak mampu menahan gejolak perasaan yang mulai tumbuh semakin dalam."
    ]
  },
  {
    title: "Bab Ketujuh: Wisuda dan Rasa yang Akhirnya Kutahu Tak Bisa Sembunyi Lagi",
    content: [
      "tibalah hari wisuda — momen yang sangat emosional bagiku. Aku terharu ketika menyadari bahwa setelah tiga tahun menuntut ilmu, aku akhirnya bisa menghatamkan Al-Qur’an.Namun di balik rasa syukur itu, ada perasaan lain yang tak kalah besar — aku menantikan saat namamu dipanggil naik ke panggung, karena aku tahu kamu akan menerima ijazah sebagai penghafal 20 juz.Sayangnya, pada saat itu ustadz meminta seluruh santri putra masuk ke asrama, agar tidak melihat prosesi wisuda santri putri. Tapi hatiku tidak bisa diam.Ketika nama-nama mulai dipanggil satu per satu, aku tetap menunggu — berharap bisa melihatmu walau hanya sebentar.Dan sesuai rencana kecilku, aku mengintip dari kejauhan.Hanya sebentar, tapi cukup untuk membuat hatiku bergetar dan merasa bangga melihatmu berdiri di atas panggung, menerima penghargaan atas hafalanmu.Di saat itu, aku benar-benar merasa bangga sekaligus bersyukur bisa mengenal sosok sekuat dan sesabar dirimu.Singkat cerita, waktu berjalan begitu cepat hingga akhirnya akhir tahun tiba — tanda bahwa masa belajarku di Pondok Al Huda telah usai.Perasaanku saat itu campur aduk: senang karena telah menuntaskan perjalanan panjang, tapi juga sedih dan berat hati karena harus meninggalkan tempat yang telah membentukku, tempat yang penuh kenangan…terlebih, di sana juga ada seseorang yang begitu aku cintai."
    ]
  },
  {
    title: "Bab Kedelapan: Kebebasan yang Justru Membuatku Rindu",
    content: [
      "Tahun 2024 menjadi tahun di mana aku benar-benar merasakan arti kebebasan. Setelah sekian lama hidup di bawah aturan pondok, kini langkahku terasa lebih ringan — aku resmi keluar dari Pondok Al Huda dan tahu bahwa kali ini, aku tidak akan kembali lagi.Namun ternyata, kebebasan tidak selalu berarti bahagia.Beberapa bulan berlalu, dan perlahan rasa rindu mulai tumbuh. Rindu pada suasana pondok, pada lantunan sholawat di pagi hari, pada suasana kajian di serambi masjid, dan tentu saja… rindu padamu, seseorang yang dulu pernah mengisi setiap ruang dalam diamku.Ada rasa sepi yang tak bisa dijelaskan, seolah aku meninggalkan sebagian dari diriku di tempat itu — termasuk cinta yang pernah ku simpan untukmu dengan penuh kesabaran.Untungnya, meski jarak kini memisahkan, kita masih bisa saling berkabar lewat Instagram. Meskipun hanya sebentar setiap minggunya, namun setiap pesanmu, sekecil apa pun, selalu membawa kebahagiaan yang tak terlukiskan.Seolah setiap notifikasi darimu adalah tanda bahwa semesta masih mempertemukan kita, walau hanya lewat layar."
    ]
  },
  {
    title: "Bab Kesembilan: Doa di Tanah Suci — Di Antara Ka’bah, Namamu Ikut Kupanjatkan",
    content: [
      "Singkat cerita, suatu hari aku mendapat panggilan ke Tanah Suci — berangkat ke Makkah di bulan Ramadan, bulan yang penuh berkah.Saat berada di sana, aku benar-benar merasakan kekhusyukan yang berbeda. Di bawah langit Makkah yang indah, di hadapan Ka’bah yang agung, aku menengadahkan tangan dan memanjatkan doa panjang.Dalam setiap lafaz doa itu, ada namamu.Aku memohon agar Allah mengizinkan doa kita bersatu, agar jalan masa depan kita dipermudah, dan agar cinta ini tetap dalam ridha-Nya.Di tanah yang suci dan pada bulan yang mulia, aku yakin doa itu tidak akan sia-sia.Waktu terus berjalan. Kita masih saling berkabar, masih bertahan dalam hubungan yang sederhana namun penuh ketulusan.Hingga akhirnya, menjelang akhir tahun 2024, aku memutuskan untuk melanjutkan belajar di Pondok Bidlan, Semarang, untuk memperdalam bahasa Inggris.Di pondok baru ini, aturannya cukup ketat — hanya boleh menggunakan HP seminggu sekali, tepatnya hari Sabtu dan Minggu.Hari itu menjadi waktu paling kutunggu, karena di sanalah aku bisa memberimu kabar dan mendengar kabarmu juga.Entah bagaimana, tak lama setelah itu, aku mendengar kabar bahwa kamu sudah boyong dari pondok. Anehnya, aku justru merasa senang — bukan karena kamu keluar, tapi karena kini kita bisa lebih sering berbicara tanpa batas waktu pondok.Namun di balik rasa senang itu, ada sedikit rasa bersalah yang sulit aku jelaskan.Aku tahu kamu belum sampai menyelesaikan hafalan 30 juz Al-Qur’an, dan dalam hati kecilku aku merasa seharusnya aku ada di sana untuk menyemangatimu.Tapi meski begitu, aku tetap bangga padamu — karena perjuanganmu sudah luar biasa.Kamu sudah melewati begitu banyak ujian dan tetap teguh untuk menjadi hafidzah. Dan bagiku, itu sudah sangat membanggakan."
    ]
  },
  {
    title: "Bab Kesepuluh: Rindu Sabtu-Minggu — Cerita Kita di Sela Waktu Pondok Baru",
    content: [
      "Tahun berganti.Kini tahun 2025 tiba, dan menjelang Ramadan aku kembali masuk pondok Bidlan, kali ini untuk belajar Bahasa Arab.Aturannya masih sama — HP hanya boleh digunakan seminggu sekali. Dan di sanalah tantangan hubungan kita diuji.Hubungan yang sudah semakin dekat terasa berat karena komunikasi menjadi terbatas. Namun syukurlah, kamu mengerti keadaanku.Kamu tahu bahwa aku sedang menuntut ilmu demi masa depan, demi cita-cita yang juga ada namamu di dalamnya.Waktu berlalu, dan setelah selesai di Bidlan, aku sempat pergi ke Surabaya untuk sowan ke Maulana.Di sela perjalanan itu, aku menyusun rencana untuk menemuimu.Aku bahkan sudah hampir sampai di kecamatan tempatmu tinggal — namun takdir berkata lain.Saat ingin berbelok ke arah kecamatanmu, ternyata ada polisi yang berjaga di jalan itu, dan aku tidak bisa melanjutkan perjalanan.Rencana untuk bertemu pun harus aku batalkan, dengan perasaan yang sulit kuungkapkan.Akhirnya aku memilih kembali ke pondok, mencoba menerima bahwa mungkin Allah belum mengizinkan pertemuan itu terjadi.Waktu terus berjalan, dan hubungan kita tetap bertahan, meskipun sering naik turun.Ada saatnya kita bahagia, ada pula saatnya kita diam karena lelah, tapi syukur Alhamdulillah, hingga kini hubungan ini masih terjaga.Beberapa bulan kemudian, aku magang di tempat pamanku.Di situ aku belajar banyak hal tentang kerasnya dunia kerja, tentang bagaimana mencari nafkah, menahan lelah, dan memahami arti tanggung jawab.Dan di sela kesibukan itu, akhirnya kita melakukan panggilan telepon untuk pertama kalinya.Awalnya canggung, malu-malu, banyak diam dan tawa kecil, tapi seiring waktu, teleponan menjadi hal yang membuat hari-hariku berwarna.Rasanya menyenangkan bisa mendengar suaramu, meskipun hanya sebentar."
    ]
  },
  {
    title: "Bab Ketiga Belas: Langkah ke Jogja — Belajar Dewasa dan Menyusun Mimpi untuk Kita",
    content: [
      "Dua bulan berlalu, dan aku pun memutuskan untuk melanjutkan belajar di Yogyakarta — kali ini belajar tentang dunia IT.Kehidupan di kota pelajar itu membuat wawasanku terbuka lebih luas. Aku belajar menjadi lebih dewasa, mandiri, dan visioner.Aku mulai menyusun rencana-rencana besar untuk masa depan, bukan hanya untuk diriku, tapi juga untuk kita berdua.Dan di antara setiap langkahku, ada satu impian yang selalu kupeluk erat:Menghalalkanmu secepat mungkin, dengan cara yang diridhai Allah.Kini aku masih dalam proses — proses menjadi pribadi yang lebih matang, lebih bertanggung jawab, dan lebih siap untuk menjemput masa depan.Aku tahu perjalanan ini masih panjang, tapi aku percaya, setiap langkah yang kuambil hari ini adalah jalan menuju doa yang pernah kuucapkan di Tanah Suci itu."
    ]
  },
  {
    title: "Bab Penutup: Masih dalam Proses — Karena Doaku Belum Selesai untuk Kita",
    content: [
      "karena masih panjang cerita kita jadi aku tutup dulu kisah ini dengan tulus dari hati: # Aku masih berproses — berjuang bukan hanya untuk diriku, tapi juga untuk masa depan kita. Karena cinta yang baik bukan tentang tergesa- gesa, melainkan tentang kesabaran yang tumbuh bersama doa. 🌙"
    ]
  },
];

const OurStoryPage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const nextChapter = () => {
    if (currentChapter < storyChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-pink-pastel py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="playfair text-4xl md:text-5xl font-bold text-center text-white mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Story 📖
        </motion.h1>

        {/* Container untuk "Halaman Buku" */}
        <div className="flex justify-center items-start min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter}
              className="bg-white rounded-lg shadow-2xl p-8 md:p-12 w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Judul Bab */}
              <h2 className="playfair text-2xl md:text-3xl font-bold text-pink-pastel text-center mb-6">
                {storyChapters[currentChapter].title}
              </h2>

              {/* Isi Cerita */}
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                {storyChapters[currentChapter].content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Nomor Halaman */}
              <div className="text-center mt-8 text-gray-400 text-sm">
                Halaman {currentChapter + 1} dari {storyChapters.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigasi */}
        <div className="flex justify-between items-center mt-8 max-w-2xl mx-auto">
          <button
            onClick={prevChapter}
            disabled={currentChapter === 0}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              currentChapter === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-pink-pastel shadow-md hover:shadow-lg'
            }`}
          >
            &larr; Sebelumnya
          </button>

          <Link to="/">
            <motion.button
              className="bg-pink-pastel hover:bg-pink-300 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kembali ke Beranda
            </motion.button>
          </Link>

          <button
            onClick={nextChapter}
            disabled={currentChapter === storyChapters.length - 1}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              currentChapter === storyChapters.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-pink-pastel shadow-md hover:shadow-lg'
            }`}
          >
            Selanjutnya &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;