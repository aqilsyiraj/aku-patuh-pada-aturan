import React, { useState } from 'react';
import CharacterGuide from '../CharacterGuide';
import { materialsData } from '../../data/materials';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, Sun, CloudSun, Sunset, Moon, CheckCircle2 } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi1Keluarga({ onNext, onPrev }) {
  const data = materialsData.materi1;
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const currentTime = data.times[selectedTimeIndex];

  const handleSelectTime = (index) => {
    audioService.playClickSound();
    setSelectedTimeIndex(index);
    const item = data.times[index];
    audioService.speak(item.narration);
  };

  const handleListen = () => {
    audioService.playClickSound();
    audioService.speak(currentTime.narration);
  };

  const handleRepeat = () => {
    audioService.playClickSound();
    audioService.speak(currentTime.narration);
  };

  const handleNextTab = () => {
    audioService.playClickSound();
    if (selectedTimeIndex < data.times.length - 1) {
      handleSelectTime(selectedTimeIndex + 1);
    } else if (onNext) {
      onNext();
    }
  };

  // Render animasi 2D: Rapi, proporsional, berpijak mantap di lantai (tidak melayang)
  const renderSceneAnimation = (type) => {
    switch (type) {
      case 'morning':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-100 via-orange-50 to-sky-50 overflow-hidden border-2 border-amber-300 flex items-center justify-center p-3">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai (Garis Lantai di Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#FEF9C3" opacity="0.6" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="3" />

              {/* Jendela Pagi dengan Matahari */}
              <g transform="translate(35, 25)">
                <rect x="0" y="0" width="75" height="85" rx="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="4" />
                <line x1="37.5" y1="0" x2="37.5" y2="85" stroke="#0284C7" strokeWidth="3" />
                <line x1="0" y1="42.5" x2="75" y2="42.5" stroke="#0284C7" strokeWidth="3" />
                <circle cx="37.5" cy="42.5" r="20" fill="#FDE047" stroke="#F59E0B" strokeWidth="2" />
                <circle cx="32" cy="39" r="2" fill="#78350F" />
                <circle cx="43" cy="39" r="2" fill="#78350F" />
                <path d="M 34 46 Q 37.5 50 41 46" stroke="#78350F" strokeWidth="1.5" fill="none" />
              </g>

              {/* Meja Samping Kecil dengan Jam Beker di Y = 195 */}
              <g transform="translate(130, 140)">
                <ellipse cx="20" cy="55" rx="18" ry="4" fill="#94A3B8" opacity="0.5" />
                <rect x="5" y="15" width="30" height="40" rx="3" fill="#A16207" />
                {/* Jam Weker 06.00 */}
                <circle cx="20" cy="6" r="11" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
                <circle cx="20" cy="6" r="8" fill="#FFFFFF" />
                <line x1="20" y1="6" x2="20" y2="1" stroke="#1E293B" strokeWidth="1.5" />
                <line x1="20" y1="6" x2="20" y2="10" stroke="#1E293B" strokeWidth="1.5" />
              </g>

              {/* Tempat Tidur - Kaki Menempel Kuat di Lantai (Y = 195) */}
              <g transform="translate(170, 95)">
                {/* Bayangan Tempat Tidur di Lantai */}
                <ellipse cx="75" cy="100" rx="75" ry="6" fill="#94A3B8" opacity="0.5" />
                {/* Sandaran Kepala */}
                <rect x="0" y="10" width="14" height="90" rx="5" fill="#92400E" />
                {/* Kasur */}
                <rect x="12" y="55" width="135" height="40" rx="6" fill="#38BDF8" stroke="#0284C7" strokeWidth="2.5" />
                {/* Kaki Ranjang Menapak Lantai di Y = 100 (relatif) -> Y = 195 absolut */}
                <rect x="18" y="94" width="8" height="6" fill="#78350F" />
                <rect x="135" y="94" width="8" height="6" fill="#78350F" />
                {/* Bantal Rapi */}
                <rect x="20" y="42" width="38" height="22" rx="5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
                {/* Selimut yang Terlipat Rapi */}
                <rect x="65" y="55" width="82" height="40" rx="6" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                {/* Bintang Kilau Kerapian */}
                <polygon points="140,35 143,42 150,43 145,48 146,55 140,52 134,55 135,48 130,43 137,42" fill="#FACC15" className="animate-pulse" />
              </g>

              {/* Karakter Anak - Berdiri Tegak di Lantai Y = 195 */}
              <g transform="translate(345, 75)">
                {/* Bayangan Kaki di Lantai (Menempel Nyata) */}
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                {/* Sepatu Menapak Mantap di Lantai */}
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#0284C7" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#0284C7" />
                {/* Kaki Celana */}
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#0369A1" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#0369A1" />
                {/* Baju Kaos Kuning */}
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2.5" />
                {/* Tangan Kiri Menjangkau Selimut */}
                <path d="M 8 56 L -25 65" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                <circle cx="-25" cy="65" r="5" fill="#FED7AA" />
                {/* Tangan Kanan Mengacungkan Jempol Ceria */}
                <g className="animate-arm-wave">
                  <path d="M 48 56 Q 64 50 62 38" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <circle cx="62" cy="38" r="5" fill="#FED7AA" />
                </g>
                {/* Leher & Kepala */}
                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Rambut Cokelat Rapi */}
                <path d="M 10 22 C 10 6 46 6 46 22 Q 38 14 28 14 Q 18 14 10 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-3 px-3 py-1 bg-white/95 rounded-full text-xs font-bubble font-bold text-amber-900 border border-amber-300 shadow-xs">
              ☀️ Bangun Pagi & Merapikan Tempat Tidur Sendiri
            </div>
          </div>
        );

      case 'afternoon':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 via-blue-50 to-emerald-50 overflow-hidden border-2 border-sky-300 flex items-center justify-center p-3">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai (Garis Lantai Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#F0F9FF" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="3" />

              {/* Gantungan Tas Sekolah di Dinding */}
              <g transform="translate(45, 45)">
                <circle cx="15" cy="15" r="5" fill="#78350F" />
                <rect x="13" y="15" width="4" height="20" fill="#78350F" />
                <rect x="-5" y="35" width="40" height="52" rx="10" fill="#0284C7" stroke="#0369A1" strokeWidth="2.5" />
                <rect x="3" y="50" width="24" height="25" rx="6" fill="#38BDF8" />
                <text x="3" y="105" fill="#0369A1" fontSize="10" fontWeight="bold">Tas Sekolah</text>
              </g>

              {/* Wastafel Cuci Tangan - Menempel Kokoh di Lantai Y = 195 */}
              <g transform="translate(145, 75)">
                {/* Bayangan Tiang Wastafel di Lantai */}
                <ellipse cx="65" cy="120" rx="25" ry="5" fill="#94A3B8" opacity="0.5" />
                {/* Tiang / Kaki Wastafel Menancap di Lantai */}
                <rect x="55" y="85" width="20" height="35" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
                {/* Cermin di Dinding */}
                <rect x="35" y="0" width="60" height="50" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
                {/* Kran Air Logam */}
                <path d="M 65 48 L 65 65 Q 65 74 52 74" stroke="#64748B" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Aliran Air Mengucur */}
                <line x1="52" y1="76" x2="52" y2="98" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" className="animate-water" />
                {/* Bak Wastafel */}
                <rect x="10" y="85" width="110" height="35" rx="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
                {/* Sabun Batang */}
                <rect x="90" y="80" width="22" height="10" rx="3" fill="#F472B6" />
                {/* Busa Mengapung */}
                <circle cx="42" cy="78" r="6" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1" className="animate-bubble" />
                <circle cx="68" cy="74" r="5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1" className="animate-bubble" style={{ animationDelay: '0.4s' }} />
              </g>

              {/* Karakter Anak - Berdiri Kokoh Menempel di Lantai Y = 195 */}
              <g transform="translate(290, 75)">
                {/* Bayangan Kaki Nyata di Lantai */}
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                {/* Sepatu Menapak di Lantai */}
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                {/* Celana Merah SD */}
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                {/* Baju Putih Sekolah */}
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
                
                {/* Kedua Tangan Menggosok Sabun ke Wastafel */}
                <path d="M 10 56 L -75 80" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                <path d="M 22 58 L -65 85" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                {/* Busa Sabun Putih di Tangan */}
                <circle cx="-75" cy="82" r="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                <circle cx="-65" cy="86" r="7" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />

                {/* Leher & Kepala */}
                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-3 px-3 py-1 bg-white/95 rounded-full text-xs font-bubble font-bold text-sky-900 border border-sky-300 shadow-xs">
              🧼 Pulang Sekolah Langsung Cuci Tangan Pakai Sabun
            </div>
          </div>
        );

      case 'evening':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-orange-100 via-amber-50 to-emerald-50 overflow-hidden border-2 border-emerald-300 flex items-center justify-center p-3">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai (Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#FEF3C7" opacity="0.6" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="3" />

              {/* Kotak Mainan - Berpijak Tegak di Lantai Y = 195 */}
              <g transform="translate(65, 110)">
                <ellipse cx="60" cy="85" rx="60" ry="6" fill="#94A3B8" opacity="0.5" />
                <rect x="0" y="25" width="120" height="60" rx="8" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
                <rect x="-4" y="15" width="128" height="14" rx="4" fill="#D97706" />
                <text x="14" y="60" fill="#78350F" fontSize="11" fontWeight="bold">KOTAK MAINAN</text>
                {/* Mainan di Dalam Kotak */}
                <circle cx="35" cy="14" r="14" fill="#92400E" />
                <circle cx="28" cy="4" r="5" fill="#78350F" />
                <circle cx="42" cy="4" r="5" fill="#78350F" />
                <rect x="75" y="10" width="20" height="18" rx="3" fill="#10B981" />
              </g>

              {/* Karakter Anak - Berdiri Menapak di Lantai Y = 195 */}
              <g transform="translate(265, 75)">
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#10B981" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#10B981" />
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#34D399" stroke="#059669" strokeWidth="2.5" />
                
                {/* Tangan Kiri Memegang Bola Merah Menuju Kotak */}
                <path d="M 10 56 L -50 65" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                <circle cx="-55" cy="65" r="13" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" className="animate-bounce" />

                {/* Tangan Kanan di Pinggang */}
                <path d="M 48 56 Q 58 68 48 76" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" fill="none" />

                {/* Leher & Kepala */}
                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* Bintang Apresiasi */}
              <g transform="translate(390, 80)" className="animate-pulse">
                <circle cx="15" cy="15" r="16" fill="#FEF08A" />
                <text x="7" y="21" fill="#CA8A04" fontSize="16">✨</text>
              </g>
            </svg>
            <div className="absolute bottom-2 left-3 px-3 py-1 bg-white/95 rounded-full text-xs font-bubble font-bold text-emerald-900 border border-emerald-300 shadow-xs">
              🧸 Sore Hari Merapikan Mainan ke Dalam Kotak Mainan
            </div>
          </div>
        );

      case 'night':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 overflow-hidden border-2 border-indigo-400 flex items-center justify-center p-3">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai Malam (Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#1E1B4B" />
              <rect x="0" y="195" width="450" height="65" fill="#0F172A" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#334155" strokeWidth="2" />

              {/* Jendela Malam dengan Bulan Sabit */}
              <g transform="translate(35, 25)">
                <rect x="0" y="0" width="75" height="85" rx="8" fill="#020617" stroke="#475569" strokeWidth="4" />
                <line x1="37.5" y1="0" x2="37.5" y2="85" stroke="#475569" strokeWidth="3" />
                <line x1="0" y1="42.5" x2="75" y2="42.5" stroke="#475569" strokeWidth="3" />
                <path d="M 45 22 A 16 16 0 1 0 60 44 A 12 12 0 1 1 45 22 Z" fill="#FDE047" className="animate-bounce-gentle" />
                <circle cx="18" cy="24" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                <circle cx="22" cy="62" r="2" fill="#FFFFFF" />
              </g>

              {/* Meja Belajar - Menapak di Lantai Y = 195 */}
              <g transform="translate(135, 115)">
                <ellipse cx="35" cy="80" rx="32" ry="5" fill="#000000" opacity="0.4" />
                <rect x="0" y="35" width="70" height="40" rx="4" fill="#78350F" />
                <rect x="8" y="75" width="8" height="5" fill="#451A03" />
                <rect x="54" y="75" width="8" height="5" fill="#451A03" />
                <polygon points="20,34 35,30 50,34 50,38 35,34 20,38" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
                <rect x="2" y="15" width="22" height="24" rx="4" fill="#0284C7" />
              </g>

              {/* Tempat Tidur Hangat - Menapak Kuat di Lantai Y = 195 */}
              <g transform="translate(230, 110)">
                <ellipse cx="85" cy="85" rx="80" ry="6" fill="#000000" opacity="0.4" />
                <rect x="0" y="0" width="14" height="85" rx="5" fill="#78350F" />
                <rect x="12" y="35" width="160" height="45" rx="6" fill="#312E81" stroke="#4338CA" strokeWidth="3" />
                <rect x="22" y="80" width="8" height="5" fill="#451A03" />
                <rect x="155" y="80" width="8" height="5" fill="#451A03" />
                {/* Bantal Lembut */}
                <rect x="20" y="24" width="44" height="22" rx="5" fill="#E2E8F0" />
                {/* Kepala Anak Tertidur */}
                <circle cx="42" cy="35" r="17" fill="#FED7AA" />
                <path d="M 26 31 C 26 19 58 19 58 31 Z" fill="#78350F" />
                <path d="M 36 35 Q 39 38 42 35" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 46 35 Q 49 38 52 35" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Selimut Hangat */}
                <rect x="50" y="35" width="122" height="45" rx="6" fill="#6366F1" stroke="#4F46E5" strokeWidth="2" />
                {/* Zzz */}
                <g className="animate-float">
                  <text x="65" y="10" fill="#A5B4FC" fontSize="16" fontWeight="bold">Zzz...</text>
                </g>
              </g>
            </svg>
            <div className="absolute bottom-2 left-3 px-3 py-1 bg-white/95 rounded-full text-xs font-bubble font-bold text-indigo-950 border border-indigo-300 shadow-xs">
              🌙 Belajar, Menyiapkan Tas Sekolah, & Tidur Tepat Waktu
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* Header Badge */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-bubble text-xs sm:text-sm font-bold border border-amber-300">
          Materi 1 — Aturan dalam Keluargaku
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Aturan di Rumah Berdasarkan Waktu
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Setiap waktu memiliki aturan baik yang membuat hari kita teratur, sehat, dan bersemangat.
        </p>
      </div>

      {/* Character Introduction Dialog */}
      <CharacterGuide
        character={data.introDialogue.character}
        expression="smile"
        dialogue={data.introDialogue.text}
        roleText={data.introDialogue.roleText}
        className="mb-6"
      />

      {/* Interactive Time of Day Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
        {data.times.map((item, idx) => {
          const isSelected = selectedTimeIndex === idx;
          const icons = [<Sun key="sun" />, <CloudSun key="cloud" />, <Sunset key="sunset" />, <Moon key="moon" />];

          return (
            <button
              key={item.id}
              onClick={() => handleSelectTime(idx)}
              className={`p-3 sm:p-4 rounded-2xl border-3 font-bubble text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-white shadow-lg scale-102 border-amber-400 ring-4 ring-amber-200'
                  : 'bg-white/70 hover:bg-white border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{icons[idx]}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {item.badge}
                </span>
              </div>
              <div>
                <p className={`text-sm sm:text-base font-bold ${isSelected ? 'text-amber-900' : 'text-slate-700'}`}>
                  {item.title}
                </p>
                <span className="text-[11px] text-slate-500 font-reading">
                  Klik untuk melihat
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Time Content Display Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-amber-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          
          {/* Animated 2D Scene Display */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {renderSceneAnimation(currentTime.illustrationType)}
          </div>

          {/* Explanation & Action Rules Checklist */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bubble font-bold bg-amber-100 text-amber-900 mb-2">
                Suasana {currentTime.title}
              </div>
              <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800 mb-2">
                Aturan pada {currentTime.title}
              </h3>
              <p className="text-slate-700 font-reading text-sm sm:text-base leading-relaxed mb-4">
                {currentTime.narration}
              </p>

              {/* Action Rules List */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-bubble font-bold text-slate-500 uppercase tracking-wider">
                  Kegiatan Utama:
                </p>
                {currentTime.actions.map((act, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-reading text-slate-700 bg-slate-50 p-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Advice Quote */}
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm font-reading text-amber-900 flex items-center gap-2.5">
              <span className="text-lg">💬</span>
              <p>
                <strong>{currentTime.characterNote.character === 'sila' ? 'Sila' : currentTime.characterNote.character === 'panca' ? 'Panca' : 'Bina'}:</strong> “{currentTime.characterNote.text}”
              </p>
            </div>
          </div>
        </div>

        {/* Audio Narration Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={handleListen}
              className="kid-button px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-sm font-bold flex items-center gap-2 shadow-sm"
              title="Dengarkan Narasi Suara"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan</span>
            </button>

            <button
              onClick={handleRepeat}
              className="kid-button px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1.5"
              title="Ulangi Suara"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {selectedTimeIndex > 0 && (
              <button
                onClick={() => handleSelectTime(selectedTimeIndex - 1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
            )}

            <button
              onClick={handleNextTab}
              className="kid-button px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <span>{selectedTimeIndex < data.times.length - 1 ? 'Waktu Berikutnya' : 'Materi Selanjutnya'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
