"use client"

import React, { useEffect, useState } from "react";


// async function getRandomFacts(){
//   const res = await fetch('https://meowfacts.herokuapp.com/?count=1')

//   if (!res.ok) {
//     throw new Error('Failed to fetch random facts')
//   }

//   return res.json()
// }

export default function Home(){
  const [facts,setFacts] = useState('This Cat Video will bring you Joy https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  const fetchFacts = () =>{
    try {
      fetch('https://meowfacts.herokuapp.com/?count=1').then((res)=>{
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

  // useEffect(()=>{
  //   fetchFacts();
  // },[])
  
  return(
    <div className="h-screen text-white bg-black flex flex-col justify-center items-center mx-auto gap-5">
      <h1 className="text-xl lg:text-3xl font-bold">
        YOUR FURRBALL FACTS!!
      </h1>
      {
        facts ? <p className="text-center px-5">{JSON.stringify(facts)}</p> : <p>Loading..</p> 
      }
      

      <button onClick={fetchFacts} className="py-3 px-5 bg-purple-500 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500">
        Get Me More Facts!!
      </button>
    </div>
  )
}