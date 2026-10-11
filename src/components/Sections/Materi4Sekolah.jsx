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

              {/* Tiga Siswa SD Berbaris Tertib & Lurus (Seragam Merah Putih) */}
              {[
                { x: 130, delay: '0s' },
                { x: 230, delay: '0.2s' },
                { x: 330, delay: '0.4s' }
              ].map((student, i) => (
                <g key={i} transform={`translate(${student.x}, 75)`} className="animate-bounce-gentle" style={{ animationDelay: student.delay }}>
                  {/* Sepatu Hitam & Kaus Kaki Putih */}
                  <ellipse cx="20" cy="120" rx="9" ry="5" fill="#1E293B" />
                  <ellipse cx="40" cy="120" rx="9" ry="5" fill="#1E293B" />
                  {/* Celana/Rok Merah SD */}
                  <rect x="14" y="90" width="12" height="28" rx="3" fill="#DC2626" />
                  <rect x="34" y="90" width="12" height="28" rx="3" fill="#DC2626" />
                  {/* Kemeja Putih Seragam SD */}
                  <rect x="10" y="45" width="40" height="48" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  {/* Dasi Merah SD */}
                  <polygon points="30,48 26,62 30,72 34,62" fill="#DC2626" />

                  {/* Lengan Lurus Rapi di Samping Badan (Sikap Sempurna) */}
                  <path d="M 10 52 L 8 90" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 50 52 L 52 90" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />

                  {/* Kepala Siswa Menghadap Depan Tertib */}
                  <circle cx="30" cy="24" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                  <path d="M 12 22 C 12 6 48 6 48 22 Z" fill="#78350F" />
                  <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                  <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                  <ellipse cx="19" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                  <ellipse cx="41" cy="28" rx="3.5" ry="2" fill="#F87171" opacity="0.7" />
                  <path d="M 26 29 Q 30 34 34 29" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
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
              {/* Dinding Kelas & Lantai */}
              <rect x="0" y="0" width="450" height="200" fill="#FEF3C7" opacity="0.6" />
              <rect x="0" y="200" width="450" height="60" fill="#E2E8F0" />

              {/* Papan Tulis Kelas Hijau */}
              <g transform="translate(30, 25)">
                <rect x="0" y="0" width="160" height="100" rx="6" fill="#065F46" stroke="#78350F" strokeWidth="5" />
                <text x="20" y="35" fill="#FEF08A" fontSize="13" fontWeight="bold">PELAJARAN</text>
                <text x="20" y="60" fill="#FFFFFF" fontSize="11">✓ Belajar Tertib</text>
                <text x="20" y="80" fill="#FFFFFF" fontSize="11">✓ Angkat Tangan</text>
              </g>

              {/* Ibu Guru Menjelaskan di Samping Papan Tulis */}
              <g transform="translate(205, 55)" className="animate-bounce-gentle">
                <rect x="12" y="55" width="38" height="65" rx="8" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
                {/* Tangan Kiri Menunjuk ke Papan Tulis */}
                <path d="M 12 65 L -18 52" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                {/* Kepala Ibu Guru */}
                <circle cx="31" cy="30" r="22" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                {/* Jilbab / Rambut Rapi */}
                <path d="M 11 30 C 11 10 51 10 51 30 Z" fill="#0369A1" />
                <circle cx="26" cy="30" r="2.5" fill="#1E293B" />
                <circle cx="38" cy="30" r="2.5" fill="#1E293B" />
                <path d="M 28 36 Q 32 41 36 36" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* Murid Duduk Rapi di Meja Belajar Mengangkat Tangan */}
              <g transform="translate(310, 85)">
                {/* Meja Belajar Kayu */}
                <rect x="0" y="60" width="95" height="40" rx="4" fill="#92400E" stroke="#78350F" strokeWidth="2" />
                <rect x="10" y="100" width="10" height="25" fill="#78350F" />
                <rect x="75" y="100" width="10" height="25" fill="#78350F" />
                {/* Buku Terbuka di Meja */}
                <rect x="25" y="52" width="35" height="15" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" rx="2" />

                {/* Anak Duduk Sopan & Mengangkat Satu Tangan */}
                <g transform="translate(20, -5)" className="animate-bounce-gentle">
                  <rect x="10" y="40" width="35" height="35" rx="6" fill="#DC2626" />
                  {/* Tangan Kanan Mengangkat Tinggi Sopan */}
                  <path d="M 40 45 L 48 10" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                  <circle cx="48" cy="8" r="4.5" fill="#FED7AA" />
                  {/* Kepala Murid Menghadap Guru */}
                  <circle cx="26" cy="20" r="18" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                  <path d="M 12 18 C 12 6 40 6 40 18 Z" fill="#78350F" />
                  <circle cx="20" cy="19" r="2" fill="#1E293B" />
                  <circle cx="30" cy="19" r="2" fill="#1E293B" />
                  <path d="M 22 25 Q 25 29 28 25" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                </g>
              </g>

              <text x="110" y="235" fill="#B45309" fontSize="14" fontWeight="bold">🙋‍♂️ Mendengarkan Guru & Mengangkat Tangan saat Bertanya</text>
            </svg>
          </div>
        );

      case 'piket-kelas':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-emerald-100 to-teal-50 border-2 border-emerald-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Dinding & Lantai Kelas */}
              <rect x="0" y="0" width="450" height="195" fill="#ECFDF5" />
              <rect x="0" y="195" width="450" height="65" fill="#CBD5E1" />

              {/* Papan Tulis Kelas yang Sedang Dihapus */}
              <g transform="translate(30, 30)">
                <rect x="0" y="0" width="130" height="80" rx="6" fill="#047857" stroke="#78350F" strokeWidth="4" />
                {/* Siswa 1 Menghapus Papan Tulis */}
                <g transform="translate(85, 30)" className="animate-wiggle">
                  <rect x="0" y="0" width="22" height="12" rx="3" fill="#D97706" />
                  <circle cx="10" cy="6" r="4" fill="#FED7AA" />
                </g>
              </g>

              {/* Siswa 1 yang Menghapus Papan Tulis */}
              <g transform="translate(145, 60)" className="animate-bounce-gentle">
                <rect x="10" y="65" width="30" height="55" rx="6" fill="#0284C7" />
                <path d="M 10 75 L -25 45" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <circle cx="25" cy="40" r="18" fill="#FED7AA" />
                <path d="M 10 38 C 10 24 40 24 40 38 Z" fill="#78350F" />
                <circle cx="20" cy="40" r="2" fill="#1E293B" />
                <circle cx="30" cy="40" r="2" fill="#1E293B" />
              </g>

              {/* Siswa 2 Menyapu Lantai Kelas dengan Sapu */}
              <g transform="translate(260, 80)" className="animate-sweep">
                <rect x="14" y="85" width="12" height="30" rx="3" fill="#0284C7" />
                <rect x="34" y="85" width="12" height="30" rx="3" fill="#0284C7" />
                <ellipse cx="20" cy="115" rx="9" ry="5" fill="#1E293B" />
                <ellipse cx="40" cy="115" rx="9" ry="5" fill="#1E293B" />
                
                <rect x="10" y="45" width="40" height="42" rx="8" fill="#10B981" stroke="#059669" strokeWidth="2.5" />

                {/* Sapu Lantai Kelas */}
                <line x1="10" y1="55" x2="-65" y2="115" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
                <polygon points="-80,116 -50,116 -58,98 -72,98" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />

                <path d="M 10 55 L -25 75" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                <circle cx="30" cy="24" r="20" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 14 22 C 14 8 46 8 46 22 Z" fill="#78350F" />
                <circle cx="24" cy="23" r="2" fill="#1E293B" />
                <circle cx="36" cy="23" r="2" fill="#1E293B" />
              </g>

              {/* Siswa 3 Merapikan Buku di Meja */}
              <g transform="translate(370, 105)">
                <rect x="-10" y="45" width="65" height="35" rx="4" fill="#92400E" />
                <rect x="5" y="35" width="25" height="12" rx="2" fill="#3B82F6" />
                <circle cx="15" cy="18" r="15" fill="#FED7AA" />
                <rect x="2" y="32" width="26" height="30" rx="5" fill="#EC4899" />
              </g>

              <text x="120" y="235" fill="#047857" fontSize="14" fontWeight="bold">🤝 Bersama-sama Piket Membersihkan Kelas</text>
            </svg>
          </div>
        );

      case 'kebersihan-sekolah':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-indigo-100 border-2 border-sky-300 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 450 260" className="w-full h-full">
              {/* Lingkungan Sekolah Bersih */}
              <rect x="0" y="0" width="450" height="195" fill="#F0F9FF" />
              <rect x="0" y="195" width="450" height="65" fill="#E2E8F0" />

              {/* Dua Tong Sampah Pilah Sekolah (Organik & Anorganik) */}
              <g transform="translate(100, 105)">
                {/* Tong Hijau (Organik) */}
                <rect x="0" y="20" width="55" height="70" rx="8" fill="#16A34A" stroke="#15803D" strokeWidth="3" />
                <text x="7" y="60" fill="#FFFFFF" fontSize="9" fontWeight="bold">ORGANIK</text>

                {/* Tong Kuning (Anorganik / Daur Ulang) */}
                <rect x="70" y="20" width="55" height="70" rx="8" fill="#FACC15" stroke="#EAB308" strokeWidth="3" />
                <text x="73" y="60" fill="#713F12" fontSize="9" fontWeight="bold">ANORGANIK</text>
              </g>

              {/* Siswa Memasukkan Botol Plastik ke Tong Kuning */}
              <g transform="translate(295, 80)" className="animate-bounce-gentle">
                <rect x="14" y="90" width="12" height="30" rx="3" fill="#DC2626" />
                <rect x="34" y="90" width="12" height="30" rx="3" fill="#DC2626" />
                <ellipse cx="20" cy="120" rx="9" ry="5" fill="#1E293B" />
                <ellipse cx="40" cy="120" rx="9" ry="5" fill="#1E293B" />
                
                {/* Seragam SD */}
                <rect x="10" y="45" width="40" height="48" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                <polygon points="30,48 26,62 30,72 34,62" fill="#DC2626" />

                {/* Tangan Kiri Menjulur Memasukkan Botol ke Tong Kuning */}
                <path d="M 10 55 L -60 55" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
                {/* Botol Plastik Biru Transparan */}
                <rect x="-68" y="50" width="10" height="22" rx="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" className="animate-bounce" />

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
