import React from 'react';
import { useQuery } from '@apollo/client';
import { RICK_MORTY } from "./gql/Query";

function App() {
  const { loading, error, data } = useQuery(RICK_MORTY);

  if (!data) return <p>Loading...</p>
  // console.log(data)
  return (
    <div>
      {data.characters.results.map(user => 
        <div key={user.id} className="card">
          <p>{user.name}</p>
          <p>{user.status}</p>
          <img alt={user.name} src={user.image}/>
        </div>

        )}
    </div>
  )
}

export default App;
