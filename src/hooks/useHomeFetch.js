import { useState, useEffect } from 'react';
import API from '../API';

const params = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
export const useHomeFetch = () => {

    const [query, setQuery] = useState('');
    const [movieData, setMovieData] = useState({params});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [firstMovie, setFirstMovie] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data, 'this is data')
    //             setMovies(prev => ({
    //                 ...data.results, 
    //                 results:
    //                 page > 1 ? [...prev.results, ...data.results] : [...data.results]
    //             }))
    //         })
    // },[])
    // console.log('first go');
    const fetchMovies = async (page, query = "") => {
        // console.log('hello');
        try {
            setError(false)
            setLoading(true)
            
            const movies = await API.fetchAsyncMovies(query, page)
            console.log(movies);
            setFirstMovie(movies.results[0]);
            console.log(movies.results[0]);
            setMovieData(prev => ({
                ...movies, 
                results:
                page > 1 ? [...prev.results, ...movies?.results] : [...movies.results]
            }))
            // console.log(movies.results[0], 'results')

        } catch(error) {
            setError(true)
        }
        setLoading(false)
    }  

    useEffect(() => {
        setMovieData({params})
        fetchMovies(1, query)
    },[query])

    //load More
    useEffect(() => {
        if(!isLoadingMore) return;
        
        fetchMovies(movieData.page + 1, query);
        setIsLoadingMore(false);
        
    }, [isLoadingMore, query, movieData.page])
    
    // const MovieCard = ( { movie } ) => (
    //     <div>
    //         { movie.poster_path ? <img className="movie-poster" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt="" /> : null}
    //         <h5 className="movie-title">{ movie.title }</h5>
    //     </div>
    // )
        

        // load More
        
    //  console.log('this is what is being returned', movieData);
    return { movieData, firstMovie, query, setQuery, loading, setIsLoadingMore, error }
}