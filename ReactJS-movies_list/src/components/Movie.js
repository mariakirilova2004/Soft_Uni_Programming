import { useEffect } from "react";
import styles from './Movie.module.css'

export default function Movie({id, title, year, posterUrl, plot, director, actors, onMovieDelete, onMovieSelect, selected}) {
   useEffect(() =>{
     console.log(`Movie ${title} - mounted!`);
   }, [title]);

   useEffect(() =>{
     console.log(`Movie ${title} - updated!`);
   }, [selected, title]);

   useEffect(() =>{
     return () =>{
       console.log(`Movie ${title} - unmounted!`);
     };
   }, [title]);

    return (
      <div className={styles['movie-article']}>
        <h2>{title} {year}</h2>
        {selected && <h4>Selected</h4> }
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
        <p>Directed by {director}</p>
        <p>Starring: {actors}</p>
        <button onClick={() => {onMovieDelete(id)}}>
            DELETE
        </button>
        <button onClick={() => {onMovieSelect(id)}}>
           SELECT
        </button>
      </div>
    );
  };