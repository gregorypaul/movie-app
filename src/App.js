import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import { GlobalStyle } from './GlobalStyles';
import NotFound from './components/NotFound';

const App = () => (
															
	<Router>
    <Header />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/:movieId' element={ <Movie />}/>
          <Route path='/*' element={ <NotFound />}/>
        </Routes>
      <GlobalStyle />
    </Router>
    
  );

export default App;
