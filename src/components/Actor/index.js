import React from 'react';
import {Wrapper, Image, Overlay} from './Actor.Style'

const Actor = ({name, character, imageUrl }) => (
    <Wrapper>
        <div className="container">
            <Image src={imageUrl} alt='actor-thumb' />
            <div className="overlay">
                <div className="info">
                    <h3>{name}</h3>
                    <p>{character}</p>
                </div>
            </div> 
        </div>
    </Wrapper>
)

export default Actor