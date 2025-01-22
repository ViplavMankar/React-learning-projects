import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ViplavMankar')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className='text-center m-4 text-red-400 bg-gray-800 p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt='Git picture' width={300}/>
        <div className='text-center m-4 text-red-400 bg-gray-800 p-4 text-3xl'>Github Repos: {data.public_repos}</div>
    </div>
    
    </>    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ViplavMankar')
    return response.json()
}