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
              {/* Garis Lantai & Dinding */}
              <rect x="0" y="0" width="450" height="195" fill="#FFFBEB" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />

              {/* Meja Makan Menapak Kokoh di Lantai Y = 195 */}
              <ellipse cx="225" cy="195" rx="140" ry="8" fill="#94A3B8" opacity="0.4" />
              <rect x="110" y="165" width="14" height="30" rx="3" fill="#A16207" />
              <rect x="326" y="165" width="14" height="30" rx="3" fill="#A16207" />
              <rect x="75" y="140" width="300" height="26" rx="6" fill="#CA8A04" stroke="#A16207" strokeWidth="3" />

              {/* Piring Makanan di Atas Meja */}
              <ellipse cx="225" cy="142" rx="42" ry="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="225" cy="140" r="9" fill="#F97316" />
              {/* Gelas Minum */}
              <rect x="145" y="122" width="16" height="22" rx="4" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />

              {isClean ? (
                // SESUDAH TERTIB: Anak Duduk Rapi Berdoa dengan Khusyuk di Kursi
                <>
                  {/* Kursi Makan Kayu Menapak di Lantai Y = 195 */}
                  <rect x="195" y="75" width="60" height="70" rx="6" fill="#D97706" />
                  <rect x="185" y="145" width="80" height="10" rx="3" fill="#B45309" />
                  <rect x="190" y="155" width="10" height="40" rx="2" fill="#92400E" />
                  <rect x="250" y="155" width="10" height="40" rx="2" fill="#92400E" />

                  {/* Karakter Anak Duduk Santun Berdoa di Kursi */}
                  <g transform="translate(195, 60)">
                    {/* Badan Baju Kuning */}
                    <rect x="12" y="44" width="36" height="42" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                    {/* Celana yang terlihat di kursi */}
                    <rect x="14" y="84" width="32" height="16" rx="4" fill="#0284C7" />
                    
                    {/* Kedua Tangan Menengadah Berdoa di Atas Meja */}
                    <path d="M 8 52 Q 20 66 26 62" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                    <path d="M 52 52 Q 40 66 34 62" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                    <ellipse cx="30" cy="62" rx="8" ry="6" fill="#FED7AA" />

                    {/* Kepala Anak */}
                    <circle cx="30" cy="22" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 12 20 C 12 6 48 6 48 20 Q 40 12 30 12 Q 20 12 12 20 Z" fill="#78350F" />
                    
                    {/* Mata Terpejam Khusyuk Berdoa */}
                    <path d="M 22 21 Q 25 25 28 21" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M 32 21 Q 35 25 38 21" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <ellipse cx="19" cy="26" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                    <ellipse cx="41" cy="26" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                    <path d="M 27 28 Q 30 31 33 28" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Tanda Berdoa Penuh Syukur */}
                  <g className="animate-pulse">
                    <text x="320" y="55" fill="#059669" fontSize="16" fontWeight="bold">✨ Berdoa</text>
                    <text x="315" y="75" fill="#047857" fontSize="11" fontWeight="bold">Penuh Syukur</text>
                  </g>
                </>
              ) : (
                // SEBELUM TERTIB: Makan Terburu-buru Tanpa Berdoa, Kursi Miring
                <>
                  <rect x="195" y="75" width="60" height="70" rx="6" fill="#D97706" />
                  <rect x="185" y="145" width="80" height="10" rx="3" fill="#B45309" />
                  <rect x="190" y="155" width="10" height="40" rx="2" fill="#92400E" />
                  <rect x="250" y="155" width="10" height="40" rx="2" fill="#92400E" />

                  <g transform="translate(195, 60)">
                    <rect x="12" y="44" width="36" height="42" rx="8" fill="#F87171" stroke="#EF4444" strokeWidth="2" />
                    <rect x="14" y="84" width="32" height="16" rx="4" fill="#0284C7" />
                    {/* Tangan Merebut Makanan Langsung */}
                    <path d="M 10 52 L -10 82" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="-10" cy="82" r="5" fill="#FED7AA" />
                    
                    {/* Kepala Anak */}
                    <circle cx="30" cy="22" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 12 20 C 12 6 48 6 48 20 Q 40 12 30 12 Q 20 12 12 20 Z" fill="#78350F" />
                    <circle cx="23" cy="21" r="3" fill="#1E293B" />
                    <circle cx="37" cy="21" r="3" fill="#1E293B" />
                    <ellipse cx="30" cy="30" rx="4" ry="4" fill="#B91C1C" />
                  </g>
                  {/* Tumpahan Air Minum */}
                  <ellipse cx="145" cy="145" rx="18" ry="6" fill="#38BDF8" opacity="0.7" />
                  <text x="290" y="55" fill="#DC2626" fontSize="15" fontWeight="bold">⚠️ Tanpa Berdoa</text>
                  <text x="290" y="75" fill="#B91C1C" fontSize="11">Makan tergesa-gesa</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'cuci-tangan':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-teal-100 border-2 border-sky-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai (Garis Lantai Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#F0FDFA" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />

              {/* Wastafel Cuci Tangan Berdiri di Lantai Y = 195 */}
              <g transform="translate(100, 75)">
                <ellipse cx="50" cy="120" rx="28" ry="5" fill="#94A3B8" opacity="0.5" />
                <rect x="42" y="65" width="16" height="55" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
                <rect x="0" y="55" width="100" height="35" rx="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
                {/* Kran Air */}
                <path d="M 50 20 L 50 40 Q 50 50 35 50" stroke="#64748B" strokeWidth="6" strokeLinecap="round" fill="none" />
                {isClean && (
                  <line x1="35" y1="52" x2="35" y2="75" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" className="animate-water" />
                )}
              </g>

              {isClean ? (
                // SESUDAH TERTIB: Anak Berdiri Kokoh di Lantai Y=195 Mencuci Tangan
                <>
                  <g transform="translate(255, 75)">
                    {/* Bayangan Kontak Kaki di Lantai */}
                    <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                    {/* Sepatu & Kaki */}
                    <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                    <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />

                    {/* Baju Anak Hijau Bersih */}
                    <rect x="8" y="46" width="40" height="44" rx="8" fill="#34D399" stroke="#10B981" strokeWidth="2.5" />
                    
                    {/* Kedua Tangan Menjangkau Kran dan Menggosok Sabun */}
                    <path d="M 8 56 L -90 70" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 20 60 L -80 75" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    {/* Busa Sabun Bersih */}
                    <circle cx="-90" cy="72" r="9" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                    <circle cx="-80" cy="76" r="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />

                    {/* Leher & Kepala Anak */}
                    <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                    <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 10 22 C 10 6 46 6 46 22 Q 38 14 28 14 Q 18 14 10 22 Z" fill="#78350F" />
                    <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Gelembung Sabun Mengapung */}
                  <circle cx="150" cy="95" r="7" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" />
                  <circle cx="180" cy="90" r="5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.5s' }} />

                  <text x="220" y="45" fill="#059669" fontSize="16" fontWeight="bold">✨ Tangan Bersih & Harum</text>
                </>
              ) : (
                // SEBELUM TERTIB: Tangan Kotor Bernoda Sebelum Makan
                <>
                  <g transform="translate(255, 75)">
                    <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                    <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                    <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />

                    <rect x="8" y="46" width="40" height="44" rx="8" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                    {/* Tangan Hitam Kotor Menjauh dari Wastafel */}
                    <path d="M 8 56 L -40 56" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="-45" cy="56" r="6" fill="#451A03" />
                    <circle cx="-38" cy="62" r="3" fill="#DC2626" />
                    <circle cx="-42" cy="50" r="3" fill="#DC2626" />
                    
                    <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                    <circle cx="28" cy="24" r="21" fill="#FED7AA" />
                    <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                    <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 24 31 Q 28 27 32 31" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>
                  <text x="210" y="45" fill="#DC2626" fontSize="15" fontWeight="bold">❌ Tangan Penuh Kuman!</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'kembalikan-barang':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-purple-100 to-pink-100 border-2 border-purple-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Garis Lantai & Dinding (Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#FAF5FF" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />
              
              {/* Kotak Mainan Menapak di Lantai Y = 195 */}
              <g transform="translate(60, 115)">
                <ellipse cx="60" cy="80" rx="60" ry="6" fill="#94A3B8" opacity="0.5" />
                <rect x="0" y="20" width="120" height="60" rx="8" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
                <rect x="-4" y="10" width="128" height="14" rx="4" fill="#D97706" />
                <text x="14" y="55" fill="#78350F" fontSize="11" fontWeight="bold">KOTAK MAINAN</text>
              </g>

              {isClean ? (
                // SESUDAH TERTIB: Mainan Tersimpan Rapi & Karakter Berpijak di Lantai Y=195
                <>
                  <circle cx="95" cy="120" r="14" fill="#92400E" />
                  <polygon points="140,110 150,130 130,130" fill="#3B82F6" />
                  
                  {/* Karakter Berdiri di Lantai */}
                  <g transform="translate(265, 75)">
                    <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                    <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                    <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                    <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                    
                    <rect x="8" y="46" width="40" height="44" rx="8" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
                    {/* Dua Tangan Melambai Bahagia */}
                    <g className="animate-arm-wave">
                      <path d="M 8 56 L -12 42" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                      <circle cx="-12" cy="42" r="5" fill="#FED7AA" />
                    </g>
                    <path d="M 48 56 L 68 42" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="68" cy="42" r="5" fill="#FED7AA" />
                    
                    {/* Leher & Kepala */}
                    <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                    <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                    <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                    <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                    <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                    <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>
                  <text x="210" y="45" fill="#059669" fontSize="16" fontWeight="bold">✨ Mainan Rapi di Tempatnya</text>
                </>
              ) : (
                // SEBELUM TERTIB: Mainan Berserakan di Seluruh Lantai
                <>
                  <circle cx="230" cy="215" r="14" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
                  <polygon points="300,205 315,225 285,225" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
                  <rect x="350" y="205" width="24" height="20" rx="3" fill="#10B981" stroke="#047857" strokeWidth="2" />
                  <circle cx="180" cy="218" r="10" fill="#FACC15" />

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
              {/* Garis Lantai & Dinding (Y = 195) */}
              <rect x="0" y="0" width="450" height="195" fill="#EFF6FF" />
              <rect x="0" y="195" width="450" height="65" fill="#CBD5E1" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#94A3B8" strokeWidth="2.5" />

              {/* Rangka Tempat Tidur Menapak Kokoh di Lantai Y = 195 */}
              <g transform="translate(60, 95)">
                <ellipse cx="115" cy="100" rx="110" ry="7" fill="#94A3B8" opacity="0.5" />
                {/* Kepala Ranjang */}
                <rect x="0" y="0" width="16" height="100" rx="6" fill="#92400E" />
                {/* Kasur */}
                <rect x="14" y="45" width="210" height="45" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
                {/* Kaki Ranjang Menapak di Lantai Y = 195 (relatif Y = 100) */}
                <rect x="25" y="90" width="12" height="10" fill="#78350F" />
                <rect x="205" y="90" width="12" height="10" fill="#78350F" />

                {isClean ? (
                  // SESUDAH TERTIB: Bantal Lurus & Selimut Terlipat Rapi
                  <>
                    <rect x="24" y="32" width="45" height="25" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
                    <rect x="85" y="45" width="139" height="45" rx="6" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                    <g className="animate-pulse">
                      <polygon points="190,25 193,32 200,33 195,38 196,45 190,42 184,45 185,38 180,33 187,32" fill="#FACC15" />
                    </g>
                  </>
                ) : (
                  // SEBELUM TERTIB: Kasur Kusut, Selimut Terlempar di Lantai
                  <>
                    <rect x="24" y="32" width="45" height="25" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" transform="rotate(-15 24 32)" />
                    <path d="M 60 55 Q 90 35 120 60 Q 150 45 190 70 L 160 100 L 70 100 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                    <ellipse cx="230" cy="100" rx="16" ry="8" fill="#FACC15" />
                  </>
                )}
              </g>

              {/* Karakter Anak Merapikan / Memeriksa Kamar */}
              <g transform="translate(325, 75)">
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#0284C7" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#0284C7" />

                <rect x="8" y="46" width="40" height="44" rx="8" fill={isClean ? "#34D399" : "#F87171"} stroke={isClean ? "#059669" : "#EF4444"} strokeWidth="2.5" />
                <path d="M 8 56 L -15 65" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                <circle cx="-15" cy="65" r="5" fill="#FED7AA" />

                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                <path d={isClean ? "M 24 29 Q 28 34 32 29" : "M 24 32 Q 28 27 32 32"} stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
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
