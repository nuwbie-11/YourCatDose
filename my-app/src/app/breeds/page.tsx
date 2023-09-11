"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";


type Response = [{
    name:any,
    id:'string'
}];


export default function Breeds(){
    const [breeds,setBreeds] = useState<Response | null>(null) 

    const fetchBreeds=()=>{
        try {
            fetch('https://api.thecatapi.com/v1/breeds').then((res)=>{
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }

                res.json().then((value)=>{
                    setBreeds(value)
                    
                })
            })
        } catch (error) {
            console.error('Error when fetching',error);
        }
    }

    useEffect(()=>{
        fetchBreeds();
    },[] )

    useEffect(()=>{
        console.log(breeds);
    },[breeds])

    return(
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">{
            // JSON.stringify(breeds)
            breeds ? 
            // Object.keys(breeds).map((key)=>(
            //     <div key={key}>
            //         <p>
            //             {breeds[key]['name']}
            //         </p>
            //     </div>
            // ))
            breeds.map((item,ix)=>(
                <div key={item['id']}>
                <Link  href={`/breeds/${item['id']}`}>
                        {item['name']}
                </Link>
                    
                </div>
            ))
            : <p>loading..</p>
            }</div>

        </>
    )

}