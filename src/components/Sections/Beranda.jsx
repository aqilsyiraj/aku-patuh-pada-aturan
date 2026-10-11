import React, { useState } from 'react';
import PancaAvatar from '../Characters/PancaAvatar';
import SilaAvatar from '../Characters/SilaAvatar';
import BinaAvatar from '../Characters/BinaAvatar';
import { Volume2, Play, HelpCircle, Sparkles, BookOpen, Heart, Award } from 'lucide-react';
import { audioService } from '../../services/audioService';

export default function Beranda({ onStartLearning, onOpenHelp, onNavigate }) {
  const [isPlayingGreeting, setIsPlayingGreeting] = useState(false);
  const [activeCharIndex, setActiveCharIndex] = useState(0);

  const greetingNarration = 
    'Halo, teman-teman! Yuk, belajar mengenal aturan di rumah dan di sekolah bersama Panca, Sila, dan Bina. ' +
    'Kita akan belajar sambil melihat gambar, mendengarkan suara, bermain kegiatan interaktif, dan mengerjakan kuis. ' +
    'Ayo, mulai belajar!';

  const handlePlayGreeting = () => {
    audioService.playClickSound();
    if (isPlayingGreeting) {
      audioService.stopSpeech();
      setIsPlayingGreeting(false);
    } else {
      setIsPlayingGreeting(true);
      audioService.speak(greetingNarration, () => {
        setIsPlayingGreeting(false);
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6">
      {/* Decorative Cloud & Nature Backdrop */}
      <div className="max-w-6xl mx-auto">
        {/* Main Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100 border-4 border-amber-300 shadow-xl overflow-hidden p-6 sm:p-10 text-center">
          
          {/* Animated Background SVG Sky & Hills */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
              {/* Sun with rays */}
              <circle cx="150" cy="80" r="50" fill="#FDE047" />
              <g className="animate-spin" style={{ animationDuration: '30s', transformOrigin: '150px 80px' }}>
                <line x1="150" y1="15" x2="150" y2="5" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                <line x1="150" y1="145" x2="150" y2="155" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                <line x1="85" y1="80" x2="75" y2="80" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                <line x1="215" y1="80" x2="225" y2="80" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* Clouds */}
              <g className="animate-float" style={{ animationDuration: '7s' }}>
                <ellipse cx="780" cy="90" rx="60" ry="25" fill="#FFFFFF" opacity="0.85" />
                <ellipse cx="820" cy="80" rx="45" ry="30" fill="#FFFFFF" opacity="0.9" />
                <ellipse cx="750" cy="85" rx="40" ry="25" fill="#FFFFFF" opacity="0.85" />
              </g>

              {/* Green Hills in Background */}
              <path d="M 0 350 Q 250 250 550 350 T 1000 320 L 1000 400 L 0 400 Z" fill="#86EFAC" />
              <path d="M 100 380 Q 450 290 850 380 L 1000 400 L 0 400 Z" fill="#4ADE80" />
            </svg>
          </div>

          {/* Heading Section */}
          <div className="relative z-10 max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-amber-800 border-2 border-amber-300 font-bubble text-xs sm:text-sm font-bold shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Media Pembelajaran Interaktif Siswa SD & Usia Dini</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bubble font-extrabold text-slate-800 tracking-tight drop-shadow-sm leading-tight sm:leading-none mb-3">
              AKU PATUH PADA ATURAN
            </h1>
            <p className="text-lg sm:text-2xl font-bubble font-semibold text-emerald-700 max-w-2xl mx-auto">
              Mengenal Aturan di Rumah dan di Sekolah
            </p>
          </div>

          {/* Three Characters Greeting Stage (Panca, Sila, Bina) */}
          <div className="relative z-10 my-4 sm:my-8">
            {/* Friendly Stage Background Graphic */}
            <div className="relative max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-6 border-3 border-amber-200 shadow-lg">
              
              {/* Illustration of Home & School in tiny backdrop badges */}
              <div className="flex justify-between items-center mb-3 text-xs font-bubble font-bold text-slate-500 px-4">
                <span className="flex items-center gap-1">🏡 Lingkungan Rumah</span>
                <span className="text-amber-500 font-extrabold">🌟 Tiga Sahabat Karakter</span>
                <span className="flex items-center gap-1">🏫 Lingkungan Sekolah</span>
              </div>

              {/* The 3 Characters waving */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end justify-items-center py-2">
                {/* Character 1: Panca */}
                <div 
                  onClick={() => {
                    audioService.playClickSound();
                    setActiveCharIndex(0);
                    audioService.speak('Halo teman-teman! Aku Panca, yuk kita mulai kegiatan seru hari ini!');
                  }}
                  className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-105"
                  title="Panca - Ceria dan Aktif"
                >
                  <PancaAvatar expression="wave" size={125} className="animate-bounce-gentle" />
                  <div className="mt-2 text-center">
                    <span className="px-3 py-1 bg-amber-400 text-amber-950 font-bubble font-bold text-xs sm:text-sm rounded-full shadow-xs">
                      Panca 🧢
                    </span>
                    <p className="text-[11px] text-slate-600 font-reading font-medium mt-1 hidden sm:block">
                      Aktif & Ceria
                    </p>
                  </div>
                </div>

                {/* Character 2: Sila */}
                <div 
                  onClick={() => {
                    audioService.playClickSound();
                    setActiveCharIndex(1);
                    audioService.speak('Halo teman-teman! Aku Sila, aku akan menemani kalian memahami pentingnya aturan dan bersikap ramah!');
                  }}
                  className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-105"
                  title="Sila - Ramah dan Bijak"
                >
                  <SilaAvatar expression="wave" size={125} className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }} />
                  <div className="mt-2 text-center">
                    <span className="px-3 py-1 bg-emerald-400 text-emerald-950 font-bubble font-bold text-xs sm:text-sm rounded-full shadow-xs">
                      Sila 🌸
                    </span>
                    <p className="text-[11px] text-slate-600 font-reading font-medium mt-1 hidden sm:block">
                      Ramah & Baik Hati
                    </p>
                  </div>
                </div>

                {/* Character 3: Bina */}
                <div 
                  onClick={() => {
                    audioService.playClickSound();
                    setActiveCharIndex(2);
                    audioService.speak('Halo kawan cerdas! Aku Bina, siap menantangmu dengan game mencocokkan dan kuis seru!');
                  }}
                  className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-105"
                  title="Bina - Cerdas dan Penantang Game"
                >
                  <BinaAvatar expression="wave" size={125} className="animate-bounce-gentle" style={{ animationDelay: '0.8s' }} />
                  <div className="mt-2 text-center">
                    <span className="px-3 py-1 bg-indigo-500 text-white font-bubble font-bold text-xs sm:text-sm rounded-full shadow-xs">
                      Bina ⭐
                    </span>
                    <p className="text-[11px] text-slate-600 font-reading font-medium mt-1 hidden sm:block">
                      Pintar & Tantangan
                    </p>
                  </div>
                </div>
              </div>

              {/* Welcoming Narrative Box */}
              <div className="mt-5 p-4 rounded-2xl bg-amber-50/90 border-2 border-amber-300 text-slate-800 font-reading text-sm sm:text-base leading-relaxed relative text-left">
                <div className="flex items-start gap-2.5">
                  <span className="text-2xl flex-shrink-0">📢</span>
                  <div>
                    <p className="font-bubble font-bold text-amber-900 mb-1">
                      Sapaan Tiga Sahabat:
                    </p>
                    <p className="text-slate-700">
                      “Halo, teman-teman! Yuk, belajar mengenal aturan di rumah dan di sekolah bersama Panca, Sila, dan Bina. 
                      Kita akan belajar sambil melihat gambar, mendengarkan suara, bermain kegiatan interaktif, dan mengerjakan kuis. 
                      Ayo, mulai belajar!”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Main Action Buttons (Required by prompt) */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            {/* 1. Mulai Belajar */}
            <button
              onClick={() => {
                audioService.playClickSound();
                onStartLearning();
              }}
              className="kid-button px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-amber-950 font-bubble text-lg sm:text-xl font-bold shadow-lg border-2 border-amber-500 flex items-center gap-2.5"
            >
              <Play className="w-6 h-6 fill-amber-950" />
              <span>Mulai Belajar</span>
            </button>

            {/* 2. Dengarkan Sapaan */}
            <button
              onClick={handlePlayGreeting}
              className={`kid-button px-6 py-4 rounded-2xl font-bubble text-base sm:text-lg font-bold shadow-md border-2 transition-all flex items-center gap-2.5 ${
                isPlayingGreeting
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600'
              }`}
            >
              <Volume2 className={`w-6 h-6 ${isPlayingGreeting ? 'animate-bounce' : ''}`} />
              <span>{isPlayingGreeting ? 'Hentikan Suara' : 'Dengarkan Sapaan'}</span>
            </button>

            {/* 3. Petunjuk Belajar */}
            <button
              onClick={() => {
                audioService.playClickSound();
                onOpenHelp();
              }}
              className="kid-button px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bubble text-base sm:text-lg font-bold shadow-md border-2 border-slate-300 flex items-center gap-2"
            >
              <HelpCircle className="w-6 h-6 text-sky-500" />
              <span>Petunjuk Belajar</span>
            </button>
          </div>
        </div>

        {/* Quick Menu Highlights for Children */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('materi1')}
            className="kid-card p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-sm cursor-pointer hover:border-amber-400 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl flex-shrink-0">
              ⏰
            </div>
            <div>
              <h2 className="font-bubble font-bold text-slate-800 text-sm">1. Aturan Keluargaku</h2>
              <p className="text-xs text-slate-500 font-reading">Pagi, siang, sore, malam</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('materi2')}
            className="kid-card p-4 rounded-2xl bg-white border-2 border-emerald-200 shadow-sm cursor-pointer hover:border-emerald-400 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl flex-shrink-0">
              🏡
            </div>
            <div>
              <h2 className="font-bubble font-bold text-slate-800 text-sm">2. Aturan di Rumah</h2>
              <p className="text-xs text-slate-500 font-reading">Berdoa, cuci tangan, rapi</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('materi3')}
            className="kid-card p-4 rounded-2xl bg-white border-2 border-teal-200 shadow-sm cursor-pointer hover:border-teal-400 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-2xl flex-shrink-0">
              🧹
            </div>
            <div>
              <h2 className="font-bubble font-bold text-slate-800 text-sm">3. Peduli Lingkungan</h2>
              <p className="text-xs text-slate-500 font-reading">Sampah, tanaman, alat bersih</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('materi4')}
            className="kid-card p-4 rounded-2xl bg-white border-2 border-sky-200 shadow-sm cursor-pointer hover:border-sky-400 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-2xl flex-shrink-0">
              🏫
            </div>
            <div>
              <h2 className="font-bubble font-bold text-slate-800 text-sm">4. Aturan di Sekolah</h2>
              <p className="text-xs text-slate-500 font-reading">Berbaris, guru, piket kelas</p>
            </div>
          </div>
        </div>

        {/* Tim Pengembang & Penyusun Section Card */}
        <div className="mt-8 bg-white/90 backdrop-blur rounded-3xl p-5 sm:p-6 border-3 border-amber-300 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-2xl shadow-sm border border-amber-400 flex-shrink-0">
              🎓
            </div>
            <div>
              <span className="text-[11px] font-bubble font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wider">
                Tim Pengembang Media
              </span>
              <h3 className="font-bubble font-bold text-slate-800 text-base sm:text-lg mt-0.5">
                Pengembang & Penyusun Materi
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-xs sm:text-sm font-reading font-semibold text-slate-700">
            <div className="bg-amber-50 px-4 py-2 rounded-2xl border border-amber-200 text-center sm:text-left">
              <p className="font-bubble font-bold text-slate-800">SETIA HELLENA PUTRI</p>
              <p className="text-xs text-amber-800 font-mono font-bold mt-0.5">NIM: 250210204007</p>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200 text-center sm:text-left">
              <p className="font-bubble font-bold text-slate-800">SURINA WIKDA U. L. R.</p>
              <p className="text-xs text-emerald-800 font-mono font-bold mt-0.5">NIM: 250210204065</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
