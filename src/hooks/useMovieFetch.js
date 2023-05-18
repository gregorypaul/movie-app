import { useState, useEffect, useCallback } from "react";
import API from '../API';


export const useMovieFetch = movieId => {
    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //solving the infinity loop
    const setData = useCallback( async () => {
        try{
            setLoading(true);
            setError(false);

            const movie = await API.fetchAsyncMovie(movieId);
            const credits = await API.fetchAsyncCredits(movieId);

            //directors
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setMovieData({
                ...movie,
                actors: credits.cast,
                directors
            })

            setLoading(false);

        }catch(error){
            setError(true);
        }
    }, [movieId]);


    useEffect(() => {

        setData();
     
    }, [movieId,setData])
    console.log(movieData);

    return {movieData, loading, error}
}