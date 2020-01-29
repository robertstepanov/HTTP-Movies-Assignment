import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialItem = {
  id: '',
  title: '',
  director: '',
  metascore: '',
  stars: []
}
// {
//   id: 5,
//   title: 'Tombstone',
//   director: 'George P. Cosmatos',
//   metascore: 89,
//   stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
// }

const MovieUpdate = (props) => {
  const [movie, setMovie] = useState(initialItem)
  const { id } = useParams();

useEffect(() => {
  console.log(props.movies)
  const movieToUpdate = props.movies.find(thing => `{thing.id}` === id)
  console.log(movieToUpdate)
  
}, [])



  return (
    <div>
      <h2>Update Movie</h2>
      <form>
        <input
        placeholder="Title"
        type='text'
        name='title'
        />
        <input
        placeholder="Director"
        type='text'
        name='director'
        />
        <input
        placeholder="Metascore"
        type='text'
        name='metascore'
        />
        <input
        placeholder="Stars"
        type='text'
        name='stars'
        />
        <button>Update</button>
      </form>
    </div>
  )
}

export default MovieUpdate;