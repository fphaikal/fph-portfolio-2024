'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody, Image, Skeleton, Slider } from "@nextui-org/react";
import { RiSpotifyFill } from 'react-icons/ri';

interface Track {
  [x: string]: any;
  name: string;
  artists: string;
  album: string;
  albumImageUrl: string;
  progress_ms: number;
  duration_ms: number;
  url: string;
  is_playing: boolean;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fungsi untuk mengambil data dari API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.fph.my.id/api/spotify/now-playing`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data: Track = await response.json();

      const result = data.data
      setTrack(result);
      setProgress(result.progress_ms);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  // Ambil data pertama kali dan setiap 10 detik
  useEffect(() => {
    fetchData(); // Fetch pertama kali

    const interval = setInterval(() => {
      fetchData(); // Refresh data setiap 10 detik
    }, 10000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  // Menggerakkan slider secara mandiri jika track sedang dimainkan
  useEffect(() => {
    if (track && track.is_playing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 1000; // Tambah 1 detik
          return nextProgress >= track.duration_ms ? track.duration_ms : nextProgress;
        });
      }, 1000);

      return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }
  }, [track]);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Pastikan angka dua digit
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  if (loading) return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center w-full">
          <div className="relative col-span-6 md:col-span-3 w-full">
            <Image
              alt="Album cover"
              className="object-cover"
              height={140}
              shadow="md"
              src={track?.albumImageUrl}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-9 w-full justify-between h-full">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className={`flex gap-2 items-center my-auto`}>
                  <RiSpotifyFill size={20} />
                  <Skeleton className="h-3 w-1/3 rounded-lg" />
                </div>
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
              </div>
            </div>

            <Skeleton className="h-4 w-full rounded-lg" />
            <div className="flex flex-col mt-3 gap-1">
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
  
  if (error) return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center w-full">
          <div className="relative col-span-6 md:col-span-3 w-full">
            <Image
              alt="Album cover"
              className="object-cover"
              height={140}
              shadow="md"
              src={track?.albumImageUrl}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-9 w-full justify-between h-full">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className={`flex gap-2 items-center my-auto`}>
                  <RiSpotifyFill size={20} />
                  <Skeleton className="h-3 w-1/3 rounded-lg" />
                </div>
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
              </div>
            </div>

            <Skeleton className="h-4 w-full rounded-lg" />
            <div className="flex flex-col mt-3 gap-1">
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-3">
            <Image
              alt="Album cover"
              className="object-cover"
              height={140}
              shadow="md"
              src={track?.albumImageUrl}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-9">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <div className={`flex gap-2 items-center my-auto ${track?.is_playing ? "text-success" : "text-foreground/90"}`}>
                  <RiSpotifyFill size={20} />
                  <h3 className="font-semibold  ">{track?.is_playing ? 'Now Playing' : 'Last Played'}</h3>
                </div>
                <h1 className="text-large font-medium mt-2">{track?.name}</h1>
                <h1 className="text-small font-light">{track?.artists}| {track?.album} </h1>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                value={progress}
                maxValue={track?.duration_ms}
                size="sm"
                isDisabled // Nonaktifkan interaksi user
              />
              <div className="flex justify-between">
                <p className="text-small">{formatTime(progress)}</p>
                <p className="text-small text-foreground/50">{formatTime(track?.duration_ms || 0)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
