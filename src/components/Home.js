import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import MovieAppLogo from '../images/movie_app_logo.png'
import { Wrapper, Content, LogoImg } from '../components/Header/HeaderStyle'
import { useHomeFetch } from '../hooks/useHomeFetch'
import HeroImage from './HeroImage'
import SearchBar from './SearchBar'
import Grid from './Grid'
import Thumb from './Thumb'
import NoImage from '../images/no_image.webp'
import Spinner from './Spinner'
import Button from './Button'

// use fetch

const Home = () => {

    let { movieData, firstMovie, loading, error, query, setQuery, setIsLoadingMore } = useHomeFetch()
    //   console.log("home", movieData);

    if (error) {
        return <div>Something went wrong ...</div>;
    }

    return (
            <>
                <SearchBar setQuery={setQuery}/>
                {firstMovie ? 
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstMovie?.backdrop_path}`}
                        title={firstMovie?.original_title}
                        text={firstMovie?.overview}
                    />
                  : null 
                }
                <Grid header={ query ? 'Search Result' : 'Popular Movies'} >
                    {movieData.results?.map(movie => (
                        <Thumb key={movie.id}
                            clickable
                            image= {
                                movie.poster_path ? 
                                IMAGE_BASE_URL + POSTER_SIZE
                                + movie.poster_path : NoImage
                            }
                            movieId={movie.id}
                        />
                    ))}
                </Grid>
                {loading && <Spinner/>}
                {movieData.page < movieData.total_pages && !loading && (
                    <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
                )}
            </>
        )
}


export default Home;
 