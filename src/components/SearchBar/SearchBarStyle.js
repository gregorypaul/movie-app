import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    background: transparent;
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    color: var(--white);
    position:relative;
    z-index:2;
    top:150px;

    img {
        position: absolute;
        left: 30%;
        top: 14px;
        width: 30px;
        transform: translate(-50% -50%);
    }

    input {
        font-size: var(--fontXL);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);
        text-align:center;  

        :focus {
            outline: none;
        }
    }
`;