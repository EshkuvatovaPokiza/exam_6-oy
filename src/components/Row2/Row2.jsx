import React from 'react';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import '../../components/row.scss'
import { FreeMode,  } from 'swiper/modules';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Row2 = () => {
const [serials,setSerials]=useState([])
const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(()=>
    {
          axios.get('https://api.themoviedb.org/3/discover/movie?&with_genres=12',{
            headers:{ 
             ' Authorization':' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0'}})
        .then(response=>  setSerials(response.data.results))
        .catch(err=>console.log(err))
         
 
    } ,[])
console.log(serials)



  return (
    <div>
        <h4>Serials</h4>
         <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
      
        modules={[FreeMode, ]}
        className="mySwiper"
      >
        {
            serials.map(serial=>
                
             <div className="row3"  key={uuidv4()}  >
                   <SwiperSlide    ><img src={`${base_url}${serial.backdrop_path}` } alt="" />
               
                </SwiperSlide>
               
                
             </div>
                
                )
        }
       
      
      </Swiper>



    </div>
  )
}

export default Row2