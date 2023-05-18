import { useState } from "react";
import {Link} from 'react-router-dom'
import TMDBLogo from '../../images/movie_app_logo.webp'
import { Wrapper, Content, LogoImg, TMDBLogoImg, GlassDiv } from './HeaderStyle'
import { SearchBar } from "../SearchBar";

const Header = () => {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if( window.scrollY >= 55 ) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <Wrapper className={navbar ? "active" : "" }>
                <Content>
                    <Link to ={'/'}>
                        <LogoImg src={ TMDBLogo } alt="tmdb-logo" />
                        <h4>The Movie App</h4>
                    </Link>
                </Content>
            </Wrapper>
        </>
    );
}

export default Header