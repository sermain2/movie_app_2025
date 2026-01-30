// App.js
import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){

    return (
        <div>
            <h2>I like {name} </h2>
            <img src = {picture} alt = {name}/>
            <h4> {rating}/5.0 </h4>
        </div>
    
    )
}

const foodIlike = [
    
    {
        id: 1,
        name: 'Kimchi',
        image: "https://i.namu.wiki/i/O1Z-Nm3Bq-grP5ebmnPeizxI6nmij93lv8GOc3PE_c3R-GLSiwljFk7N-7FBD0_hKyB5esEjjMXxRWzj0ypZ3w.webp",
        rating: 5,
    },

    {
        id: 2,
        name: 'Samgyeopsal',
        image:'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp',
        rating: 4,
    },

     {
        id: 3,
        name: 'Bibimbap',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/250px-Dolsot-bibimbap.jpg',
        rating: 3,
    },

];


function App() {
    return (
        <div>
          {foodIlike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>))}
        </div>
        
    );
}

Food.PropTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
};

export default App;