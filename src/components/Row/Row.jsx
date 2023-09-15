import React from 'react';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import '../../components/row.scss'
import { FreeMode,  } from 'swiper/modules';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Info from '../../routes/info/Info';


const Row = () => {

const [films,setFilms]=useState([])
const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(()=>
    {
          axios.get('https://api.themoviedb.org/3/movie/top_rated?&with_networks=213',{
            headers:{ 
             ' Authorization':' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWMxY2I4N2NlZWRlYmU1YjYwNjRiMjkyMThjOTY3NyIsInN1YiI6IjY1MDFhNWQ1ZmZjOWRlMGVkZjYxNWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q01NKmsWLCw4CDY-jocNchFDkF0ZB1Auzfq50Epsj-0'}})
        .then(response=>  setFilms(response.data.results),)
        .catch(err=>console.log(err))
         
 
    } ,[])
console.log(films)



  return (
    <div>
        <h4>Movies</h4>
         <Swiper
        slidesPerView={8}
        spaceBetween={10}
        freeMode={true}
      
        modules={[FreeMode, ]}
        className="mySwiper"
      >
        {
            films.map(film=>
                
             <div className="row1"  key={uuidv4()}  >
                   <SwiperSlide    ><img src={`${base_url}${film.backdrop_path}` } alt="" onClick={<Info/>}  />
               
                </SwiperSlide>
              
                
             </div>
                
                )
        }
       
      
      </Swiper>



    </div>
  )
}

export default Row