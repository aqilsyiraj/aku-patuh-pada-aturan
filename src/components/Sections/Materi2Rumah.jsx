import React, { useState } from 'react';
import CharacterGuide from '../CharacterGuide';
import { materialsData } from '../../data/materials';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, Check, Sparkles, HeartHandshake, Eye, RefreshCw } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi2Rumah({ onNext, onPrev }) {
  const data = materialsData.materi2;
  const [selectedHabitIndex, setSelectedHabitIndex] = useState(0);
  const [isTidied, setIsTidied] = useState(true); // Toggle between Sebelum (untidy) & Sesudah (tidy)

  const currentHabit = data.habits[selectedHabitIndex];

  const handleSelectHabit = (idx) => {
    audioService.playClickSound();
    setSelectedHabitIndex(idx);
    setIsTidied(true); // Default to tidy view
    const habit = data.habits[idx];
    audioService.speak(habit.narration);
  };

  const handleToggleState = (tidyState) => {
    if (tidyState) {
      audioService.playSuccessSound();
    } else {
      audioService.playClickSound();
    }
    setIsTidied(tidyState);
  };

  const handleListen = () => {
    audioService.playClickSound();
    audioService.speak(currentHabit.narration);
  };

  const handleRepeat = () => {
    audioService.playClickSound();
    audioService.speak(currentHabit.narration);
  };

  // Render ilustrasi interaktif sebelum & sesudah yang sederhana, rapi, dan jelas
  const renderInteractiveGraphic = (habitId, isClean) => {
    switch (habitId) {
      case 'doa':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-100 border-2 border-amber-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Meja Makan */}
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <rect x="60" y="150" width="330" height="50" rx="8" fill="#CA8A04" stroke="#A16207" strokeWidth="3" />
              <rect x="90" y="198" width="16" height="35" fill="#A16207" />
              <rect x="340" y="198" width="16" height="35" fill="#A16207" />

              {/* Piring Makanan di Meja */}
              <ellipse cx="225" cy="150" rx="42" ry="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="225" cy="148" r="10" fill="#F97316" />
              {/* Gelas Minum */}
              <rect x="155" y="130" width="18" height="24" rx="4" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />

              {isClean ? (
                // SESUDAH TERTIB: Anak Duduk Rapi Berdoa dengan Khusyuk
                <>
                  {/* Kursi Makan */}
                  <rect x="185" y="65" width="80" height="90" rx="6" fill="#D97706" opacity="0.4" />
                  
                  {/* Karakter Anak Duduk Santun Berdoa */}
                  <g transform="translate(195, 45)" className="animate-bounce-gentle">
                    {/* Badan Anak Baju Kuning */}
                    <rect x="10" y="48" width="40" height="48" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                    
                    {/* Kedua Tangan Menengadah Berdoa Bersama */}
                    <path d="M 8 58 Q 20 72 25 68" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 52 58 Q 40 72 35 68" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <ellipse cx="30" cy="67" rx="8" ry="6" fill="#FED7AA" />

                    {/* Kepala Anak */}
                    <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    {/* Rambut Rapi */}
                    <path d="M 12 22 C 12 6 48 6 48 22 Q 40 14 30 14 Q 20 14 12 22 Z" fill="#78350F" />
                    
                    {/* Mata Terpejam Khusyuk Berdoa */}
                    <path d="M 22 23 Q 25 27 28 23" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M 32 23 Q 35 27 38 23" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <ellipse cx="19" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                    <ellipse cx="41" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                    <path d="M 27 30 Q 30 33 33 30" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Cahaya Bersyukur / Berkah */}
                  <g className="animate-pulse">
                    <text x="320" y="55" fill="#059669" fontSize="18" fontWeight="bold">✨ Berdoa</text>
                    <text x="315" y="75" fill="#047857" fontSize="11" fontWeight="bold">Penuh Syukur</text>
                  </g>
                </>
              ) : (
                // SEBELUM TERTIB: Makan Terburu-buru Tanpa Berdoa, Berantakan
                <>
                  <g transform="translate(195, 45)">
                    <rect x="10" y="48" width="40" height="48" rx="8" fill="#F87171" stroke="#EF4444" strokeWidth="2" />
                    {/* Tangan Merebut Makanan Langsung */}
                    <path d="M 10 58 L -10 95" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" />
                    <circle cx="-10" cy="95" r="5" fill="#FED7AA" />
                    
                    {/* Kepala Anak */}
                    <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 12 22 C 12 6 48 6 48 22 Q 40 14 30 14 Q 20 14 12 22 Z" fill="#78350F" />
                    {/* Mata Terbuka Lebar Tidak Sopan */}
                    <circle cx="23" cy="23" r="3" fill="#1E293B" />
                    <circle cx="37" cy="23" r="3" fill="#1E293B" />
                    <ellipse cx="30" cy="32" rx="4" ry="5" fill="#B91C1C" />
                  </g>
                  {/* Tumpahan Air Minum */}
                  <ellipse cx="160" cy="155" rx="18" ry="6" fill="#38BDF8" opacity="0.7" />
                  <text x="290" y="60" fill="#DC2626" fontSize="15" fontWeight="bold">⚠️ Tanpa Berdoa</text>
                  <text x="290" y="80" fill="#B91C1C" fontSize="11">Makan tergesa-gesa</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'cuci-tangan':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-teal-100 border-2 border-sky-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Wastafel Cuci Tangan */}
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />
              <rect x="70" y="130" width="160" height="45" rx="16" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
              <rect x="140" y="175" width="22" height="40" fill="#CBD5E1" />
              {/* Kran Air */}
              <path d="M 150 70 L 150 95 Q 150 108 135 108" stroke="#64748B" strokeWidth="6" strokeLinecap="round" fill="none" />

              {isClean ? (
                // SESUDAH TERTIB: Anak Mencuci Tangan dengan Sabun dan Air Mengalir
                <>
                  {/* Air Mengalir */}
                  <line x1="135" y1="110" x2="135" y2="148" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" className="animate-water" />
                  
                  {/* Karakter Anak Berdiri di Depan Wastafel */}
                  <g transform="translate(245, 80)" className="animate-bounce-gentle">
                    <rect x="14" y="90" width="12" height="30" rx="3" fill="#0284C7" />
                    <rect x="34" y="90" width="12" height="30" rx="3" fill="#0284C7" />
                    <ellipse cx="20" cy="120" rx="9" ry="5" fill="#1E293B" />
                    <ellipse cx="40" cy="120" rx="9" ry="5" fill="#1E293B" />
                    {/* Baju Anak */}
                    <rect x="10" y="45" width="40" height="45" rx="8" fill="#34D399" stroke="#10B981" strokeWidth="2.5" />
                    {/* Kedua Tangan Menggosok Sabun di Bawah Kran */}
                    <path d="M 10 55 L -85 70" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 20 58 L -75 75" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    {/* Gumpalan Busa Putih & Bersih */}
                    <circle cx="-85" cy="72" r="9" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                    <circle cx="-75" cy="75" r="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />

                    {/* Kepala Anak Ceria */}
                    <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 12 22 C 12 6 48 6 48 22 Q 40 14 30 14 Q 20 14 12 22 Z" fill="#78350F" />
                    <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 26 29 Q 30 35 34 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Gelembung Sabun Mengapung */}
                  <circle cx="120" cy="100" r="7" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" />
                  <circle cx="155" cy="95" r="5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.5s' }} />

                  <text x="240" y="45" fill="#059669" fontSize="16" fontWeight="bold">✨ Tangan Bersih & Harum</text>
                </>
              ) : (
                // SEBELUM TERTIB: Tangan Kotor Bernoda Abu-abu Sebelum Makan
                <>
                  <g transform="translate(245, 80)">
                    <rect x="10" y="45" width="40" height="45" rx="8" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                    {/* Tangan Hitam Kotor Menolak Wastafel */}
                    <path d="M 10 55 L -45 55" stroke="#78350F" strokeWidth="9" strokeLinecap="round" />
                    {/* Bintik Kuman 🦠 */}
                    <circle cx="-50" cy="55" r="6" fill="#451A03" />
                    <circle cx="-42" cy="62" r="3" fill="#DC2626" />
                    <circle cx="-48" cy="48" r="3" fill="#DC2626" />
                    
                    {/* Kepala Anak Cemberut */}
                    <circle cx="30" cy="24" r="22" fill="#FED7AA" />
                    <path d="M 12 22 C 12 6 48 6 48 22 Z" fill="#78350F" />
                    <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 26 32 Q 30 27 34 32" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>
                  <text x="220" y="45" fill="#DC2626" fontSize="15" fontWeight="bold">❌ Tangan Penuh Kuman!</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'kembalikan-barang':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-purple-100 to-pink-100 border-2 border-purple-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />
              
              {/* Kotak Mainan Rapi di Sisi Kiri */}
              <g transform="translate(60, 110)">
                <rect x="0" y="25" width="120" height="65" rx="8" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
                <rect x="-4" y="15" width="128" height="14" rx="4" fill="#D97706" />
                <text x="14" y="60" fill="#78350F" fontSize="11" fontWeight="bold">KOTAK MAINAN</text>
              </g>

              {isClean ? (
                // SESUDAH TERTIB: Mainan Tersimpan Rapi & Lantai Bersih Lapang
                <>
                  {/* Boneka & Mainan di Dalam Kotak */}
                  <circle cx="95" cy="125" r="14" fill="#92400E" />
                  <polygon points="140,115 150,135 130,135" fill="#3B82F6" />
                  
                  {/* Karakter Anak Berdiri Puas & Tersenyum */}
                  <g transform="translate(260, 85)" className="animate-bounce-gentle">
                    <rect x="14" y="85" width="12" height="30" rx="3" fill="#0284C7" />
                    <rect x="34" y="85" width="12" height="30" rx="3" fill="#0284C7" />
                    <ellipse cx="20" cy="115" rx="9" ry="5" fill="#1E293B" />
                    <ellipse cx="40" cy="115" rx="9" ry="5" fill="#1E293B" />
                    <rect x="10" y="45" width="40" height="42" rx="8" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
                    {/* Dua Tangan Melambai Bahagia */}
                    <path d="M 10 55 L -10 40" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 50 55 L 70 40" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    {/* Kepala */}
                    <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 12 22 C 12 6 48 6 48 22 Z" fill="#78350F" />
                    <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 26 29 Q 30 35 34 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>
                  <text x="210" y="45" fill="#059669" fontSize="16" fontWeight="bold">✨ Mainan Rapi di Tempatnya</text>
                </>
              ) : (
                // SEBELUM TERTIB: Mainan Berserakan di Seluruh Lantai, Bahaya Tersandung
                <>
                  {/* Mainan Berserakan di Lantai */}
                  <circle cx="230" cy="225" r="14" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
                  <polygon points="300,215 315,235 285,235" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
                  <rect x="350" y="215" width="24" height="20" rx="3" fill="#10B981" stroke="#047857" strokeWidth="2" />
                  <circle cx="180" cy="228" r="10" fill="#FACC15" />

                  <text x="180" y="60" fill="#DC2626" fontSize="15" fontWeight="bold">⚠️ Mainan Berserakan di Lantai!</text>
                  <text x="180" y="80" fill="#991B1B" fontSize="12">Bisa membuat orang tersandung dan jatuh</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'kebersihan-kamar':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-blue-100 to-indigo-100 border-2 border-blue-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              <rect x="0" y="195" width="450" height="65" fill="#CBD5E1" />

              {/* Rangka Tempat Tidur */}
              <g transform="translate(80, 95)">
                <rect x="0" y="0" width="16" height="95" rx="6" fill="#92400E" />
                <rect x="14" y="45" width="200" height="45" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
                <rect x="25" y="90" width="12" height="15" fill="#78350F" />
                <rect x="195" y="90" width="12" height="15" fill="#78350F" />

                {isClean ? (
                  // SESUDAH TERTIB: Bantal Lurus & Selimut Terlipat Rapi
                  <>
                    <rect x="24" y="32" width="45" height="25" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
                    <rect x="75" y="45" width="139" height="45" rx="6" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                    <g className="animate-pulse">
                      <polygon points="180,25 183,32 190,33 185,38 186,45 180,42 174,45 175,38 170,33 177,32" fill="#FACC15" />
                    </g>
                  </>
                ) : (
                  // SEBELUM TERTIB: Kasur Kusut, Selimut Terlempar di Lantai
                  <>
                    {/* Bantal Miring */}
                    <rect x="24" y="32" width="45" height="25" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" transform="rotate(-15 24 32)" />
                    {/* Selimut Kusut Menumpuk */}
                    <path d="M 60 55 Q 90 35 120 60 Q 150 45 190 70 L 160 110 L 70 110 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                    {/* Pakaian Tercecer di Lantai */}
                    <ellipse cx="230" cy="115" rx="16" ry="8" fill="#FACC15" />
                  </>
                )}
              </g>

              {isClean ? (
                <text x="140" y="45" fill="#059669" fontSize="16" fontWeight="bold">✨ Kamar Tidur Bersih & Rapi</text>
              ) : (
                <text x="140" y="45" fill="#DC2626" fontSize="15" fontWeight="bold">❌ Kasur Berantakan & Kusut</text>
              )}
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bubble text-xs sm:text-sm font-bold border border-emerald-300">
          Materi 2 — Kebiasaan Baik di Rumah
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Aku Mematuhi Aturan di Rumah
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Lihat perbedaan antara sebelum tertib dan sesudah tertib mematuhi aturan keluarga.
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

      {/* 4 Habits Grid Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
        {data.habits.map((item, idx) => {
          const isSelected = selectedHabitIndex === idx;
          const icons = ['🙏', '🧼', '🧸', '🛏️'];

          return (
            <button
              key={item.id}
              onClick={() => handleSelectHabit(idx)}
              className={`p-3 sm:p-4 rounded-2xl border-3 font-bubble text-left transition-all ${
                isSelected
                  ? 'bg-white shadow-lg scale-102 border-emerald-400 ring-4 ring-emerald-200'
                  : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700'
              }`}
            >
              <div className="text-2xl mb-1">{icons[idx]}</div>
              <p className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-800'}`}>
                {item.title}
              </p>
              <span className="text-[10px] text-slate-500 font-reading block mt-0.5">
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-emerald-200 mb-6">
        
        {/* Before / After Toggle Buttons */}
        <div className="flex items-center justify-center gap-3 mb-6 bg-slate-100 p-2 rounded-2xl max-w-md mx-auto">
          <button
            onClick={() => handleToggleState(false)}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bubble text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              !isTidied
                ? 'bg-rose-500 text-white shadow-md scale-102'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>❌ Sebelum Tertib</span>
          </button>

          <button
            onClick={() => handleToggleState(true)}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bubble text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              isTidied
                ? 'bg-emerald-500 text-white shadow-md scale-102'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>✅ Sesudah Tertib</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* Animated Dynamic SVG Graphic based on State */}
          <div>
            {renderInteractiveGraphic(currentHabit.id, isTidied)}
          </div>

          {/* Description & Moral Lesson */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bubble font-bold bg-emerald-100 text-emerald-900 mb-2">
              {currentHabit.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800 mb-2">
              {currentHabit.title}
            </h3>
            
            <p className="text-slate-700 font-reading text-sm sm:text-base leading-relaxed mb-4">
              {currentHabit.narration}
            </p>

            {/* Current Condition Comparison */}
            <div className={`p-4 rounded-2xl border-2 mb-4 transition-all ${
              isTidied 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <p className="font-bubble font-bold text-xs uppercase tracking-wider mb-1">
                Kondisi {isTidied ? 'Sesudah Tertib Mematuhi Aturan:' : 'Sebelum Mematuhi Aturan:'}
              </p>
              <p className="text-sm font-reading">
                {isTidied ? currentHabit.afterStatus : currentHabit.beforeStatus}
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm font-reading text-amber-900">
              💡 <strong>Nasihat Sila:</strong> “{currentHabit.characterAdvice}”
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={handleListen}
              className="kid-button px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-sm font-bold flex items-center gap-2 shadow-sm"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan</span>
            </button>

            <button
              onClick={handleRepeat}
              className="kid-button px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {selectedHabitIndex > 0 && (
              <button
                onClick={() => handleSelectHabit(selectedHabitIndex - 1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
            )}

            <button
              onClick={() => {
                audioService.playClickSound();
                if (selectedHabitIndex < data.habits.length - 1) {
                  handleSelectHabit(selectedHabitIndex + 1);
                } else if (onNext) {
                  onNext();
                }
              }}
              className="kid-button px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <span>{selectedHabitIndex < data.habits.length - 1 ? 'Kebiasaan Berikutnya' : 'Materi Selanjutnya'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
