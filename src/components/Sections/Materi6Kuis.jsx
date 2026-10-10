import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import CharacterGuide from '../CharacterGuide';
import { quizQuestions } from '../../data/quizData';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, Trophy, CheckCircle2, XCircle, Star, Sparkles, BookOpen } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Materi6Kuis({ onFinishQuiz, onBackToMaterials }) {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Initialize and shuffle questions & their options
  const startQuiz = () => {
    const prepared = [...quizQuestions]
      .sort(() => Math.random() - 0.5)
      .map((q) => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));

    setShuffledQuestions(prepared);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setCorrectAnswersCount(0);
    setIsQuizCompleted(false);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  if (shuffledQuestions.length === 0) return null;

  const currentQ = shuffledQuestions[currentIndex];

  // Read current question and choices aloud
  const handleReadAloud = () => {
    audioService.playClickSound();
    const optionsText = currentQ.options.map((opt, i) => `Pilihan ${opt.id}: ${opt.text}`).join('. ');
    const fullText = `Pertanyaan nomor ${currentIndex + 1}: ${currentQ.question} ${optionsText}`;
    audioService.speak(fullText);
  };

  // Select an option
  const handleSelectOption = (optId) => {
    if (isAnswerSubmitted) return;
    audioService.playClickSound();
    setSelectedOptionId(optId);

    // Evaluate answer immediately
    const chosen = currentQ.options.find((opt) => opt.id === optId);
    setIsAnswerSubmitted(true);

    if (chosen?.isCorrect) {
      audioService.playSuccessSound();
      setScore((prev) => prev + 10);
      setCorrectAnswersCount((prev) => prev + 1);
      audioService.speak(currentQ.characterReaction.success);
    } else {
      audioService.playErrorSound();
      audioService.speak(currentQ.characterReaction.retry);
    }
  };

  // Move to next question or complete
  const handleNext = () => {
    audioService.playClickSound();
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz Finished
      setIsQuizCompleted(true);
      audioService.playFanfare();
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      if (onFinishQuiz) {
        onFinishQuiz(score + (currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect ? 10 : 0));
      }
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100);
  const chosenOption = currentQ.options.find((opt) => opt.id === selectedOptionId);
  const isCorrect = chosenOption?.isCorrect;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bubble text-xs sm:text-sm font-bold border border-amber-300">
          Materi 6 — Uji Pemahaman
        </span>
        <h2 className="text-2xl sm:text-4xl font-bubble font-bold text-slate-800 mt-2">
          Kuis Seru: Anak Patuh Aturan
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-reading mt-1 max-w-xl mx-auto">
          Jawab 10 pertanyaan seru tentang aturan di rumah, menjaga kebersihan, dan aturan di sekolah!
        </p>
      </div>

      {!isQuizCompleted ? (
        <>
          {/* Quiz Status & Progress Indicator */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-400 text-amber-950 font-bubble font-bold flex items-center justify-center text-sm">
                {currentIndex + 1}
              </span>
              <span className="font-bubble font-bold text-slate-700 text-sm sm:text-base">
                Soal {currentIndex + 1} dari {shuffledQuestions.length}
              </span>
            </div>

            {/* Read Aloud Button */}
            <button
              onClick={handleReadAloud}
              className="kid-button px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bubble text-xs sm:text-sm font-bold flex items-center gap-1.5 border border-amber-300"
              title="Bacakan Soal dan Pilihan"
            >
              <Volume2 className="w-4 h-4 text-amber-700 animate-bounce" />
              <span>Bacakan Soal</span>
            </button>

            {/* Score Tracker */}
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-xl">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span className="text-xs sm:text-sm font-bubble font-bold text-slate-700">
                Skor Sementara: {score}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 mb-6">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-3 border-amber-300 mb-6">
            <h3 className="text-lg sm:text-2xl font-bubble font-bold text-slate-800 leading-snug mb-6">
              {currentQ.question}
            </h3>

            {/* Big Kid-Friendly Options A, B, C */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let optionStyle = 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800';

                if (isAnswerSubmitted) {
                  if (opt.isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optionStyle = 'bg-slate-50 border-slate-200 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-amber-100 border-amber-500 ring-2 ring-amber-200';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 sm:p-5 rounded-2xl border-3 text-left font-reading font-semibold text-base sm:text-lg transition-all flex items-center gap-4 ${optionStyle}`}
                  >
                    <span className={`w-10 h-10 rounded-xl font-bubble font-bold flex items-center justify-center text-base flex-shrink-0 shadow-xs ${
                      isAnswerSubmitted && opt.isCorrect
                        ? 'bg-emerald-500 text-white'
                        : isAnswerSubmitted && isSelected && !opt.isCorrect
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-slate-700 border-2 border-slate-200'
                    }`}>
                      {opt.id}
                    </span>
                    <span className="flex-1 leading-snug">
                      {opt.text}
                    </span>
                    {isAnswerSubmitted && opt.isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !opt.isCorrect && (
                      <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Character Reactions */}
            {isAnswerSubmitted && (
              <div className="pt-4 border-t border-slate-100 animate-in fade-in">
                <CharacterGuide
                  character={isCorrect ? 'bina' : 'sila'}
                  expression={isCorrect ? 'clap' : 'smile'}
                  dialogue={isCorrect ? currentQ.characterReaction.success : currentQ.characterReaction.retry}
                  roleText={isCorrect ? 'Bina memuji jawabanmu' : 'Sila memberi semangat'}
                  className="mb-4"
                />

                <div className={`p-4 rounded-2xl border-2 mb-4 ${
                  isCorrect 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}>
                  <p className="font-bubble font-bold text-sm mb-1">
                    {isCorrect ? '🎉 Jawabanmu Benar!' : '💡 Penjelasan Singkat:'}
                  </p>
                  <p className="text-sm font-reading">
                    {currentQ.explanation}
                  </p>
                </div>

                <div className="text-right">
                  <button
                    onClick={handleNext}
                    className="kid-button px-7 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-base font-bold rounded-2xl shadow-md inline-flex items-center gap-2"
                  >
                    <span>{currentIndex < shuffledQuestions.length - 1 ? 'Soal Selanjutnya' : 'Lihat Hasil Kuis 🏆'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        // QUIZ COMPLETED FINAL SCORE CARD
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-amber-400 text-center animate-in zoom-in-95">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-4 border-amber-500 flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
            🌟
          </div>

          <h3 className="text-2xl sm:text-4xl font-bubble font-extrabold text-slate-800 mb-2">
            Kuis Selesai! Kamu Hebat!
          </h3>
          <p className="text-slate-600 font-reading text-base max-w-md mx-auto mb-6">
            Terima kasih sudah belajar dan menjawab seluruh pertanyaan dengan penuh semangat.
          </p>

          {/* Score Badge */}
          <div className="inline-block p-6 rounded-3xl bg-amber-50 border-3 border-amber-300 shadow-sm mb-6 min-w-[240px]">
            <p className="text-xs font-bubble font-bold text-amber-800 uppercase tracking-wider mb-1">
              Skor Akhir Kamu
            </p>
            <p className="text-5xl sm:text-6xl font-bubble font-extrabold text-amber-950">
              {score}
            </p>
            <p className="text-sm font-bubble font-bold text-emerald-700 mt-2">
              {correctAnswersCount} dari {shuffledQuestions.length} Soal Dijawab Benar
            </p>
          </div>

          {/* Motivational Message based on score (Never Shaming) */}
          <div className="max-w-lg mx-auto p-4 rounded-2xl bg-sky-50 border border-sky-200 text-slate-800 font-reading text-sm sm:text-base mb-8">
            {score >= 80 ? (
              <p>
                🎖️ <strong>Luar Biasa Sempurna!</strong> Kamu benar-benar memahami seluruh aturan di rumah dan di sekolah. Jadilah teladan bagi teman-temanmu!
              </p>
            ) : score >= 60 ? (
              <p>
                ⭐ <strong>Bagus Sekali!</strong> Kamu sudah memahami sebagian besar aturan dengan baik. Terus pertahankan dan selalu patuhi aturan ya!
              </p>
            ) : (
              <p>
                🌱 <strong>Usaha yang Bagus!</strong> Kamu sudah berani mencoba dengan sungguh-sungguh. Yuk, ulangi materi dan kuis agar kamu semakin paham!
              </p>
            )}
          </div>

          {/* Action Buttons as required by prompt */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={startQuiz}
              className="kid-button px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-base font-bold rounded-2xl shadow-md flex items-center gap-2 border-2 border-amber-500"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              onClick={onBackToMaterials}
              className="kid-button px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bubble text-base font-bold rounded-2xl shadow-md flex items-center gap-2 border-2 border-slate-300"
            >
              <BookOpen className="w-5 h-5 text-sky-500" />
              <span>Kembali ke Materi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
