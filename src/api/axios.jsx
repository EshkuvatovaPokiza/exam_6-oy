import  { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'

const request = (api) => {
    const [countries,setCountries]=useState([])
    const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0"
useEffect(()=>
    {

      axios.get(api,{
        headers:{
           ' Authorization':`Bearer ${API_KEY}`
        }
      })


    } ,[])



  return (
    <div>
      
    </div>
  )
}

export default request