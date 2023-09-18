"use client";

import { fetchBreeds } from "@/Services/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [facts, setFacts] = useState();
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchBreeds(controller, "https://meowfacts.herokuapp.com/?count=1").then(
      (res) => {
        setFacts(res);
      }
    );

    return () => controller.abort();
  }, [isFetching]);

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-auto gap-5">
      {facts ? (
        <p className="text-center px-5">{facts["data"]}</p>
      ) : (
        <p>Loading..</p>
      )}

      {
        <button
          onClick={() => setFetching(!isFetching)}
          className="rounded py-3 px-5 bg-purple-500 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500"
        >
          Get Me More Facts!!
        </button>
      }

      <Link href="/breeds">About Cat Breeds</Link>
    </div>
  );
}
