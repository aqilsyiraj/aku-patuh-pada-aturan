import React from 'react';
import PancaAvatar from './Characters/PancaAvatar';
import SilaAvatar from './Characters/SilaAvatar';
import BinaAvatar from './Characters/BinaAvatar';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { audioService } from '../services/audioService';

/**
 * CharacterGuide renders Panca, Sila, or Bina with speech bubble,
 * audio narator controls, and custom expressions.
 */
export default function CharacterGuide({
  character = 'panca', // 'panca' | 'sila' | 'bina'
  expression = 'smile', // 'smile' | 'wave' | 'clap' | 'point' | 'surprise' | 'think'
  dialogue = '',
  roleText = '',
  onSpeak = null,
  isSpeaking = false,
  className = '',
  size = 110,
}) {
  const charDetails = {
    panca: {
      name: 'Panca',
      title: 'Pemandu Aktif & Ceria',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      bubbleBg: 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300',
      avatar: <PancaAvatar expression={expression} size={size} />
    },
    sila: {
      name: 'Sila',
      title: 'Penjelas Aturan & Kebaikan',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      bubbleBg: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300',
      avatar: <SilaAvatar expression={expression} size={size} />
    },
    bina: {
      name: 'Bina',
      title: 'Penantang Kuis & Game',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      bubbleBg: 'bg-gradient-to-br from-indigo-50 to-sky-50 border-indigo-300',
      avatar: <BinaAvatar expression={expression} size={size} />
    }
  };

  const current = charDetails[character] || charDetails.panca;

  const handleAudioClick = () => {
    audioService.playClickSound();
    if (onSpeak) {
      onSpeak();
    } else if (dialogue) {
      audioService.speak(dialogue);
    }
  };

  const handleRepeatClick = () => {
    audioService.playClickSound();
    if (dialogue) {
      audioService.speak(dialogue);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-3xl bg-white/90 backdrop-blur shadow-lg border-2 border-slate-100 transition-all ${className}`}>
      {/* Character Graphic */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="relative cursor-pointer" onClick={handleAudioClick} title={`Klik untuk mendengar suara ${current.name}`}>
          {current.avatar}
          {isSpeaking && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500 items-center justify-center text-[10px] text-white font-bold">♪</span>
            </span>
          )}
        </div>
        <div className={`mt-1 px-3 py-0.5 rounded-full text-xs font-bubble font-bold border shadow-xs ${current.badgeColor}`}>
          {current.name}
        </div>
      </div>

      {/* Speech Bubble */}
      <div className={`flex-1 relative p-4 sm:p-5 rounded-2xl border-2 shadow-sm ${current.bubbleBg}`}>
        {/* Tail triangle on desktop */}
        <div className="hidden sm:block absolute top-7 -left-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white/80" />

        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bubble font-bold text-slate-800">
              {current.name}
            </span>
            <span className="text-[11px] font-reading text-slate-500 hidden md:inline">
              • {roleText || current.title}
            </span>
          </div>

          {/* Action Buttons: Speak, Repeat */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleAudioClick}
              className={`p-2 rounded-xl text-xs font-bubble font-semibold flex items-center gap-1 transition-all ${
                isSpeaking 
                  ? 'bg-amber-400 text-amber-950 shadow-md animate-pulse'
                  : 'bg-white hover:bg-amber-100 text-slate-700 shadow-xs border border-slate-200'
              }`}
              title="Dengarkan Suara Narasi"
              aria-label="Dengarkan Suara Narasi"
            >
              <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
              <span className="hidden sm:inline">{isSpeaking ? 'Bicara...' : 'Dengarkan'}</span>
            </button>

            <button
              onClick={handleRepeatClick}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 shadow-xs border border-slate-200 text-xs font-bubble transition-all"
              title="Ulangi Suara"
              aria-label="Ulangi Suara"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dialogue Text */}
        <p className="text-slate-800 text-sm sm:text-base font-reading leading-relaxed">
          {dialogue}
        </p>
      </div>
    </div>
  );
}
