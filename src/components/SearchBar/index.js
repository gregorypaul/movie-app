import React, {useState, useEffect, useRef} from 'react'

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBarStyle';

const SearchBar = ({setQuery}) => {
    const [state, setState] = useState('');
    //not to trigger immediate render
    const initial = useRef(true);

     

    useEffect(() => {
        //skips initial render
        if (initial.current ) {
            initial.current = false;
            return;
        }
        //create a delay
        const timer = setTimeout(() => {
            setQuery(state);
        }, 500)

        return () => clearTimeout(timer);

    }, [setQuery, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input 
                    type='text' 
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state} 
                /> 
            </Content>
        </Wrapper>
    )
}

export default SearchBar;