import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/APIanalisis/apiInmuebles")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
          {data?.map((inmueble) (
            <li key={inmueble.idInmueble}>{inmueble.sector}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}  

export default App;
