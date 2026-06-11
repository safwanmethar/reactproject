import { Search, Home, Users, Tv, Store, Gamepad2, Menu, MessageCircle, Bell, LogOut } from "lucide-react";

export function TopNav({ onLogout }) {
  return (
    // Added 'w-full' to ensure it takes the full width available
    <header className="sticky top-0 z-40 w-full bg-card border-b border-border shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between px-4 h-14 w-full max-w-[1400px] mx-auto">
        
        {/* Left: Added flex-shrink-0 so the logo doesn't disappear on small screens */}
        <div className="flex items-center gap-2 flex-1 max-w-xs flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl flex-shrink-0">
            f
          </div>
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-full px-3 py-2 flex-1">
            <Search className="h-4 w-4 text-muted-foreground" />
                        <input
              id="search"
              name="search"
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden lg:flex items-center gap-2">
          {[
            { Icon: Home, active: true },
            { Icon: Users },
            { Icon: Tv },
            { Icon: Store },
            { Icon: Gamepad2 },
          ].map(({ Icon, active }, i) => (
            <button
              key={i}
              className={`px-10 py-2 rounded-lg hover:bg-muted transition-colors relative ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-6 w-6" />
              {active && (
                <span className="absolute bottom-[-13px] left-0 right-0 h-1 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 justify-end flex-1">
          {[Menu, MessageCircle, Bell].map((Icon, i) => (
            <button
              key={i}
              className="h-10 w-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center flex-shrink-0"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
          <button
            type="button"
            onClick={onLogout}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-accent md:hidden"
            aria-label="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
            alt="You"
            className="h-10 w-10 rounded-full border-2 border-border"
          />
        </div>
      </div>
    </header>
  );
}
