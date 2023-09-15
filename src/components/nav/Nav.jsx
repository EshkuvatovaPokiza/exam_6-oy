import React from 'react'
import logo from "/src/assets/logo.png"
import { useEffect,useState } from 'react'
import axios from "axios"
const Nav = () => {

    const [countries,setCountries]=useState([])
    
useEffect(()=>
    {
          axios.get('https://api.themoviedb.org/3/watch/providers/regions',{
            headers:{ 
             ' Authorization':' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0'}})
        .then(response=>  setCountries(response.data.results))
        .catch(err=>console.log(err))
         
 
    } ,[])

    console.log(countries)

   
  return (
    <div   >
<nav>
    <div className="logo"><a href="#"><img src={logo} alt="" /></a></div>
    <ul className='nav__menu' >
        <li><a href="#">Home</a></li>
        <li><a href="">TV show</a></li>
        <li><a href="">Movies</a></li>
        <li><a href="#">New</a></li>
        <li><a href="/localhost:5173/tv-provider">Partners</a></li>
    </ul>
    <select  className='nav__drop' >
        <option >Countries</option>
        {
      countries.map(item =>

       <option key={item.iso_3166_1}   >{item.english_name}</option>
)
}

    </select>

    <input type="text"  placeholder='Search' className='nav__search'  />
</nav>




    </div>
  )
}

export default Nav