import React, { useState } from 'react';
import { VIDEO_MOMENTS, type VideoMoment } from '../data/bvaData';
import { Play, Volume2, VolumeX, Maximize2, X, Clock, MapPin, FileText, CheckCircle2 } from 'lucide-react';

interface VideoMomentsProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const VideoMoments: React.FC<VideoMomentsProps> = ({ currentLang }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoMoment | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(true);

  return (
    <section className="relative w-full bg-white py-8 sm:py-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-amber-400" />
              <span>{currentLang === 'mr' ? 'थेट घटनाक्रम व जनसंवाद' : 'DOCUMENTARY MOMENTS'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
              {currentLang === 'mr'
                ? 'प्रत्यक्ष कार्य, विधीमंडळ आणि नागरिकांशी संवाद'
                : 'Civic Action, Assembly Speeches & Public Samvaad'}
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1 sm:mt-0 font-mono">
            {currentLang === 'mr'
              ? 'अधिकृत विधीमंडळ आणि जनसंवाद अभिलेख'
              : 'Verified public archival footage & audio transcripts'}
          </p>
        </div>

        {/* Three Horizontal Miniature Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_MOMENTS.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setSelectedVideo(video);
                setModalPlaying(true);
              }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between hover:border-[#0220A8]"
            >
              {/* Cinematic Video Canvas Simulator */}
              <div className="relative aspect-video w-full bg-[#00177A] overflow-hidden flex items-center justify-center">
                {/* Poster Photo Image */}
                {video.posterSrc ? (
                  <img
                    src={video.posterSrc}
                    alt={video.titleEn}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-95"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center"
                    style={{
                      backgroundColor: '#001050',
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(253,242,25,0.2) 0%, rgba(0,23,122,0.95) 100%)`
                    }}
                  />
                )}

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

                {/* Live Indicator */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#FDF219] animate-pulse" />
                  <span>RECORDED · {video.duration}</span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-[#0220A8] text-[#FDF219] text-[10px] font-black tracking-wider uppercase shadow-xs">
                  {video.category}
                </div>

                {/* Central Play Badge with Wave Animation */}
                <div className="relative z-10 w-13 h-13 rounded-full bg-[#FDF219] text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#0220A8] transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Audio Bars at Bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white/90 text-[10px]">
                  <div className="flex items-center gap-1">
                    <span className="w-0.5 h-3 bg-[#FDF219] animate-[bounce_1s_infinite_100ms]" />
                    <span className="w-0.5 h-4 bg-[#FDF219] animate-[bounce_1s_infinite_300ms]" />
                    <span className="w-0.5 h-2 bg-[#FDF219] animate-[bounce_1s_infinite_200ms]" />
                    <span className="w-0.5 h-5 bg-[#FDF219] animate-[bounce_1s_infinite_400ms]" />
                    <span className="w-0.5 h-3 bg-[#FDF219] animate-[bounce_1s_infinite_250ms]" />
                  </div>
                  <div className="flex items-center gap-1 opacity-90 text-[#FDF219] font-mono font-bold">
                    <Maximize2 className="w-3 h-3" />
                    <span>WATCH RECORD</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">
                    <span>{currentLang === 'mr' ? video.labelMr : video.labelEn}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#0220A8]">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      {video.location}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0220A8] transition-colors leading-snug">
                    {currentLang === 'mr' ? video.titleMr : video.titleEn}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans">
                    {currentLang === 'mr' ? video.summaryMr : video.summaryEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="truncate max-w-[200px] text-slate-500">{video.source}</span>
                  <span className="font-bold text-[#0220A8] group-hover:underline">Play Moment →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Accessible Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-[#00177A] text-white flex items-center justify-between border-b border-blue-900">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded bg-black/40 text-[#FDF219] text-xs font-mono font-bold">
                  {selectedVideo.category}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  {selectedVideo.location} · {selectedVideo.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              {selectedVideo.posterSrc && (
                <img
                  src={selectedVideo.posterSrc}
                  alt={selectedVideo.titleEn}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 filter blur-[1px]"
                />
              )}
              <div className="relative w-full h-full flex items-center justify-center z-10 bg-black/40 p-6 text-center">
                <div>
                  <div className="w-18 h-18 rounded-full bg-[#FDF219] text-slate-950 flex items-center justify-center mx-auto mb-3 shadow-2xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white max-w-xl mb-2 font-display">
                    {currentLang === 'mr' ? selectedVideo.titleMr : selectedVideo.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto font-sans">
                    {currentLang === 'mr' ? selectedVideo.summaryMr : selectedVideo.summaryEn}
                  </p>
                </div>

                {/* Simulated Player Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 to-transparent flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalPlaying(!modalPlaying)}
                      className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 cursor-pointer font-bold"
                    >
                      {modalPlaying ? 'Pause ⏸' : 'Play ▶'}
                    </button>
                    <button
                      onClick={() => setModalMuted(!modalMuted)}
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 flex items-center gap-1 cursor-pointer"
                    >
                      {modalMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>
                  <div className="font-mono text-[#FDF219] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>00:08 / {selectedVideo.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transcript & Context Panel */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 overflow-y-auto max-h-[30vh]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0220A8] mb-2 uppercase tracking-wide">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>
                  {currentLang === 'mr' ? 'थेट विधान / अधिकृत नोंद' : 'Official Speech / Dialogue Record'}
                </span>
              </div>
              <p className="text-sm text-slate-800 italic leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200 font-serif">
                {currentLang === 'mr' ? selectedVideo.transcriptMr : selectedVideo.transcriptEn}
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Source: {selectedVideo.source}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
