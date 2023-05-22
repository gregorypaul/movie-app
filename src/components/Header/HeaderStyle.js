import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #000;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index:101;
    padding: 0 20px;
    transition: background .3s ease-in-out;
    height:55px;
    overflow:hidden;
    a {
        display:flex;
        text-decoration:none;
    }
    .home-link {
        margin-left:auto;
    }
    &.active {
        background: rgba(0, 0, 0, 0.9);
    }
    .icon-holder {
        line-height:60px
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    margin: 0 auto;
    h4 {
        color:var(--white);
        margin-right:auto;
        padding-left:10px;
    }
`;

export const LogoImg = styled.img`
    width: 55px;
    align-self: center;
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;