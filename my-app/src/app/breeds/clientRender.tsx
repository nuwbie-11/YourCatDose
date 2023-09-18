"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Render(props: { data: any[] }) {
  const [breeds, setBreeds] = useState<any[] | null>(null);

  useEffect(() => {
    setBreeds(props.data);
    console.log(breeds);
  }, []);

  return (
    <>
      {!breeds
        ? null
        : breeds.map((item, ix) => (
            <div>
              <Link href={`/breeds/${item["id"]}`}>{item["name"]}</Link>
            </div>
          ))}
    </>
  );
}
