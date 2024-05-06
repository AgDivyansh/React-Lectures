// import React from "react";
import React from "react"
// import React from 'react'
import { useSelector } from "react-redux"
function Count() {

  const count = useSelector(state = state)
  return (
    <>
    <h2>{count}</h2>
    </>
  )
}

export default Count
