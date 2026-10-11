import React, { useState } from 'react';
import CharacterGuide from '../CharacterGuide';
import { materialsData } from '../../data/materials';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, GraduationCap, Users, BookOpen, Trash2, CheckCircle2 } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi4Sekolah({ onNext, onPrev }) {
  const data = materialsData.materi4;
  const [selectedRuleIndex, setSelectedRuleIndex] = useState(0);
  const currentRule = data.rules[selectedRuleIndex];

  const handleSelectRule = (idx) => {
    audioService.playClickSound();
    setSelectedRuleIndex(idx);
    const rule = data.rules[idx];
    audioService.speak(rule.narration);
  };

  const handleListen = () => {
    audioService.playClickSound();
    audioService.speak(currentRule.narration);
  };

  const handleRepeat = () => {
    audioService.playClickSound();
    audioService.speak(currentRule.narration);
  };

  // Dedicated School Environment SVG Animations
  const renderSchoolAnimation = (id) => {
    switch (id) {
      case 'berbaris':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 via-sky-50 to-emerald-50 border-2 border-sky-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Gedung Sekolah & Lapangan */}
              <rect x="0" y="0" width="450" height="195" fill="#E0F2FE" opacity="0.6" />
              <rect x="0" y="195" width="450" height="65" fill="#86EFAC" />

              {/* Tiang Bendera Merah Putih di Halaman */}
              <g transform="translate(45, 30)">
                <line x1="10" y1="0" x2="10" y2="170" stroke="#64748B" strokeWidth="4" />
                <polygon points="12,0 48,10 12,20" fill="#EF4444" />
                <polygon points="12,20 48,30 12,40" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              </g>

              {/* Tiga Siswa SD Berbaris Tertib & Lurus (Seragam Merah Putih) Menapak di Tanah */}
              {[
                { x: 130, delay: '0s' },
                { x: 230, delay: '0.2s' },
                { x: 330, delay: '0.4s' }
              ].map((student, i) => (
                <g key={i} transform={`translate(${student.x}, 75)`}>
                  {/* Bayangan Kontak di Tanah */}
                  <ellipse cx="28" cy="120" rx="24" ry="5" fill="#15803D" opacity="0.5" />
                  {/* Sepatu Hitam & Kaki */}
                  <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                  <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                  <rect x="12" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                  <rect x="32" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                  {/* Kemeja Putih Seragam SD */}
                  <rect x="8" y="46" width="40" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  {/* Dasi Merah SD */}
                  <polygon points="28,48 24,62 28,72 32,62" fill="#DC2626" />

                  {/* Lengan Lurus Rapi di Samping Badan (Sikap Sempurna) */}
                  <path d="M 8 52 L 6 86" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 48 52 L 50 86" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />

                  {/* Leher & Kepala Siswa Menghadap Depan Tertib */}
                  <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                  <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                  <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                  <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                  <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                  <ellipse cx="17" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                  <ellipse cx="39" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                  <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
                </g>
              ))}

              <text x="110" y="235" fill="#065F46" fontSize="14" fontWeight="bold">🚶‍♂️ Berbaris Rapi, Lurus, dan Tidak Dorong-Dorongan</text>
            </svg>
          </div>
        );

      case 'mendengarkan-guru':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding Kelas & Garis Lantai Y = 195 */}
              <rect x="0" y="0" width="450" height="195" fill="#FEF3C7" opacity="0.6" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />

              {/* Papan Tulis Kelas Hijau */}
              <g transform="translate(25, 25)">
                <rect x="0" y="0" width="150" height="100" rx="6" fill="#065F46" stroke="#78350F" strokeWidth="5" />
                <text x="18" y="32" fill="#FEF08A" fontSize="12" fontWeight="bold">PELAJARAN</text>
                <text x="18" y="55" fill="#FFFFFF" fontSize="10">✓ Belajar Tertib</text>
                <text x="18" y="75" fill="#FFFFFF" fontSize="10">✓ Angkat Tangan</text>
              </g>

              {/* Ibu Guru Menjelaskan - Berdiri Menapak di Lantai Y = 195 */}
              <g transform="translate(195, 65)">
                {/* Bayangan Kontak Guru di Lantai */}
                <ellipse cx="30" cy="130" rx="26" ry="6" fill="#94A3B8" opacity="0.6" />
                {/* Sepatu & Rok Panjang Guru */}
                <ellipse cx="22" cy="129" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="129" rx="10" ry="5" fill="#1E293B" />
                <polygon points="12,70 48,70 54,128 6,128" fill="#0369A1" />
                
                {/* Baju / Blazer Guru */}
                <rect x="12" y="44" width="36" height="30" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
                
                {/* Tangan Kiri Menunjuk ke Papan Tulis */}
                <path d="M 12 52 L -18 42" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <circle cx="-18" cy="42" r="4.5" fill="#FED7AA" />
                {/* Tangan Kanan Memegang Buku */}
                <path d="M 48 52 L 40 70" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <rect x="36" y="65" width="18" height="24" rx="3" fill="#F59E0B" />

                {/* Leher & Kepala Ibu Guru */}
                <rect x="25" y="36" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="30" cy="24" r="20" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Jilbab Rapi */}
                <path d="M 12 24 C 12 6 48 6 48 24 Z" fill="#0369A1" />
                <circle cx="25" cy="24" r="2.5" fill="#1E293B" />
                <circle cx="35" cy="24" r="2.5" fill="#1E293B" />
                <path d="M 27 30 Q 30 35 33 30" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* Meja Belajar & Murid Duduk Rapi Menapak di Lantai Y = 195 */}
              <g transform="translate(310, 85)">
                {/* Bayangan Kontak Meja & Kursi */}
                <ellipse cx="50" cy="110" rx="45" ry="6" fill="#94A3B8" opacity="0.5" />
                
                {/* Kursi Belajar Kayu */}
                <rect x="15" y="40" width="30" height="40" rx="4" fill="#B45309" />
                <rect x="18" y="75" width="8" height="35" fill="#78350F" />

                {/* Murid Duduk di Kursi */}
                <g transform="translate(15, 10)">
                  <rect x="6" y="40" width="30" height="32" rx="6" fill="#DC2626" />
                  {/* Tangan Kanan Mengangkat Tinggi Sopan */}
                  <g className="animate-arm-wave">
                    <path d="M 32 45 L 36 12" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="36" cy="10" r="4.5" fill="#FED7AA" />
                  </g>
                  {/* Kepala Murid */}
                  <circle cx="21" cy="24" r="17" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                  <path d="M 8 22 C 8 10 34 10 34 22 Z" fill="#78350F" />
                  <circle cx="16" cy="23" r="2" fill="#1E293B" />
                  <circle cx="26" cy="23" r="2" fill="#1E293B" />
                  <path d="M 18 29 Q 21 33 24 29" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                </g>

                {/* Meja Belajar Kayu */}
                <rect x="25" y="60" width="75" height="15" rx="3" fill="#92400E" stroke="#78350F" strokeWidth="2" />
                <rect x="35" y="75" width="8" height="35" fill="#78350F" />
                <rect x="85" y="75" width="8" height="35" fill="#78350F" />
                {/* Buku Terbuka di Atas Meja */}
                <rect x="45" y="52" width="35" height="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" rx="2" />
              </g>

              <text x="110" y="235" fill="#B45309" fontSize="14" fontWeight="bold">🙋‍♂️ Mendengarkan Guru & Mengangkat Tangan saat Bertanya</text>
            </svg>
          </div>
        );

      case 'piket-kelas':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-emerald-100 to-teal-50 border-2 border-emerald-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Garis Lantai Y = 195 */}
              <rect x="0" y="0" width="450" height="195" fill="#ECFDF5" />
              <rect x="0" y="195" width="450" height="65" fill="#CBD5E1" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#94A3B8" strokeWidth="2.5" />

              {/* Papan Tulis Kelas yang Dihapus */}
              <g transform="translate(25, 25)">
                <rect x="0" y="0" width="130" height="85" rx="6" fill="#047857" stroke="#78350F" strokeWidth="4" />
                {/* Penghapus Papan */}
                <rect x="95" y="35" width="20" height="12" rx="3" fill="#D97706" />
              </g>

              {/* Siswa 1 yang Menghapus Papan Tulis - Berdiri di Lantai Y = 195 */}
              <g transform="translate(135, 75)">
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                {/* Tangan Menghapus Papan Tulis */}
                <path d="M 8 56 L -20 35" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <circle cx="-20" cy="35" r="4.5" fill="#FED7AA" />

                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="34" cy="23" r="2.5" fill="#1E293B" />
                <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* Siswa 2 Menyapu Lantai Kelas - Berdiri di Lantai Y = 195 */}
              <g transform="translate(255, 75)">
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

                {/* Sapu Lantai Kelas */}
                <g className="animate-sweep" style={{ transformOrigin: '15px 55px' }}>
                  <line x1="12" y1="55" x2="-65" y2="120" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
                  <polygon points="-80,120 -50,120 -58,102 -72,102" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />
                </g>

                <path d="M 8 56 L -25 75" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <rect x="23" y="38" width="10" height="10" fill="#FED7AA" rx="2" />
                <circle cx="28" cy="24" r="21" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 10 22 C 10 6 46 6 46 22 Z" fill="#78350F" />
                <circle cx="22" cy="23" r="2" fill="#1E293B" />
                <circle cx="34" cy="23" r="2" fill="#1E293B" />
                <path d="M 24 29 Q 28 34 32 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* Meja Guru & Buku Rapi di Sisi Kanan */}
              <g transform="translate(365, 115)">
                <ellipse cx="30" cy="80" rx="32" ry="5" fill="#94A3B8" opacity="0.5" />
                <rect x="0" y="25" width="60" height="15" rx="3" fill="#92400E" />
                <rect x="5" y="40" width="8" height="40" fill="#78350F" />
                <rect x="47" y="40" width="8" height="40" fill="#78350F" />
                {/* Buku & Vas Bunga */}
                <rect x="10" y="12" width="22" height="14" rx="2" fill="#3B82F6" />
                <rect x="36" y="5" width="14" height="20" rx="3" fill="#EC4899" />
              </g>

              <text x="120" y="235" fill="#047857" fontSize="14" fontWeight="bold">🤝 Bersama-sama Piket Membersihkan Kelas</text>
            </svg>
          </div>
        );

      case 'kebersihan-sekolah':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-indigo-100 border-2 border-sky-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Lingkungan Sekolah Bersih & Garis Lantai Y = 195 */}
              <rect x="0" y="0" width="450" height="195" fill="#F0F9FF" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />
              <line x1="0" y1="195" x2="450" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />

              {/* Dua Tong Sampah Pilah Sekolah Menapak di Tanah */}
              <g transform="translate(90, 105)">
                <ellipse cx="30" cy="90" rx="30" ry="6" fill="#94A3B8" opacity="0.4" />
                <ellipse cx="100" cy="90" rx="30" ry="6" fill="#94A3B8" opacity="0.4" />

                {/* Tong Hijau (Organik) */}
                <rect x="0" y="25" width="60" height="65" rx="8" fill="#16A34A" stroke="#15803D" strokeWidth="3" />
                <text x="9" y="62" fill="#FFFFFF" fontSize="9" fontWeight="bold">ORGANIK</text>

                {/* Tong Kuning (Anorganik / Daur Ulang) */}
                <rect x="70" y="25" width="60" height="65" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="3" />
                <text x="73" y="62" fill="#713F12" fontSize="9" fontWeight="bold">ANORGANIK</text>
              </g>

              {/* Siswa Memasukkan Botol Plastik - Berpijak di Tanah Y = 195 */}
              <g transform="translate(285, 75)">
                {/* Bayangan Kontak Siswa */}
                <ellipse cx="28" cy="120" rx="24" ry="5" fill="#94A3B8" opacity="0.6" />
                <ellipse cx="18" cy="119" rx="10" ry="5" fill="#1E293B" />
                <ellipse cx="38" cy="119" rx="10" ry="5" fill="#1E293B" />
                <rect x="12" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                <rect x="32" y="88" width="12" height="28" rx="3" fill="#DC2626" />
                
                {/* Seragam SD */}
                <rect x="8" y="46" width="40" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                <polygon points="28,48 24,62 28,72 32,62" fill="#DC2626" />

                {/* Tangan Kiri Menjulur Memasukkan Botol ke Tong Kuning */}
                <path d="M 8 56 L -65 65" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                {/* Botol Plastik Daur Ulang */}
                <rect x="-75" y="60" width="10" height="18" rx="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" className="animate-bounce" />

                {/* Kepala Siswa */}
                <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 12 22 C 12 6 48 6 48 22 Z" fill="#78350F" />
                <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                <path d="M 26 29 Q 30 35 34 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              <text x="110" y="235" fill="#1E40AF" fontSize="14" fontWeight="bold">✨ Menjaga Lingkungan Sekolah Tetap Bersih & Indah</text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-bubble text-xs sm:text-sm font-bold border border-sky-300">
          Materi 4 — Tata Tertib di Sekolah
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Aku Patuh Aturan di Sekolah
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Berbaris tertib, menghormati guru, gotong royong piket, dan menjaga kebersihan sekolah.
        </p>
      </div>

      {/* Character Guide */}
      <CharacterGuide
        character={data.introDialogue.character}
        expression="smile"
        dialogue={data.introDialogue.text}
        roleText={data.introDialogue.roleText}
        className="mb-6"
      />

      {/* 4 School Rules Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
        {data.rules.map((rule, idx) => {
          const isSelected = selectedRuleIndex === idx;
          const icons = ['🚶‍♂️', '👩‍🏫', '🧹', '🏫'];

          return (
            <button
              key={rule.id}
              onClick={() => handleSelectRule(idx)}
              className={`p-3.5 rounded-2xl border-3 text-left font-bubble transition-all ${
                isSelected
                  ? 'bg-white shadow-lg scale-102 border-sky-400 ring-4 ring-sky-200'
                  : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700'
              }`}
            >
              <div className="text-2xl mb-1">{icons[idx]}</div>
              <p className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-sky-900' : 'text-slate-800'}`}>
                {rule.title}
              </p>
              <span className="text-[10px] text-slate-500 font-reading block mt-0.5">
                {rule.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Display Stage */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-3 border-sky-200 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* Animated Graphic Display */}
          <div>
            {renderSchoolAnimation(currentRule.id)}
          </div>

          {/* Text Description */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bubble font-bold bg-sky-100 text-sky-800 mb-2">
              {currentRule.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800 mb-2">
              {currentRule.title}
            </h3>
            <p className="text-slate-700 font-reading text-sm sm:text-base leading-relaxed mb-4">
              {currentRule.narration}
            </p>

            <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl mb-3">
              <p className="text-xs font-bubble font-bold text-sky-900 uppercase tracking-wider mb-1">
                Sikap yang Perlu Diterapkan:
              </p>
              <p className="text-sm font-reading text-slate-700">
                {currentRule.explanation}
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm font-reading text-amber-900">
              🌟 <strong>Manfaat:</strong> {currentRule.moral}
            </div>
          </div>
        </div>

        {/* Audio Narration Action Bar (Dengarkan, Ulangi, Selanjutnya as required by prompt) */}
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
            {selectedRuleIndex > 0 && (
              <button
                onClick={() => handleSelectRule(selectedRuleIndex - 1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bubble text-sm font-semibold flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
            )}

            <button
              onClick={() => {
                audioService.playClickSound();
                if (selectedRuleIndex < data.rules.length - 1) {
                  handleSelectRule(selectedRuleIndex + 1);
                } else if (onNext) {
                  onNext();
                }
              }}
              className="kid-button px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <span>{selectedRuleIndex < data.rules.length - 1 ? 'Aturan Berikutnya' : 'Ayo Main Game! 🎮'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
