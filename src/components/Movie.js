import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Grid from './Grid';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

import { useMovieFetch } from '../hooks/useMovieFetch';
import MovieInfo from './MovieInfo';
import Actor from './Actor';

import NoImage from '../images/no_image.webp';

const Movie = () => {
    console.log('movie')
    const {movieId} = useParams();

    const {movieData: movie, loading, error} = useMovieFetch(movieId);

    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong...</div>

    return (
        <>
            <MovieInfo movie={movie} />
            <div className="underlay"></div>

            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                        />
                ))}
            </Grid>
        </>
    )
}

export default Movie;