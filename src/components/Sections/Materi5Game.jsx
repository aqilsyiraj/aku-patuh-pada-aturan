import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import CharacterGuide from '../CharacterGuide';
import { matchingPairsData } from '../../data/matchingGameData';
import { Sparkles, RotateCcw, Trophy, CheckCircle, ArrowRight, Star, Heart } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi5Game({ onNext, onPrev }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]); // Array of pairIds
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  // Shuffled targets order to make the game fun
  const [targets, setTargets] = useState([]);

  // Initialize & Reset game
  const initGame = () => {
    setSelectedActivity(null);
    setSelectedTarget(null);
    setMatchedPairs([]);
    setAttempts(0);
    setFeedback(null);
    setIsGameOver(false);

    // Shuffle targets
    const shuffled = [...matchingPairsData]
      .map((item) => ({ ...item.target, pairId: item.pairId, hint: item.hint }))
      .sort(() => Math.random() - 0.5);
    setTargets(shuffled);
  };

  useEffect(() => {
    initGame();
  }, []);

  // Handle activity card click
  const handleSelectActivity = (pair) => {
    if (matchedPairs.includes(pair.pairId)) return;
    audioService.playCardFlipSound();
    setSelectedActivity(pair);
    setFeedback(null);

    // If target was already selected, evaluate match
    if (selectedTarget) {
      checkMatch(pair.pairId, selectedTarget.pairId, pair.hint);
    }
  };

  // Handle target card click
  const handleSelectTarget = (target) => {
    if (matchedPairs.includes(target.pairId)) return;
    audioService.playCardFlipSound();
    setSelectedTarget(target);
    setFeedback(null);

    // If activity was already selected, evaluate match
    if (selectedActivity) {
      checkMatch(selectedActivity.pairId, target.pairId, target.hint);
    }
  };

  // Check matching pair
  const checkMatch = (actPairId, tarPairId, hint) => {
    setAttempts((prev) => prev + 1);

    if (actPairId === tarPairId) {
      // MATCH SUCCESS!
      audioService.playSuccessSound();
      const newMatches = [...matchedPairs, actPairId];
      setMatchedPairs(newMatches);
      setSelectedActivity(null);
      setSelectedTarget(null);
      setFeedback({
        success: true,
        text: 'Luar biasa! Pasangan kartu cocok! ⭐'
      });

      // If all 5 pairs are matched
      if (newMatches.length === matchingPairsData.length) {
        setIsGameOver(true);
        audioService.playFanfare();
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
        audioService.speak('Hebat sekali kawan! Kamu berhasil mencocokkan semua aturan dengan tepat!');
      }
    } else {
      // MISMATCH
      audioService.playErrorSound();
      setFeedback({
        success: false,
        text: `Belum cocok, yuk coba lagi! 💡 Petunjuk: ${hint || 'Pikirkan tempat atau waktu yang sesuai ya!'}`
      });
      // Clear selection after a brief moment
      setTimeout(() => {
        setSelectedActivity(null);
        setSelectedTarget(null);
      }, 1000);
    }
  };

  const progressPercent = Math.round((matchedPairs.length / matchingPairsData.length) * 100);

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 font-bubble text-xs sm:text-sm font-bold border border-indigo-300">
          Materi 5 — Ayo Bermain!
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Permainan Mencocokkan Aturan
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Hubungkan kartu kegiatan di sebelah kiri dengan waktu, tempat, atau aturan yang tepat di sebelah kanan!
        </p>
      </div>

      {/* Character Guidance */}
      <CharacterGuide
        character="bina"
        expression={isGameOver ? 'clap' : 'think'}
        dialogue={
          isGameOver
            ? 'Hebat sekali! Semua kartu berhasil kamu pasangkan dengan sempurna! Kamu anak yang teliti dan pintar!'
            : 'Sentuh satu kartu kegiatan di sebelah kiri, lalu sentuh pasangannya di sebelah kanan. Selamat bermain!'
        }
        roleText="Bina memandu game mencocokkan"
        className="mb-6"
      />

      {/* Progress & Score Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
            🏆
          </div>
          <div>
            <p className="text-xs text-slate-500 font-bubble">Kartu Berhasil Dicocokkan:</p>
            <p className="text-base font-bubble font-bold text-slate-800">
              {matchedPairs.length} dari {matchingPairsData.length} Pasang
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex-1 max-w-xs mx-2">
          <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={initGame}
          className="kid-button px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bubble text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5"
          title="Acak & Main Lagi"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Atur Ulang Kartu</span>
        </button>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div className={`p-3.5 rounded-2xl text-center font-bubble text-sm sm:text-base border-2 mb-6 animate-in fade-in ${
          feedback.success 
            ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm' 
            : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          {feedback.text}
        </div>
      )}

      {/* Matching Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Column 1: Activities (Kegiatan) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2 mb-1">
            <h3 className="font-bubble font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-xs">A</span>
              <span>Kartu Kegiatan</span>
            </h3>
            <span className="text-xs text-slate-500 font-reading">Pilih 1 kegiatan</span>
          </div>

          {matchingPairsData.map((item) => {
            const isMatched = matchedPairs.includes(item.pairId);
            const isSelected = selectedActivity?.pairId === item.pairId;

            return (
              <button
                key={item.activity.id}
                onClick={() => handleSelectActivity(item)}
                disabled={isMatched}
                className={`w-full p-4 rounded-2xl border-3 text-left transition-all flex items-center gap-4 ${
                  isMatched
                    ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                    : isSelected
                    ? 'bg-amber-100 border-amber-500 shadow-lg scale-102 ring-4 ring-amber-200'
                    : 'bg-white hover:bg-amber-50/60 border-slate-200 shadow-xs'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-3xl shadow-xs flex-shrink-0">
                  {item.activity.icon}
                </div>
                <div className="flex-1">
                  <p className={`font-bubble font-bold text-sm sm:text-base ${isMatched ? 'text-emerald-900 line-through' : 'text-slate-800'}`}>
                    {item.activity.title}
                  </p>
                  <p className="text-xs text-slate-500 font-reading mt-0.5">
                    {item.activity.description}
                  </p>
                </div>
                {isMatched && (
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Column 2: Targets (Pasangan Waktu / Tempat / Aturan) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2 mb-1">
            <h3 className="font-bubble font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-400 text-sky-950 flex items-center justify-center text-xs">B</span>
              <span>Pasangan yang Sesuai</span>
            </h3>
            <span className="text-xs text-slate-500 font-reading">Cocokkan ke sini</span>
          </div>

          {targets.map((target) => {
            const isMatched = matchedPairs.includes(target.pairId);
            const isSelected = selectedTarget?.pairId === target.pairId;

            return (
              <button
                key={target.id}
                onClick={() => handleSelectTarget(target)}
                disabled={isMatched}
                className={`w-full p-4 rounded-2xl border-3 text-left transition-all flex items-center gap-4 ${
                  isMatched
                    ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                    : isSelected
                    ? 'bg-sky-100 border-sky-500 shadow-lg scale-102 ring-4 ring-sky-200'
                    : 'bg-white hover:bg-sky-50/60 border-slate-200 shadow-xs'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-3xl shadow-xs flex-shrink-0">
                  {target.icon}
                </div>
                <div className="flex-1">
                  <p className={`font-bubble font-bold text-sm sm:text-base ${isMatched ? 'text-emerald-900 line-through' : 'text-slate-800'}`}>
                    {target.title}
                  </p>
                  <p className="text-xs text-slate-500 font-reading mt-0.5">
                    {target.description}
                  </p>
                </div>
                {isMatched && (
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Completion Modal / Victory Celebration Banner */}
      {isGameOver && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-200 via-yellow-100 to-emerald-200 border-4 border-amber-400 shadow-xl text-center mb-6 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl mx-auto mb-3 shadow-md">
            🎉
          </div>
          <h3 className="text-2xl sm:text-3xl font-bubble font-extrabold text-amber-950 mb-2">
            Selamat, Kamu Berhasil!
          </h3>
          <p className="text-slate-700 font-reading text-sm sm:text-base max-w-lg mx-auto mb-6">
            Hebat sekali! Kamu berhasil mencocokkan seluruh 5 aturan di rumah dan di sekolah dengan benar. Kamu siap mengikuti Kuis Interaktif!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={initGame}
              className="kid-button px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bubble font-bold shadow-md border-2 border-slate-300 flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5 text-amber-600" />
              <span>Main Lagi</span>
            </button>

            <button
              onClick={onNext}
              className="kid-button px-7 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble font-bold shadow-md flex items-center gap-2"
            >
              <span>Lanjut ke Kuis Seru! 🏆</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Nav */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={onPrev}
          className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bubble text-sm font-semibold"
        >
          ← Materi 4
        </button>

        <button
          onClick={onNext}
          className="kid-button px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-sm font-bold flex items-center gap-2 shadow-md"
        >
          <span>Masuk ke Kuis Interaktif</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
