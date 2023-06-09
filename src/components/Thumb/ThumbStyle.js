import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    max-height:600px;
    transition: all 0.3s;
    object-fit: contain;
    animation: animateThumb 0.5s;
    object-position:top center;

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }  
    }
`;