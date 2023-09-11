import Link from "next/link"
import React from "react"

export default function BreedsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="bg-black h-screen flex flex-col justify-center items-center mx-auto gap-5" >
            {children}
            <div className="back-button m-5">
                <Link className="px-3 py-2 text-white bg-sky-500 hover:bg-transparent hover:text-sky-500 rounded" href="/" >Furrball Facts!!</Link>
            </div>
        </div>

    )
  }