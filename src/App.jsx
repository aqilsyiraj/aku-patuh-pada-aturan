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
      <footer className="bg-white/90 border-t-2 border-amber-200 py-6 text-center text-xs font-reading text-slate-600 no-print">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌟</span>
            <span className="font-bubble font-bold text-slate-800">
              Aku Patuh pada Aturan
            </span>
            <span>— Media Edukasi Karakter Anak Indonesia</span>
          </div>
          <div className="text-slate-500 font-reading">
            Dirancang dengan penuh kasih sayang untuk siswa usia dini & sekolah dasar kelas rendah.
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
