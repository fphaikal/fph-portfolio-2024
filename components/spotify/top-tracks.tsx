'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";
import { RiSpotifyFill } from 'react-icons/ri';

interface Track {
  name: string;
  artists: string;
  album: string;
  albumImageUrl: string;
  url: string;
}

export default function SpotifyTopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.fph.my.id/api/spotify/top-tracks`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setTracks(data.data); // Menggunakan `data.data` sesuai API
        setLoading(false); // Mengatur loading ke false setelah data diambil
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-20 rounded-medium" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Failed to load tracks. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className='text-lg'>Top Tracks</h1>
      {tracks.map((track, index) => (
        <Card key={index} className="border-none bg-background/60 dark:bg-default-100/50">
          <CardBody className="flex flex-row items-center gap-4">
            <Image
              alt={`${track.name} album cover`}
              src={track.albumImageUrl}
              width={50}
              height={50}
              className="object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-bold hover:underline"
              >
                {track.name}
              </a>
              <span className="text-sm text-success">{track.artists}</span>
              <span className="text-xs text-gray-500">{track.album}</span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
