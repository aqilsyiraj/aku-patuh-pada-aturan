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

  // Render animasi 2D yang sederhana, rapi, proporsional, dan sangat jelas
  const renderSceneAnimation = (type) => {
    switch (type) {
      case 'morning':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-100 via-orange-50 to-sky-50 overflow-hidden border-2 border-amber-300 flex items-center justify-center p-3">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai Kamar */}
              <rect x="0" y="0" width="450" height="200" fill="#FEF9C3" opacity="0.6" />
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />
              <line x1="0" y1="200" x2="450" y2="200" stroke="#CBD5E1" strokeWidth="3" />

              {/* Jendela Pagi dengan Matahari Terbit */}
              <g transform="translate(30, 20)">
                <rect x="0" y="0" width="80" height="90" rx="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="4" />
                <line x1="40" y1="0" x2="40" y2="90" stroke="#0284C7" strokeWidth="3" />
                <line x1="0" y1="45" x2="80" y2="45" stroke="#0284C7" strokeWidth="3" />
                {/* Matahari Tersenyum */}
                <circle cx="40" cy="45" r="22" fill="#FDE047" stroke="#F59E0B" strokeWidth="2" className="animate-spin" style={{ animationDuration: '25s', transformOrigin: '40px 45px' }} />
                <circle cx="34" cy="42" r="2" fill="#78350F" />
                <circle cx="46" cy="42" r="2" fill="#78350F" />
                <path d="M 36 49 Q 40 53 44 49" stroke="#78350F" strokeWidth="1.5" fill="none" />
              </g>

              {/* Tempat Tidur Rapi (Kasur, Bantal, Selimut Terlipat) */}
              <g transform="translate(130, 95)">
                {/* Sandaran Kasur (Headboard) */}
                <rect x="0" y="10" width="16" height="95" rx="6" fill="#92400E" />
                {/* Rangka & Kasur */}
                <rect x="14" y="55" width="160" height="40" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
                {/* Kaki Tempat Tidur */}
                <rect x="25" y="95" width="10" height="15" fill="#78350F" rx="2" />
                <rect x="155" y="95" width="10" height="15" fill="#78350F" rx="2" />
                {/* Bantal Putih Bersih */}
                <rect x="24" y="42" width="40" height="24" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
                {/* Selimut yang Sudah Dirapikan Rapi */}
                <rect x="70" y="55" width="104" height="40" rx="6" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                {/* Bintang Kilau Kerapian */}
                <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                  <polygon points="160,35 163,42 170,43 165,48 166,55 160,52 154,55 155,48 150,43 157,42" fill="#FACC15" />
                </g>
              </g>

              {/* Karakter Anak Rapi - Berdiri Tersenyum Merapikan Tempat Tidur */}
              <g transform="translate(325, 95)" className="animate-bounce-gentle">
                {/* Sepatu */}
                <ellipse cx="22" cy="115" rx="10" ry="6" fill="#0284C7" />
                <ellipse cx="44" cy="115" rx="10" ry="6" fill="#0284C7" />
                {/* Kaki Celana */}
                <rect x="16" y="85" width="12" height="28" rx="4" fill="#0369A1" />
                <rect x="38" y="85" width="12" height="28" rx="4" fill="#0369A1" />
                {/* Baju Kaos Pagi Kuning */}
                <rect x="12" y="45" width="42" height="42" rx="10" fill="#FACC15" stroke="#EAB308" strokeWidth="2.5" />
                {/* Tangan Kiri Merapikan Kasur */}
                <path d="M 12 55 L -15 65" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" />
                <circle cx="-15" cy="65" r="5" fill="#FED7AA" />
                {/* Tangan Kanan Mengacungkan Jempol Ceria */}
                <path d="M 54 55 Q 70 48 68 38" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" fill="none" />
                <circle cx="68" cy="38" r="5.5" fill="#FED7AA" />
                {/* Leher */}
                <rect x="28" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                {/* Kepala Anak */}
                <circle cx="33" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Rambut Cokelat Rapi */}
                <path d="M 14 22 C 14 6 52 6 52 22 Q 44 14 33 14 Q 22 14 14 22 Z" fill="#78350F" />
                {/* Mata & Pipi */}
                <circle cx="27" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="39" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="22" cy="29" rx="4" ry="2.5" fill="#F87171" opacity="0.7" />
                <ellipse cx="44" cy="29" rx="4" ry="2.5" fill="#F87171" opacity="0.7" />
                {/* Senyum Bahagia */}
                <path d="M 29 29 Q 33 35 37 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
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
              {/* Dinding & Lantai */}
              <rect x="0" y="0" width="450" height="200" fill="#F0F9FF" />
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />
              <line x1="0" y1="200" x2="450" y2="200" stroke="#CBD5E1" strokeWidth="3" />

              {/* Tas Sekolah Tergantung Rapi di Samping */}
              <g transform="translate(35, 40)">
                <circle cx="15" cy="15" r="5" fill="#78350F" />
                <rect x="13" y="15" width="4" height="20" fill="#78350F" />
                {/* Ransel Sekolah Biru */}
                <rect x="-5" y="35" width="40" height="52" rx="10" fill="#0284C7" stroke="#0369A1" strokeWidth="2.5" />
                <rect x="3" y="50" width="24" height="25" rx="6" fill="#38BDF8" />
                <text x="5" y="105" fill="#0369A1" fontSize="10" fontWeight="bold">Tas Sekolah</text>
              </g>

              {/* Wastafel Cuci Tangan dengan Kran & Air Mengalir */}
              <g transform="translate(140, 75)">
                {/* Cermin di Dinding */}
                <rect x="35" y="0" width="60" height="65" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
                <line x1="45" y1="12" x2="75" y2="12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

                {/* Kran Air Logam */}
                <path d="M 65 60 L 65 78 Q 65 90 52 90" stroke="#64748B" strokeWidth="6" strokeLinecap="round" fill="none" />
                
                {/* Aliran Air Jernih Mengucur */}
                <line x1="52" y1="92" x2="52" y2="128" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" className="animate-water" />

                {/* Bak Wastafel Putih Bersih */}
                <rect x="10" y="125" width="110" height="36" rx="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
                <rect x="55" y="160" width="20" height="40" fill="#CBD5E1" />

                {/* Sabun Cuci Tangan Batang Merah Muda */}
                <rect x="90" y="115" width="24" height="12" rx="4" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
                <text x="92" y="124" fill="#FFFFFF" fontSize="8" fontWeight="bold">SABUN</text>

                {/* Gelembung Sabun Busa Bersih */}
                <circle cx="42" cy="110" r="7" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" />
                <circle cx="68" cy="104" r="5.5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.4s' }} />
                <circle cx="56" cy="98" r="4" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.8s' }} />
              </g>

              {/* Karakter Anak Sedang Mencuci Tangan dengan Busa */}
              <g transform="translate(285, 95)" className="animate-bounce-gentle">
                {/* Sepatu */}
                <ellipse cx="22" cy="115" rx="10" ry="6" fill="#1E293B" />
                <ellipse cx="44" cy="115" rx="10" ry="6" fill="#1E293B" />
                {/* Kaki Celana Seragam */}
                <rect x="16" y="85" width="12" height="28" rx="4" fill="#DC2626" />
                <rect x="38" y="85" width="12" height="28" rx="4" fill="#DC2626" />
                {/* Baju Putih Sekolah */}
                <rect x="12" y="45" width="42" height="42" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
                {/* Kedua Tangan Menjangkau Wastafel Menggosok Sabun */}
                <path d="M 12 55 L -65 95" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" />
                <path d="M 25 58 L -55 98" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" />
                {/* Gumpalan Busa di Tangan */}
                <circle cx="-65" cy="98" r="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                <circle cx="-55" cy="100" r="7" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                {/* Leher */}
                <rect x="28" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                {/* Kepala Anak Menghadap Wastafel */}
                <circle cx="33" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Rambut Rapi */}
                <path d="M 14 22 C 14 6 52 6 52 22 Q 44 14 33 14 Q 22 14 14 22 Z" fill="#78350F" />
                {/* Mata & Senyum */}
                <circle cx="26" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="38" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="22" cy="29" rx="4" ry="2" fill="#F87171" opacity="0.7" />
                <path d="M 28 29 Q 32 35 36 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
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
              {/* Dinding & Lantai */}
              <rect x="0" y="0" width="450" height="200" fill="#FEF3C7" opacity="0.6" />
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />
              <line x1="0" y1="200" x2="450" y2="200" stroke="#CBD5E1" strokeWidth="3" />

              {/* Kotak Mainan Besar Rapi (Tertulis KOTAK MAINAN) */}
              <g transform="translate(60, 110)">
                {/* Badan Kotak Mainan */}
                <rect x="0" y="25" width="130" height="65" rx="10" fill="#F59E0B" stroke="#B45309" strokeWidth="3.5" />
                {/* Tutup Kotak yang Terbuka */}
                <rect x="-6" y="15" width="142" height="14" rx="5" fill="#D97706" />
                <text x="18" y="62" fill="#78350F" fontSize="12" fontWeight="bold">KOTAK MAINAN</text>
                {/* Boneka Beruang & Balok di Dalam Kotak */}
                <circle cx="35" cy="14" r="14" fill="#92400E" />
                <circle cx="28" cy="4" r="5" fill="#78350F" />
                <circle cx="42" cy="4" r="5" fill="#78350F" />
                <circle cx="32" cy="12" r="2" fill="#FFFFFF" />
                <circle cx="38" cy="12" r="2" fill="#FFFFFF" />
                <rect x="80" y="8" width="22" height="20" rx="3" fill="#10B981" />
              </g>

              {/* Karakter Anak Memasukkan Bola Mainan ke Dalam Kotak */}
              <g transform="translate(255, 95)" className="animate-bounce-gentle">
                {/* Sepatu */}
                <ellipse cx="22" cy="115" rx="10" ry="6" fill="#10B981" />
                <ellipse cx="44" cy="115" rx="10" ry="6" fill="#10B981" />
                {/* Celana Pendek Santai */}
                <rect x="16" y="85" width="12" height="28" rx="4" fill="#0284C7" />
                <rect x="38" y="85" width="12" height="28" rx="4" fill="#0284C7" />
                {/* Kaos Hijau Mint */}
                <rect x="12" y="45" width="42" height="42" rx="10" fill="#34D399" stroke="#059669" strokeWidth="2.5" />
                
                {/* Tangan Kiri Menjangkau ke Kotak Memegang Bola Merah */}
                <path d="M 12 55 L -45 60" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" />
                {/* Bola Mainan Merah Terlihat Jelas */}
                <circle cx="-50" cy="60" r="13" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" className="animate-bounce" />
                <path d="M -56 56 Q -50 64 -44 56" stroke="#FFFFFF" strokeWidth="2" fill="none" />

                {/* Tangan Kanan di Pinggang Ceria */}
                <path d="M 54 55 Q 64 68 54 75" stroke="#FED7AA" strokeWidth="9" strokeLinecap="round" fill="none" />

                {/* Leher & Kepala */}
                <rect x="28" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="33" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Rambut Rapi */}
                <path d="M 14 22 C 14 6 52 6 52 22 Q 44 14 33 14 Q 22 14 14 22 Z" fill="#78350F" />
                <circle cx="27" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="39" cy="23" r="2.5" fill="#1E293B" />
                <ellipse cx="22" cy="29" rx="4" ry="2.5" fill="#F87171" opacity="0.7" />
                <ellipse cx="44" cy="29" rx="4" ry="2.5" fill="#F87171" opacity="0.7" />
                <path d="M 29 29 Q 33 35 37 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
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
              {/* Dinding Kamar Malam & Lantai */}
              <rect x="0" y="0" width="450" height="200" fill="#1E1B4B" />
              <rect x="0" y="200" width="450" height="60" fill="#0F172A" />
              <line x1="0" y1="200" x2="450" y2="200" stroke="#334155" strokeWidth="2" />

              {/* Jendela Malam dengan Bulan Sabit & Bintang Berkelip */}
              <g transform="translate(30, 20)">
                <rect x="0" y="0" width="80" height="90" rx="8" fill="#020617" stroke="#475569" strokeWidth="4" />
                <line x1="40" y1="0" x2="40" y2="90" stroke="#475569" strokeWidth="3" />
                <line x1="0" y1="45" x2="80" y2="45" stroke="#475569" strokeWidth="3" />
                {/* Bulan Sabit Emas */}
                <path d="M 50 25 A 18 18 0 1 0 65 48 A 14 14 0 1 1 50 25 Z" fill="#FDE047" className="animate-bounce-gentle" />
                <circle cx="20" cy="25" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                <circle cx="25" cy="65" r="2.5" fill="#FFFFFF" />
              </g>

              {/* Meja Belajar dengan Buku & Lampu Menyala */}
              <g transform="translate(130, 110)">
                <rect x="0" y="35" width="70" height="40" rx="4" fill="#78350F" />
                <rect x="8" y="75" width="8" height="20" fill="#451A03" />
                <rect x="54" y="75" width="8" height="20" fill="#451A03" />
                {/* Buku Terbuka yang Telah Dipelajari */}
                <polygon points="20,34 35,30 50,34 50,38 35,34 20,38" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
                {/* Tas Sekolah Siap untuk Besok */}
                <rect x="2" y="15" width="22" height="24" rx="4" fill="#0284C7" />
              </g>

              {/* Tempat Tidur Hangat dengan Anak Tertidur Nyenyak */}
              <g transform="translate(230, 115)">
                {/* Sandaran Ranjang */}
                <rect x="0" y="0" width="16" height="85" rx="6" fill="#78350F" />
                {/* Kasur */}
                <rect x="14" y="35" width="160" height="45" rx="8" fill="#312E81" stroke="#4338CA" strokeWidth="3" />
                {/* Kaki Ranjang */}
                <rect x="25" y="80" width="10" height="15" fill="#451A03" />
                <rect x="155" y="80" width="10" height="15" fill="#451A03" />
                {/* Bantal Lembut */}
                <rect x="22" y="24" width="44" height="24" rx="6" fill="#E2E8F0" />
                {/* Kepala Anak Tertidur Tenang (Mata Terpejam) */}
                <circle cx="44" cy="36" r="18" fill="#FED7AA" />
                <path d="M 28 32 C 28 20 60 20 60 32 Z" fill="#78350F" />
                {/* Mata Terpejam Rileks */}
                <path d="M 38 36 Q 41 39 44 36" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 48 36 Q 51 39 54 36" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Selimut Hangat Menutupi Badan */}
                <rect x="52" y="35" width="122" height="45" rx="6" fill="#6366F1" stroke="#4F46E5" strokeWidth="2" />
                {/* Tulisan Zzz Melayang Santai */}
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
