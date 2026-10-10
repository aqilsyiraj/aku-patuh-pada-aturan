import React from 'react';
import { X, Volume2, Sparkles, BookOpen, Gamepad2, Award } from 'lucide-react';
import { audioService } from '../services/audioService';

export default function InstructionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const instructionsText = 
    'Halo Adik-adik hebat! Berikut petunjuk belajar di website ini: ' +
    'Pertama, klik tombol Mulai Belajar atau pilih menu materi di atas. ' +
    'Kedua, klik tombol Dengarkan di setiap materi untuk mendengar suara narasi Panca, Sila, dan Bina. ' +
    'Ketiga, kamu bisa memainkan game mencocokkan kartu dan kuis seru untuk menguji kemampuanmu. ' +
    'Selamat belajar dan selalu patuhi aturan ya!';

  const handleSpeak = () => {
    audioService.playClickSound();
    audioService.speak(instructionsText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-amber-300 relative">
        {/* Close Button */}
        <button
          onClick={() => {
            audioService.playClickSound();
            audioService.stopSpeech();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 transition-colors"
          aria-label="Tutup Petunjuk"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl">
            💡
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bubble font-bold text-slate-800">
              Petunjuk Belajar
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-reading">
              Panduan menyenangkan untuk adik-adik & orang tua
            </p>
          </div>
        </div>

        {/* Read Aloud Button */}
        <button
          onClick={handleSpeak}
          className="w-full mb-4 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bubble rounded-2xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 text-sm"
        >
          <Volume2 className="w-5 h-5 animate-bounce" />
          <span>Dengarkan Petunjuk dengan Suara</span>
        </button>

        {/* Steps List */}
        <div className="space-y-3 font-reading text-sm text-slate-700">
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <span className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 font-bubble font-bold flex items-center justify-center flex-shrink-0 text-sm">
              1
            </span>
            <div>
              <p className="font-bold text-slate-800">Pilih Materi Pembelajaran</p>
              <p className="text-xs text-slate-600">Pelajari aturan di rumah, menjaga kebersihan lingkungan, dan aturan di sekolah bersama Panca, Sila, dan Bina.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-sky-50 rounded-2xl border border-sky-200">
            <span className="w-7 h-7 rounded-full bg-sky-400 text-sky-950 font-bubble font-bold flex items-center justify-center flex-shrink-0 text-sm">
              2
            </span>
            <div>
              <p className="font-bold text-slate-800">Dengarkan Narasi & Sentuh Gambar</p>
              <p className="text-xs text-slate-600">Klik tombol speaker kuning atau sentuh ilustrasi untuk melihat animasi seru dan mendengar penjelasan suara.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-2xl border border-purple-200">
            <span className="w-7 h-7 rounded-full bg-purple-400 text-purple-950 font-bubble font-bold flex items-center justify-center flex-shrink-0 text-sm">
              3
            </span>
            <div>
              <p className="font-bold text-slate-800">Mainkan Game & Kuis Seru</p>
              <p className="text-xs text-slate-600">Cocokkan kartu kegiatan di menu "Ayo Bermain!" dan jawab 10 pertanyaan di "Kuis Seru" untuk mengumpulkan bintang!</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="w-7 h-7 rounded-full bg-emerald-400 text-emerald-950 font-bubble font-bold flex items-center justify-center flex-shrink-0 text-sm">
              4
            </span>
            <div>
              <p className="font-bold text-slate-800">Dapatkan Sertifikat Bintang</p>
              <p className="text-xs text-slate-600">Setelah menyelesaikan belajar, kamu bisa mencetak Sertifikat Kepatuhan dengan namamu sendiri!</p>
            </div>
          </div>
        </div>

        {/* Got It Button */}
        <div className="mt-5 text-center">
          <button
            onClick={() => {
              audioService.playClickSound();
              audioService.stopSpeech();
              onClose();
            }}
            className="w-full py-3 bg-amber-400 hover:bg-amber-500 active:scale-95 text-amber-950 font-bubble font-bold rounded-2xl shadow-md transition-all text-base"
          >
            Siap, Ayo Belajar! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
