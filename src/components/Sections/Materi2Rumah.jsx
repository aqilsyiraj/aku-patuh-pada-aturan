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

  const renderInteractiveGraphic = (habitId, isClean) => {
    switch (habitId) {
      case 'doa':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-100 border-2 border-amber-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Dining Table */}
              <ellipse cx="250" cy="220" rx="190" ry="50" fill="#CA8A04" />
              <ellipse cx="250" cy="210" rx="185" ry="45" fill="#FEF08A" stroke="#EAB308" strokeWidth="3" />

              {/* Food on Table */}
              <circle cx="250" cy="205" r="22" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="250" cy="205" r="14" fill="#F97316" />
              {/* Rice Bowls & Glasses */}
              <circle cx="170" cy="205" r="16" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="330" cy="205" r="16" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

              {isClean ? (
                // Family Praying Politely Together
                <>
                  {/* Father (Left) praying */}
                  <g transform="translate(100, 70)" className="animate-bounce-gentle">
                    <circle cx="40" cy="30" r="22" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                    {/* Closed Eyes for Prayer */}
                    <path d="M 32 30 Q 36 34 40 30" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <path d="M 44 30 Q 48 34 52 30" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <rect x="22" y="55" width="36" height="60" rx="8" fill="#3B82F6" />
                    {/* Praying Hands folded */}
                    <ellipse cx="40" cy="85" rx="10" ry="12" fill="#FED7AA" />
                  </g>

                  {/* Child (Center) praying */}
                  <g transform="translate(210, 85)" className="animate-bounce-gentle">
                    <circle cx="40" cy="28" r="20" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                    <path d="M 33 28 Q 37 32 41 28" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <path d="M 43 28 Q 47 32 51 28" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <rect x="24" y="50" width="32" height="55" rx="8" fill="#FACC15" />
                    <ellipse cx="40" cy="75" rx="9" ry="10" fill="#FED7AA" />
                    {/* Spiritual Blessing Rays */}
                    <circle cx="40" cy="20" r="26" fill="#FEF08A" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
                  </g>

                  {/* Mother (Right) praying */}
                  <g transform="translate(320, 70)" className="animate-bounce-gentle">
                    <circle cx="40" cy="30" r="22" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                    <path d="M 32 30 Q 36 34 40 30" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <path d="M 44 30 Q 48 34 52 30" stroke="#1E293B" strokeWidth="2" fill="none" />
                    <rect x="22" y="55" width="36" height="60" rx="8" fill="#EC4899" />
                    <ellipse cx="40" cy="85" rx="10" ry="12" fill="#FED7AA" />
                  </g>
                </>
              ) : (
                // Disorganized, Grabbing Food Without Praying
                <g transform="translate(180, 80)">
                  <circle cx="60" cy="35" r="22" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                  {/* Wide open greedy eyes */}
                  <circle cx="53" cy="33" r="4" fill="#1E293B" />
                  <circle cx="67" cy="33" r="4" fill="#1E293B" />
                  <path d="M 52 46 Q 60 52 68 46" stroke="#991B1B" strokeWidth="3" fill="none" />
                  {/* Reaching arm recklessly into plate */}
                  <path d="M 40 70 L 65 110" stroke="#FED7AA" strokeWidth="12" strokeLinecap="round" />
                  {/* Spilled drink mark */}
                  <ellipse cx="140" cy="115" rx="20" ry="8" fill="#EF4444" opacity="0.6" />
                  <text x="30" y="0" fill="#EF4444" fontSize="14" fontWeight="bold">⚠️ Makan terburu-buru tanpa berdoa!</text>
                </g>
              )}
            </svg>
          </div>
        );

      case 'cuci-tangan':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-teal-100 border-2 border-sky-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Wash Sink */}
              <rect x="150" y="140" width="200" height="70" rx="25" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="4" />
              <rect x="230" y="210" width="40" height="80" fill="#E2E8F0" />
              {/* Chrome Faucet */}
              <path d="M 250 80 L 250 110 Q 250 125 235 125" stroke="#64748B" strokeWidth="8" strokeLinecap="round" fill="none" />
              
              {isClean ? (
                <>
                  {/* Flowing Water */}
                  <line x1="235" y1="126" x2="235" y2="175" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" className="animate-water" />
                  {/* Two clean hands rubbing soap */}
                  <ellipse cx="225" cy="165" rx="16" ry="12" fill="#FED7AA" className="animate-clap" />
                  <ellipse cx="245" cy="165" rx="16" ry="12" fill="#FED7AA" className="animate-clap" />
                  {/* Sparkling Clean Bubbles */}
                  <circle cx="215" cy="145" r="7" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" />
                  <circle cx="255" cy="140" r="9" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.3s' }} />
                  <circle cx="240" cy="130" r="6" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" className="animate-bubble" style={{ animationDelay: '0.6s' }} />
                  {/* Sparkles */}
                  <text x="180" y="60" fill="#059669" fontSize="16" fontWeight="bold">✨ Bersih Berbusa & Bebas Kuman! ✨</text>
                </>
              ) : (
                <>
                  {/* Dirty Hands with Germs */}
                  <ellipse cx="225" cy="165" rx="18" ry="14" fill="#D97706" />
                  <ellipse cx="255" cy="165" rx="18" ry="14" fill="#D97706" />
                  {/* Germ particles */}
                  <circle cx="220" cy="160" r="3" fill="#78350F" />
                  <circle cx="230" cy="170" r="4" fill="#78350F" />
                  <circle cx="260" cy="160" r="3" fill="#78350F" />
                  <text x="160" y="60" fill="#DC2626" fontSize="16" fontWeight="bold">🦠 Tangan Kotor Berdebu!</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'kembalikan-barang':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-purple-100 to-pink-100 border-2 border-purple-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Bookshelf on wall */}
              <rect x="280" y="30" width="160" height="90" rx="6" fill="#78350F" stroke="#451A03" strokeWidth="3" />
              <rect x="290" y="45" width="20" height="65" fill="#3B82F6" rx="2" />
              <rect x="315" y="40" width="18" height="70" fill="#EF4444" rx="2" />
              <rect x="338" y="50" width="22" height="60" fill="#10B981" rx="2" />

              {/* Toy Storage Box */}
              <rect x="80" y="160" width="150" height="85" rx="10" fill="#F59E0B" stroke="#B45309" strokeWidth="4" />
              <text x="110" y="210" fill="#78350F" fontSize="16" fontWeight="bold">KOTAK MAINAN</text>

              {isClean ? (
                <>
                  {/* Clean: Toys neatly inside box */}
                  <circle cx="120" cy="145" r="16" fill="#EF4444" />
                  <polygon points="175,130 185,150 165,150" fill="#3B82F6" />
                  <circle cx="150" cy="140" r="12" fill="#10B981" />
                  {/* Neat floor with sparkling stars */}
                  <text x="240" y="220" fill="#059669" fontSize="15" fontWeight="bold">✨ Lantai Rapi & Nyaman</text>
                </>
              ) : (
                <>
                  {/* Messy: Toys scattered on the floor */}
                  <circle cx="280" cy="245" r="16" fill="#EF4444" />
                  <polygon points="340,230 355,255 325,255" fill="#3B82F6" />
                  <circle cx="410" cy="240" r="14" fill="#10B981" />
                  <rect x="210" y="235" width="45" height="15" rx="3" fill="#EC4899" transform="rotate(15 210 235)" />
                  <text x="180" y="130" fill="#DC2626" fontSize="15" fontWeight="bold">⚠️ Mainan Berserakan! Rawan Tersandung!</text>
                </>
              )}
            </svg>
          </div>
        );

      case 'kebersihan-kamar':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-blue-100 to-indigo-100 border-2 border-blue-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Window */}
              <rect x="60" y="30" width="80" height="80" rx="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="4" />
              <line x1="100" y1="30" x2="100" y2="110" stroke="#0284C7" strokeWidth="3" />

              {/* Bed */}
              <rect x="180" y="140" width="220" height="80" rx="8" fill="#475569" stroke="#334155" strokeWidth="4" />
              {/* Mattress */}
              <rect x="200" y="130" width="200" height="40" rx="6" fill="#38BDF8" />

              {isClean ? (
                <>
                  {/* Tidy bed: Folded blanket & Fluffy pillow */}
                  <rect x="210" y="115" width="45" height="25" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <rect x="260" y="130" width="140" height="40" rx="6" fill="#F472B6" />
                  <text x="210" y="260" fill="#059669" fontSize="16" fontWeight="bold">✨ Kamar Bersih & Kasur Rapi Teratur ✨</text>
                </>
              ) : (
                <>
                  {/* Messy bed: Twisted blanket & clothes on bed */}
                  <path d="M 210 120 Q 230 110 260 125 Q 300 115 360 135 L 340 160 Z" fill="#F472B6" />
                  <ellipse cx="230" cy="180" rx="25" ry="12" fill="#EAB308" transform="rotate(-15 230 180)" />
                  <ellipse cx="370" cy="180" rx="20" ry="10" fill="#EF4444" />
                  <text x="190" y="260" fill="#DC2626" fontSize="16" fontWeight="bold">⚠️ Kasur Berantakan & Baju Berserakan!</text>
                </>
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
        
        {/* Before / After Toggle Buttons as required by prompt */}
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
