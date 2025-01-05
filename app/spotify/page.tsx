import { title } from "@/components/primitives";
import SpotifyNowPlaying from "@/components/spotify/now-playing";
import SpotifyTopTracks from "@/components/spotify/top-tracks";

export default function DocsPage() {
  return (
    <div className="flex flex-col w-full gap-10">
      <h1 className={title()}>Spotify</h1>
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-4 w-1/2">
          <SpotifyNowPlaying />
          <SpotifyTopTracks />
        </div>
      </div>
    </div>
  );
}
