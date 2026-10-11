import React, { useState } from 'react';
import CharacterGuide from '../CharacterGuide';
import { materialsData } from '../../data/materials';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, Check, Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi3Lingkungan({ onNext, onPrev }) {
  const data = materialsData.materi3;
  const [activeTab, setActiveTab] = useState('aktivitas'); // 'aktivitas' | 'alat' | 'game'
  const [activeActIndex, setActiveActIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState(data.tools[0]);

  // Mini-game "Pilih Alat yang Tepat" states
  const miniGameChallenges = [
    {
      id: 1,
      targetTask: 'Membersihkan daun kering yang berserakan di halaman rumah',
      correctToolId: 'sapu',
      hint: 'Alat ini bertangkai panjang dan memiliki serat lidi atau ijuk.'
    },
    {
      id: 2,
      targetTask: 'Mengangkat dan mengumpulkan debu serta sampah hasil sapuan',
      correctToolId: 'pengki',
      hint: 'Alat ini berbentuk serokan penyodok sampah.'
    },
    {
      id: 3,
      targetTask: 'Membersihkan debu halus yang menempel di atas meja belajar dan rak buku',
      correctToolId: 'kemoceng',
      hint: 'Alat ini berbulu lembut dan lentur untuk mengibas debu.'
    }
  ];
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [gameFeedback, setGameFeedback] = useState(null);

  const currentAct = data.activities[activeActIndex];

  const handleSelectActivity = (idx) => {
    audioService.playClickSound();
    setActiveActIndex(idx);
    const act = data.activities[idx];
    audioService.speak(act.narration);
  };

  const handleSelectTool = (tool) => {
    audioService.playClickSound();
    setSelectedTool(tool);
    audioService.speak(`${tool.name}. ${tool.narration}`);
  };

  const handleMiniGameAnswer = (toolId) => {
    const currentChallenge = miniGameChallenges[challengeIndex];
    if (toolId === currentChallenge.correctToolId) {
      audioService.playSuccessSound();
      setGameFeedback({
        isCorrect: true,
        message: 'Hebat sekali! Pilihanmu benar dan tepat! 🌟'
      });
      audioService.speak('Hebat sekali! Pilihanmu benar dan tepat!');
    } else {
      audioService.playErrorSound();
      setGameFeedback({
        isCorrect: false,
        message: `Kurang tepat. Petunjuk: ${currentChallenge.hint}`
      });
      audioService.speak(`Kurang tepat. Coba lagi ya! ${currentChallenge.hint}`);
    }
  };

  const handleNextChallenge = () => {
    audioService.playClickSound();
    setGameFeedback(null);
    if (challengeIndex < miniGameChallenges.length - 1) {
      setChallengeIndex(challengeIndex + 1);
    } else {
      setChallengeIndex(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 font-bubble text-xs sm:text-sm font-bold border border-teal-300">
          Materi 3 — Lingkungan Rumah Asri
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Aku Peduli dengan Tempat Tinggalku
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Menjaga kebersihan halaman, menyiram tanaman, dan mengenal alat kebersihan.
        </p>
      </div>

      {/* Character Guidance */}
      <CharacterGuide
        character={data.introDialogue.character}
        expression="smile"
        dialogue={data.introDialogue.text}
        roleText={data.introDialogue.roleText}
        className="mb-6"
      />

      {/* Navigation Tabs (Aktivitas Lingkungan, Alat Kebersihan, Game Mini) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
        <button
          onClick={() => {
            audioService.playClickSound();
            setActiveTab('aktivitas');
          }}
          className={`px-5 py-2.5 rounded-2xl font-bubble text-sm sm:text-base font-bold transition-all ${
            activeTab === 'aktivitas'
              ? 'bg-teal-500 text-white shadow-md scale-105 border-2 border-teal-600'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'
          }`}
        >
          🏡 Aktivitas Lingkungan
        </button>

        <button
          onClick={() => {
            audioService.playClickSound();
            setActiveTab('alat');
          }}
          className={`px-5 py-2.5 rounded-2xl font-bubble text-sm sm:text-base font-bold transition-all ${
            activeTab === 'alat'
              ? 'bg-amber-400 text-amber-950 shadow-md scale-105 border-2 border-amber-500'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'
          }`}
        >
          🧹 Mengenal Alat Kebersihan
        </button>

        <button
          onClick={() => {
            audioService.playClickSound();
            setActiveTab('game');
          }}
          className={`px-5 py-2.5 rounded-2xl font-bubble text-sm sm:text-base font-bold transition-all ${
            activeTab === 'game'
              ? 'bg-indigo-500 text-white shadow-md scale-105 border-2 border-indigo-600'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'
          }`}
        >
          🎮 Game: Pilih Alat yang Tepat
        </button>
      </div>

      {/* TAB 1: AKTIVITAS LINGKUNGAN */}
      {activeTab === 'aktivitas' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-teal-200 mb-6">
          {/* Sub-selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {data.activities.map((act, idx) => (
              <button
                key={act.id}
                onClick={() => handleSelectActivity(idx)}
                className={`p-3.5 rounded-2xl border-2 text-left font-bubble transition-all ${
                  activeActIndex === idx
                    ? 'bg-teal-50 border-teal-500 shadow-sm ring-2 ring-teal-200'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                }`}
              >
                <span className="text-xl block mb-1">
                  {idx === 0 ? '🗑️' : idx === 1 ? '🧹' : '🌱'}
                </span>
                <span className="text-sm font-bold block">{act.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Animated Environmental SVG Stage */}
            <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 via-emerald-50 to-green-100 border-2 border-teal-300 flex items-center justify-center p-3 relative overflow-hidden">
              <svg viewBox="0 0 450 260" className="w-full h-full">
                {/* Langit, Matahari & Rumput Halaman */}
                <circle cx="50" cy="40" r="22" fill="#FDE047" />
                <ellipse cx="380" cy="35" rx="35" ry="16" fill="#FFFFFF" opacity="0.85" />
                <rect x="0" y="195" width="450" height="65" fill="#4ADE80" />
                {/* Pagar Kayu Halaman */}
                <line x1="0" y1="180" x2="450" y2="180" stroke="#B45309" strokeWidth="3" />
                <line x1="0" y1="190" x2="450" y2="190" stroke="#B45309" strokeWidth="2.5" />
                <rect x="25" y="165" width="8" height="32" fill="#D97706" rx="2" />
                <rect x="65" y="165" width="8" height="32" fill="#D97706" rx="2" />
                <rect x="105" y="165" width="8" height="32" fill="#D97706" rx="2" />

                {activeActIndex === 0 && (
                  // Aktivitas A: Membuang Sampah pada Tempatnya
                  <>
                    {/* Tong Sampah Bersih Bertuliskan "SAMPAH" Menapak di Tanah */}
                    <g transform="translate(125, 105)">
                      <ellipse cx="37" cy="90" rx="42" ry="6" fill="#15803D" opacity="0.4" />
                      <rect x="0" y="25" width="75" height="65" rx="8" fill="#0284C7" stroke="#0369A1" strokeWidth="3.5" />
                      {/* Tutup Terbuka */}
                      <path d="M -6 24 L 81 24 L 70 8 L 5 8 Z" fill="#38BDF8" stroke="#0369A1" strokeWidth="2.5" />
                      <text x="12" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold">SAMPAH</text>
                    </g>

                    {/* Karakter Anak Memasukkan Sampah - Berpijak di Tanah Y = 195 */}
                    <g transform="translate(265, 75)">
                      {/* Bayangan Kontak di Rumput */}
                      <ellipse cx="28" cy="120" rx="24" ry="5" fill="#15803D" opacity="0.5" />
                      {/* Sepatu & Kaki */}
                      <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      
                      {/* Baju Anak Kuning Ceria */}
                      <rect x="8" y="46" width="40" height="44" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2.5" />

                      {/* Tangan Kiri Menjulur Memasukkan Sampah Kertas ke Tong */}
                      <path d="M 8 56 L -60 62" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                      {/* Sampah Kertas/Bungkus Jatuh ke Tong */}
                      <polygon points="-68,68 -56,64 -60,78 -72,74" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" className="animate-bounce" />

                      {/* Tangan Kanan di Pinggang */}
                      <path d="M 48 56 Q 58 68 48 76" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" fill="none" />

                      {/* Kepala Anak */}
                      <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                      <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                      <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                      <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                      <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                      <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </g>
                    <text x="130" y="235" fill="#0369A1" fontSize="14" fontWeight="bold">✨ Buang Sampah Tepat ke Dalam Tong</text>
                  </>
                )}

                {activeActIndex === 1 && (
                  // Aktivitas B: Menyapu Halaman Rumah
                  <>
                    {/* Tumpukan Daun Kering di Halaman */}
                    <g transform="translate(110, 182)">
                      <ellipse cx="30" cy="12" rx="20" ry="7" fill="#D97706" />
                      <ellipse cx="45" cy="10" rx="16" ry="6" fill="#B45309" />
                      <ellipse cx="18" cy="11" rx="14" ry="5" fill="#F59E0B" />
                    </g>
                    {/* Pengki (Serokan) Biru Menampung Daun */}
                    <g transform="translate(75, 175)">
                      <polygon points="0,20 35,20 30,6 5,6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
                      <line x1="17" y1="6" x2="17" y2="-10" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Karakter Anak Berdiri Tegak di Tanah Y = 195 Memegang Sapu */}
                    <g transform="translate(240, 75)">
                      {/* Bayangan Kontak di Rumput */}
                      <ellipse cx="28" cy="120" rx="24" ry="5" fill="#15803D" opacity="0.5" />
                      {/* Sepatu & Kaki */}
                      <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      
                      <rect x="8" y="46" width="40" height="44" rx="8" fill="#34D399" stroke="#10B981" strokeWidth="2.5" />

                      {/* Gagang Sapu Lidi Panjang Menyapu di Tanah */}
                      <g className="animate-sweep" style={{ transformOrigin: '20px 55px' }}>
                        <line x1="15" y1="55" x2="-80" y2="120" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
                        <polygon points="-100,120 -65,120 -72,102 -90,102" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />
                      </g>

                      {/* Kedua Tangan Memegang Gagang Sapu */}
                      <path d="M 8 56 L -20 70" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                      <path d="M 20 60 L -40 85" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />

                      {/* Kepala Anak Ceria */}
                      <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                      <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                      <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                      <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                      <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                      <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </g>
                    <text x="140" y="235" fill="#047857" fontSize="14" fontWeight="bold">🍂 Menyapu Daun Kering dengan Sapu</text>
                  </>
                )}

                {activeActIndex === 2 && (
                  // Aktivitas C: Merawat Tanaman
                  <>
                    {/* Pot Bunga Cantik Menapak di Tanah */}
                    <g transform="translate(115, 125)">
                      <ellipse cx="35" cy="70" rx="30" ry="5" fill="#15803D" opacity="0.5" />
                      <polygon points="15,70 55,70 65,35 5,35" fill="#B45309" stroke="#78350F" strokeWidth="2" />
                      <line x1="35" y1="35" x2="35" y2="5" stroke="#16A34A" strokeWidth="4" />
                      <ellipse cx="24" cy="20" rx="12" ry="6" fill="#22C55E" transform="rotate(-25 24 20)" />
                      <ellipse cx="46" cy="14" rx="12" ry="6" fill="#22C55E" transform="rotate(25 46 14)" />
                      <circle cx="35" cy="-2" r="14" fill="#F43F5E" className="animate-pulse" />
                      <circle cx="35" cy="-2" r="6" fill="#FDE047" />
                    </g>

                    {/* Karakter Anak Berdiri di Tanah Y = 195 Memegang Ceret */}
                    <g transform="translate(265, 75)">
                      {/* Bayangan Kontak di Rumput */}
                      <ellipse cx="28" cy="120" rx="24" ry="5" fill="#15803D" opacity="0.5" />
                      {/* Sepatu & Kaki */}
                      <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                      <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                      
                      <rect x="8" y="46" width="40" height="44" rx="8" fill="#6366F1" stroke="#4F46E5" strokeWidth="2.5" />

                      {/* Ceret Penyiram Air */}
                      <g transform="translate(-70, 48)">
                        <ellipse cx="20" cy="20" rx="18" ry="14" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
                        <path d="M 4 14 L -15 6" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" />
                        <path d="M 12 6 Q 20 -4 28 6" stroke="#0369A1" strokeWidth="3" fill="none" />
                        <line x1="-16" y1="8" x2="-35" y2="35" stroke="#38BDF8" strokeWidth="3" className="animate-water" />
                      </g>

                      {/* Tangan Memegang Ceret */}
                      <path d="M 8 56 L -40 54" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />

                      {/* Kepala Anak */}
                      <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                      <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                      <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                      <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                      <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                      <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                      <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </g>
                    <text x="140" y="235" fill="#15803D" fontSize="14" fontWeight="bold">🌸 Menyiram Tanaman Bunga agar Tumbuh Segar</text>
                  </>
                )}
              </svg>
            </div>

            {/* Explanation Details */}
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bubble font-bold bg-teal-100 text-teal-800 mb-2 inline-block">
                Aktivitas {activeActIndex + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800 mb-2">
                {currentAct.title}
              </h3>
              <p className="text-slate-700 font-reading text-sm sm:text-base leading-relaxed mb-4">
                {currentAct.narration}
              </p>

              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl mb-4">
                <p className="text-xs font-bubble font-bold text-teal-900 uppercase tracking-wider mb-1">
                  Cara Melakukan dengan Benar:
                </p>
                <p className="text-sm font-reading text-slate-700">
                  {currentAct.actionGuide}
                </p>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    audioService.playClickSound();
                    audioService.speak(currentAct.narration);
                  }}
                  className="kid-button px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-sm font-bold flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Dengarkan</span>
                </button>
                <button
                  onClick={() => {
                    audioService.playClickSound();
                    audioService.speak(currentAct.narration);
                  }}
                  className="kid-button px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MENGENAL ALAT KEBERSIHAN */}
      {activeTab === 'alat' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-amber-200 mb-6">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800">
              Kenali Alat-Alat Kebersihan
            </h3>
            <p className="text-sm text-slate-600 font-reading">
              Klik salah satu alat di bawah ini untuk melihat animasi penggunaan dan mendengarkan suaranya!
            </p>
          </div>

          {/* 3 Clickable Tools Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {data.tools.map((tool) => {
              const isSelected = selectedTool.id === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleSelectTool(tool)}
                  className={`p-5 rounded-2xl border-3 text-center transition-all ${
                    isSelected
                      ? 'bg-amber-50 border-amber-500 shadow-md scale-103 ring-4 ring-amber-200'
                      : 'bg-slate-50 border-slate-200 hover:bg-white'
                  }`}
                >
                  <span className="text-4xl sm:text-5xl block mb-2">{tool.icon}</span>
                  <p className="font-bubble font-bold text-base sm:text-lg text-slate-800">
                    {tool.name}
                  </p>
                  <p className="text-xs font-reading text-slate-500 mt-1">
                    {tool.functionDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Tool Detail Card */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-300 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-amber-300 flex items-center justify-center text-4xl shadow-sm flex-shrink-0">
              {selectedTool.icon}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h4 className="font-bubble font-bold text-lg text-slate-800">
                  {selectedTool.name}
                </h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bubble">
                  Alat Kebersihan
                </span>
              </div>
              <p className="text-sm font-reading text-slate-700 leading-relaxed mb-2">
                {selectedTool.narration}
              </p>
              <button
                onClick={() => {
                  audioService.playClickSound();
                  audioService.speak(`${selectedTool.name}. ${selectedTool.narration}`);
                }}
                className="kid-button px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-xs font-bold inline-flex items-center gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Dengarkan Penjelasan {selectedTool.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MINI-GAME PILIH ALAT YANG TEPAT */}
      {activeTab === 'game' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-indigo-200 mb-6">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bubble text-xs font-bold">
              Tantangan Mini dari Bina 🌟
            </span>
            <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800 mt-2">
              Pilih Alat yang Tepat!
            </h3>
            <p className="text-sm text-slate-600 font-reading">
              Tantangan {challengeIndex + 1} dari {miniGameChallenges.length}
            </p>
          </div>

          {/* Current Question / Task */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 text-center mb-6">
            <p className="text-xs font-bubble font-bold text-indigo-600 uppercase mb-1">
              Kegiatan yang Perlu Dikerjakan:
            </p>
            <p className="text-lg sm:text-xl font-bubble font-bold text-slate-800">
              “{miniGameChallenges[challengeIndex].targetTask}”
            </p>
          </div>

          {/* 3 Choices (Sapu, Pengki, Kemoceng) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {data.tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleMiniGameAnswer(tool.id)}
                className="kid-card p-4 rounded-2xl bg-white hover:bg-amber-50 border-3 border-slate-200 hover:border-amber-400 text-center shadow-xs transition-all flex flex-col items-center"
              >
                <span className="text-4xl mb-2">{tool.icon}</span>
                <span className="font-bubble font-bold text-slate-800 text-base">
                  {tool.name}
                </span>
                <span className="text-xs text-slate-500 font-reading mt-0.5">
                  Klik untuk memilih
                </span>
              </button>
            ))}
          </div>

          {/* Feedback Display */}
          {gameFeedback && (
            <div className={`p-4 rounded-2xl border-2 text-center animate-in fade-in mb-4 ${
              gameFeedback.isCorrect 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}>
              <p className="font-bubble font-bold text-base mb-2">
                {gameFeedback.message}
              </p>
              {gameFeedback.isCorrect && (
                <button
                  onClick={handleNextChallenge}
                  className="kid-button px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold rounded-xl shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>Tantangan Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={onPrev}
          className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Materi Sebelumnya</span>
        </button>

        <button
          onClick={onNext}
          className="kid-button px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold flex items-center gap-2 shadow-md"
        >
          <span>Lanjut ke Materi 4 (Sekolah)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
