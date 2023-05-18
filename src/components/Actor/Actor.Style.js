import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    padding: 5px;
    text-align: center;
    h3 {
        margin: 10px 0 0 0;
    }
    p {
        margin: 5px 0;
    }
    .container {
        position:relative;
        overflow:hidden;
        &:hover .overlay {
            top:0;
        }
    }
    .overlay {
        position: absolute;
        top: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: .3s ease-in-out;
        background-color: var(--darkGrey);
    }
    .info {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width:100%;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
`;