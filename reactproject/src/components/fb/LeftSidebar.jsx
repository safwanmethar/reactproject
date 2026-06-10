import { ChevronDown } from "lucide-react";
import { sidebarLinks, shortcuts } from "../../data/mockData";
export function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0 sticky top-14 self-start max-h-[calc(100vh-3.5rem)] overflow-y-auto py-4 px-2">
      
      <SidebarItem
        icon={
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
            className="h-9 w-9 rounded-full"
            alt="You"
          />
        }
        label="Your Name"
      />

      {sidebarLinks.map((l) => (
        <SidebarItem
          key={l.name}
          icon={<EmojiIcon emoji={l.icon} />}
          label={l.name}
        />
      ))}

      <SidebarItem
        icon={
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <ChevronDown className="h-4 w-4" />
          </div>
        }
        label="See more"
      />

      <div className="border-t border-border my-3" />

      <h3 className="px-3 py-1 text-sm font-semibold text-muted-foreground">
        Your shortcuts
      </h3>

      {shortcuts.map((s) => (
        <SidebarItem
          key={s.name}
          icon={<EmojiIcon emoji={s.icon} />}
          label={s.name}
        />
      ))}

      <p className="px-3 mt-4 text-xs text-muted-foreground">
        Privacy · Terms · Advertising · Cookies · Meta © 2024
      </p>
    </aside>
  );
}

function EmojiIcon({ emoji }) {
  return (
    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-lg">
      {emoji}
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-left">
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}