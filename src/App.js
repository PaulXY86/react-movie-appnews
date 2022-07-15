import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import MovieCardList from './components/MovieCardList';

const moviesArr = [ 
{
  id: 1,
  title:"THE SEE Season01",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"Teaser",
},

{
  id: 2,
  title:"THE SEE Season01",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"EPISODE01",
},

{
  id: 3,
  title:"THE SEE Season01",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"EPISODE02",
},

{
  id: 4,
  title:"THE SEE Season01",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"EPISODE03",
},
  
{
  id: 5,
  title:"THE SEE Season01",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"EPISODE04",
},

{
  id: 6,
  title:"THE SEE SeasonFirst",
  poster:"https://www.tooxtraloaded.com.ng/wp-content/uploads/2021/08/seeeeee.jpeg",
  description:"EPISODE05",
}
];

const navbar = {Nav};

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App container">
      <Routes>  
        <Route path='/' element={ <Nav  />}/>
        <  Route path='/header' element={<Header title="Top Movies"  />} />
         < Route path='/MovieCardList' element={<MovieCardList movies={moviesArr} />} />
      </Routes>
    </div>
  );
     
  
}

export default App;
