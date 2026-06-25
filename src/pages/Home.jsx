import { useState } from "react";
import { TopNav } from "../components/fb/TopNav";
import { LeftSidebar } from "../components/fb/LeftSidebar";
import { RightSidebar } from "../components/fb/RightSidebar";
import { Stories } from "../components/fb/Stories";
import { StoryViewer } from "../components/fb/StoryViewer";
import { Composer } from "../components/fb/Composer";
import { PostCard } from "../components/fb/PostCard";
import { initialPosts, initialStories } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [storyIndex, setStoryIndex] = useState(null);
  const navigate = useNavigate();

  const toggleLike = (id) =>
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );

  const addComment = (id, comment) =>
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, comment] }
          : p
      )
    );

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onLogout={handleLogout} />

      <div className="flex justify-center w-full px-2 md:px-4">
        {/* Left Sidebar - hidden on mobile/tablet */}
        <div className="hidden lg:block">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <main className="w-full max-w-2xl py-4 space-y-4">
          <Stories
            stories={initialStories}
            onOpen={(i) => setStoryIndex(i)}
          />

          <Composer />

          {posts.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              onToggleLike={toggleLike}
              onAddComment={addComment}
            />
          ))}
        </main>

        {/* Right Sidebar - only on large desktops */}
        <div className="hidden xl:block">
          <RightSidebar />
        </div>
      </div>

      {storyIndex !== null && (
        <StoryViewer
          stories={initialStories}
          index={storyIndex}
          onClose={() => setStoryIndex(null)}
          onChange={(i) => setStoryIndex(i)}
        />
      )}
    </div>
  );
}