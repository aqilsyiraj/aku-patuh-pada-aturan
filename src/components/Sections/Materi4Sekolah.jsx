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
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-50 border-2 border-sky-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* School Building & Gate in Background */}
              <rect x="50" y="20" width="400" height="150" rx="10" fill="#FEF08A" stroke="#CA8A04" strokeWidth="3" />
              <polygon points="250,5 50,50 450,50" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
              {/* School Clock */}
              <circle cx="250" cy="40" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <line x1="250" y1="40" x2="250" y2="32" stroke="#0F172A" strokeWidth="2" />
              <line x1="250" y1="40" x2="257" y2="40" stroke="#0F172A" strokeWidth="2" />

              {/* School Yard Floor */}
              <rect x="0" y="200" width="500" height="100" fill="#86EFAC" />
              {/* Flag Pole */}
              <line x1="70" y1="60" x2="70" y2="240" stroke="#64748B" strokeWidth="4" />
              <polygon points="72,60 115,70 72,80" fill="#EF4444" />
              <polygon points="72,80 115,90 72,100" fill="#FFFFFF" />

              {/* Teacher Standing at the front greeting line */}
              <g transform="translate(140, 110)">
                <circle cx="25" cy="22" r="18" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <rect x="12" y="40" width="26" height="50" rx="6" fill="#0284C7" />
                <path d="M 12 50 Q -5 40 5 30" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" fill="none" />
                <text x="-5" y="20" fill="#0369A1" fontSize="11" fontWeight="bold">Ibu Guru</text>
              </g>

              {/* Line of 3 neat students (Berbaris dengan Tertib) */}
              {[
                { x: 220, color: '#F59E0B', delay: '0s' },
                { x: 300, color: '#EC4899', delay: '0.2s' },
                { x: 380, color: '#10B981', delay: '0.4s' }
              ].map((student, i) => (
                <g key={i} transform={`translate(${student.x}, 125)`} className="animate-bounce-gentle" style={{ animationDelay: student.delay }}>
                  <circle cx="25" cy="22" r="16" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="2.5" fill="#1E293B" />
                  <circle cx="30" cy="20" r="2.5" fill="#1E293B" />
                  <path d="M 22 28 Q 25 32 28 28" stroke="#991B1B" strokeWidth="1.5" fill="none" />
                  {/* Uniform (Red & White) */}
                  <rect x="14" y="38" width="22" height="25" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                  <rect x="14" y="60" width="22" height="25" fill="#DC2626" />
                </g>
              ))}

              <text x="170" y="275" fill="#0F766E" fontSize="14" fontWeight="bold">🚶‍♂️ Barisan Rapi, Lurus, dan Tidak Mendorong</text>
            </svg>
          </div>
        );

      case 'mendengarkan-guru':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-100 border-2 border-amber-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Classroom Wall */}
              <rect x="0" y="0" width="500" height="230" fill="#FEF3C7" />
              {/* Classroom Floor */}
              <rect x="0" y="230" width="500" height="70" fill="#CBD5E1" />

              {/* Blackboard with Lesson Notes */}
              <g transform="translate(60, 20)">
                <rect x="0" y="0" width="200" height="110" rx="8" fill="#065F46" stroke="#78350F" strokeWidth="6" />
                <text x="25" y="40" fill="#FFFFFF" fontSize="13" fontWeight="bold">ATURAN KELAS</text>
                <text x="25" y="65" fill="#A7F3D0" fontSize="11">1. Tertib belajar</text>
                <text x="25" y="85" fill="#A7F3D0" fontSize="11">2. Angkat tangan bila bertanya</text>
              </g>

              {/* Teacher Pointing at Board */}
              <g transform="translate(290, 60)" className="animate-bounce-gentle">
                <circle cx="30" cy="25" r="20" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <circle cx="25" cy="22" r="2.5" fill="#1E293B" />
                <circle cx="35" cy="22" r="2.5" fill="#1E293B" />
                <path d="M 27 32 Q 30 36 33 32" stroke="#991B1B" strokeWidth="2" fill="none" />
                <rect x="15" y="45" width="30" height="55" rx="6" fill="#2563EB" />
                {/* Pointer Arm to Board */}
                <path d="M 15 55 L -20 40" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <line x1="-20" y1="40" x2="-45" y2="30" stroke="#CA8A04" strokeWidth="3" />
              </g>

              {/* Attentive Student at Desk raising hand */}
              <g transform="translate(100, 150)">
                {/* Desk */}
                <rect x="0" y="45" width="120" height="40" rx="4" fill="#92400E" />
                {/* Student Head */}
                <circle cx="60" cy="18" r="17" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                <circle cx="55" cy="16" r="2" fill="#1E293B" />
                <circle cx="65" cy="16" r="2" fill="#1E293B" />
                {/* Student Raising Hand to ask */}
                <path d="M 75 35 L 90 5" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                <circle cx="90" cy="4" r="5" fill="#FED7AA" />
              </g>

              <text x="140" y="280" fill="#B45309" fontSize="14" fontWeight="bold">🙋‍♂️ Mendengarkan dan Mengangkat Tangan</text>
            </svg>
          </div>
        );

      case 'piket-kelas':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-emerald-100 to-teal-100 border-2 border-emerald-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Classroom Wall */}
              <rect x="0" y="0" width="500" height="220" fill="#ECFDF5" />
              <rect x="0" y="220" width="500" height="80" fill="#D1D5DB" />

              {/* Blackboard being erased by Student 1 */}
              <g transform="translate(40, 30)">
                <rect x="0" y="0" width="160" height="90" rx="6" fill="#047857" stroke="#92400E" strokeWidth="4" />
                {/* Chalkboard Eraser in Action */}
                <g transform="translate(120, 40)" className="animate-wiggle">
                  <rect x="0" y="0" width="24" height="14" rx="3" fill="#D97706" />
                  <path d="M -10 -5 L -2 5" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                </g>
              </g>
              {/* Student cleaning blackboard */}
              <g transform="translate(170, 75)">
                <circle cx="20" cy="20" r="16" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                <rect x="10" y="36" width="20" height="40" rx="4" fill="#3B82F6" />
                <path d="M 15 45 L -10 25" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Student 2 Sweeping Classroom Floor */}
              <g transform="translate(290, 115)" className="animate-sweep">
                <circle cx="25" cy="22" r="16" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                <rect x="14" y="38" width="22" height="40" rx="4" fill="#10B981" />
                <line x1="14" y1="45" x2="-25" y2="105" stroke="#78350F" strokeWidth="4" />
                <polygon points="-35,105 -15,105 -22,88 -28,88" fill="#FACC15" />
              </g>

              {/* Student 3 Arranging Desks */}
              <g transform="translate(400, 130)">
                <rect x="0" y="35" width="60" height="30" rx="4" fill="#B45309" />
                <circle cx="30" cy="15" r="14" fill="#FED7AA" />
                <rect x="20" y="28" width="20" height="35" rx="3" fill="#EC4899" />
              </g>

              <text x="140" y="275" fill="#047857" fontSize="14" fontWeight="bold">🤝 Gotong Royong Piket Membersihkan Kelas</text>
            </svg>
          </div>
        );

      case 'kebersihan-sekolah':
        return (
          <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-sky-100 to-indigo-100 border-2 border-sky-300 flex items-center justify-center p-4 relative overflow-hidden">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              {/* Clean Corridors */}
              <rect x="0" y="0" width="500" height="220" fill="#EFF6FF" />
              <rect x="0" y="220" width="500" height="80" fill="#E2E8F0" />

              {/* Bins with color classification (Organik & Anorganik) */}
              <g transform="translate(180, 130)">
                {/* Green Bin (Organik) */}
                <rect x="0" y="20" width="45" height="60" rx="6" fill="#16A34A" stroke="#15803D" strokeWidth="2" />
                <text x="6" y="55" fill="#FFFFFF" fontSize="9" fontWeight="bold">ORGANIK</text>

                {/* Yellow Bin (Anorganik) */}
                <rect x="60" y="20" width="45" height="60" rx="6" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                <text x="63" y="55" fill="#713F12" fontSize="8" fontWeight="bold">ANORGANIK</text>
              </g>

              {/* Student placing recyclable plastic into yellow bin */}
              <g transform="translate(310, 105)" className="animate-bounce-gentle">
                <circle cx="25" cy="22" r="18" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
                <rect x="13" y="40" width="24" height="42" rx="4" fill="#6366F1" />
                <path d="M 13 50 L -30 55" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
                {/* Plastic Cup */}
                <polygon points="-38,55 -32,55 -34,68 -36,68" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
              </g>

              <text x="130" y="275" fill="#1E40AF" fontSize="14" fontWeight="bold">✨ Lingkungan Sekolah Bersih, Nyaman & Sehat</text>
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
