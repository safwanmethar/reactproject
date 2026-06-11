import { Video, Image as ImageIcon, Smile } from "lucide-react";

export  function Composer() {
  return (
    <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-4">
      <div className="flex items-center gap-2">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
          className="h-10 w-10 rounded-full"
          alt="You"
        />
        <button className="flex-1 text-left bg-muted hover:bg-accent rounded-full px-4 py-2.5 text-muted-foreground">
          What's on your mind?
        </button>
      </div>

      <div className="border-t border-border my-3" />

      <div className="grid grid-cols-3 gap-1">
        <ComposerButton icon={<Video className="h-5 w-5 text-rose-500" />} label="Live video" />
        <ComposerButton icon={<ImageIcon className="h-5 w-5 text-emerald-500" />} label="Photo/video" />
        <ComposerButton icon={<Smile className="h-5 w-5 text-amber-500" />} label="Feeling" />
      </div>
    </div>
  );
}

function ComposerButton({ icon, label }) {
  return (
    <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-muted text-sm font-medium text-muted-foreground">
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}