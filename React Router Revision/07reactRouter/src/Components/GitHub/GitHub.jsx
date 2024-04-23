import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
import React from 'react'

function GitHub() {
//     const [data, setData] = useState(0) ;
//     useEffect(() => {
//       fetch('https://api.github.com/users/AgDivyansh')
//       .then(response => response.json())
//       .then((data) => setData(data) )
//     }, [] 
// )
const data  = useLoaderData() ;
  return (
    <div>
    {/* this is github  */}
    Github follwoers : {data.followers}
    </div>
  )
}

export default GitHub


export const githubInfoLoader = async () => {
  const response = await  fetch('https://api.github.com/users/AgDivyansh')
  // .then()
  // return (await response).json

    return response.json() ;
}
