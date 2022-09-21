import './App.css';
import { Route, Routes } from 'react-router-dom';
import Indexpage from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Indexpage />}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;