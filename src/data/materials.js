/**
 * Data materi pembelajaran interaktif: "Aku Patuh pada Aturan"
 * Sesuai panduan kurikulum SD Kelas Rendah (Kelas 1 - 2) & Usia Dini
 */

export const materialsData = {
  // MATERI 1: Aturan dalam Keluargaku
  materi1: {
    id: 'materi1',
    title: 'Aturan dalam Keluargaku',
    subtitle: 'Mengenal aturan di rumah berdasarkan waktu pelaksanaannya',
    introDialogue: {
      character: 'panca',
      text: 'Halo teman-teman! Setiap hari kita memiliki kegiatan dari pagi sampai malam. Yuk, kita lihat aturan apa saja yang harus kita patuhi sepanjang hari!',
      roleText: 'Panca mengajak melihat kegiatan sehari-hari'
    },
    times: [
      {
        id: 'pagi',
        title: 'Pagi Hari',
        badge: '06.00 WIB',
        color: 'from-amber-100 to-orange-100 border-amber-300 text-amber-900',
        illustrationType: 'morning',
        narration: 'Selamat pagi! Saat pagi hari, kita harus bangun tepat waktu, merapikan tempat tidur, mandi, dan sarapan sebelum memulai kegiatan. Dengan begitu, kita siap menjalani hari dengan semangat.',
        characterNote: {
          character: 'sila',
          text: 'Merapikan tempat tidur sendiri adalah tanda anak yang mandiri dan berbakti kepada orang tua.'
        },
        actions: [
          'Bangun tidur tepat waktu saat matahari terbit',
          'Merapikan selimut, bantal, dan guling sendiri',
          'Mandi pagi hingga bersih dan menyikat gigi',
          'Sarapan sehat bersama keluarga dengan tertib'
        ]
      },
      {
        id: 'siang',
        title: 'Siang Hari',
        badge: '12.00 WIB',
        color: 'from-sky-100 to-blue-100 border-sky-300 text-sky-900',
        illustrationType: 'afternoon',
        narration: 'Ketika siang hari, pulanglah sesuai waktu yang ditentukan. Setelah sampai di rumah, cuci tangan dan makanlah dengan tertib.',
        characterNote: {
          character: 'panca',
          text: 'Jangan lupa melepas sepatu dan menaruh tas di tempatnya sebelum mencuci tangan!'
        },
        actions: [
          'Pulang ke rumah tepat waktu sepulang sekolah',
          'Mencuci tangan menggunakan sabun dan air mengalir',
          'Berganti pakaian seragam dengan baju rumah yang santai',
          'Makan siang dengan duduk tenang dan sopan'
        ]
      },
      {
        id: 'sore',
        title: 'Sore Hari',
        badge: '16.00 WIB',
        color: 'from-emerald-100 to-teal-100 border-emerald-300 text-emerald-900',
        illustrationType: 'evening',
        narration: 'Sore hari adalah waktu yang baik untuk merapikan mainan dan membantu orang tua. Yuk, biasakan mengembalikan barang ke tempatnya!',
        characterNote: {
          character: 'sila',
          text: 'Jika kita rajin membantu orang tua menyapu, rumah jadi indah dan orang tua merasa bahagia.'
        },
        actions: [
          'Memasukkan kembali mainan ke dalam kotak mainan',
          'Membantu menyapu lantai atau halaman rumah',
          'Menyiram bunga atau tanaman di teras rumah',
          'Mandi sore agar badan kembali segar dan harum'
        ]
      },
      {
        id: 'malam',
        title: 'Malam Hari',
        badge: '19.00 WIB',
        color: 'from-indigo-100 to-purple-100 border-indigo-300 text-indigo-900',
        illustrationType: 'night',
        narration: 'Saat malam hari, kita belajar, menyiapkan perlengkapan sekolah untuk besok, dan tidur tepat waktu agar tubuh kembali segar.',
        characterNote: {
          character: 'bina',
          text: 'Persiapkan buku pelajaran di dalam tas malam ini, supaya besok pagi tidak ada yang tertinggal!'
        },
        actions: [
          'Belajar dan mengulang materi pelajaran sekolah',
          'Menyiapkan buku dan alat tulis untuk esok hari',
          'Menggosok gigi dan mencuci kaki sebelum tidur',
          'Tidur malam tepat waktu dan tidak begadang'
        ]
      }
    ]
  },

  // MATERI 2: Aku Mematuhi Aturan di Rumah
  materi2: {
    id: 'materi2',
    title: 'Aku Mematuhi Aturan di Rumah',
    subtitle: 'Kebiasaan baik dan tertib yang membuat rumah kita nyaman',
    introDialogue: {
      character: 'sila',
      text: 'Rumah adalah istana tempat kita berkumpul bersama keluarga. Mematuhi aturan di rumah membuat suasana selalu aman, damai, dan penuh kasih sayang!',
      roleText: 'Sila menjelaskan pentingnya kebiasaan tertib'
    },
    habits: [
      {
        id: 'doa',
        title: 'Berdoa Sebelum & Sesudah Makan',
        badge: 'Rasa Syukur',
        narration: 'Sebelum dan sesudah makan, biasakan berdoa sesuai ajaran keluarga kita. Mari kita bersyukur atas makanan yang kita nikmati.',
        characterAdvice: 'Duduk dengan sopan, cuci tangan dahulu, lalu panjatkan doa dengan khusyuk.',
        beforeStatus: 'Langsung menyantap makanan tanpa cuci tangan dan tanpa berdoa',
        afterStatus: 'Duduk tertib bersama keluarga, bersyukur, dan berdoa dengan khidmat'
      },
      {
        id: 'cuci-tangan',
        title: 'Mencuci Tangan Pakai Sabun',
        badge: 'Kesehatan Diri',
        narration: 'Yuk, cuci tangan menggunakan sabun sebelum dan sesudah makan agar tangan tetap bersih dari kuman.',
        characterAdvice: 'Gosok telapak tangan, punggung tangan, sela-sela jari, dan bilas dengan air bersih mengalir.',
        beforeStatus: 'Tangan kotor penuh debu setelah bermain menyentuh makanan',
        afterStatus: 'Tangan bersih, harum, bebas kuman, dan siap makan makanan bergizi'
      },
      {
        id: 'kembalikan-barang',
        title: 'Mengembalikan Barang pada Tempatnya',
        badge: 'Tanggung Jawab',
        narration: 'Setelah bermain, kembalikan mainan dan barang ke tempatnya. Rumah menjadi lebih rapi dan barang-barang mudah ditemukan.',
        characterAdvice: 'Jika semua barang diletakkan rapi, tidak ada orang yang tersandung mainan!',
        beforeStatus: 'Mainan dan buku berserakan di lantai, ruang tamu berantakan',
        afterStatus: 'Mainan tersimpan di kotak mainan dan buku tersusun rapi di rak'
      },
      {
        id: 'kebersihan-kamar',
        title: 'Menjaga Kebersihan Kamar',
        badge: 'Kemandirian',
        narration: 'Kamar yang bersih dan rapi membuat kita lebih nyaman saat belajar dan beristirahat. Ayo, jaga kebersihan kamar setiap hari!',
        characterAdvice: 'Tarik selimut, tepuk bantal, dan sapu kamar setiap pagi agar bebas dari debu.',
        beforeStatus: 'Selimut kusut, sprei terlepas, baju berserakan di ranjang',
        afterStatus: 'Kamar rapi, kasur tertata harum, dan meja belajar nyaman untuk membaca'
      }
    ]
  },

  // MATERI 3: Aku Peduli dengan Tempat Tinggalku
  materi3: {
    id: 'materi3',
    title: 'Aku Peduli dengan Tempat Tinggalku',
    subtitle: 'Menjaga kebersihan halaman, taman, dan mengenal alat kebersihan',
    introDialogue: {
      character: 'panca',
      text: 'Wah, lihat lingkungan sekitar kita! Rumah yang bersih dan asri bermula dari kepedulian kita terhadap halaman dan tanaman.',
      roleText: 'Panca mengajak merawat lingkungan sekitar'
    },
    activities: [
      {
        id: 'buang-sampah',
        title: 'Membuang Sampah pada Tempatnya',
        narration: 'Sampah harus dibuang ke tempat sampah. Jangan membuang sampah sembarangan agar lingkungan tetap bersih dan sehat.',
        actionGuide: 'Pisahkan sampah kering dan sampah basah, lalu tutup kembali tempat sampah.'
      },
      {
        id: 'menyapu-halaman',
        title: 'Menyapu Halaman Rumah',
        narration: 'Menyapu halaman membuat lingkungan rumah menjadi bersih, rapi, dan indah. Kita bisa membantu menjaga kebersihan bersama keluarga.',
        actionGuide: 'Kumpulkan daun-daun kering dengan sapu lidi, lalu masukkan ke tempat sampah menggunakan pengki.'
      },
      {
        id: 'merawat-tanaman',
        title: 'Merawat Tanaman di Taman',
        narration: 'Tanaman adalah makhluk hidup yang perlu dirawat. Yuk, siram tanaman secukupnya agar tetap tumbuh dengan baik dan segar!',
        actionGuide: 'Siram tanaman pada pagi atau sore hari agar tanaman tidak mudah layu.'
      }
    ],
    tools: [
      {
        id: 'sapu',
        name: 'Sapu',
        icon: '🧹',
        color: 'bg-amber-100 text-amber-900 border-amber-300',
        functionDesc: 'Untuk menyapu lantai rumah atau daun kering di halaman.',
        narration: 'Sapu digunakan untuk menyapu lantai di dalam rumah maupun dedaunan kering di halaman.'
      },
      {
        id: 'pengki',
        name: 'Pengki (Serokan)',
        icon: '📥',
        color: 'bg-sky-100 text-sky-900 border-sky-300',
        functionDesc: 'Untuk menampung dan mengumpulkan kotoran hasil sapuan.',
        narration: 'Pengki atau serokan berguna untuk menampung sampah hasil sapuan sebelum dibuang ke tempat sampah.'
      },
      {
        id: 'kemoceng',
        name: 'Kemoceng (Sulak)',
        icon: '🪶',
        color: 'bg-rose-100 text-rose-900 border-rose-300',
        functionDesc: 'Untuk membersihkan debu pada meja, kursi, dan lemari.',
        narration: 'Kemoceng digunakan untuk membersihkan debu halus yang menempel pada meja, kursi, dan jendela.'
      }
    ]
  },

  // MATERI 4: Aku Patuh Aturan di Sekolah
  materi4: {
    id: 'materi4',
    title: 'Aku Patuh Aturan di Sekolah',
    subtitle: 'Aturan tertib belajar bersama teman dan bapak-ibu guru tercinta',
    introDialogue: {
      character: 'bina',
      text: 'Di sekolah, kita belajar dan bermain bersama banyak teman. Agar sekolah tertib dan menyenangkan, ada aturan yang wajib kita patuhi bersama!',
      roleText: 'Bina memperkenalkan tata tertib di sekolah'
    },
    rules: [
      {
        id: 'berbaris',
        title: 'Berbaris dengan Tertib',
        badge: 'Disiplin',
        narration: 'Saat masuk kelas atau mengikuti upacara, kita harus berbaris dengan tertib dan mengikuti arahan guru.',
        explanation: 'Berbaris lurus dari yang bertubuh pendek di depan dan tinggi di belakang. Tidak saling dorong dengan teman.',
        moral: 'Menghargai giliran dan melatih kesabaran.'
      },
      {
        id: 'mendengarkan-guru',
        title: 'Mendengarkan Guru',
        badge: 'Sopan Santun',
        narration: 'Ketika guru menjelaskan pelajaran, kita harus mendengarkan dengan baik, tidak mengganggu teman, dan mengangkat tangan ketika ingin bertanya.',
        explanation: 'Duduk tegak, tatap mata guru yang sedang menerangkan, dan simpan mainan selama pelajaran berlangsung.',
        moral: 'Menghormati guru dan membuat kita cepat paham materi pelajaran.'
      },
      {
        id: 'piket-kelas',
        title: 'Melaksanakan Piket Kelas',
        badge: 'Gotong Royong',
        narration: 'Piket kelas adalah kegiatan yang dilakukan bersama untuk menjaga kebersihan kelas. Kita dapat menyapu, merapikan meja, dan membersihkan papan tulis sesuai tugas masing-masing.',
        explanation: 'Datang lebih awal saat jadwal piket, bagi tugas dengan adil bersama teman satu regu piket.',
        moral: 'Melatih tanggung jawab dan kerja sama tim.'
      },
      {
        id: 'kebersihan-sekolah',
        title: 'Menjaga Kebersihan Sekolah',
        badge: 'Peduli Lingkungan',
        narration: 'Sekolah adalah tempat kita belajar bersama. Buanglah sampah pada tempatnya dan jagalah lingkungan sekolah agar tetap bersih dan nyaman.',
        explanation: 'Jangan mencoret-coret meja atau dinding, rawat tanaman di halaman sekolah, dan letakkan kembali sapu pada tempatnya.',
        moral: 'Menciptakan ruang belajar yang sehat dan asri untuk semua murid.'
      }
    ]
  }
};
