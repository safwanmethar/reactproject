import { Search, Video, MoreHorizontal, Gift } from "lucide-react";
import { contacts, sponsored, birthdays } from "../../data/mockData";

export function RightSidebar() {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 sticky top-14 self-start max-h-[calc(100vh-3.5rem)] overflow-y-auto py-4 px-2">
      {/* Sponsored */}
      <h3 className="px-2 py-1 text-sm font-semibold text-muted-foreground">
        Sponsored
      </h3>
      {sponsored.map((s) => (
        <button
          key={s.title}
          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted text-left"
        >
          <img src={s.image} alt={s.title} className="h-20 w-20 rounded-lg object-cover" />
          <div>
            <p className="font-medium text-sm">{s.title}</p>
            <p className="text-xs text-muted-foreground">{s.site}</p>
          </div>
        </button>
      ))}

      <div className="border-t border-border my-3" />

      {/* Birthdays */}
      <h3 className="px-2 py-1 text-sm font-semibold text-muted-foreground">
        Birthdays
      </h3>
      {birthdays.map((b) => (
        <div key={b.name} className="flex items-start gap-3 p-2">
          <Gift className="h-7 w-7 text-primary shrink-0 mt-0.5" />
          <p className="text-sm">
            <span className="font-semibold">{b.name}</span> and{" "}
            <span className="font-semibold">{b.others} others</span> have birthdays today.
          </p>
        </div>
      ))}

      <div className="border-t border-border my-3" />

      {/* Contacts */}
      <div className="flex items-center justify-between px-2 py-1">
        <h3 className="text-sm font-semibold text-muted-foreground">Contacts</h3>
        <div className="flex gap-1 text-muted-foreground">
          <button className="p-1.5 rounded-full hover:bg-muted"><Video className="h-4 w-4" /></button>
          <button className="p-1.5 rounded-full hover:bg-muted"><Search className="h-4 w-4" /></button>
          <button className="p-1.5 rounded-full hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></button>
        </div>
      </div>
      {contacts.map((c) => (
        <button
          key={c.name}
          className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-muted text-left"
        >
          <div className="relative">
            <img src={c.avatar} alt={c.name} className="h-9 w-9 rounded-full" />
            {c.online && (
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full border-2 border-card" />
            )}
          </div>
          <span className="font-medium text-sm">{c.name}</span>
        </button>
      ))}
    </aside>
  );
}