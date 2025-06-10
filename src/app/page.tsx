"use client"

import { useEffect, useState } from "react";
import {  SKIPITEM } from "./models/skip-object";
import Card from "./components/card";
import FooterBar from "./components/footer";





export default function Home() {
  const [skips,setSkips] = useState([]) 
   const baseUrl = process.env.NEXT_BASE_URL  || "https://app.wewantwaste.co.uk/api/skips";
   const fetchQuery = `${baseUrl}/by-location?postcode=NR32&area=Lowestoft`;
  const [selected, setSelected] = useState<SKIPITEM>();
  
 
  useEffect(() =>{
  fetch(fetchQuery)
  .then(response => response.json())
  .then(setSkips)
},[fetchQuery])
  return (
    
    <main className="flex flex-col items-center justify-betwee m-1 p-1">
        <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
        <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
      <div className="grid m-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {
        skips.map((skip:SKIPITEM) =>  (

         
         <Card key={skip.id} {...skip}
          isSelected={skip.id === selected?.id}
          onSelect={() => setSelected(skip)}/> 
        
        ))
      }
     
    </div>
    <FooterBar selectedSkip={selected!} onBack={() =>{}} onContinue={() =>{}}/>
    </main>
  );
}
