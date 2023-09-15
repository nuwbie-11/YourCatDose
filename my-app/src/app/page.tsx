"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Home(){
  const [facts,setFacts] = useState();
  const [isFetching,setFetching] = useState(false);

  useEffect(()=>{
    const controller = new AbortController()

    const fetchFacts = () =>{
    
      try {
        fetch('https://meowfacts.herokuapp.com/?count=1',
        {
          signal:controller.signal,
        }).then((res)=>{
          if (!res.ok) {
                throw new Error('Failed to fetch random facts');
          }
          res.json().then((value) =>{
            setFacts(value['data'][0]);
  
          });
  
        });
      } catch (error) {
        console.error('Error when fetching',error);
      } 
  
    }

    fetchFacts();

    return () => (
      controller.abort()
    )
  },[isFetching])
  
  
  return(
    <div className="h-screen text-white bg-black flex flex-col justify-center items-center mx-auto gap-5">
      <h1 className="text-xl lg:text-3xl font-bold">
        YOUR FURRBALL FACTS!!
      </h1>
      {
        facts ? <p className="text-center px-5">{JSON.stringify(facts)}</p> : <p>Loading..</p> 
      }
      
      {
        <button onClick={()=>setFetching(!isFetching)} className="rounded py-3 px-5 bg-purple-500 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500">
          Get Me More Facts!!
        </button>
      }
      

      <Link href="/breeds">About Cat Breeds</Link>
    </div>
  )
}