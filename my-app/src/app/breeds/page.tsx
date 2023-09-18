import Link from "next/link";
import React, { useEffect, useState } from "react";
import Render from "./clientRender";
import { fetchBreeds } from "@/Services/api";

export default async function Breeds() {
  const controller = new AbortController();

  const data = await fetchBreeds(
    controller,
    "https://api.thecatapi.com/v1/breeds"
  );

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 content-center gap-y-3 gap-x-1 mt-12 text-xs lg:text-base px-5">
      {data ? <Render data={data} /> : <p>Loading</p>}
    </div>
  );
}
