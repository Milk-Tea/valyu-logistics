import { useStoryblok } from "@storyblok/react";

function App() {
  const story = useStoryblok("home", { version: "draft" });

  if (!story) return <div>Loading...</div>;

  return (
    <div>
      <h1>{story.content.headline}</h1>
    </div>
  );
}

export default App;
