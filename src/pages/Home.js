import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, ontheairMovies, loading} = useSelector(state=>state.movie);
  //console.log("home", popularMovies)
    
useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (   
    <div>
        <Banner movie={popularMovies.results[10]} />
        <div className='contents'>
            <h2>인기 급상승 !</h2>
            <MovieSlide movie={popularMovies} />
            <h2>티빙 TOP 20 프로그램</h2>
            <MovieSlide movie={topRatedMovies}  />
            <h2>지금 방영중인 인기 콘텐츠</h2>      
            <MovieSlide movie={ontheairMovies}/>
        </div>
    </div>
  )
}

export default Home
