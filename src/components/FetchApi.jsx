import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
  const[users,setUser]= useState([])
{/*Fetch Data with  */}
    // useEffect(()=>{
    //     const getData = async ()=>{
    //         try {
    //             const res =await fetch('//dummyjson.com/test')
    //             const data = await res.json()
    //         console.log(res)
    //             // console.log(res.json())
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getData()
    // },[])


    {/*fetch Data with axios */} 

    useEffect(()=>{
        const getData = async()=>{
        const res =await axios.get("http://localhost:3030/users")
        console.log(res.data)
        setUser(res.data)
        }
        getData()
        
    },[])
  return (
    <>
    {
      users.map((user)=> 
      <ul key={user.id}>
        <li>
          {user.name}
        </li>
      </ul>
      )
    }
    </>
  )
}

export default FetchApi