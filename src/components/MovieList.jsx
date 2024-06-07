import React, { useState } from 'react';
import videos from '../static/static';
import Filter from './Filter';

const MovieList = ()=> {
    const [movies,setMovies] = useState(videos);

    const filterByTitle = ()=>{
            const sortMovies = movies.sort((a,b)=>a.title.localeCompare(b.title)).map(movie=>movie)
            // console.log(sortMovies)
            setMovies(sortMovies)
    }
    const filterByRating = ()=>{
            const sortMovies = movies.sort((a,b)=>a.rating-b.rating).map(movie=>movie)
            // console.log(sortMovies)
            setMovies(sortMovies)
    }

    return (
        <section>
       
            <Filter filterByTitle={filterByTitle} filterByRating={filterByRating}/>
            <div>
                <ul style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center'}}>

                {
                    movies.map(movie=>{
                        const {id,title,description,rating,videoUrl,posterUrl} = movie
                        return(
                            <li style={{flexBasis:'25%'}} >
                                <video controls poster={posterUrl} style={{width:'100%',height:'200px'}}>
                                    <source src={videoUrl} />
                                </video>
                                <h1 style={{fontSize:'20px'}}>{title}</h1>
                                <small>Rating:{rating}</small>
                                <p>{description}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </section>
    )
}

export default MovieList;