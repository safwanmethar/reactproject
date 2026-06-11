import { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Globe,
  Send,
} from "lucide-react";

export function PostCard({ post, onToggleLike, onAddComment }) {
  const [showComments, setShowComments] = useState(
    post.comments.length > 0
  );
  const [draft, setDraft] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const text = draft.trim();
    if (!text) return;

    onAddComment(post.id, {
      id: crypto.randomUUID(),
      user: "You",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      text,
      time: "just now",
    });

    setDraft("");
    setShowComments(true);
  };

  return (
    <article className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
      
      {/* header */}
      <div className="flex items-center gap-2 p-4 pb-2">
        <img
          src={post.avatar}
          alt={post.user}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex-1">
          <p className="font-semibold text-sm">{post.user}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            {post.time} · <Globe className="h-3 w-3" />
          </p>
        </div>

        <button className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* content */}
      <p className="px-4 pb-3 text-sm whitespace-pre-wrap">
        {post.content}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt=""
          className="w-full max-h-[500px] object-cover"
        />
      )}

      {/* counts */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px]">
            <ThumbsUp className="h-3 w-3 fill-current" />
          </span>
          <span>{post.likes}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowComments((s) => !s)}
            className="hover:underline"
          >
            {post.comments.length} comments
          </button>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* actions */}
      <div className="border-t border-border mx-4" />
      <div className="grid grid-cols-3 px-2 py-1">
        <ActionButton
          active={post.liked}
          icon={
            <ThumbsUp
              className={`h-5 w-5 ${post.liked ? "fill-current" : ""}`}
            />
          }
          label="Like"
          onClick={() => onToggleLike(post.id)}
        />

        <ActionButton
          icon={<MessageCircle className="h-5 w-5" />}
          label="Comment"
          onClick={() => setShowComments((s) => !s)}
        />

        <ActionButton
          icon={<Share2 className="h-5 w-5" />}
          label="Share"
        />
      </div>

      {/* comments */}
      {showComments && (
        <div className="px-4 pb-3 border-t border-border">
          <div className="space-y-2 py-3">
            {post.comments.map((c) => (
              <div key={c.id} className="flex gap-2">
                <img
                  src={c.avatar}
                  alt={c.user}
                  className="h-8 w-8 rounded-full"
                />

                <div>
                  <div className="bg-muted rounded-2xl px-3 py-2">
                    <p className="text-xs font-semibold">{c.user}</p>
                    <p className="text-sm">{c.text}</p>
                  </div>

                  <div className="flex gap-3 px-3 mt-1 text-xs text-muted-foreground">
                    <span>{c.time}</span>
                    <button className="font-semibold hover:underline">
                      Like
                    </button>
                    <button className="font-semibold hover:underline">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* input */}
          <form onSubmit={submit} className="flex gap-2 items-center">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
              className="h-8 w-8 rounded-full"
              alt="You"
            />

            <div className="flex-1 flex items-center gap-2 bg-muted rounded-full px-3 py-2">
                            <input
                  id="comment"
                  name="comment"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              <button
                type="submit"
                disabled={!draft.trim()}
                className="text-primary hover:text-primary-hover disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </article>
  );
}

function ActionButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-muted font-medium text-sm transition-colors ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}