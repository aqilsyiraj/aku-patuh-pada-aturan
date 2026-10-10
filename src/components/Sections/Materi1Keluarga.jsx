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

  // Render dedicated SVG animated scenes for morning, afternoon, evening, night
  const renderSceneAnimation = (type) => {
    switch (type) {
      case 'morning':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-200 via-orange-100 to-amber-50 overflow-hidden border-2 border-amber-300 flex items-center justify-center p-4">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Sun Rising with glowing rays */}
              <g className="animate-bounce-gentle">
                <circle cx="100" cy="90" r="42" fill="#FBBF24" />
                <circle cx="100" cy="90" r="34" fill="#FDE047" />
                <path d="M 100 35 L 100 20 M 100 145 L 100 160 M 45 90 L 30 90 M 155 90 L 170 90" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* Window Frame */}
              <rect x="50" y="30" width="100" height="120" rx="8" fill="none" stroke="#78350F" strokeWidth="6" />
              <line x1="100" y1="30" x2="100" y2="150" stroke="#78350F" strokeWidth="4" />
              <line x1="50" y1="90" x2="150" y2="90" stroke="#78350F" strokeWidth="4" />

              {/* Bedroom Floor */}
              <rect x="0" y="240" width="500" height="60" fill="#E2E8F0" />
              
              {/* Bed with Neat Blanket */}
              <g transform="translate(180, 140)">
                {/* Headboard */}
                <rect x="10" y="20" width="18" height="90" rx="6" fill="#92400E" />
                {/* Mattress */}
                <rect x="25" y="55" width="160" height="45" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
                {/* Pillows */}
                <rect x="35" y="38" width="40" height="25" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                {/* Neat folded blanket */}
                <rect x="80" y="55" width="105" height="45" rx="8" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
                {/* Sparkles of tidiness */}
                <polygon points="175,35 178,43 186,45 180,50 181,58 175,54 169,58 170,50 164,45 172,43" fill="#FACC15" className="animate-ping" style={{ animationDuration: '3s' }} />
              </g>

              {/* Cheerful Child standing up after making bed */}
              <g transform="translate(380, 145)" className="animate-bounce-gentle">
                {/* Child Head */}
                <circle cx="35" cy="30" r="22" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <circle cx="28" cy="27" r="3" fill="#1E293B" />
                <circle cx="42" cy="27" r="3" fill="#1E293B" />
                <path d="M 30 38 Q 35 44 40 38" stroke="#991B1B" strokeWidth="2" fill="none" />
                {/* Pajama / Morning clothes */}
                <rect x="18" y="52" width="34" height="45" rx="8" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                {/* Arms raising happily */}
                <path d="M 18 60 Q 5 45 10 35" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M 52 60 Q 65 45 60 35" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" fill="none" />
                {/* Legs */}
                <rect x="22" y="97" width="10" height="22" rx="4" fill="#0284C7" />
                <rect x="38" y="97" width="10" height="22" rx="4" fill="#0284C7" />
              </g>

              {/* Breakfast Tray on Table */}
              <g transform="translate(20, 190)">
                <rect x="10" y="35" width="80" height="30" rx="4" fill="#A16207" />
                <ellipse cx="50" cy="33" rx="30" ry="10" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
                {/* Glass of milk & toast */}
                <rect x="30" y="16" width="14" height="20" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
                <circle cx="58" cy="26" r="8" fill="#FB923C" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bubble font-bold text-amber-800 shadow-xs">
              ☀️ Bangun pagi, rapikan tempat tidur & sarapan
            </div>
          </div>
        );

      case 'afternoon':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-200 via-sky-100 to-blue-50 overflow-hidden border-2 border-sky-300 flex items-center justify-center p-4">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Floor */}
              <rect x="0" y="240" width="500" height="60" fill="#CBD5E1" />

              {/* School Bag hung on neat rack */}
              <g transform="translate(60, 80)">
                <rect x="0" y="0" width="12" height="160" fill="#78350F" rx="4" />
                <circle cx="6" cy="30" r="7" fill="#B45309" />
                {/* Blue School Backpack */}
                <rect x="12" y="25" width="55" height="70" rx="12" fill="#0284C7" stroke="#0369A1" strokeWidth="3" />
                <rect x="25" y="45" width="30" height="35" rx="6" fill="#38BDF8" />
              </g>

              {/* Hand Washing Sink with Faucet and Flowing Water */}
              <g transform="translate(200, 110)">
                {/* Mirror */}
                <rect x="30" y="5" width="50" height="55" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
                {/* Faucet */}
                <path d="M 55 58 L 55 70 Q 55 82 45 82" stroke="#64748B" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Flowing Water stream */}
                <line x1="45" y1="84" x2="45" y2="120" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" className="animate-water" />
                {/* Sink Basin */}
                <rect x="15" y="115" width="80" height="35" rx="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
                <rect x="45" y="148" width="20" height="45" fill="#E2E8F0" />
                {/* Soap Bar */}
                <rect x="80" y="105" width="22" height="12" rx="4" fill="#F472B6" />
                {/* Bubbles */}
                <circle cx="35" cy="98" r="6" fill="#BAE6FD" opacity="0.8" className="animate-bubble" />
                <circle cx="58" cy="90" r="5" fill="#BAE6FD" opacity="0.8" className="animate-bubble" style={{ animationDelay: '0.4s' }} />
              </g>

              {/* Polite Child Eating Lunch */}
              <g transform="translate(360, 130)">
                {/* Dining Chair & Table */}
                <rect x="10" y="60" width="70" height="50" rx="4" fill="#D97706" />
                {/* Plate with food */}
                <ellipse cx="45" cy="58" rx="24" ry="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                <circle cx="45" cy="56" r="6" fill="#22C55E" />
                {/* Child Sitting Politely */}
                <circle cx="45" cy="18" r="16" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <circle cx="40" cy="16" r="2.5" fill="#1E293B" />
                <circle cx="50" cy="16" r="2.5" fill="#1E293B" />
                <path d="M 41 24 Q 45 28 49 24" stroke="#991B1B" strokeWidth="2" fill="none" />
                <rect x="30" y="34" width="30" height="35" rx="6" fill="#10B981" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bubble font-bold text-sky-800 shadow-xs">
              🧼 Pulang sekolah, cuci tangan & makan tertib
            </div>
          </div>
        );

      case 'evening':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-emerald-100 via-teal-50 to-amber-50 overflow-hidden border-2 border-emerald-300 flex items-center justify-center p-4">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Sunset Window */}
              <rect x="40" y="30" width="90" height="110" rx="6" fill="#FDE68A" stroke="#92400E" strokeWidth="4" />
              <circle cx="85" cy="85" r="25" fill="#F97316" />

              {/* Floor */}
              <rect x="0" y="240" width="500" height="60" fill="#E2E8F0" />

              {/* Toy Storage Chest with tidy toys */}
              <g transform="translate(60, 140)">
                <rect x="0" y="40" width="110" height="65" rx="8" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
                <rect x="-5" y="30" width="120" height="15" rx="4" fill="#D97706" />
                {/* Teddy Bear & Ball inside */}
                <circle cx="35" cy="25" r="14" fill="#92400E" />
                <circle cx="28" cy="14" r="5" fill="#78350F" />
                <circle cx="42" cy="14" r="5" fill="#78350F" />
                <circle cx="75" cy="25" r="12" fill="#EF4444" />
              </g>

              {/* Child with Broom sweeping floor */}
              <g transform="translate(240, 115)" className="animate-sweep">
                {/* Child Head */}
                <circle cx="30" cy="25" r="20" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <circle cx="24" cy="23" r="2.5" fill="#1E293B" />
                <circle cx="36" cy="23" r="2.5" fill="#1E293B" />
                <path d="M 26 32 Q 30 36 34 32" stroke="#991B1B" strokeWidth="2" fill="none" />
                {/* Body */}
                <rect x="15" y="45" width="30" height="45" rx="6" fill="#8B5CF6" />
                {/* Broom in Hands */}
                <line x1="10" y1="45" x2="-10" y2="125" stroke="#A16207" strokeWidth="5" strokeLinecap="round" />
                {/* Broom Straw Bristles */}
                <polygon points="-25,125 5,125 -5,100 -15,100" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
              </g>

              {/* Proud Mother / Parent Smiling */}
              <g transform="translate(380, 100)">
                <circle cx="35" cy="28" r="24" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <circle cx="28" cy="25" r="3" fill="#1E293B" />
                <circle cx="42" cy="25" r="3" fill="#1E293B" />
                <path d="M 28 36 Q 35 44 42 36" stroke="#991B1B" strokeWidth="2.5" fill="none" />
                {/* Dress */}
                <path d="M 15 54 Q 10 120 5 140 L 65 140 Q 60 120 55 54 Z" fill="#EC4899" />
                {/* Heart emoticon above parent */}
                <path d="M 35 0 C 35 -10 20 -10 20 5 C 20 15 35 25 35 25 C 35 25 50 15 50 5 C 50 -10 35 -10 35 0 Z" fill="#EF4444" className="animate-pulse" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bubble font-bold text-emerald-800 shadow-xs">
              🧸 Rapikan mainan ke kotak & bantu orang tua
            </div>
          </div>
        );

      case 'night':
        return (
          <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 overflow-hidden border-2 border-indigo-400 flex items-center justify-center p-4">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Crescent Moon & Twinkling Stars */}
              <path d="M 75 40 A 25 25 0 1 0 100 65 A 20 20 0 1 1 75 40 Z" fill="#FDE047" className="animate-bounce-gentle" />
              <circle cx="150" cy="45" r="3" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="220" cy="30" r="2.5" fill="#FFFFFF" />
              <circle cx="340" cy="50" r="3" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '3.5s' }} />

              {/* Study Desk & Lamp */}
              <g transform="translate(60, 130)">
                {/* Desk */}
                <rect x="0" y="45" width="110" height="40" rx="4" fill="#92400E" stroke="#78350F" strokeWidth="2" />
                <rect x="10" y="85" width="12" height="35" fill="#78350F" />
                <rect x="88" y="85" width="12" height="35" fill="#78350F" />
                {/* Open Book */}
                <polygon points="40,43 55,38 70,43 70,48 55,44 40,48" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                {/* School Bag packed */}
                <rect x="85" y="20" width="30" height="35" rx="6" fill="#0284C7" />
                {/* Desk Lamp Glowing */}
                <path d="M 15 45 L 25 15 L 35 15" stroke="#94A3B8" strokeWidth="3" fill="none" />
                <polygon points="25,15 45,15 35,5" fill="#FACC15" />
                <circle cx="35" cy="18" r="14" fill="#FEF08A" opacity="0.3" />
              </g>

              {/* Peaceful Sleeping Child in Bed */}
              <g transform="translate(240, 140)">
                {/* Cozy Bed */}
                <rect x="0" y="25" width="180" height="55" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                {/* Fluffy Blanket */}
                <rect x="40" y="25" width="140" height="55" rx="8" fill="#6366F1" stroke="#4F46E5" strokeWidth="2" />
                {/* Pillow */}
                <rect x="10" y="15" width="45" height="25" rx="6" fill="#E2E8F0" />
                {/* Peaceful Sleeping Child Head */}
                <circle cx="35" cy="24" r="16" fill="#FED7AA" />
                {/* Closed Eyes / Zzz */}
                <path d="M 28 24 Q 32 28 36 24" stroke="#475569" strokeWidth="2" fill="none" />
                <text x="50" y="10" fill="#A5B4FC" fontSize="16" fontWeight="bold" className="animate-float">Zzz...</text>
              </g>
            </svg>
            <div className="absolute bottom-2 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bubble font-bold text-indigo-950 shadow-xs">
              🌙 Belajar, siapkan tas sekolah & tidur tepat waktu
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

        {/* Audio Narration Action Bar (Dengarkan, Ulangi, Selanjutnya as required by prompt) */}
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
