import { title } from "@/components/primitives";
import SpotifyNowPlaying from "@/components/spotify/now-playing";

export default function DocsPage() {
  return (
    <div className="flex flex-col w-full gap-10">
      <h1 className={title()}>Spotify</h1>
      <SpotifyNowPlaying/>
    </div>
  );
}
