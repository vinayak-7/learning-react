import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vinayak-7')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex-col'>
            Name: {data.name} <br/>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
            
            Github Followers: {data.followers}<br/>
            Location: {data.location} <br/>
            Created At: {data.created_at}<br/>
            No. of Repos: {data.public_repos}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vinayak-7')

    return response.json()
}