import styled from "styled-components";
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../../config';


export const Wrapper = styled.div`
    background: ${({backdrop}) =>
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000' };
        background-size: cover;
        background-position: center;
        padding: 20px 20px;
        animation: animateMovieInfo 1s;
        position:relative;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    };
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    backdrop-filter: blur(8px);

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;
    margin-top:100px;
    .rating-directors {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    div:nth-child(1) {
        flex-direction:column;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 5px 0 0 0;
    }
    h3 {
        margin:0;
        padding:0;
    }
    .director {
        margin: 0 0 0 40px;
        p {
            margin: 0;
        }
    }
    .genre {
        p {
            margin:0;
        }
    }
    .release {
        p {
            margin:0;
        }
    }
    h1 {
        letter-spacing:-2px;
        line-height:1;
        font-size:2rem;
        @media screen and (max-width: 768px) {
            font-size:2rem;
        }
    }
`;