import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <h1 className="bg-gray-500 text-center text-white">User: {userid}</h1>
    )
}

export default User
