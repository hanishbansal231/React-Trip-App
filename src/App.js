import {useState} from 'react';
import Data from './Data';
import Tours from './components/Tours';
function App() {
  const [tours,setTours] = useState(Data);
  function removeTour(id){
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
  }
  function refreshHandler(){
    setTours(Data);
  }
  if(tours.length === 0){
    return (
      <div className='refresh-page'>
       <h2>No Tours</h2>
       <button className='refresh' onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
     <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
