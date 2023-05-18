import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

        :root {
            --fontS: 1rem;
            --fontM: 1.2rem;
            --fontL: 1.5rem;
            --fontXL: 2.5rem;
            --maxWidth: 1280px;
            --white: #ffffff;
            --lightGrey: #eeeeee;
            --medGrey: #353535;
            --darkGrey: #1c1c1c;
        }

        * {
            box-sizing: border-box;
            font-family: 'Roboto', sans-seriff;
            color: var(--white);
        }

        body {
            margin: 0;
            padding: 0;
            background:#000;

            h1 {
                font-size: 3rem;
                font-weight: 800;
                color: var(--white);
                @media(max-width:768px) {
                    font-size:2rem;
                }
            }

            h3 {
                font-size: 1.1rem;
                font-weight: 600;
            }

            p {
                font-size: 1rem;
                color: var(--white);
            }
            .underlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 1;
                background-image: linearGradient( 180deg, rgba(11,12,27,0) 72%, rgba(11,12,27,1) 100% );
            }
        }
`;