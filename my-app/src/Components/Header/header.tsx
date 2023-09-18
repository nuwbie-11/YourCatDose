"use client"

import React from "react"

export function Header() {

  const [isScrolled,setIsScrolled] = React.useState(false)

  React.useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setIsScrolled(window.scrollY > 60)
    })
  })

  return (
    <div className={`fixed top-[1rem] w-screen text-center ${ isScrolled ? "text-transparent" : "text-zinc-50" } transition ease-in-out duration-200`}>
      <h1 className="text-xl lg:text-3xl font-bold ">YOUR FURRBALL FACTS!!</h1>
    </div>
  );
}
