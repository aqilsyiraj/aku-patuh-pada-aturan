import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InstructionsModal from './components/InstructionsModal';
import Beranda from './components/Sections/Beranda';
import Materi1Keluarga from './components/Sections/Materi1Keluarga';
import Materi2Rumah from './components/Sections/Materi2Rumah';
import Materi3Lingkungan from './components/Sections/Materi3Lingkungan';
import Materi4Sekolah from './components/Sections/Materi4Sekolah';
import Materi5Game from './components/Sections/Materi5Game';
import Materi6Kuis from './components/Sections/Materi6Kuis';
import Penutup from './components/Sections/Penutup';
import { audioService } from './services/audioService';

export default function App() {
  const [currentSection, setCurrentSection] = useState('beranda');
  const [completedSections, setCompletedSections] = useState(['beranda']);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSfxOn, setIsSfxOn] = useState(true);
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  // Mark section as completed when visited
  const markSectionCompleted = (sectionId) => {
    setCompletedSections((prev) => {
      if (!prev.includes(sectionId)) {
        return [...prev, sectionId];
      }
      return prev;
    });
  };

  const handleNavigate = (sectionId) => {
    // Stop any currently playing audio when navigating
    audioService.stopSpeech();
    setCurrentSection(sectionId);
    markSectionCompleted(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSfx = () => {
    const newState = audioService.toggleSfx();
    setIsSfxOn(newState);
  };

  const handleToggleVoice = () => {
    const newState = audioService.toggleVoice();
    setIsVoiceOn(newState);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50">
      {/* Navigation Header */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        completedSections={completedSections}
        onOpenHelp={() => setIsHelpOpen(true)}
        isSfxOn={isSfxOn}
        onToggleSfx={handleToggleSfx}
        isVoiceOn={isVoiceOn}
        onToggleVoice={handleToggleVoice}
      />

      {/* Main Dynamic Educational Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto pb-12">
        {currentSection === 'beranda' && (
          <Beranda
            onStartLearning={() => handleNavigate('materi1')}
            onOpenHelp={() => setIsHelpOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentSection === 'materi1' && (
          <Materi1Keluarga
            onNext={() => handleNavigate('materi2')}
            onPrev={() => handleNavigate('beranda')}
          />
        )}

        {currentSection === 'materi2' && (
          <Materi2Rumah
            onNext={() => handleNavigate('materi3')}
            onPrev={() => handleNavigate('materi1')}
          />
        )}

        {currentSection === 'materi3' && (
          <Materi3Lingkungan
            onNext={() => handleNavigate('materi4')}
            onPrev={() => handleNavigate('materi2')}
          />
        )}

        {currentSection === 'materi4' && (
          <Materi4Sekolah
            onNext={() => handleNavigate('materi5')}
            onPrev={() => handleNavigate('materi3')}
          />
        )}

        {currentSection === 'materi5' && (
          <Materi5Game
            onNext={() => handleNavigate('kuis')}
            onPrev={() => handleNavigate('materi4')}
          />
        )}

        {currentSection === 'kuis' && (
          <Materi6Kuis
            onFinishQuiz={() => {
              markSectionCompleted('kuis');
              markSectionCompleted('penutup');
            }}
            onBackToMaterials={() => handleNavigate('materi1')}
          />
        )}

        {currentSection === 'penutup' && (
          <Penutup
            onLearnAgain={() => handleNavigate('materi1')}
            onPlayQuiz={() => handleNavigate('kuis')}
            onBackToHome={() => handleNavigate('beranda')}
          />
        )}
      </main>

      {/* Cheerful Kids Footer */}
      <footer className="bg-white/95 border-t-2 border-amber-200 py-6 text-xs font-reading text-slate-600 no-print">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="text-lg">🌟</span>
              <span className="font-bubble font-bold text-slate-800 text-sm">
                Aku Patuh pada Aturan
              </span>
              <span className="text-slate-500">— Media Edukasi Karakter Anak</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              Dirancang dengan penuh kasih sayang untuk siswa usia dini & sekolah dasar kelas rendah.
            </p>
          </div>

          {/* Tim Pengembang */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-2.5 px-4 text-center md:text-right shadow-xs">
            <p className="font-bubble font-bold text-amber-900 text-xs mb-1">
              🎓 Tim Pengembang & Penyusun:
            </p>
            <div className="space-y-0.5 text-slate-700 font-reading text-[11px] font-semibold">
              <p>• SETIA HELLENA PUTRI <span className="text-amber-700 font-mono font-bold">(250210204007)</span></p>
              <p>• SURINA WIKDA U. L. R. <span className="text-amber-700 font-mono font-bold">(250210204065)</span></p>
            </div>
          </div>
        </div>
      </footer>

      {/* Instructions Modal */}
      <InstructionsModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
