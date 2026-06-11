import { Plus } from "lucide-react";
import { initialStories as stories } from "../../data/mockData";

export function Stories({ onOpen }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
      
      {/* Create story */}
      <button className="shrink-0 w-[112px] h-[200px] rounded-xl overflow-hidden bg-card shadow-[var(--shadow-card)] flex flex-col group">
        <div className="flex-1 bg-gradient-to-b from-muted to-accent" />
        <div className="relative bg-card pt-6 pb-3 px-2 text-center">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-4 border-card">
            <Plus className="h-5 w-5" />
          </div>
          <p className="text-xs font-semibold">Create story</p>
        </div>
      </button>

      {/* Stories */}
      {stories.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onOpen(i)}
          className="shrink-0 w-[112px] h-[200px] rounded-xl overflow-hidden relative shadow-[var(--shadow-card)] group"
          style={{ background: s.bg }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <img
            src={s.avatar}
            alt={s.user}
            className="absolute top-2 left-2 h-9 w-9 rounded-full border-4 border-primary bg-card"
          />
          
          <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white text-left">
            {s.user}
          </p>
        </button>
      ))}
    </div>
  );
}