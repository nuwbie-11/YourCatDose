'use client'


import React from 'react';


export default function BreedDetail({params}:{params:{slug:string}}){

    const [data,setData] = React.useState(null)

    const getDetails=()=>{
        fetch('https://api.thecatapi.com/v1/breeds').then((res)=>{
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }

                res.json().then((value)=>{
                    for (let index = 0; index < value.length; index++) {
                        const element = value[index];
                        if (element['id'] === params.slug) {
                            setData(element)
                        }
                    }
                    
                })
            })
    }

    React.useEffect(()=>{
        getDetails()
    },[])

    return(
            <>
            {data? 
                <div>
                    name : {data['name']}
                    origin : {data['origin']}
                </div>    
                : <p>Loading...</p> }
            
            </>

            // Searched : {params.slug}
        
    )
}