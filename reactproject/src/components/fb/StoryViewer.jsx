import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const DURATION = 5000;

export function StoryViewer({ stories, index, onClose, onChange }) {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setProgress(0);
  }, [index]);

  useEffect(() => {
    if (paused) return;

    const start = Date.now() - (progress / 100) * DURATION;

    const id = setInterval(() => {
      const p = ((Date.now() - start) / DURATION) * 100;

      if (p >= 100) {
        if (index < stories.length - 1) onChange(index + 1);
        else onClose();
      } else {
        setProgress(p);
      }
    }, 50);

    return () => clearInterval(id);
  }, [index, paused, stories.length]);

  const story = stories[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={() => index > 0 && onChange(index - 1)}
        className="absolute left-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30"
        disabled={index === 0}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="relative w-full max-w-sm aspect-[9/16] rounded-xl overflow-hidden shadow-2xl"
        style={{ background: story.bg }}
      >
        {/* progress */}
        <div className="absolute top-2 left-2 right-2 flex gap-1 z-10">
          {stories.map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-[width] duration-75"
                style={{
                  width:
                    i < index
                      ? "100%"
                      : i === index
                      ? `${progress}%`
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* header */}
        <div className="absolute top-6 left-3 right-3 flex items-center gap-2 z-10">
          <img
            src={story.avatar}
            alt={story.user}
            className="h-9 w-9 rounded-full bg-white"
          />
          <p className="text-white font-semibold text-sm flex-1">
            {story.user}
          </p>

          <button
            onClick={() => setPaused((p) => !p)}
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>

        {/* center text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold p-8 text-center">
          {story.user}'s story
        </div>

        {/* input */}
        <div className="absolute bottom-4 left-3 right-3">
          <input
            placeholder={`Reply to ${story.user}...`}
            className="w-full bg-white/10 text-white placeholder:text-white/70 rounded-full px-4 py-2 outline-none border border-white/30 backdrop-blur"
          />
        </div>
      </div>

      <button
        onClick={() => index < stories.length - 1 && onChange(index + 1)}
        className="absolute right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30"
        disabled={index === stories.length - 1}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}