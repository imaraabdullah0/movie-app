import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4 bg-slate-900'>{title}</h2>
      <div className='relative flex items-center'>
         <div className='bg-gray-900' id={'slider'}>
            {movies.map((item, id) => (
                <div className='w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2 hover:bg-black/80 hover:opacity-[20%] '>
                    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                     alt={item?.title} />
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white'>
                     <p>{item?.title}</p>
                     </div>
                </div>
            ))}

         </div>
      </div>





      {/* <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div> */}
    </>
  );
};

export default Row;