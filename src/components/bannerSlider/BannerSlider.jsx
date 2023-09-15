
import React, { useRef, useState,useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './bannerslider.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {BsFillPlayFill} from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';



const BannerSlider = (data) => {
const [movies,setMovies]= useState([])
const base_url="https://image.tmdb.org/t/p/original/"

useEffect(()=>
    {
          axios.get('https://api.themoviedb.org/3/movie/top_rated?&with_networks=213',{
            headers:{ 
             ' Authorization':' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0'}})
        .then(response=>  setMovies(response.data.results))
        .catch(err=>console.log(err))
         
 
    } ,[])

    console.log(movies)
let IconStyle={
  color: "black", fontSize: "20px" 
}
   

  return (
    <div className='banner__swiper'  >
 
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
          movies.map(movie=>
          <div className="banner"   key={uuidv4()}   >
              <SwiperSlide   > <img src={`${base_url}${movie.poster_path}` } alt={movie.original_title} /> 
            <div className='banner__content'  >
            <h1 className='banner__title'  >{movie.original_title}</h1>
              <button className='btn_play'> <span><BsFillPlayFill/></span><span> Play</span></button>
              <button className='btn_more'  >More info</button>
            </div>
               </SwiperSlide>
          
         
           
          
       
          </div>
          
            )
        }
     
    
       
       
      </Swiper>



 
        
    </div>
  )
}

export default BannerSlider