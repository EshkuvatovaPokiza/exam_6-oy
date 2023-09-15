import React from 'react';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import '../../components/row.scss'
import { FreeMode,  } from 'swiper/modules';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Row3 = () => {
const [arrays,setArrays]=useState([])
const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(()=>
    {
          axios.get('https://api.themoviedb.org/3/discover/movie?&with_genres=878',{
            headers:{ 
             ' Authorization':' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0'}})
        .then(response=>  setArrays(response.data.results))
        .catch(err=>console.log(err))
         
 
    } ,[])
console.log(arrays)



  return (
    <div>
        <h4>Trailers</h4>
         <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
      
        modules={[FreeMode, ]}
        className="mySwiper"
      >
        {
            arrays.map(array=>
                
             <div className="row4"  key={uuidv4()}  >
                   <SwiperSlide    ><img src={`${base_url}${array.backdrop_path}` } alt="" />
               
                </SwiperSlide>
            
                
             </div>
                
                )
        }
       
      
      </Swiper>



    </div>
  )
}

export default Row3