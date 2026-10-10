/**
 * Audio Service for "Aku Patuh pada Aturan"
 * Integrates Web Speech API (Indonesian TTS) & Web Audio API (Synthesized Effects)
 * Completely offline-capable, standalone, zero dummy URLs.
 */

class AudioService {
  constructor() {
    this.speechSynthesis = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.audioCtx = null;
    this.isSfxEnabled = true;
    this.isVoiceEnabled = true;
    this.currentUtterance = null;
    this.listeners = new Set();
    this.isSpeaking = false;
    this.currentText = '';

    // Initialize Web Audio Context lazily on first user interaction
    this.initAudioContext();
  }

  initAudioContext() {
    if (typeof window !== 'undefined' && !this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  resumeAudioContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(state) {
    this.listeners.forEach((listener) => listener(state));
  }

  // --- TTS Narration ---
  speak(text, onEndCallback = null) {
    if (!this.speechSynthesis) return;

    // Stop existing speech before starting new one
    this.stopSpeech();

    if (!this.isVoiceEnabled || !text) return;

    this.currentText = text;
    this.isSpeaking = true;
    this.notify({ isSpeaking: true, text });

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;

    // Female speech settings for children (sweet, friendly female teacher/sister voice)
    utterance.lang = 'id-ID';
    utterance.rate = 0.92;
    utterance.pitch = 1.28; // Higher pitch for clear sweet female voice tone

    // Strictly select Indonesian female voice
    const voices = this.speechSynthesis.getVoices();
    // Filter Indonesian voices, explicitly excluding male voices (e.g. Andika, Male, etc.)
    const indonesianVoices = voices.filter(
      (v) => (v.lang.includes('id') || v.lang.includes('ID') || v.name.toLowerCase().includes('indonesia')) &&
             !v.name.toLowerCase().includes('male') &&
             !v.name.toLowerCase().includes('andika') &&
             !v.name.toLowerCase().includes('pria') &&
             !v.name.toLowerCase().includes('man')
    );

    // Prioritize female voices like Gadis (Edge Natural Female) or Google Bahasa Indonesia (Female)
    const femaleVoice = indonesianVoices.find(
      (v) => v.name.toLowerCase().includes('gadis') ||
             v.name.toLowerCase().includes('female') ||
             v.name.toLowerCase().includes('natural') ||
             v.name.toLowerCase().includes('google')
    ) || indonesianVoices[0];

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else {
      // Fallback: any female voice available
      const anyFemale = voices.find(
        (v) => (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('gadis')) &&
               !v.name.toLowerCase().includes('male')
      );
      if (anyFemale) {
        utterance.voice = anyFemale;
      }
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.notify({ isSpeaking: false, text: '' });
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error or canceled:', e);
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.notify({ isSpeaking: false, text: '' });
    };

    this.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.notify({ isSpeaking: false, text: '' });
    }
  }

  repeatSpeech() {
    if (this.currentText) {
      this.speak(this.currentText);
    }
  }

  toggleVoice() {
    this.isVoiceEnabled = !this.isVoiceEnabled;
    if (!this.isVoiceEnabled) {
      this.stopSpeech();
    }
    return this.isVoiceEnabled;
  }

  toggleSfx() {
    this.isSfxEnabled = !this.isSfxEnabled;
    return this.isSfxEnabled;
  }

  // --- Web Audio API Synthesized Sound Effects (No external files needed) ---
  playSuccessSound() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Cheerful arpeggio chord (C5 -> E5 -> G5 -> C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.45);
    });
  }

  playErrorSound() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Gentle encouraging boing / wobble (not harsh or punishing)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.32);
  }

  playClickSound() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.06);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playCardFlipSound() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.linearRampToValueAtTime(520, now + 0.05);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  playFanfare() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Victory fanfare fanfare: C5, C5, C5, F5, A5, C6
    const sequence = [
      { f: 523.25, time: 0, dur: 0.12 },
      { f: 523.25, time: 0.14, dur: 0.12 },
      { f: 523.25, time: 0.28, dur: 0.12 },
      { f: 698.46, time: 0.42, dur: 0.35 },
      { f: 880.00, time: 0.8, dur: 0.25 },
      { f: 1046.50, time: 1.08, dur: 0.6 }
    ];

    sequence.forEach(({ f, time, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + time);

      gain.gain.setValueAtTime(0, now + time);
      gain.gain.linearRampToValueAtTime(0.2, now + time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + time);
      osc.stop(now + time + dur + 0.05);
    });
  }

  playPopSound() {
    if (!this.isSfxEnabled) return;
    this.resumeAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }
}

export const audioService = new AudioService();
