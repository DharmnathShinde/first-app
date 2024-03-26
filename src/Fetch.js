import React, { useState, useEffect } from 'react'

async function fetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const movies = await response.json()
  return (movies)
}

export default function Fetch() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetch()
      setMovies(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <p>{movie.email}</p>
        </div>
      ))}
    </div>
  )
}