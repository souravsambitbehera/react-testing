// import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
  const[users,setUser]= useState([])
{/*Fetch Data with  */}
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const res =await fetch('https://dummyjson.com/users')
                const data = await res.json()
                console.log(data.users)
                setUser(data.users)
                // console.log(res.json())
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])


    {/*fetch Data with axios */} 

    // useEffect(()=>{
    //     const getData = async()=>{
    //     const res =await axios.get("http://localhost:3030/users")
    //     console.log(res.data)
    //     setUser(res.data)
    //     }
    //     getData()
        
    // },[])
  return (
    <div data-testid="div">
    {
      users.map((user)=> 
      <ul key={user.id}>
        <li>
          {user.firstName}
        </li>
      </ul>
      )
    }
    <>
    </>
    </div>
  )
}

export default FetchApi