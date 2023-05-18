import React from 'react'

import Thumb from '../Thumb';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import NoImage from '../../images/no_image.png';


import { Wrapper, Content, Text } from './MovieInfo.Style';

const MovieInfo = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path} >
    <div className="overlay"></div>
        <Content>
            
            <Text>
                <h1 className='title'>{movie.title}</h1>
                <h3>Overview:</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <FontAwesomeIcon icon={faStar} />
                        <h3>Rating</h3>
                        <div className="score">{Math.round(movie.vote_average * 100.0) / 100.0}</div>
                    </div>
                    <div className="director">
                        <h3>Director{movie.directors.length > 1 ? 'S' : ""}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    <div className="genre">
                        <h3>Genre</h3>
                        {movie.genres.map(genre => (
                            <p key={genre}>{genre.name}</p>
                        ))}
                    </div>
                    <div className="release">
                        <h3>Release date</h3>
                        <p>{movie.release_date}</p>
                    </div>

                </div>
            </Text>
            <Thumb
                className='thumb'
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                clickable={false}
                alt='movie-thumb'
            />
        </Content>
    </Wrapper>
    
)

export default MovieInfo;