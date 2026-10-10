/**
 * Data Kuis Interaktif "Aku Patuh pada Aturan"
 * Mencakup seluruh materi aturan di rumah, alat kebersihan, dan aturan di sekolah.
 * Minimal 10 soal dengan opsi yang diacak, pembacaan TTS, dan respons karakter.
 */

export const quizQuestions = [
  {
    id: 1,
    question: 'Kegiatan yang harus dilakukan saat pagi hari sebelum berangkat ke sekolah adalah ...',
    options: [
      { id: 'A', text: 'Merapikan tempat tidur dan mandi.', isCorrect: true },
      { id: 'B', text: 'Bermain game sampai larut malam.', isCorrect: false },
      { id: 'C', text: 'Tidur seharian tanpa sarapan.', isCorrect: false }
    ],
    explanation: 'Hebat! Di pagi hari, kita bangun tepat waktu, merapikan ranjang, mandi, dan sarapan agar siap belajar.',
    characterReaction: {
      success: 'Panca: Tepat sekali! Bangun pagi dan mandi bikin tubuh segar dan bersemangat!',
      retry: 'Panca: Yuk ingat kembali, apa yang kita lakukan saat matahari baru terbit?'
    }
  },
  {
    id: 2,
    question: 'Kita membuang sampah sebaiknya di ...',
    options: [
      { id: 'A', text: 'Bawah meja belajar.', isCorrect: false },
      { id: 'B', text: 'Tempat sampah yang tersedia.', isCorrect: true },
      { id: 'C', text: 'Halaman rumah orang lain.', isCorrect: false }
    ],
    explanation: 'Benar sekali! Tempat sampah adalah tempat yang tepat agar lingkungan tetap bersih dan higienis.',
    characterReaction: {
      success: 'Sila: Pintar! Membuang sampah di tempat sampah menjaga lingkungan kita tetap sehat.',
      retry: 'Sila: Ayo pilih wadah yang memang khusus disediakan untuk menampung sampah ya.'
    }
  },
  {
    id: 3,
    question: 'Sikap yang benar saat guru menjelaskan pelajaran di kelas adalah ...',
    options: [
      { id: 'A', text: 'Mengobrol keras dengan teman.', isCorrect: false },
      { id: 'B', text: 'Tidur di atas meja.', isCorrect: false },
      { id: 'C', text: 'Mendengarkan dengan tertib dan fokus.', isCorrect: true }
    ],
    explanation: 'Bagus sekali! Mendengarkan guru dengan tertib membantu kita memahami pelajaran dengan mudah.',
    characterReaction: {
      success: 'Bina: Luar biasa! Tertib mendengarkan guru adalah tanda murid yang hebat dan berprestasi.',
      retry: 'Bina: Jangan mengobrol ya, kita harus menghormati bapak dan ibu guru.'
    }
  },
  {
    id: 4,
    question: 'Setelah selesai bermain boneka atau balok susun di rumah, yang harus kita lakukan adalah ...',
    options: [
      { id: 'A', text: 'Meninggalkan mainan berserakan di lantai.', isCorrect: false },
      { id: 'B', text: 'Mengembalikan mainan ke dalam kotak mainan.', isCorrect: true },
      { id: 'C', text: 'Menyembunyikan mainan di bawah sofa.', isCorrect: false }
    ],
    explanation: 'Tepat! Mengembalikan mainan ke tempatnya membuat rumah selalu rapi dan barang tidak hilang atau rusak.',
    characterReaction: {
      success: 'Panca: Keren! Rumah jadi rapi dan kita tidak akan tersandung mainan.',
      retry: 'Panca: Coba ingat lagi kebiasaan baik setelah kita selesai bermain.'
    }
  },
  {
    id: 5,
    question: 'Alat kebersihan yang digunakan untuk mengumpulkan kotoran atau sampah hasil sapuan adalah ...',
    options: [
      { id: 'A', text: 'Pengki (serokan sampah).', isCorrect: true },
      { id: 'B', text: 'Kemoceng bulu ayam.', isCorrect: false },
      { id: 'C', text: 'Guling tidur.', isCorrect: false }
    ],
    explanation: 'Betul! Pengki berguna menampung debu dan sampah hasil sapuan sebelum dimasukkan ke tempat sampah.',
    characterReaction: {
      success: 'Bina: Benar! Pengki dan sapu selalu bekerja sama membersihkan lantai.',
      retry: 'Bina: Ingat alat berbentuk wadah penyodok kotoran ya!'
    }
  },
  {
    id: 6,
    question: 'Sebelum dan sesudah menyantap makanan, kita sebaiknya selalu ...',
    options: [
      { id: 'A', text: 'Berlari-lari di ruang tamu.', isCorrect: false },
      { id: 'B', text: 'Mencuci tangan pakai sabun dan berdoa.', isCorrect: true },
      { id: 'C', text: 'Menonton televisi sambil berteriak.', isCorrect: false }
    ],
    explanation: 'Hebat! Mencuci tangan menjauhkan kita dari kuman penyakit, dan berdoa adalah tanda syukur kepada Tuhan.',
    characterReaction: {
      success: 'Sila: MasyaAllah pintar! Tubuh sehat dan makanan kita menjadi berkah.',
      retry: 'Sila: Sebelum menyentuh sendok, jangan lupa kebersihan tangan dan bersyukur ya.'
    }
  },
  {
    id: 7,
    question: 'Apa yang sebaiknya kita lakukan saat jadwal piket kelas tiba?',
    options: [
      { id: 'A', text: 'Datang terlambat agar terhindar dari piket.', isCorrect: false },
      { id: 'B', text: 'Bergotong royong bersama teman membersihkan kelas.', isCorrect: true },
      { id: 'C', text: 'Duduk diam melihat teman lain bekerja keras.', isCorrect: false }
    ],
    explanation: 'Tepat! Piket kelas adalah tugas gotong royong agar ruang kelas kita selalu bersih dan nyaman ditempati.',
    characterReaction: {
      success: 'Bina: Hebat sekali! Kerja sama membuat tugas membersihkan kelas terasa ringan dan cepat.',
      retry: 'Bina: Piket kelas dilakukan bersama-sama dengan adil ya teman-teman.'
    }
  },
  {
    id: 8,
    question: 'Agar tanaman bunga di taman tumbuh subur dan indah, kita perlu ...',
    options: [
      { id: 'A', text: 'Menyiram tanaman secukupnya pada pagi atau sore hari.', isCorrect: true },
      { id: 'B', text: 'Menginjak-injak dan memetik bunganya sembarangan.', isCorrect: false },
      { id: 'C', text: 'Menutup tanaman dengan kain hitam sepanjang hari.', isCorrect: false }
    ],
    explanation: 'Benar! Tanaman membutuhkan air dan sinar matahari untuk tumbuh mekar dengan indah.',
    characterReaction: {
      success: 'Sila: Betul! Tanaman adalah ciptaan Tuhan yang harus kita sayangi dan rawat.',
      retry: 'Sila: Tanaman butuh minum air agar tidak layu dan kering lho.'
    }
  },
  {
    id: 9,
    question: 'Alat kebersihan yang paling tepat untuk membersihkan debu pada permukaan meja dan lemari adalah ...',
    options: [
      { id: 'A', text: 'Sapu lidi besar.', isCorrect: false },
      { id: 'B', text: 'Kemoceng (sulak).', isCorrect: true },
      { id: 'C', text: 'Selang air deras.', isCorrect: false }
    ],
    explanation: 'Betul! Kemoceng memiliki bulu halus yang bisa mengangkat butiran debu pada perabot rumah.',
    characterReaction: {
      success: 'Panca: Tepat! Kemoceng membersihkan debu di meja belajar kita dengan cepat.',
      retry: 'Panca: Debu halus di meja dibersihkan dengan alat berbulu lembut apa ya?'
    }
  },
  {
    id: 10,
    question: 'Pada malam hari sebelum tidur, kegiatan baik yang harus dilakukan adalah ...',
    options: [
      { id: 'A', text: 'Menyiapkan buku pelajaran sekolah dan tidur tepat waktu.', isCorrect: true },
      { id: 'B', text: 'Bermain petak umpet di luar rumah sampai larut malam.', isCorrect: false },
      { id: 'C', text: 'Makan permen manis dan tidak menggosok gigi.', isCorrect: false }
    ],
    explanation: 'Luar biasa! Menyiapkan perlengkapan sekolah malam ini membuat esok pagi tidak terburu-buru.',
    characterReaction: {
      success: 'Bina: Cerdas! Tidur cukup waktu membuat badan segar bugar saat bangun esok pagi!',
      retry: 'Bina: Malam hari adalah waktu persiapan belajar dan beristirahat yang cukup.'
    }
  }
];
