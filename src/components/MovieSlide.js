import React from 'react';
import Carousel from 'react-multi-carousel';
import MovieCard from './MovieCard';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

const MovieSlide = ({ movie }) => {
  return (
    <div className='slide-group'>
      <Carousel responsive={responsive}>
            {
                movie.results.map((item, idx) => (
                    <MovieCard key={idx} item={item} />
                ))
            }
       </Carousel>
    </div>
  )
}

export default MovieSlide
