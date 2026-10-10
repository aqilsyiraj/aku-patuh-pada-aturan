import React from 'react';
import { 
  Home, 
  Clock, 
  Sparkles, 
  TreePine, 
  GraduationCap, 
  Gamepad2, 
  HelpCircle, 
  Trophy, 
  Volume2, 
  VolumeX, 
  Music,
  BookOpen
} from 'lucide-react';
import { audioService } from '../services/audioService';

export default function Navbar({ 
  currentSection, 
  onNavigate, 
  completedSections = [], 
  onOpenHelp,
  isSfxOn,
  onToggleSfx,
  isVoiceOn,
  onToggleVoice
}) {
  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: Home, short: 'Beranda' },
    { id: 'materi1', label: 'Aturan Keluargaku', icon: Clock, short: 'Materi 1' },
    { id: 'materi2', label: 'Aturan di Rumah', icon: Sparkles, short: 'Materi 2' },
    { id: 'materi3', label: 'Peduli Lingkungan', icon: TreePine, short: 'Materi 3' },
    { id: 'materi4', label: 'Aturan di Sekolah', icon: GraduationCap, short: 'Materi 4' },
    { id: 'materi5', label: 'Ayo Bermain!', icon: Gamepad2, short: 'Bermain' },
    { id: 'kuis', label: 'Kuis Seru', icon: Trophy, short: 'Kuis' },
    { id: 'penutup', label: 'Penutup', icon: BookOpen, short: 'Selesai' },
  ];

  const totalSteps = menuItems.length;
  const progressPercent = Math.round((completedSections.length / totalSteps) * 100);

  const handleNavClick = (id) => {
    audioService.playClickSound();
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-300 shadow-md">
      {/* Top Banner / Progress & Controls */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center shadow-md border-2 border-amber-500 group-hover:scale-110 transition-transform">
            <span className="text-xl">🌟</span>
          </div>
          <div>
            <h1 className="font-bubble text-lg sm:text-xl font-bold tracking-tight text-slate-800 leading-tight">
              Aku Patuh pada Aturan
            </h1>
            <p className="text-[11px] sm:text-xs font-reading font-semibold text-emerald-600 hidden sm:block">
              Mengenal Aturan di Rumah dan di Sekolah
            </p>
          </div>
        </div>

        {/* Learning Progress Bar */}
        <div className="flex-1 max-w-xs mx-2 hidden md:block">
          <div className="flex justify-between items-center text-xs font-bubble font-semibold text-slate-600 mb-1">
            <span>Progres Belajar:</span>
            <span className="text-amber-600 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Audio Controls & Petunjuk Button */}
        <div className="flex items-center gap-2">
          {/* TTS Voice Toggle */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onToggleVoice();
            }}
            className={`p-2 rounded-xl text-xs font-bubble font-semibold flex items-center gap-1 border transition-all ${
              isVoiceOn 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100' 
                : 'bg-slate-100 text-slate-400 border-slate-300'
            }`}
            title={isVoiceOn ? 'Suara Narasi Aktif' : 'Suara Narasi Nonaktif'}
            aria-label="Toggle Narasi"
          >
            {isVoiceOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden lg:inline">{isVoiceOn ? 'Suara On' : 'Suara Mute'}</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onToggleSfx();
            }}
            className={`p-2 rounded-xl text-xs font-bubble font-semibold flex items-center gap-1 border transition-all ${
              isSfxOn 
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100' 
                : 'bg-slate-100 text-slate-400 border-slate-300'
            }`}
            title={isSfxOn ? 'Efek Suara Aktif' : 'Efek Suara Nonaktif'}
            aria-label="Toggle SFX"
          >
            <Music className={`w-4 h-4 ${isSfxOn ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="hidden lg:inline">{isSfxOn ? 'SFX On' : 'SFX Off'}</span>
          </button>

          {/* Help Modal Button */}
          <button
            onClick={() => {
              audioService.playClickSound();
              onOpenHelp();
            }}
            className="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-bubble text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-sm transition-all"
            title="Buka Petunjuk Belajar"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Petunjuk</span>
          </button>
        </div>
      </div>

      {/* Navigation Pills Bar */}
      <nav className="bg-amber-50/80 px-2 sm:px-4 py-1.5 border-t border-amber-200/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            const isDone = completedSections.includes(item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bubble font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-400 text-amber-950 shadow-md scale-105 border-2 border-amber-500'
                    : isDone
                    ? 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-300'
                    : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-950' : isDone ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {isDone && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block ml-0.5" title="Selesai dipelajari" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
