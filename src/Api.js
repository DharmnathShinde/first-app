import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Api() {
  const data = useLoaderData()
  return (
    <div>
      
      {data.map((data) => (
        <div key={data.id}>
        <h1>{data.title}</h1>
        <img  src={data.url} />
        </div>
      ))}
    </div>
  )
}

export default Api

export const Info = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos")
  return response.json()
}