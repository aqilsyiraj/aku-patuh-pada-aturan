import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import PancaAvatar from '../Characters/PancaAvatar';
import SilaAvatar from '../Characters/SilaAvatar';
import BinaAvatar from '../Characters/BinaAvatar';
import { Sparkles, RotateCcw, Home, Trophy, Award, Printer, Heart, Volume2 } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Penutup({ onLearnAgain, onPlayQuiz, onBackToHome }) {
  const [studentName, setStudentName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const closingNarration = 
    'Hebat! Kamu sudah belajar tentang aturan di rumah dan di sekolah. ' +
    'Selalu patuhi aturan agar hidup menjadi tertib, aman, dan nyaman. ' +
    'Sampai jumpa di pembelajaran berikutnya!';

  useEffect(() => {
    // Fire celebration confetti upon landing on completion page
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleListenClosing = () => {
    audioService.playClickSound();
    audioService.speak(closingNarration);
  };

  const handlePrintCertificate = () => {
    audioService.playClickSound();
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Celebration Main Card */}
      <div className="bg-gradient-to-b from-sky-100 via-amber-50 to-emerald-100 rounded-3xl p-6 sm:p-12 border-4 border-amber-300 shadow-xl text-center relative overflow-hidden mb-8">
        
        {/* Floating Celebration Stars */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-amber-900 border border-amber-300 font-bubble text-xs sm:text-sm font-bold shadow-xs mb-4">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Selamat! Pembelajaran Telah Selesai</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bubble font-extrabold text-slate-800 mb-4 tracking-tight">
          HEBAT! KAMU ANAK TERTIB!
        </h2>

        {/* 3 Smiling & Waving Characters as required by prompt */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end justify-items-center max-w-lg mx-auto my-6">
          <div className="flex flex-col items-center">
            <PancaAvatar expression="wave" size={120} className="animate-bounce-gentle" />
            <span className="mt-2 text-xs font-bubble font-bold text-amber-800 bg-amber-200 px-3 py-0.5 rounded-full">
              Panca 🧢
            </span>
          </div>

          <div className="flex flex-col items-center">
            <SilaAvatar expression="clap" size={120} className="animate-clap" />
            <span className="mt-2 text-xs font-bubble font-bold text-emerald-800 bg-emerald-200 px-3 py-0.5 rounded-full">
              Sila 🌸
            </span>
          </div>

          <div className="flex flex-col items-center">
            <BinaAvatar expression="wave" size={120} className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }} />
            <span className="mt-2 text-xs font-bubble font-bold text-indigo-800 bg-indigo-200 px-3 py-0.5 rounded-full">
              Bina ⭐
            </span>
          </div>
        </div>

        {/* Closing Narrative Message as specified in prompt */}
        <div className="max-w-2xl mx-auto p-5 sm:p-6 bg-white/90 backdrop-blur rounded-3xl border-3 border-amber-300 shadow-md text-slate-800 font-reading text-base sm:text-lg leading-relaxed mb-6">
          <p className="font-bubble font-bold text-amber-900 text-lg mb-2">
            Pesan untuk Sahabat Kecil:
          </p>
          <p className="text-slate-700 italic">
            “Hebat! Kamu sudah belajar tentang aturan di rumah dan di sekolah. 
            Selalu patuhi aturan agar hidup menjadi tertib, aman, dan nyaman. 
            Sampai jumpa di pembelajaran berikutnya!”
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center">
            <button
              onClick={handleListenClosing}
              className="kid-button px-4 py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Pesan Penutup</span>
            </button>
          </div>
        </div>

        {/* Action Buttons as required by prompt */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* 1. Belajar Lagi */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onLearnAgain();
            }}
            className="kid-button px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bubble text-base font-bold rounded-2xl shadow-md border-2 border-amber-500 flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Belajar Lagi</span>
          </button>

          {/* 2. Mainkan Kuis */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onPlayQuiz();
            }}
            className="kid-button px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-base font-bold rounded-2xl shadow-md flex items-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            <span>Mainkan Kuis</span>
          </button>

          {/* 3. Kembali ke Beranda */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onBackToHome();
            }}
            className="kid-button px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bubble text-base font-bold rounded-2xl shadow-md border-2 border-slate-300 flex items-center gap-2"
          >
            <Home className="w-5 h-5 text-sky-500" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Certificate Section Button */}
        <div className="pt-6 border-t-2 border-amber-200/60 max-w-md mx-auto">
          <p className="text-xs font-bubble font-semibold text-slate-600 mb-3">
            Ingin punya bukti piagam bintang penghargaan?
          </p>
          <button
            onClick={() => {
              audioService.playSuccessSound();
              setShowCertificate(!showCertificate);
            }}
            className="kid-button w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bubble text-base font-bold shadow-lg flex items-center justify-center gap-2"
          >
            <Award className="w-5 h-5" />
            <span>{showCertificate ? 'Sembunyikan Piagam' : 'Buka Sertifikat Bintang Kepatuhan ⭐'}</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE / VIEWABLE CERTIFICATE */}
      {showCertificate && (
        <div id="printable-certificate" className="bg-white rounded-3xl p-8 sm:p-12 border-8 border-amber-400 shadow-2xl relative text-center animate-in fade-in max-w-3xl mx-auto">
          {/* Ornate Gold Border Inner */}
          <div className="border-4 border-dashed border-amber-300 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-50/50 via-white to-sky-50/50">
            
            {/* Header Badge */}
            <div className="w-16 h-16 rounded-full bg-amber-400 border-4 border-amber-500 text-white flex items-center justify-center text-3xl mx-auto mb-3 shadow-md">
              🏅
            </div>

            <p className="font-bubble text-sm font-bold text-amber-800 uppercase tracking-widest">
              PIAGAM PENGHARGAAN
            </p>
            <h3 className="text-2xl sm:text-4xl font-bubble font-extrabold text-slate-800 mt-1 mb-3">
              BINTANG KEPATUHAN ATURAN
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-reading max-w-md mx-auto mb-4">
              Diberikan kepada siswa hebat yang telah tekun mempelajari aturan di rumah dan di sekolah bersama Panca, Sila, dan Bina:
            </p>

            {/* Input Name for Personalization */}
            <div className="my-6 max-w-sm mx-auto">
              <input
                type="text"
                placeholder="Ketik Namamu di Sini..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full text-center text-xl sm:text-2xl font-bubble font-bold text-indigo-900 border-b-4 border-indigo-400 bg-transparent focus:outline-hidden px-4 py-2 placeholder:text-slate-300"
              />
            </div>

            <p className="text-sm sm:text-base font-reading text-slate-700 italic max-w-lg mx-auto mb-6">
              “Telah resmi diakui sebagai Anak Teladan yang Patuh pada Aturan, Rajin Menjaga Kebersihan, dan Sopan kepada Guru serta Orang Tua.”
            </p>

            {/* Signatures from Panca, Sila, and Bina */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-amber-200 text-center font-bubble text-xs text-slate-600">
              <div>
                <p className="font-bold text-amber-800">Panca</p>
                <p className="text-[10px] text-slate-500">Pemandu Aktif</p>
              </div>
              <div>
                <p className="font-bold text-emerald-800">Sila</p>
                <p className="text-[10px] text-slate-500">Pemandu Kebaikan</p>
              </div>
              <div>
                <p className="font-bold text-indigo-800">Bina</p>
                <p className="text-[10px] text-slate-500">Pemandu Cerdas</p>
              </div>
            </div>

            {/* Tim Pengembang Certificate Footer */}
            <div className="mt-6 pt-3 border-t border-amber-200/80 text-center font-reading text-[11px] text-slate-600">
              <span className="font-bubble font-bold text-slate-700">Tim Pengembang & Penyusun:</span>
              <p className="font-semibold text-slate-800 mt-0.5">
                SETIA HELLENA PUTRI <span className="font-mono text-amber-700 font-bold">(250210204007)</span> &bull; SURINA WIKDA U. L. R. <span className="font-mono text-amber-700 font-bold">(250210204065)</span>
              </p>
            </div>

            {/* Print Button */}
            <div className="mt-8 no-print flex justify-center gap-3">
              <button
                onClick={handlePrintCertificate}
                className="kid-button px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bubble text-sm font-bold rounded-xl shadow-md flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
