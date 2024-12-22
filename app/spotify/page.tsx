import { title } from "@/components/primitives";
import SpotifyStats from "@/components/spotify-status";

export default function DocsPage() {
  return (
    <div className="flex flex-col w-full gap-10">
      <h1 className={title()}>Spotify</h1>
      <SpotifyStats/>
    </div>
  );
}
