/* eslint-disable @next/next/no-img-element */
'use client'


import React from 'react';

import Image from 'next/image';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function BreedDetail({params}:{params:{slug:string}}){

    const [data,setData] = React.useState(null)
    const [imageURL,setURL] = React.useState<string[]>([])
    const [sliderRef] = useKeenSlider()

    
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
        getData()
    },[])

    const getData=()=>{
        fetch(
            `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=${params.slug}&api_key=live_Vyw5vT7hgi8WtDFHZq43CfAt6Ru24vTcSslcvAK95UixQ4WcoNbdMLEdgvytVvRZ`
        ).then((res)=>{
            if (!res.ok) {
                throw new Error('Failed to Fetch')
            }
            res.json().then((datas)=>{
                const temp=[]
                for (let index = 0; index < datas.length; index++) {
                    const element = datas[index];
                    temp.push(element['url'])
                }
                setURL(temp)
            })
        })
    }

    return (
      <>
        {data ? (
          <div className="w-screen flex md:flex-nowrap flex-col  lg:p-16">
            <div className="texts-section flex flex-col mx-auto px-5">
              <h1 className="text-3xl font-semibold">{data["name"]}</h1>

              <p className="text-lg">{data["description"]}</p>

              <p>{data['origin']}</p>
            </div>
            <div ref={sliderRef} className="keen-slider">

                {
                    
                    imageURL.map((item,ix)=>(
                        <div key={ix} className={`flex justify-center keen-slider__slide number-slide${ix+1}`}>
                            {/* <img className="img-responsive rounded h-72 w-96" src={imageURL[ix]} alt="" loading='lazy' /> */}
                            <Image src={imageURL[ix]} width={500} height={250} quality={95} alt="" />
                        </div>
                    ))
                }
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>

      // Searched : {params.slug}
    );
}