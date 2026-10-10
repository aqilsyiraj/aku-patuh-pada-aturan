/**
 * Data untuk Materi 5 — Ayo Bermain! (Permainan Mencocokkan)
 * 5 Pasangan wajib sesuai prompt:
 * 1. Merapikan tempat tidur → Pagi hari
 * 2. Membuang sampah pada tempatnya → Lingkungan rumah
 * 3. Mendengarkan guru menjelaskan → Di sekolah
 * 4. Menyapu halaman rumah → Kegiatan menjaga kebersihan rumah
 * 5. Berdoa sebelum makan → Kebiasaan saat makan
 */

export const matchingPairsData = [
  {
    pairId: 1,
    activity: {
      id: 'act-1',
      title: 'Merapikan Tempat Tidur',
      icon: '🛏️',
      color: 'bg-amber-100 border-amber-300 text-amber-900',
      description: 'Menarik selimut dan menata bantal'
    },
    target: {
      id: 'tar-1',
      title: 'Pagi Hari',
      icon: '🌅',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      description: 'Waktu bangun tidur sebelum memulai hari'
    },
    hint: 'Merapikan kasur dilakukan tepat setelah kita bangun tidur!'
  },
  {
    pairId: 2,
    activity: {
      id: 'act-2',
      title: 'Membuang Sampah pada Tempatnya',
      icon: '🗑️',
      color: 'bg-emerald-100 border-emerald-300 text-emerald-900',
      description: 'Memasukkan bungkus makanan ke tong sampah'
    },
    target: {
      id: 'tar-2',
      title: 'Lingkungan Rumah',
      icon: '🏡',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      description: 'Menjaga area tempat tinggal tetap sehat & bersih'
    },
    hint: 'Kebiasaan membuang sampah menjaga tempat tinggal kita tetap higienis.'
  },
  {
    pairId: 3,
    activity: {
      id: 'act-3',
      title: 'Mendengarkan Guru Menjelaskan',
      icon: '👩‍🏫',
      color: 'bg-sky-100 border-sky-300 text-sky-900',
      description: 'Duduk tertib memperhatikan materi pelajaran'
    },
    target: {
      id: 'tar-3',
      title: 'Di Sekolah',
      icon: '🏫',
      color: 'bg-sky-50 border-sky-200 text-sky-900',
      description: 'Tempat belajar bersama teman dan bapak-ibu guru'
    },
    hint: 'Guru menerangkan pelajaran saat kita berada di ruang kelas sekolah.'
  },
  {
    pairId: 4,
    activity: {
      id: 'act-4',
      title: 'Menyapu Halaman Rumah',
      icon: '🧹',
      color: 'bg-orange-100 border-orange-300 text-orange-900',
      description: 'Membersihkan daun kering dengan sapu lidi'
    },
    target: {
      id: 'tar-4',
      title: 'Kegiatan Menjaga Kebersihan Rumah',
      icon: '✨',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      description: 'Bentuk kepedulian terhadap keasrian tempat tinggal'
    },
    hint: 'Menyapu adalah salah satu cara menjaga kebersihan area sekitar rumah.'
  },
  {
    pairId: 5,
    activity: {
      id: 'act-5',
      title: 'Berdoa Sebelum Makan',
      icon: '🙏',
      color: 'bg-purple-100 border-purple-300 text-purple-900',
      description: 'Mengucap syukur sebelum menyantap hidangan'
    },
    target: {
      id: 'tar-5',
      title: 'Kebiasaan Saat Makan',
      icon: '🍽️',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      description: 'Tata krama sopan di meja makan keluarga'
    },
    hint: 'Sebelum menyantap nasi dan lauk, kita selalu bersyukur dan berdoa.'
  }
];
