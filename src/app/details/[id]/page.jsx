'use client';
import { useEffect, useState } from 'react';
import { DETAILS_URL } from '@/app/utils/urls';

export default function Details({ params }) {
  const { id } = params;
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(DETAILS_URL(id));
      const data = await res.json();
      setMovie(data);
      console.log(data, 'data');
    }

    fetchDetails();
  }, [id]);

  return <div className="">{movie?.title}</div>;
}
